/* eslint-disable */
"use strict";
module.exports = static_target;

var protobuf   = require("../.."),
    UglifyJS   = require("uglify-js"),
    espree     = require("espree"),
    escodegen  = require("escodegen"),
    estraverse = require("estraverse");

var Type      = protobuf.Type,
    Service   = protobuf.Service,
    Enum      = protobuf.Enum,
    Namespace = protobuf.Namespace,
    util      = protobuf.util;


var out = [];
var indent = 0;
var config = {};

static_target.description = "Static code without reflection (non-functional on its own)";

function static_target(root, options, callback) {
    config = options;
    try {
        var aliases = [];
        if (config.decode)
            aliases.push("Reader");
        if (config.encode)
            aliases.push("Writer");
        aliases.push("util");
        if (aliases.length) {
            if (config.comments)
                push("// Common aliases");
            push("const " + aliases.map(function(name) { return "$" + name + " = $protobuf." + name; }).join(", ") + ";");
            push("");
        }
        if (config.comments) {
            if (root.comment) {
                pushComment("@fileoverview " + root.comment);
                push("");
            }
            push("// Exported root namespace");
        }
        var rootProp = util.safeProp(config.root || "default");
        push("const $root: any = $protobuf.roots" + rootProp + " || ($protobuf.roots" + rootProp + " = {} as $protobuf.Root);");
        push("");

        buildNamespace(null, root);

        out = out.join("\n");
        out = `import * as $protobuf from "${options.dependency || 'protobufjs/minimal'}";
${/\bStream\b/.test(out) ? `import Stream from 'stream';` : ''}

${out};
`;
        return callback(null, out);
    } catch (err) {
        return callback(err);
    } finally {
        out = [];
        indent = 0;
        config = {};
    }
}

function push(line) {
    if (line === "")
        return out.push("");
    var ind = "";
    for (var i = 0; i < indent; ++i)
        ind += "    ";
    return out.push(ind + line);
}

