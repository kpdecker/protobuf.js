"use strict";
module.exports = Root;

var Path = require("path");

// extends Namespace
var Namespace = require("./namespace");
((Root.prototype = Object.create(
  Namespace.prototype
)).constructor = Root).className = "Root";

var Field = require("./field"),
  Enum = require("./enum"),
  OneOf = require("./oneof"),
  util = require("./util");

var Type, // cyclic
  parse, // might be excluded
  common; // "

/**
 * Constructs a new root namespace instance.
 * @classdesc Root namespace wrapping all types, enums, services, sub-namespaces etc. that belong together.
 * @extends NamespaceBase
 * @constructor
 * @param {Object.<string,*>} [options] Top level options
 */
function Root(options) {
  Namespace.call(this, "", options);

  /**
   * Deferred extension fields.
   * @type {Field[]}
   */
  this.deferred = [];

  /**
   * Resolved file names of loaded files.
   * @type {string[]}
   */
  this.files = [];
}

/**
 * Loads a namespace descriptor into a root namespace.
 * @param {INamespace} json Nameespace descriptor
 * @param {Root} [root] Root namespace, defaults to create a new one if omitted
 * @param {string} [filename] Optional filename to associate with this object.
 * @returns {Root} Root namespace
 */
Root.fromJSON = function fromJSON(json, root, filename) {
  if (!root) root = new Root();
  if (json.options) root.setOptions(json.options);
  root.filename = filename;
  return root.addJSON(json.nested, filename);
};

/**
 * Resolves the path of an imported file, relative to the importing origin.
 * This method exists so you can override it with your own logic in case your imports are scattered over multiple directories.
 * @function
 * @param {string} origin The file name of the importing file
 * @param {string} target The file name being imported
 * @returns {string|null} Resolved path to `target` or `null` to skip the file
 */
Root.prototype.resolvePath = util.path.resolve;

/**
 * Fetch content from file path or url
 * This method exists so you can override it with your own logic.
 * @function
 * @param {string} path File path or url
 * @returns {Promise<string|Uint8Array>} Promise
 */
Root.prototype.fetch = util.fetch;

/**
 * Loads one or multiple .proto or preprocessed .json files into this root namespace and calls the callback.
 * @param {string|string[]} filename Names of one or multiple files to load
 * @param {IParseOptions} [options] Parse options
 * @returns {Promise<Root>} Promise
 */
