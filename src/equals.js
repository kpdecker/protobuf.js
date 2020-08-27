"use strict";

var Enum = require("./enum"),
    util = require("./util");

function genValuePartial_equals(gen, field, fieldIndex, prop, index) {
  index = index || "";

  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  if (field.resolvedType) {
    if (index) {
      if (field.resolvedType instanceof Enum) {
        gen("(a%s && a%s%s)===(b%s && b%s%s)", prop, prop, index, prop, prop, index);
      } else gen("types[%i].equals(a%s && a%s%s, b%s && b%s%s)", fieldIndex, prop, prop, index, prop, prop, index);
    } else {
      if (field.resolvedType instanceof Enum) {
        gen("a%s===b%s", prop, prop);
      } else gen("types[%i].equals(a%s, b%s)", fieldIndex, prop, prop);
    }
  } else {
    switch (field.type) {
      case "double":
      case "float":
        if (index) {
          gen("a%s && b%s && (a%s%s === b%s%s || (a%s%s != null && b%s%s != null && Math.abs(a%s%s - b%s%s) < Number.EPSILON))", prop, prop, prop, index, prop, index, prop, index, prop, index, prop, index, prop, index);
        } else {
          gen("(a%s===b%s || (a%s != null && b%s != null && Math.abs(a%s - b%s) < Number.EPSILON))", prop, prop, prop, prop, prop, prop);
        }
        break;
      case "uint32":
      case "fixed32":
      case "int32":
      case "sint32":
      case "sfixed32":
      case "string":
      case "bool":
        if (index) {
          gen("(a%s && a%s%s) === (b%s && b%s%s)", prop, prop, index, prop, prop, index);
        } else {
          gen("a%s===b%s", prop, prop);
        }
        break;
      case "uint64":
      case "int64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        if (index) {
          gen("$util.longEquals(a%s && a%s%s, b%s && b%s%s)", prop, prop, index, prop, prop, index);
        } else {
          gen("$util.longEquals(a%s, b%s)", prop, prop);
        }
        break;
      case "bytes":
        if (index) {
          gen("$util.bytesEquals(a%s && a%s%s, b%s && b%s%s)", prop, prop, index, prop, prop, index);
        } else {
          gen("$util.bytesEquals(a%s, b%s)", prop, prop);
        }
        break;
      default:
        throw new Error("Unexpected type: " + field.type);
    }
  }
  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
}

/**
 * Generates a plain object to runtime message equality check specific to the specified message type.
 * @param {Type} mtype Message type
 * @returns {Codegen} Codegen instance
 */
module.exports = function equals(mtype) {
  /* eslint-disable no-unexpected-multiline, block-scoped-var, no-redeclare */
  var fields = mtype.fieldsArray;
  var gen = util.codegen([], mtype.name + "$equals");

  gen("if (!a || !b) { return a === b }")("if (a === b) { return true }");

  if (fields.length) {
    gen("return (");

    for (var i = 0; i < fields.length; ++i) {
      var field = fields[i].resolve(),
        prop = util.safeProp(field.name);

      // Map fields
      if (field.map) {
        if (i) {
          gen("&&");
        }

        gen(
          "$util.mapEquals(a%s, b%s, function(keyName) { return !!b%s && (!(keyName in b%s) && ",
          prop,
          prop,
          prop,
          prop
        );
        genValuePartial_equals(
          gen,
          field,
          /* not sorted */ i,
          prop,
          "[keyName]"
        );
        gen(");})");

        // Repeated fields
      } else if (field.repeated) {
        if (i) {
          gen("&&");
        }

        gen(
          "(!!a%s && !!b%s && a%s.length === b%s.length && !a%s.find(function (aValue, i){ return (",
          prop,
          prop,
          prop,
          prop,
          prop
        );
        genValuePartial_equals(
          gen,
          field,
          /* not sorted */ i,
          prop,
          "[i]"
        )(");}))");

        // Non-repeated fields
      } else {
        if (i) {
          gen("&&");
        }
        genValuePartial_equals(gen, field, /* not sorted */ i, prop);
      }
    }
    gen(")");
  } else {
    gen("return true;");
  }
  return gen;
  /* eslint-enable no-unexpected-multiline, block-scoped-var, no-redeclare */
};