function pushComment(lines) {
    if (!config.comments)
        return;
    var split = [];
    for (var i = 0; i < lines.length; ++i)
        if (lines[i] != null && lines[i].substring(0, 8) !== "@exclude")
            Array.prototype.push.apply(split, lines[i].split(/\r?\n/g));
    push("/**");
    split.forEach(function(line) {
        if (line === null)
            return;
        push(" * " + line.replace(/\*\//g, "* /"));
    });
    push(" */");
}

function exportName(object, asInterface) {
    if (asInterface) {
        if (object.__interfaceName)
            return object.__interfaceName;
    } else if (object.__exportName)
        return object.__exportName;
    var parts = object.fullName.substring(1).split("."),
        i = 0;
    while (i < parts.length)
        parts[i] = escapeName(parts[i++]);
    if (asInterface)
        parts[i - 1] = "I" + parts[i - 1];
    return object[asInterface ? "__interfaceName" : "__exportName"] = parts.join(".");
}

function findCommonAncestor(a, b) {
  let aParent = a;
  while (aParent && aParent.name) {
    let bParent = b.parent;
    let bParentPath = '';

    while (bParent) {
      if (aParent === bParent) {
        return {
          node: bParent,
          path: bParentPath
        };
      }
      bParentPath = `${bParent.name}.${bParentPath}`;
      bParent = bParent.parent;
    }
    aParent = aParent.parent;
  }

  return { path: '' };
}

function typeName(object, asInterface, context) {
  let parentPath = '';
  let commonAncestor;
  if (context) {
    commonAncestor = findCommonAncestor(context, object);
    parentPath = commonAncestor.path;
    console.log(
      'typename',
      object.name,
      context.name,
      parentPath,
      object instanceof Enum || asInterface,
      commonAncestor.node && commonAncestor.node.name,
      commonAncestor.node === context
    );
  }

  if ((object instanceof Enum || asInterface) && commonAncestor && commonAncestor.node === context) {
    // Enums must explicitly reference namespace
    parentPath = `${parentPath}${context.name}.`;
  }

  if (asInterface) {
    return `${parentPath}${object.name}.I${object.name}`;
  }
  return `${parentPath}${escapeName(object.name)}`;
}

function escapeName(name) {
    if (!name)
        return "$root";
    return util.isReserved(name) ? name + "_" : name;
}

function aOrAn(name) {
    return ((/^[hH](?:ou|on|ei)/.test(name) || /^[aeiouAEIOU][a-z]/.test(name)) && !/^us/i.test(name)
        ? "an "
        : "a ") + name;
}

function buildNamespace(ref, ns) {
    if (!ns)
        return;

    var emitNamespace;
    if (ns instanceof Type) {
        buildType(ns);
    } else if (ns instanceof Service) {
        buildService(ns);
    }

    if (ns.name !== "" && ns.nestedArray.length) {
        emitNamespace = true;
        push('');
        push(`export namespace ${escapeName(ns.name)} {`);
    }
    indent++;
    ns.nestedArray.forEach(function(nested) {
        if (nested instanceof Enum) {
            buildEnum(nested);

            if (!ref) {
                push("$root." + escapeName(nested.name) + " = " + escapeName(nested.name) + ";");
            }
        } else if (nested instanceof Namespace)
            buildNamespace(ns.name, nested);

        push("");
    });
    --indent;
    if (emitNamespace) {
      push("}");
    }

    if (!ref && ns.name) {
        push("$root." + escapeName(ns.name) + " = " + escapeName(ns.name) + ";");
        push("");
    }
}

var reduceableBlockStatements = {
    IfStatement: true,
    ForStatement: true,
    WhileStatement: true
};

var shortVars = {
    "r": "reader",
    "w": "writer",
    "m": "message",
    "t": "tag",
    "l": "length",
    "c": "end", "c2": "end2",
    "k": "key",
    "ks": "keys", "ks2": "keys2",
    "e": "error",
    "f": "impl",
    "o": "options",
    "d": "object",
    "n": "long",
    "p": "properties"
};

function beautifyCode(code) {
    try {
    // Add semicolons
    code = UglifyJS.minify(code, {
        compress: false,
        mangle: false,
        output: { beautify: true }
    }).code;
    // Properly beautify
    var ast = espree.parse(code);
    estraverse.replace(ast, {
        enter: function(node, parent) {
            // rename short vars
            if (node.type === "Identifier" && (parent.property !== node || parent.computed) && shortVars[node.name])
                return {
                    "type": "Identifier",
                    "name": shortVars[node.name]
                };
            // replace var with let if es6
            if (config.es6 && node.type === "VariableDeclaration" && node.kind === "var") {
                node.kind = "let";
                return undefined;
            }
            // remove braces around block statements with a single child
            if (node.type === "BlockStatement" && reduceableBlockStatements[parent.type] && node.body.length === 1)
                return node.body[0];
            return undefined;
        }
    });
    code = escodegen.generate(ast, {
        format: {
            newline: "\n",
            quotes: "double"
        }
    });
    // Add id, wireType comments
    if (config.comments)
        code = code.replace(/\.uint32\((\d+)\)/g, function($0, $1) {
            var id = $1 >>> 3,
                wireType = $1 & 7;
            return ".uint32(/* id " + id + ", wireType " + wireType + " =*/" + $1 + ")";
        });
    return code;
    } catch (err) {
        if (err.lineNumber) {
            console.error(code.split(/\n/g).slice(Math.max(0, err.lineNumber - 10), err.lineNumber + 10).join("\n"));
        }
        throw err;
    }
}

var renameVars = {
    "Writer": "$Writer",
    "Reader": "$Reader",
    "util": "$util"
};

function buildFunction(type, functionName, gen) {
    var code = gen.toString(functionName)
        .replace(/((?!\.)types\[\d+])(\.values)/g, "$1"); // enums: use types[N] instead of reflected types[N].values

    try {
    var ast = espree.parse(code);
    /* eslint-disable no-extra-parens */
    estraverse.replace(ast, {
        enter: function(node, parent) {
            // rename vars
            if (
                node.type === "Identifier" && renameVars[node.name]
                && (
                    (parent.type === "MemberExpression" && parent.object === node)
                 || (parent.type === "BinaryExpression" && parent.right === node)
                )
            )
                return {
                    "type": "Identifier",
                    "name": renameVars[node.name]
                };
            // replace this.ctor with the actual ctor
            if (
                node.type === "MemberExpression"
             && node.object.type === "ThisExpression"
             && node.property.type === "Identifier" && node.property.name === "ctor"
            )
                return {
                    "type": "Identifier",
                    "name": "$root" + type.fullName
                };
            // replace types[N] with the field's actual type
            if (
                node.type === "MemberExpression"
             && node.object.type === "Identifier" && node.object.name === "types"
             && node.property.type === "Literal"
            )
                return {
                    "type": "Identifier",
                    "name": "$root" + type.fieldsArray[node.property.value].resolvedType.fullName
                };
            return undefined;
        }
    });
    /* eslint-enable no-extra-parens */
    code = escodegen.generate(ast, {
        format: {
            newline: "\n",
            quotes: "double"
        }
    });

    code = beautifyCode(code)
      .replace(/ {4}/g, '\t')
      // The AST tools don't cleanly support typing this and typescript dislikes it,
      // so hack it in after our JS transformations.
      .replace(/\$util\.Long\.fromValue/g, '($util.Long as any).fromValue')
      .replace(/var object = \{\}/g, 'let object: any = {}')
      .replace(/var properties = \{\}/g, 'let properties: any = {}');

    var lines = code.split(/\n/g);
    lines.slice(1, lines.length - 1).forEach(function(line) {
        var prev = indent;
        var i = 0;
        while (line.charAt(i++) === "\t")
            ++indent;
        push(line.trim());
        indent = prev;
    });

    } catch (err) {
        if (err.lineNumber) {
            console.error(code.split(/\n/g).slice(Math.max(0, err.lineNumber - 10), err.lineNumber + 10).join("\n"));
        }
        throw err;
    }
}

function toJsType(field) {
    var type;

    switch (field.type) {
        case "double":
        case "float":
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
            type = "number";
            break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
            type = config.forceLong ? "$protobuf.Long" : config.forceNumber ? "number" : "(number|$protobuf.Long)";
            break;
        case "bool":
            type = "boolean";
            break;
        case "string":
            type = "string";
            break;
        case "bytes":
            type = "Uint8Array";
            break;
        default:
            if (field.resolve().resolvedType) {
                type = typeName(field.resolvedType, !(field.resolvedType instanceof protobuf.Enum || config.forceMessage), field.parent);
            } else {
                throw new Error(`Unresolved type for field: ${field.name}`);
            }
            break;
    }
    if (field.map)
        return "{[key: string]: " + type + "}";
    if (field.repeated)
        return type + "[]";
    return type;
}

function buildType(type) {
    push(`/** Properties of ${aOrAn(type.name)}. */`);

    push(`export namespace ${escapeName(type.name)} {`);
    indent++;
    push(`export interface ${escapeName("I" + type.name)} {`);
    indent++;
    type.fieldsArray.forEach(function(field) {
        var prop = util.safeProp(field.name); // either .name or ["name"]
        prop = prop.substring(1, prop.charAt(0) === "[" ? prop.length - 1 : prop.length);
        var jsType = toJsType(field);
        push(`${field.comment ? `/** ${field.comment} */\n` : ""}${prop}${field.optional ? "?" : ""}: ${jsType};`);
    });
    indent--;
    push('}');
    indent--;
    push('}');

    // constructor
    push("");
    pushComment([type.comment || "Represents " + aOrAn(type.name) + "."]);
    push(`export class ${type.name} implements ${typeName(type, true)} {`);
    indent++;

    pushComment([
        "Constructs a new " + type.name + ".",
    ]);
    push(`constructor(properties?: ${typeName(type, true)}) {`);
    buildFunction(type, type.name, Type.generateConstructor(type));
    push("}");

    // default values
    type.fieldsArray.forEach(function(field) {
        field.resolve();
        var prop = util.safeProp(field.name).replace(/^\./, "");
        var jsType = toJsType(field);
        if (field.comment) {
            pushComment([
                field.comment
            ]);
        }
        if (field.repeated || field.map || field.typeDefault == null)
            push(`${prop}${field.optional ? '?' : ''}: ${jsType};`); // overwritten in constructor
        else if (field.long)
            push(`${prop}${field.optional ? "?" : ""}: ${jsType} = $util.Long ? ($util.Long as any).fromBits(${
                    JSON.stringify(field.typeDefault.low)}, ${
                    JSON.stringify(field.typeDefault.high)}, ${
                    JSON.stringify(field.typeDefault.unsigned)
                    }) : ${field.typeDefault.toNumber(field.type.charAt(0) === "u")};`);
        else if (field.bytes) {
            push(`${prop}${field.optional ? "?" : ""}: ${jsType}= $util.newBuffer(${JSON.stringify(Array.prototype.slice.call(field.typeDefault))});`);
        } else
            push(`${prop}${field.optional ? "?" : ""}: ${jsType} = ${JSON.stringify(field.typeDefault)};`);

        if (field.comment) {
            push("");
        }
    });

    // virtual oneof fields
    var firstOneOf = true;
    type.oneofsArray.forEach(function(oneof) {
        if (firstOneOf) {
            firstOneOf = false;
            push("");
            if (config.comments)
                push("// OneOf field names bound to virtual getters and setters");
        }
        oneof.resolve();
        push("");
        if (oneof.comment) pushComment([oneof.comment]);

        const childTypes = Array.from(
          new Set(oneof.oneof
            .map((field) =>
              toJsType(type.fields[field])
            ))
          )
          .join(' | ');

        push(`static oneOf_${escapeName(oneof.name)}Get = $util.oneOfGetter([${oneof.oneof.map(JSON.stringify).join(", ")}]);`);
        push(`static oneOf_${escapeName(oneof.name)}Set = $util.oneOfSetter([${oneof.oneof.map(JSON.stringify).join(", ")}]);`);
        push(`get ${escapeName(oneof.name)}(): ${childTypes} {`);
        ++indent;
            push(`return ${escapeName(type.name)}.oneOf_${escapeName(oneof.name)}Get();`);
        --indent;
        push("}");
        push(`set ${escapeName(oneof.name)}(value: ${childTypes}) {`);
        ++indent;
            push(`${escapeName(type.name)}.oneOf_${escapeName(oneof.name)}Set(value);`);
        --indent;
        push("}");
    });

    if (config.create) {
        push("");
        pushComment([
            "Creates a new " + type.name + " instance using the specified properties.",
        ]);
        push(
          `static create(properties: ${typeName(type, true)}): ${escapeName(type.name)} {`
        );
            ++indent;
            push("return new " + escapeName(type.name) + "(properties);");
            --indent;
        push("}");
    }

    if (config.encode) {
        push("");
        pushComment([
            "Encodes the specified " + type.name + " message. Does not implicitly {@link " + escapeName(type) + ".verify|verify} messages.",
            "@param message " + type.name + "message or plain object to encode",
            "@param writer Writer to encode to",
        ]);
        push(`static encode(message: ${typeName(type, !config.forceMessage)}, writer?: $protobuf.Writer): $protobuf.Writer {`);
        buildFunction(type, "encode", protobuf.encoder(type));
        push("}");

        if (config.delimited) {
            push("");
            pushComment([
                "Encodes the specified " + type.name + " message, length delimited. Does not implicitly {@link " + escapeName(type) + ".verify|verify} messages.",
                "@param message " + type.name + "message or plain object to encode",
                "@param writer Writer to encode to",
            ]);
            push(`static encodeDelimited(message: ${typeName(type, !config.forceMessage)}, writer?: $protobuf.Writer): $protobuf.Writer {`);
            ++indent;
            push("return this.encode(message, writer).ldelim();");
            --indent;
            push("}");
        }
    }

    if (config.decode) {
        push("");
        pushComment([
            "Decodes " + aOrAn(type.name) + " message from the specified reader or buffer.",
            "@param reader Reader or buffer to decode from",
            "@param length Message length if known beforehand",
            "@throws {Error} If the payload is not a reader or valid buffer",
            "@throws {$protobuf.util.ProtocolError} If required fields are missing"
        ]);
        push(`static decode(reader: $protobuf.Reader|Uint8Array, length?: number): ${typeName(type)} {`);
        buildFunction(type, "decode", protobuf.decoder(type));
        push("}");

        if (config.delimited) {
            push("");
            pushComment([
                "Decodes " + aOrAn(type.name) + " message from the specified reader or buffer, length delimited.",
                "@param reader Reader or buffer to decode from",
                "@throws {Error} If the payload is not a reader or valid buffer",
                "@throws {$protobuf.util.ProtocolError} If required fields are missing"
            ]);
            push(`static decodeDelimited(reader: $protobuf.Reader|Uint8Array): ${typeName(type)} {`);
            ++indent;
                push("if (!(reader instanceof $Reader))");
                ++indent;
                    push("reader = new $Reader(reader);");
                --indent;
                push("return this.decode(reader, (reader as $protobuf.Reader).uint32());");
            --indent;
            push("}");
        }
    }

    if (config.verify) {
        push("");
        pushComment([
            "Verifies " + aOrAn(type.name) + " message.",
            "@param message Plain object to verify",
            "@returns `null` if valid, otherwise the reason why it is not"
        ]);
        push("static verify(message): string | null | void {");
        buildFunction(type, "verify", protobuf.verifier(type));
        push("}");
    }

    if (config.convert) {
        push("");
        pushComment([
            "Creates " + aOrAn(type.name) + " message from a plain object. Also converts values to their respective internal types.",
            "@param object Plain object",
        ]);
        push(`static fromObject(object): ${typeName(type)} {`);
        buildFunction(type, "fromObject", protobuf.converter.fromObject(type));
        push("}");

        push("");
        pushComment([
            "Creates a plain object from " + aOrAn(type.name) + " message. Also converts values to other types if specified.",
            "@param message " + type.name,
            "@param optionsConversion options",
            "@returns Plain object"
        ]);
        push(`static toObject(message: ${typeName(type)}, options: $protobuf.IConversionOptions = {}) {`);
        buildFunction(type, "toObject", protobuf.converter.toObject(type, typeName(type, true)));
        push("}");

        push("");
        pushComment([
            "Converts this " + type.name + " to JSON."
        ]);
        push("toJSON() {");
        ++indent;
            push(`return ${type.name}.toObject(this, $protobuf.util.toJSONOptions);`);
        --indent;
        push("};");
    }

    if (config.equals) {
      push("");
      pushComment([
          "Compares two messages, checking for strict equality.",
      ]);
      push(`static equals(a: ${typeName(type, !config.forceMessage)}, b: ${typeName(type, !config.forceMessage)}): boolean {`);
      buildFunction(type, "equals", protobuf.equals(type));
      push("}");
    }

    indent--;
    push("}");
}

function buildService(service) {

    if (service.comment) pushComment([service.comment]);
    push(`export class ${escapeName(service.name)} extends $protobuf.rpc.Service {`);
    indent++;
    pushComment([
      "Constructs a new " + service.name + " service.",
      "@param rpcImpl RPC implementation",
      "@param requestDelimited Whether requests are length-delimited",
      "@param responseDelimited Whether responses are length-delimited",
    ]);
    push(
      "constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false) {"
    );
    ++indent;
    push("super(rpcImpl, requestDelimited, responseDelimited);");

    service.methodsArray.forEach(function(method) {
        method.resolve();
        var lcName = protobuf.util.lcFirst(method.name);
        push("");
        push(`(this.${lcName} as any).requestCtor = $root.${exportName(method.resolvedRequestType)};`);
        push(`(this.${lcName} as any).responseCtor = $root.${exportName(method.resolvedResponseType)};`);
        push(`(this.${lcName} as any).requestStream = ${method.requestStream};`);
        push(`(this.${lcName} as any).responseStream = ${method.responseStream};`);
    });
    --indent;
    push("}");
    push("");

    if (config.create) {
        push("");
        pushComment([
            "Creates new " + service.name + " service using the specified rpc implementation.",
            "@param rpcImpl RPC implementation",
            "@param requestDelimited Whether requests are length-delimited",
            "@param responseDelimited Whether responses are length-delimited",
            "@returns RPC service. Useful where requests and/or responses are streamed."
        ]);
        push(`static create(rpcImpl: $protobuf.RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false): ${escapeName(service.name)} {`);
            ++indent;
            push(`return new ${escapeName(service.name)}(rpcImpl, requestDelimited, responseDelimited);`);
            --indent;
        push("};");
    }

    service.methodsArray.forEach(function(method) {
        method.resolve();
        var lcName = protobuf.util.lcFirst(method.name);
        push("");
        if (!method.requestStream && !method.responseStream) {
            push(`async ${escapeName(lcName)}(request: ${typeName(method.resolvedRequestType, !config.forceMessage)}): Promise<${exportName(method.resolvedResponseType)}> {`);
            ++indent;
            push("return (this.rpcCall as any)(this." + escapeName(lcName) + ", $root." + exportName(method.resolvedRequestType) + ", $root." + exportName(method.resolvedResponseType) + ", request);");
            --indent;
        } else if (method.requestStream && method.responseStream) {
            push(`async ${escapeName(lcName)}(): Promise<Stream.Duplex> {`);
            ++indent;
            push("return (this.rpcImpl as any)(this." + escapeName(lcName) + ");");
            --indent;
        } else if (!method.requestStream && method.responseStream) {
            push(`async ${escapeName(lcName)}(request: ${typeName(method.resolvedRequestType, !config.forceMessage)}): Promise<Stream.Readable> {`);
            ++indent;
            push("return (this.rpcCall as any)(this." + escapeName(lcName) + ", $root." + exportName(method.resolvedRequestType) + ", $root." + exportName(method.resolvedResponseType) + ", request);");
            --indent;
        } else if (method.requestStream && !method.responseStream) {
            push(`async ${escapeName(lcName)}(callback: (err?: Error, response?: ${typeName(method.resolvedResponseType)}) => void): Promise<Stream.Writable> {`);
            ++indent;
            push("return (this.rpcCall as any)(this." + escapeName(lcName) + ", $root." + exportName(method.resolvedRequestType) + ", $root." + exportName(method.resolvedResponseType) + ", undefined, callback);");
            --indent;
        }
        push("}");
    });
    indent--;
    push('}');
}

function buildEnum(enm) {
    if (enm.comment) {
        pushComment(enm.comment);
    }
    push(`export enum ${escapeName(enm.name)} {`);
    ++indent;
        Object.keys(enm.values).forEach(function(key) {
            var valueId = enm.values[key];
            var val = config.forceEnumString ? JSON.stringify(key) : valueId;
            push(key + " = " + val + ",");
        });
    --indent;
    push('}');
}