Root.prototype.load = function load(filename, options) {
  var self = this;
  if (!options) {
    options = {};
  }

  return new Promise(function (resolve, reject) {
    // Bundled definition existence checking
    function getBundledFileName(filename) {
      var idx = filename.lastIndexOf("google/protobuf/");
      if (idx > -1) {
        var altname = filename.substring(idx);
        if (altname in common) return altname;
      }
      return null;
    }

    // Processes a single file
    function process(filename, source, referenced) {
      try {
        if (util.isString(source) && source.charAt(0) === "{")
          source = JSON.parse(source);

        if (!util.isString(source))
          self.setOptions(source.options).addJSON(source.nested, filename);
        else {
          parse.filename = referenced;
          var parsed = parse(source, self, options),
            resolved,
            i = 0;
          if (parsed.imports)
            for (; i < parsed.imports.length; ++i)
              if (
                (resolved =
                  getBundledFileName(parsed.imports[i]) ||
                  self.resolvePath(filename, parsed.imports[i]))
              )
                fetch(resolved, false, parsed.imports[i].replace(/\//g, "_"));
          if (parsed.weakImports)
            for (i = 0; i < parsed.weakImports.length; ++i)
              if (
                (resolved =
                  getBundledFileName(parsed.weakImports[i]) ||
                  self.resolvePath(filename, parsed.weakImports[i]))
              )
                fetch(
                  resolved,
                  true,
                  parsed.weakImports[i].replace(/\//g, "_")
                );
        }
      } catch (err) {
        reject(err);
      }
    }

    // Fetches a single file
    function fetch(filename, weak, referenced) {
      referenced = referenced || filename;

      // Skip if already loaded / attempted
      if (self.files.indexOf(referenced) > -1) return;
      self.files.push(referenced);

      // Shortcut bundled definitions
      if (filename in common) {
        process(filename.replace(/\//g, "_"), common[filename], referenced);
        return;
      }

      // Otherwise fetch from disk or network
      var source;
      try {
        source = util.fs.readFileSync(filename).toString("utf8");
      } catch (err) {
        if (!weak) reject(err);
        return;
      }
      process(filename, source, referenced);
    }

    // Assembling the root namespace doesn't require working type
    // references anymore, so we can load everything in parallel
    if (util.isString(filename)) filename = [filename];
    for (var i = 0, resolved; i < filename.length; ++i)
      if ((resolved = self.resolvePath("", filename[i])))
        fetch(resolved, false, Path.basename(filename[i]));

    resolve(self);
  });
};

/**
 * @override
 */
Root.prototype.resolveAll = function resolveAll() {
  if (this.deferred.length)
    throw Error(
      "unresolvable extensions: " +
        this.deferred
          .map(function (field) {
            return "'extend " + field.extend + "' in " + field.parent.fullName;
          })
          .join(", ")
    );
  return Namespace.prototype.resolveAll.call(this);
};

// only uppercased (and thus conflict-free) children are exposed, see below
var exposeRe = /^[A-Z]/;

/**
 * Handles a deferred declaring extension field by creating a sister field to represent it within its extended type.
 * @param {Root} root Root instance
 * @param {Field} field Declaring extension field witin the declaring type
 * @returns {boolean} `true` if successfully added to the extended type, `false` otherwise
 * @inner
 * @ignore
 */
function tryHandleExtension(root, field) {
  var extendedType = field.parent.lookup(field.extend);
  if (extendedType) {
    var sisterField = new Field(
      field.fullName,
      field.id,
      field.type,
      field.rule,
      undefined,
      field.options
    );
    sisterField.declaringField = field;
    field.extensionField = sisterField;
    extendedType.add(sisterField);
    return true;
  }
  return false;
}

/**
 * Called when any object is added to this root or its sub-namespaces.
 * @param {ReflectionObject} object Object added
 * @returns {undefined}
 * @private
 */
Root.prototype._handleAdd = function _handleAdd(object) {
  if (object instanceof Field) {
    if (
      /* an extension field (implies not part of a oneof) */ object.extend !==
        undefined &&
      /* not already handled */ !object.extensionField
    )
      if (!tryHandleExtension(this, object)) this.deferred.push(object);
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) object.parent[object.name] = object.values; // expose enum values as property of its parent
  } else if (!(object instanceof OneOf)) {
    /* everything else is a namespace */ if (object instanceof Type)
      // Try to handle any deferred extensions
      for (var i = 0; i < this.deferred.length; )
        if (tryHandleExtension(this, this.deferred[i]))
          this.deferred.splice(i, 1);
        else ++i;
    for (
      var j = 0;
      j < /* initializes */ object.nestedArray.length;
      ++j // recurse into the namespace
    )
      this._handleAdd(object._nestedArray[j]);
    if (exposeRe.test(object.name)) object.parent[object.name] = object; // expose namespace as property of its parent
  }

  // The above also adds uppercased (and thus conflict-free) nested types, services and enums as
  // properties of namespaces just like static code does. This allows using a .d.ts generated for
  // a static module with reflection-based solutions where the condition is met.
};

/**
 * Called when any object is removed from this root or its sub-namespaces.
 * @param {ReflectionObject} object Object removed
 * @returns {undefined}
 * @private
 */
Root.prototype._handleRemove = function _handleRemove(object) {
  if (object instanceof Field) {
    if (/* an extension field */ object.extend !== undefined) {
      if (/* already handled */ object.extensionField) {
        // remove its sister field
        object.extensionField.parent.remove(object.extensionField);
        object.extensionField = null;
      } else {
        // cancel the extension
        var index = this.deferred.indexOf(object);
        /* istanbul ignore else */
        if (index > -1) this.deferred.splice(index, 1);
      }
    }
  } else if (object instanceof Enum) {
    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose enum values
  } else if (object instanceof Namespace) {
    for (
      var i = 0;
      i < /* initializes */ object.nestedArray.length;
      ++i // recurse into the namespace
    )
      this._handleRemove(object._nestedArray[i]);

    if (exposeRe.test(object.name)) delete object.parent[object.name]; // unexpose namespaces
  }
};

// Sets up cyclic dependencies (called in index-light)
Root._configure = function (Type_, parse_, common_) {
  Type = Type_;
  parse = parse_;
  common = common_;
};
