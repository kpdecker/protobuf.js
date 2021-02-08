"use strict";
module.exports = Service;

// extends Namespace
var Namespace = require("./namespace");
((Service.prototype = Object.create(
  Namespace.prototype
)).constructor = Service).className = "Service";

var Method = require("./method"),
  util = require("./util"),
  rpc = require("./rpc");

/**
 * Constructs a new service instance.
 * @classdesc Reflected service.
 * @extends NamespaceBase
 * @constructor
 * @param {string} name Service name
 * @param {Object.<string,*>} [options] Service options
 * @throws {TypeError} If arguments are invalid
 */
function Service(name, options) {
  Namespace.call(this, name, options);

  /**
   * Service methods.
   * @type {Object.<string,Method>}
   */
  this.methods = {}; // toJSON, marker

  /**
   * Cached methods as an array.
   * @type {Method[]|null}
   * @private
   */
  this._methodsArray = null;
}

/**
 * Service descriptor.
 * @interface IService
 * @extends INamespace
 * @property {Object.<string,IMethod>} methods Method descriptors
 */

/**
 * Constructs a service from a service descriptor.
 * @param {string} name Service name
 * @param {IService} json Service descriptor
 * @param {string} [filename] Optional filename to associate with this object.
 * @returns {Service} Created service
 * @throws {TypeError} If arguments are invalid
 */
Service.fromJSON = function fromJSON(name, json, filename) {
  var service = new Service(name, json.options);
  /* istanbul ignore else */
  if (json.methods)
    for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
      service.add(Method.fromJSON(names[i], json.methods[names[i]], filename));
  if (json.nested) service.addJSON(json.nested, filename);
  service.comment = json.comment;
  service.filename = filename;
  return service;
};

/**
 * Converts this service to a service descriptor.
 * @param {IToJSONOptions} [toJSONOptions] JSON conversion options
 * @returns {IService} Service descriptor
 */
Service.prototype.toJSON = function toJSON(toJSONOptions) {
  var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
  var keepComments = toJSONOptions
    ? Boolean(toJSONOptions.keepComments)
    : false;
  return util.toObject([
    "options",
    inherited && inherited.options || undefined,
    "methods",
    Namespace.arrayToJSON(this.methodsArray, toJSONOptions) ||
      /* istanbul ignore next */ {},
    "nested",
    inherited && inherited.nested || undefined,
    "comment",
    keepComments ? this.comment : undefined,
  ]);
};

/**
 * Methods of this service as an array for iteration.
 * @name Service#methodsArray
 * @type {Method[]}
 * @readonly
 */
Object.defineProperty(Service.prototype, "methodsArray", {
  get: function () {
    return (
      this._methodsArray || (this._methodsArray = util.toArray(this.methods))
    );
  },
});

Service.prototype.clearCache = function clearCache() {
  this._methodsArray = null;
  return Namespace.prototype.clearCache.call(this);
};

Service.prototype._loadPathMap = function _loadPathMap() {
  var pathMap = Namespace.prototype._loadPathMap.call(this);
  pathMap.children = pathMap.children.concat(
    this.methodsArray.map(function (method) {
      return {
        name: method.name,
        node: method,
      };
    })
  );
  return pathMap;
};

/**
 * @override
 */
Service.prototype.resolveAll = function resolveAll() {
  var methods = this.methodsArray;
  for (var i = 0; i < methods.length; ++i) methods[i].resolve();
  return Namespace.prototype.resolve.call(this);
};

/**
 * @override
 */
Service.prototype.add = function add(object) {
  /* istanbul ignore if */
  if (this.get(object.name))
    throw Error("duplicate name '" + object.name + "' in " + this);

  if (object instanceof Method) {
    this.methods[object.name] = object;
    object.parent = this;
    return this.clearCache();
  }
  return Namespace.prototype.add.call(this, object);
};

/**
 * @override
 */
Service.prototype.remove = function remove(object) {
  if (object instanceof Method) {
    /* istanbul ignore if */
    if (this.methods[object.name] !== object)
      throw Error(object + " is not a member of " + this);

    delete this.methods[object.name];
    object.parent = null;
    return this.clearCache();
  }
  return Namespace.prototype.remove.call(this, object);
};

/**
 * Creates a runtime service using the specified rpc implementation.
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 * @returns {rpc.Service} RPC service. Useful where requests and/or responses are streamed.
 */
Service.prototype.create = function create(
  rpcImpl,
  requestDelimited,
  responseDelimited
) {
  var rpcService = new rpc.Service(
    rpcImpl,
    requestDelimited,
    responseDelimited
  );
  for (var i = 0, method; i < /* initializes */ this.methodsArray.length; ++i) {
    var methodName = util
      .lcFirst((method = this._methodsArray[i]).resolve().name)
      .replace(/[^$\w_]/g, "");
    methodName = util.isReserved(methodName) ? methodName + "_" : methodName;

    if (method.requestStream) {
      rpcService[methodName] = util.codegen(
        [],
        methodName
      )("return this.rpcImpl(m)")({
        m: method,
      });
    } else {
      rpcService[methodName] = util.codegen(
        ["r"],
        methodName
      )("return this.rpcImpl(m,r)")({
        m: method,
      });
    }
  }
  return rpcService;
};
