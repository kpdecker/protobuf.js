import { Writer as $Writer, Reader as $Reader, IConversionOptions as $IConversionOptions, util as $util, Long as $Long } from "../../../minimal";

/** Properties of a FileDescriptorSet. */
export interface IFileDescriptorSet {
    file?: IFileDescriptorProto[];
}

/**
 * Represents a FileDescriptorSet.
 */
export class FileDescriptorSet implements IFileDescriptorSet {
    file?: IFileDescriptorProto[];

    // #region create
    /**
     * Constructs a new FileDescriptorSet.
     */
    constructor(properties?: IFileDescriptorSet) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FileDescriptorSet instance using the specified properties.
     */
    static create(properties: IFileDescriptorSet): FileDescriptorSet {
        return new FileDescriptorSet(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified FileDescriptorSet message. Does not implicitly {@link FileDescriptorSet.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IFileDescriptorSet, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.file != null && message.file.length)
            for (let i = 0; i < message.file.length; ++i)
                FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link FileDescriptorSet.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IFileDescriptorSet, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a FileDescriptorSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): FileDescriptorSet {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new FileDescriptorSet();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.file && message.file.length))
                        message.file = [];
                    message.file.push(FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): FileDescriptorSet {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a FileDescriptorSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.file != null && message.hasOwnProperty("file")) {
            if (!Array.isArray(message.file))
                return "file: array expected";
            for (let i = 0; i < message.file.length; ++i) {
                let error = FileDescriptorProto.verify(message.file[i]);
                if (error)
                    return "file." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFileDescriptorSet {
        if (object instanceof FileDescriptorSet)
            return object;
        let message = new FileDescriptorSet();
        if (object.file) {
            if (!Array.isArray(object.file))
                throw TypeError("FileDescriptorSet.file: array expected");
            message.file = [];
            for (let i = 0; i < object.file.length; ++i) {
                if (typeof object.file[i] !== "object")
                    throw TypeError("FileDescriptorSet.file: object expected");
                message.file[i] = FileDescriptorProto.fromObject(object.file[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
     * @param message FileDescriptorSet
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFileDescriptorSet, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.file = [];
        if (message.file && message.file.length) {
            object.file = [];
            for (let j = 0; j < message.file.length; ++j)
                object.file[j] = FileDescriptorProto.toObject(message.file[j], options);
        }
        return object;
    }

    /**
     * Converts this FileDescriptorSet to JSON.
     */
    toJSON() {
        return FileDescriptorSet.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFileDescriptorSet, b?: IFileDescriptorSet): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.file && !!b.file && a.file.length === b.file.length && !a.file.find(function (aValue, i) {
            return FileDescriptorProto.equals(a.file && a.file[i], b.file && b.file[i]);
        });
    }
    // #endregion
}

/** Properties of a FileDescriptorProto. */
export interface IFileDescriptorProto {
    name?: string;
    "package"?: string;
    dependency?: string[];
    publicDependency?: number[];
    weakDependency?: number[];
    messageType?: IDescriptorProto[];
    enumType?: IEnumDescriptorProto[];
    service?: IServiceDescriptorProto[];
    extension?: IFieldDescriptorProto[];
    options?: IFileOptions;
    sourceCodeInfo?: ISourceCodeInfo;
    syntax?: string;
}

/**
 * Represents a FileDescriptorProto.
 */
export class FileDescriptorProto implements IFileDescriptorProto {
    name?: string;
    ["package"]?: string;
    dependency?: string[];
    publicDependency?: number[];
    weakDependency?: number[];
    messageType?: IDescriptorProto[];
    enumType?: IEnumDescriptorProto[];
    service?: IServiceDescriptorProto[];
    extension?: IFieldDescriptorProto[];
    options?: IFileOptions;
    sourceCodeInfo?: ISourceCodeInfo;
    syntax?: string;

    // #region create
    /**
     * Constructs a new FileDescriptorProto.
     */
    constructor(properties?: IFileDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FileDescriptorProto instance using the specified properties.
     */
    static create(properties: IFileDescriptorProto): FileDescriptorProto {
        return new FileDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified FileDescriptorProto message. Does not implicitly {@link FileDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IFileDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
        if (message.dependency != null && message.dependency.length)
            for (let i = 0; i < message.dependency.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
        if (message.messageType != null && message.messageType.length)
            for (let i = 0; i < message.messageType.length; ++i)
                DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.enumType != null && message.enumType.length)
            for (let i = 0; i < message.enumType.length; ++i)
                EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.service != null && message.service.length)
            for (let i = 0; i < message.service.length; ++i)
                ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.extension != null && message.extension.length)
            for (let i = 0; i < message.extension.length; ++i)
                FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
            SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.publicDependency != null && message.publicDependency.length)
            for (let i = 0; i < message.publicDependency.length; ++i)
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
        if (message.weakDependency != null && message.weakDependency.length)
            for (let i = 0; i < message.weakDependency.length; ++i)
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
        if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
        return writer;
    }

    /**
     * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link FileDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IFileDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a FileDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): FileDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new FileDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message["package"] = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.dependency && message.dependency.length))
                        message.dependency = [];
                    message.dependency.push(reader.string());
                    break;
                }
            case 10: {
                    if (!(message.publicDependency && message.publicDependency.length))
                        message.publicDependency = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.publicDependency.push(reader.int32());
                    } else
                        message.publicDependency.push(reader.int32());
                    break;
                }
            case 11: {
                    if (!(message.weakDependency && message.weakDependency.length))
                        message.weakDependency = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.weakDependency.push(reader.int32());
                    } else
                        message.weakDependency.push(reader.int32());
                    break;
                }
            case 4: {
                    if (!(message.messageType && message.messageType.length))
                        message.messageType = [];
                    message.messageType.push(DescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    if (!(message.enumType && message.enumType.length))
                        message.enumType = [];
                    message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    if (!(message.service && message.service.length))
                        message.service = [];
                    message.service.push(ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 7: {
                    if (!(message.extension && message.extension.length))
                        message.extension = [];
                    message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 8: {
                    message.options = FileOptions.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.sourceCodeInfo = SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.syntax = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): FileDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a FileDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message["package"] != null && message.hasOwnProperty("package"))
            if (!$util.isString(message["package"]))
                return "package: string expected";
        if (message.dependency != null && message.hasOwnProperty("dependency")) {
            if (!Array.isArray(message.dependency))
                return "dependency: array expected";
            for (let i = 0; i < message.dependency.length; ++i)
                if (!$util.isString(message.dependency[i]))
                    return "dependency: string[] expected";
        }
        if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
            if (!Array.isArray(message.publicDependency))
                return "publicDependency: array expected";
            for (let i = 0; i < message.publicDependency.length; ++i)
                if (!$util.isInteger(message.publicDependency[i]))
                    return "publicDependency: integer[] expected";
        }
        if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
            if (!Array.isArray(message.weakDependency))
                return "weakDependency: array expected";
            for (let i = 0; i < message.weakDependency.length; ++i)
                if (!$util.isInteger(message.weakDependency[i]))
                    return "weakDependency: integer[] expected";
        }
        if (message.messageType != null && message.hasOwnProperty("messageType")) {
            if (!Array.isArray(message.messageType))
                return "messageType: array expected";
            for (let i = 0; i < message.messageType.length; ++i) {
                let error = DescriptorProto.verify(message.messageType[i]);
                if (error)
                    return "messageType." + error;
            }
        }
        if (message.enumType != null && message.hasOwnProperty("enumType")) {
            if (!Array.isArray(message.enumType))
                return "enumType: array expected";
            for (let i = 0; i < message.enumType.length; ++i) {
                let error = EnumDescriptorProto.verify(message.enumType[i]);
                if (error)
                    return "enumType." + error;
            }
        }
        if (message.service != null && message.hasOwnProperty("service")) {
            if (!Array.isArray(message.service))
                return "service: array expected";
            for (let i = 0; i < message.service.length; ++i) {
                let error = ServiceDescriptorProto.verify(message.service[i]);
                if (error)
                    return "service." + error;
            }
        }
        if (message.extension != null && message.hasOwnProperty("extension")) {
            if (!Array.isArray(message.extension))
                return "extension: array expected";
            for (let i = 0; i < message.extension.length; ++i) {
                let error = FieldDescriptorProto.verify(message.extension[i]);
                if (error)
                    return "extension." + error;
            }
        }
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = FileOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
            let error = SourceCodeInfo.verify(message.sourceCodeInfo);
            if (error)
                return "sourceCodeInfo." + error;
        }
        if (message.syntax != null && message.hasOwnProperty("syntax"))
            if (!$util.isString(message.syntax))
                return "syntax: string expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFileDescriptorProto {
        if (object instanceof FileDescriptorProto)
            return object;
        let message = new FileDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object["package"] != null)
            message["package"] = String(object["package"]);
        if (object.dependency) {
            if (!Array.isArray(object.dependency))
                throw TypeError("FileDescriptorProto.dependency: array expected");
            message.dependency = [];
            for (let i = 0; i < object.dependency.length; ++i)
                message.dependency[i] = String(object.dependency[i]);
        }
        if (object.publicDependency) {
            if (!Array.isArray(object.publicDependency))
                throw TypeError("FileDescriptorProto.publicDependency: array expected");
            message.publicDependency = [];
            for (let i = 0; i < object.publicDependency.length; ++i)
                message.publicDependency[i] = object.publicDependency[i] | 0;
        }
        if (object.weakDependency) {
            if (!Array.isArray(object.weakDependency))
                throw TypeError("FileDescriptorProto.weakDependency: array expected");
            message.weakDependency = [];
            for (let i = 0; i < object.weakDependency.length; ++i)
                message.weakDependency[i] = object.weakDependency[i] | 0;
        }
        if (object.messageType) {
            if (!Array.isArray(object.messageType))
                throw TypeError("FileDescriptorProto.messageType: array expected");
            message.messageType = [];
            for (let i = 0; i < object.messageType.length; ++i) {
                if (typeof object.messageType[i] !== "object")
                    throw TypeError("FileDescriptorProto.messageType: object expected");
                message.messageType[i] = DescriptorProto.fromObject(object.messageType[i]);
            }
        }
        if (object.enumType) {
            if (!Array.isArray(object.enumType))
                throw TypeError("FileDescriptorProto.enumType: array expected");
            message.enumType = [];
            for (let i = 0; i < object.enumType.length; ++i) {
                if (typeof object.enumType[i] !== "object")
                    throw TypeError("FileDescriptorProto.enumType: object expected");
                message.enumType[i] = EnumDescriptorProto.fromObject(object.enumType[i]);
            }
        }
        if (object.service) {
            if (!Array.isArray(object.service))
                throw TypeError("FileDescriptorProto.service: array expected");
            message.service = [];
            for (let i = 0; i < object.service.length; ++i) {
                if (typeof object.service[i] !== "object")
                    throw TypeError("FileDescriptorProto.service: object expected");
                message.service[i] = ServiceDescriptorProto.fromObject(object.service[i]);
            }
        }
        if (object.extension) {
            if (!Array.isArray(object.extension))
                throw TypeError("FileDescriptorProto.extension: array expected");
            message.extension = [];
            for (let i = 0; i < object.extension.length; ++i) {
                if (typeof object.extension[i] !== "object")
                    throw TypeError("FileDescriptorProto.extension: object expected");
                message.extension[i] = FieldDescriptorProto.fromObject(object.extension[i]);
            }
        }
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("FileDescriptorProto.options: object expected");
            message.options = FileOptions.fromObject(object.options);
        }
        if (object.sourceCodeInfo != null) {
            if (typeof object.sourceCodeInfo !== "object")
                throw TypeError("FileDescriptorProto.sourceCodeInfo: object expected");
            message.sourceCodeInfo = SourceCodeInfo.fromObject(object.sourceCodeInfo);
        }
        if (object.syntax != null)
            message.syntax = String(object.syntax);
        return message;
    }

    /**
     * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
     * @param message FileDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFileDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.dependency = [];
            object.messageType = [];
            object.enumType = [];
            object.service = [];
            object.extension = [];
            object.publicDependency = [];
            object.weakDependency = [];
        }
        if (options.defaults) {
            object.name = "";
            object["package"] = "";
            object.options = null;
            object.sourceCodeInfo = null;
            object.syntax = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message["package"] != null && message.hasOwnProperty("package"))
            object["package"] = message["package"];
        if (message.dependency && message.dependency.length) {
            object.dependency = [];
            for (let j = 0; j < message.dependency.length; ++j)
                object.dependency[j] = message.dependency[j];
        }
        if (message.messageType && message.messageType.length) {
            object.messageType = [];
            for (let j = 0; j < message.messageType.length; ++j)
                object.messageType[j] = DescriptorProto.toObject(message.messageType[j], options);
        }
        if (message.enumType && message.enumType.length) {
            object.enumType = [];
            for (let j = 0; j < message.enumType.length; ++j)
                object.enumType[j] = EnumDescriptorProto.toObject(message.enumType[j], options);
        }
        if (message.service && message.service.length) {
            object.service = [];
            for (let j = 0; j < message.service.length; ++j)
                object.service[j] = ServiceDescriptorProto.toObject(message.service[j], options);
        }
        if (message.extension && message.extension.length) {
            object.extension = [];
            for (let j = 0; j < message.extension.length; ++j)
                object.extension[j] = FieldDescriptorProto.toObject(message.extension[j], options);
        }
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = FileOptions.toObject(message.options, options);
        if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
            object.sourceCodeInfo = SourceCodeInfo.toObject(message.sourceCodeInfo, options);
        if (message.publicDependency && message.publicDependency.length) {
            object.publicDependency = [];
            for (let j = 0; j < message.publicDependency.length; ++j)
                object.publicDependency[j] = message.publicDependency[j];
        }
        if (message.weakDependency && message.weakDependency.length) {
            object.weakDependency = [];
            for (let j = 0; j < message.weakDependency.length; ++j)
                object.weakDependency[j] = message.weakDependency[j];
        }
        if (message.syntax != null && message.hasOwnProperty("syntax"))
            object.syntax = message.syntax;
        return object;
    }

    /**
     * Converts this FileDescriptorProto to JSON.
     */
    toJSON() {
        return FileDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFileDescriptorProto, b?: IFileDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && a["package"] === b["package"] && (!!a.dependency && !!b.dependency && a.dependency.length === b.dependency.length && !a.dependency.find(function (aValue, i) {
            return (a.dependency && a.dependency[i]) === (b.dependency && b.dependency[i]);
        })) && (!!a.publicDependency && !!b.publicDependency && a.publicDependency.length === b.publicDependency.length && !a.publicDependency.find(function (aValue, i) {
            return (a.publicDependency && a.publicDependency[i]) === (b.publicDependency && b.publicDependency[i]);
        })) && (!!a.weakDependency && !!b.weakDependency && a.weakDependency.length === b.weakDependency.length && !a.weakDependency.find(function (aValue, i) {
            return (a.weakDependency && a.weakDependency[i]) === (b.weakDependency && b.weakDependency[i]);
        })) && (!!a.messageType && !!b.messageType && a.messageType.length === b.messageType.length && !a.messageType.find(function (aValue, i) {
            return DescriptorProto.equals(a.messageType && a.messageType[i], b.messageType && b.messageType[i]);
        })) && (!!a.enumType && !!b.enumType && a.enumType.length === b.enumType.length && !a.enumType.find(function (aValue, i) {
            return EnumDescriptorProto.equals(a.enumType && a.enumType[i], b.enumType && b.enumType[i]);
        })) && (!!a.service && !!b.service && a.service.length === b.service.length && !a.service.find(function (aValue, i) {
            return ServiceDescriptorProto.equals(a.service && a.service[i], b.service && b.service[i]);
        })) && (!!a.extension && !!b.extension && a.extension.length === b.extension.length && !a.extension.find(function (aValue, i) {
            return FieldDescriptorProto.equals(a.extension && a.extension[i], b.extension && b.extension[i]);
        })) && FileOptions.equals(a.options, b.options) && SourceCodeInfo.equals(a.sourceCodeInfo, b.sourceCodeInfo) && a.syntax === b.syntax;
    }
    // #endregion
}

/** Properties of a DescriptorProto. */
export interface IDescriptorProto {
    name?: string;
    field?: IFieldDescriptorProto[];
    extension?: IFieldDescriptorProto[];
    nestedType?: IDescriptorProto[];
    enumType?: IEnumDescriptorProto[];
    extensionRange?: DescriptorProto.IExtensionRange[];
    oneofDecl?: IOneofDescriptorProto[];
    options?: IMessageOptions;
    reservedRange?: DescriptorProto.IReservedRange[];
    reservedName?: string[];
}

/**
 * Represents a DescriptorProto.
 */
export class DescriptorProto implements IDescriptorProto {
    name?: string;
    field?: IFieldDescriptorProto[];
    extension?: IFieldDescriptorProto[];
    nestedType?: IDescriptorProto[];
    enumType?: IEnumDescriptorProto[];
    extensionRange?: DescriptorProto.IExtensionRange[];
    oneofDecl?: IOneofDescriptorProto[];
    options?: IMessageOptions;
    reservedRange?: DescriptorProto.IReservedRange[];
    reservedName?: string[];

    // #region create
    /**
     * Constructs a new DescriptorProto.
     */
    constructor(properties?: IDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new DescriptorProto instance using the specified properties.
     */
    static create(properties: IDescriptorProto): DescriptorProto {
        return new DescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified DescriptorProto message. Does not implicitly {@link DescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.field != null && message.field.length)
            for (let i = 0; i < message.field.length; ++i)
                FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.nestedType != null && message.nestedType.length)
            for (let i = 0; i < message.nestedType.length; ++i)
                DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.enumType != null && message.enumType.length)
            for (let i = 0; i < message.enumType.length; ++i)
                EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.extensionRange != null && message.extensionRange.length)
            for (let i = 0; i < message.extensionRange.length; ++i)
                DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.extension != null && message.extension.length)
            for (let i = 0; i < message.extension.length; ++i)
                FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.oneofDecl != null && message.oneofDecl.length)
            for (let i = 0; i < message.oneofDecl.length; ++i)
                OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.reservedRange != null && message.reservedRange.length)
            for (let i = 0; i < message.reservedRange.length; ++i)
                DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.reservedName != null && message.reservedName.length)
            for (let i = 0; i < message.reservedName.length; ++i)
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
        return writer;
    }

    /**
     * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link DescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a DescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): DescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new DescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.field && message.field.length))
                        message.field = [];
                    message.field.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 6: {
                    if (!(message.extension && message.extension.length))
                        message.extension = [];
                    message.extension.push(FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    if (!(message.nestedType && message.nestedType.length))
                        message.nestedType = [];
                    message.nestedType.push(DescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 4: {
                    if (!(message.enumType && message.enumType.length))
                        message.enumType = [];
                    message.enumType.push(EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 5: {
                    if (!(message.extensionRange && message.extensionRange.length))
                        message.extensionRange = [];
                    message.extensionRange.push(DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                    break;
                }
            case 8: {
                    if (!(message.oneofDecl && message.oneofDecl.length))
                        message.oneofDecl = [];
                    message.oneofDecl.push(OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 7: {
                    message.options = MessageOptions.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    if (!(message.reservedRange && message.reservedRange.length))
                        message.reservedRange = [];
                    message.reservedRange.push(DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                    break;
                }
            case 10: {
                    if (!(message.reservedName && message.reservedName.length))
                        message.reservedName = [];
                    message.reservedName.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): DescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a DescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.field != null && message.hasOwnProperty("field")) {
            if (!Array.isArray(message.field))
                return "field: array expected";
            for (let i = 0; i < message.field.length; ++i) {
                let error = FieldDescriptorProto.verify(message.field[i]);
                if (error)
                    return "field." + error;
            }
        }
        if (message.extension != null && message.hasOwnProperty("extension")) {
            if (!Array.isArray(message.extension))
                return "extension: array expected";
            for (let i = 0; i < message.extension.length; ++i) {
                let error = FieldDescriptorProto.verify(message.extension[i]);
                if (error)
                    return "extension." + error;
            }
        }
        if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
            if (!Array.isArray(message.nestedType))
                return "nestedType: array expected";
            for (let i = 0; i < message.nestedType.length; ++i) {
                let error = DescriptorProto.verify(message.nestedType[i]);
                if (error)
                    return "nestedType." + error;
            }
        }
        if (message.enumType != null && message.hasOwnProperty("enumType")) {
            if (!Array.isArray(message.enumType))
                return "enumType: array expected";
            for (let i = 0; i < message.enumType.length; ++i) {
                let error = EnumDescriptorProto.verify(message.enumType[i]);
                if (error)
                    return "enumType." + error;
            }
        }
        if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
            if (!Array.isArray(message.extensionRange))
                return "extensionRange: array expected";
            for (let i = 0; i < message.extensionRange.length; ++i) {
                let error = DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                if (error)
                    return "extensionRange." + error;
            }
        }
        if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
            if (!Array.isArray(message.oneofDecl))
                return "oneofDecl: array expected";
            for (let i = 0; i < message.oneofDecl.length; ++i) {
                let error = OneofDescriptorProto.verify(message.oneofDecl[i]);
                if (error)
                    return "oneofDecl." + error;
            }
        }
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = MessageOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
            if (!Array.isArray(message.reservedRange))
                return "reservedRange: array expected";
            for (let i = 0; i < message.reservedRange.length; ++i) {
                let error = DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                if (error)
                    return "reservedRange." + error;
            }
        }
        if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
            if (!Array.isArray(message.reservedName))
                return "reservedName: array expected";
            for (let i = 0; i < message.reservedName.length; ++i)
                if (!$util.isString(message.reservedName[i]))
                    return "reservedName: string[] expected";
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IDescriptorProto {
        if (object instanceof DescriptorProto)
            return object;
        let message = new DescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.field) {
            if (!Array.isArray(object.field))
                throw TypeError("DescriptorProto.field: array expected");
            message.field = [];
            for (let i = 0; i < object.field.length; ++i) {
                if (typeof object.field[i] !== "object")
                    throw TypeError("DescriptorProto.field: object expected");
                message.field[i] = FieldDescriptorProto.fromObject(object.field[i]);
            }
        }
        if (object.extension) {
            if (!Array.isArray(object.extension))
                throw TypeError("DescriptorProto.extension: array expected");
            message.extension = [];
            for (let i = 0; i < object.extension.length; ++i) {
                if (typeof object.extension[i] !== "object")
                    throw TypeError("DescriptorProto.extension: object expected");
                message.extension[i] = FieldDescriptorProto.fromObject(object.extension[i]);
            }
        }
        if (object.nestedType) {
            if (!Array.isArray(object.nestedType))
                throw TypeError("DescriptorProto.nestedType: array expected");
            message.nestedType = [];
            for (let i = 0; i < object.nestedType.length; ++i) {
                if (typeof object.nestedType[i] !== "object")
                    throw TypeError("DescriptorProto.nestedType: object expected");
                message.nestedType[i] = DescriptorProto.fromObject(object.nestedType[i]);
            }
        }
        if (object.enumType) {
            if (!Array.isArray(object.enumType))
                throw TypeError("DescriptorProto.enumType: array expected");
            message.enumType = [];
            for (let i = 0; i < object.enumType.length; ++i) {
                if (typeof object.enumType[i] !== "object")
                    throw TypeError("DescriptorProto.enumType: object expected");
                message.enumType[i] = EnumDescriptorProto.fromObject(object.enumType[i]);
            }
        }
        if (object.extensionRange) {
            if (!Array.isArray(object.extensionRange))
                throw TypeError("DescriptorProto.extensionRange: array expected");
            message.extensionRange = [];
            for (let i = 0; i < object.extensionRange.length; ++i) {
                if (typeof object.extensionRange[i] !== "object")
                    throw TypeError("DescriptorProto.extensionRange: object expected");
                message.extensionRange[i] = DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
            }
        }
        if (object.oneofDecl) {
            if (!Array.isArray(object.oneofDecl))
                throw TypeError("DescriptorProto.oneofDecl: array expected");
            message.oneofDecl = [];
            for (let i = 0; i < object.oneofDecl.length; ++i) {
                if (typeof object.oneofDecl[i] !== "object")
                    throw TypeError("DescriptorProto.oneofDecl: object expected");
                message.oneofDecl[i] = OneofDescriptorProto.fromObject(object.oneofDecl[i]);
            }
        }
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("DescriptorProto.options: object expected");
            message.options = MessageOptions.fromObject(object.options);
        }
        if (object.reservedRange) {
            if (!Array.isArray(object.reservedRange))
                throw TypeError("DescriptorProto.reservedRange: array expected");
            message.reservedRange = [];
            for (let i = 0; i < object.reservedRange.length; ++i) {
                if (typeof object.reservedRange[i] !== "object")
                    throw TypeError("DescriptorProto.reservedRange: object expected");
                message.reservedRange[i] = DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
            }
        }
        if (object.reservedName) {
            if (!Array.isArray(object.reservedName))
                throw TypeError("DescriptorProto.reservedName: array expected");
            message.reservedName = [];
            for (let i = 0; i < object.reservedName.length; ++i)
                message.reservedName[i] = String(object.reservedName[i]);
        }
        return message;
    }

    /**
     * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
     * @param message DescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.field = [];
            object.nestedType = [];
            object.enumType = [];
            object.extensionRange = [];
            object.extension = [];
            object.oneofDecl = [];
            object.reservedRange = [];
            object.reservedName = [];
        }
        if (options.defaults) {
            object.name = "";
            object.options = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.field && message.field.length) {
            object.field = [];
            for (let j = 0; j < message.field.length; ++j)
                object.field[j] = FieldDescriptorProto.toObject(message.field[j], options);
        }
        if (message.nestedType && message.nestedType.length) {
            object.nestedType = [];
            for (let j = 0; j < message.nestedType.length; ++j)
                object.nestedType[j] = DescriptorProto.toObject(message.nestedType[j], options);
        }
        if (message.enumType && message.enumType.length) {
            object.enumType = [];
            for (let j = 0; j < message.enumType.length; ++j)
                object.enumType[j] = EnumDescriptorProto.toObject(message.enumType[j], options);
        }
        if (message.extensionRange && message.extensionRange.length) {
            object.extensionRange = [];
            for (let j = 0; j < message.extensionRange.length; ++j)
                object.extensionRange[j] = DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
        }
        if (message.extension && message.extension.length) {
            object.extension = [];
            for (let j = 0; j < message.extension.length; ++j)
                object.extension[j] = FieldDescriptorProto.toObject(message.extension[j], options);
        }
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = MessageOptions.toObject(message.options, options);
        if (message.oneofDecl && message.oneofDecl.length) {
            object.oneofDecl = [];
            for (let j = 0; j < message.oneofDecl.length; ++j)
                object.oneofDecl[j] = OneofDescriptorProto.toObject(message.oneofDecl[j], options);
        }
        if (message.reservedRange && message.reservedRange.length) {
            object.reservedRange = [];
            for (let j = 0; j < message.reservedRange.length; ++j)
                object.reservedRange[j] = DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
        }
        if (message.reservedName && message.reservedName.length) {
            object.reservedName = [];
            for (let j = 0; j < message.reservedName.length; ++j)
                object.reservedName[j] = message.reservedName[j];
        }
        return object;
    }

    /**
     * Converts this DescriptorProto to JSON.
     */
    toJSON() {
        return DescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IDescriptorProto, b?: IDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && (!!a.field && !!b.field && a.field.length === b.field.length && !a.field.find(function (aValue, i) {
            return FieldDescriptorProto.equals(a.field && a.field[i], b.field && b.field[i]);
        })) && (!!a.extension && !!b.extension && a.extension.length === b.extension.length && !a.extension.find(function (aValue, i) {
            return FieldDescriptorProto.equals(a.extension && a.extension[i], b.extension && b.extension[i]);
        })) && (!!a.nestedType && !!b.nestedType && a.nestedType.length === b.nestedType.length && !a.nestedType.find(function (aValue, i) {
            return DescriptorProto.equals(a.nestedType && a.nestedType[i], b.nestedType && b.nestedType[i]);
        })) && (!!a.enumType && !!b.enumType && a.enumType.length === b.enumType.length && !a.enumType.find(function (aValue, i) {
            return EnumDescriptorProto.equals(a.enumType && a.enumType[i], b.enumType && b.enumType[i]);
        })) && (!!a.extensionRange && !!b.extensionRange && a.extensionRange.length === b.extensionRange.length && !a.extensionRange.find(function (aValue, i) {
            return DescriptorProto.ExtensionRange.equals(a.extensionRange && a.extensionRange[i], b.extensionRange && b.extensionRange[i]);
        })) && (!!a.oneofDecl && !!b.oneofDecl && a.oneofDecl.length === b.oneofDecl.length && !a.oneofDecl.find(function (aValue, i) {
            return OneofDescriptorProto.equals(a.oneofDecl && a.oneofDecl[i], b.oneofDecl && b.oneofDecl[i]);
        })) && MessageOptions.equals(a.options, b.options) && (!!a.reservedRange && !!b.reservedRange && a.reservedRange.length === b.reservedRange.length && !a.reservedRange.find(function (aValue, i) {
            return DescriptorProto.ReservedRange.equals(a.reservedRange && a.reservedRange[i], b.reservedRange && b.reservedRange[i]);
        })) && (!!a.reservedName && !!b.reservedName && a.reservedName.length === b.reservedName.length && !a.reservedName.find(function (aValue, i) {
            return (a.reservedName && a.reservedName[i]) === (b.reservedName && b.reservedName[i]);
        }));
    }
    // #endregion
}

export namespace DescriptorProto {
    /** Properties of an ExtensionRange. */
    export interface IExtensionRange {
        start?: number;
        end?: number;
    }

    /**
     * Represents an ExtensionRange.
     */
    export class ExtensionRange implements IExtensionRange {
        start?: number;
        end?: number;

        // #region create
        /**
         * Constructs a new ExtensionRange.
         */
        constructor(properties?: IExtensionRange) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ExtensionRange instance using the specified properties.
         */
        static create(properties: IExtensionRange): ExtensionRange {
            return new ExtensionRange(properties);
        }
        // #endregion

        // #region encode
        /**
         * Encodes the specified ExtensionRange message. Does not implicitly {@link ExtensionRange.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encode(message: IExtensionRange, writer?: $Writer): $Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
            return writer;
        }

        /**
         * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link ExtensionRange.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encodeDelimited(message: IExtensionRange, writer?: $Writer): $Writer {
            return this.encode(message, writer).ldelim();
        }
        // #endregion

        // #region decode
        /**
         * Decodes an ExtensionRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $Reader|Uint8Array, length?: number): ExtensionRange {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new DescriptorProto.ExtensionRange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.int32();
                        break;
                    }
                case 2: {
                        message.end = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $Reader|Uint8Array): ExtensionRange {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $Reader).uint32());
        }
        // #endregion

        // #region verify
        /**
         * Verifies an ExtensionRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start))
                    return "start: integer expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end))
                    return "end: integer expected";
            return null;
        }
        // #endregion

        // #region convert
        /**
         * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IExtensionRange {
            if (object instanceof DescriptorProto.ExtensionRange)
                return object;
            let message = new DescriptorProto.ExtensionRange();
            if (object.start != null)
                message.start = object.start | 0;
            if (object.end != null)
                message.end = object.end | 0;
            return message;
        }

        /**
         * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
         * @param message ExtensionRange
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IExtensionRange, options: $IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults) {
                object.start = 0;
                object.end = 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            return object;
        }

        /**
         * Converts this ExtensionRange to JSON.
         */
        toJSON() {
            return ExtensionRange.toObject(this, $util.toJSONOptions);
        };
        // #endregion

        // #region equals
        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IExtensionRange, b?: IExtensionRange): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.start === b.start && a.end === b.end;
        }
        // #endregion
    }

    /** Properties of a ReservedRange. */
    export interface IReservedRange {
        start?: number;
        end?: number;
    }

    /**
     * Represents a ReservedRange.
     */
    export class ReservedRange implements IReservedRange {
        start?: number;
        end?: number;

        // #region create
        /**
         * Constructs a new ReservedRange.
         */
        constructor(properties?: IReservedRange) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new ReservedRange instance using the specified properties.
         */
        static create(properties: IReservedRange): ReservedRange {
            return new ReservedRange(properties);
        }
        // #endregion

        // #region encode
        /**
         * Encodes the specified ReservedRange message. Does not implicitly {@link ReservedRange.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encode(message: IReservedRange, writer?: $Writer): $Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.start != null && Object.hasOwnProperty.call(message, "start"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
            return writer;
        }

        /**
         * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link ReservedRange.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encodeDelimited(message: IReservedRange, writer?: $Writer): $Writer {
            return this.encode(message, writer).ldelim();
        }
        // #endregion

        // #region decode
        /**
         * Decodes a ReservedRange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $Reader|Uint8Array, length?: number): ReservedRange {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new DescriptorProto.ReservedRange();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.start = reader.int32();
                        break;
                    }
                case 2: {
                        message.end = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $Reader|Uint8Array): ReservedRange {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $Reader).uint32());
        }
        // #endregion

        // #region verify
        /**
         * Verifies a ReservedRange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.start != null && message.hasOwnProperty("start"))
                if (!$util.isInteger(message.start))
                    return "start: integer expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end))
                    return "end: integer expected";
            return null;
        }
        // #endregion

        // #region convert
        /**
         * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IReservedRange {
            if (object instanceof DescriptorProto.ReservedRange)
                return object;
            let message = new DescriptorProto.ReservedRange();
            if (object.start != null)
                message.start = object.start | 0;
            if (object.end != null)
                message.end = object.end | 0;
            return message;
        }

        /**
         * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
         * @param message ReservedRange
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IReservedRange, options: $IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults) {
                object.start = 0;
                object.end = 0;
            }
            if (message.start != null && message.hasOwnProperty("start"))
                object.start = message.start;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            return object;
        }

        /**
         * Converts this ReservedRange to JSON.
         */
        toJSON() {
            return ReservedRange.toObject(this, $util.toJSONOptions);
        };
        // #endregion

        // #region equals
        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IReservedRange, b?: IReservedRange): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.start === b.start && a.end === b.end;
        }
        // #endregion
    }

}

/** Properties of a FieldDescriptorProto. */
export interface IFieldDescriptorProto {
    name?: string;
    number?: number;
    label?: FieldDescriptorProto.Label;
    type?: FieldDescriptorProto.Type;
    typeName?: string;
    extendee?: string;
    defaultValue?: string;
    oneofIndex?: number;
    jsonName?: string;
    options?: IFieldOptions;
}

/**
 * Represents a FieldDescriptorProto.
 */
export class FieldDescriptorProto implements IFieldDescriptorProto {
    name?: string;
    number?: number;
    label?: FieldDescriptorProto.Label;
    type?: FieldDescriptorProto.Type;
    typeName?: string;
    extendee?: string;
    defaultValue?: string;
    oneofIndex?: number;
    jsonName?: string;
    options?: IFieldOptions;

    // #region create
    /**
     * Constructs a new FieldDescriptorProto.
     */
    constructor(properties?: IFieldDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FieldDescriptorProto instance using the specified properties.
     */
    static create(properties: IFieldDescriptorProto): FieldDescriptorProto {
        return new FieldDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link FieldDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IFieldDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.extendee != null && Object.hasOwnProperty.call(message, "extendee"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
        if (message.typeName != null && Object.hasOwnProperty.call(message, "typeName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
        if (message.defaultValue != null && Object.hasOwnProperty.call(message, "defaultValue"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
        if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
        return writer;
    }

    /**
     * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link FieldDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IFieldDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a FieldDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): FieldDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new FieldDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.number = reader.int32();
                    break;
                }
            case 4: {
                    message.label = reader.int32();
                    break;
                }
            case 5: {
                    message.type = reader.int32();
                    break;
                }
            case 6: {
                    message.typeName = reader.string();
                    break;
                }
            case 2: {
                    message.extendee = reader.string();
                    break;
                }
            case 7: {
                    message.defaultValue = reader.string();
                    break;
                }
            case 9: {
                    message.oneofIndex = reader.int32();
                    break;
                }
            case 10: {
                    message.jsonName = reader.string();
                    break;
                }
            case 8: {
                    message.options = FieldOptions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): FieldDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a FieldDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.number != null && message.hasOwnProperty("number"))
            if (!$util.isInteger(message.number))
                return "number: integer expected";
        if (message.label != null && message.hasOwnProperty("label"))
            switch (message.label) {
            default:
                return "label: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                break;
            }
        if (message.typeName != null && message.hasOwnProperty("typeName"))
            if (!$util.isString(message.typeName))
                return "typeName: string expected";
        if (message.extendee != null && message.hasOwnProperty("extendee"))
            if (!$util.isString(message.extendee))
                return "extendee: string expected";
        if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
            if (!$util.isString(message.defaultValue))
                return "defaultValue: string expected";
        if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
            if (!$util.isInteger(message.oneofIndex))
                return "oneofIndex: integer expected";
        if (message.jsonName != null && message.hasOwnProperty("jsonName"))
            if (!$util.isString(message.jsonName))
                return "jsonName: string expected";
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = FieldOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFieldDescriptorProto {
        if (object instanceof FieldDescriptorProto)
            return object;
        let message = new FieldDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.number != null)
            message.number = object.number | 0;
        switch (object.label) {
        case "LABEL_OPTIONAL":
        case 1:
            message.label = 1;
            break;
        case "LABEL_REQUIRED":
        case 2:
            message.label = 2;
            break;
        case "LABEL_REPEATED":
        case 3:
            message.label = 3;
            break;
        }
        switch (object.type) {
        case "TYPE_DOUBLE":
        case 1:
            message.type = 1;
            break;
        case "TYPE_FLOAT":
        case 2:
            message.type = 2;
            break;
        case "TYPE_INT64":
        case 3:
            message.type = 3;
            break;
        case "TYPE_UINT64":
        case 4:
            message.type = 4;
            break;
        case "TYPE_INT32":
        case 5:
            message.type = 5;
            break;
        case "TYPE_FIXED64":
        case 6:
            message.type = 6;
            break;
        case "TYPE_FIXED32":
        case 7:
            message.type = 7;
            break;
        case "TYPE_BOOL":
        case 8:
            message.type = 8;
            break;
        case "TYPE_STRING":
        case 9:
            message.type = 9;
            break;
        case "TYPE_GROUP":
        case 10:
            message.type = 10;
            break;
        case "TYPE_MESSAGE":
        case 11:
            message.type = 11;
            break;
        case "TYPE_BYTES":
        case 12:
            message.type = 12;
            break;
        case "TYPE_UINT32":
        case 13:
            message.type = 13;
            break;
        case "TYPE_ENUM":
        case 14:
            message.type = 14;
            break;
        case "TYPE_SFIXED32":
        case 15:
            message.type = 15;
            break;
        case "TYPE_SFIXED64":
        case 16:
            message.type = 16;
            break;
        case "TYPE_SINT32":
        case 17:
            message.type = 17;
            break;
        case "TYPE_SINT64":
        case 18:
            message.type = 18;
            break;
        }
        if (object.typeName != null)
            message.typeName = String(object.typeName);
        if (object.extendee != null)
            message.extendee = String(object.extendee);
        if (object.defaultValue != null)
            message.defaultValue = String(object.defaultValue);
        if (object.oneofIndex != null)
            message.oneofIndex = object.oneofIndex | 0;
        if (object.jsonName != null)
            message.jsonName = String(object.jsonName);
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("FieldDescriptorProto.options: object expected");
            message.options = FieldOptions.fromObject(object.options);
        }
        return message;
    }

    /**
     * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
     * @param message FieldDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFieldDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.name = "";
            object.extendee = "";
            object.number = 0;
            object.label = 1;
            object.type = 1;
            object.typeName = "";
            object.defaultValue = "";
            object.options = null;
            object.oneofIndex = 0;
            object.jsonName = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.extendee != null && message.hasOwnProperty("extendee"))
            object.extendee = message.extendee;
        if (message.number != null && message.hasOwnProperty("number"))
            object.number = message.number;
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = options.enums === String ? FieldDescriptorProto.Label[message.label] : message.label;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? FieldDescriptorProto.Type[message.type] : message.type;
        if (message.typeName != null && message.hasOwnProperty("typeName"))
            object.typeName = message.typeName;
        if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
            object.defaultValue = message.defaultValue;
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = FieldOptions.toObject(message.options, options);
        if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
            object.oneofIndex = message.oneofIndex;
        if (message.jsonName != null && message.hasOwnProperty("jsonName"))
            object.jsonName = message.jsonName;
        return object;
    }

    /**
     * Converts this FieldDescriptorProto to JSON.
     */
    toJSON() {
        return FieldDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFieldDescriptorProto, b?: IFieldDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && a.number === b.number && a.label === b.label && a.type === b.type && a.typeName === b.typeName && a.extendee === b.extendee && a.defaultValue === b.defaultValue && a.oneofIndex === b.oneofIndex && a.jsonName === b.jsonName && FieldOptions.equals(a.options, b.options);
    }
    // #endregion
}

export namespace FieldDescriptorProto {
    export enum Type {
        TYPE_DOUBLE = 1,
        TYPE_FLOAT = 2,
        TYPE_INT64 = 3,
        TYPE_UINT64 = 4,
        TYPE_INT32 = 5,
        TYPE_FIXED64 = 6,
        TYPE_FIXED32 = 7,
        TYPE_BOOL = 8,
        TYPE_STRING = 9,
        TYPE_GROUP = 10,
        TYPE_MESSAGE = 11,
        TYPE_BYTES = 12,
        TYPE_UINT32 = 13,
        TYPE_ENUM = 14,
        TYPE_SFIXED32 = 15,
        TYPE_SFIXED64 = 16,
        TYPE_SINT32 = 17,
        TYPE_SINT64 = 18,
    }

    export enum Label {
        LABEL_OPTIONAL = 1,
        LABEL_REQUIRED = 2,
        LABEL_REPEATED = 3,
    }

}

/** Properties of an OneofDescriptorProto. */
export interface IOneofDescriptorProto {
    name?: string;
    options?: IOneofOptions;
}

/**
 * Represents an OneofDescriptorProto.
 */
export class OneofDescriptorProto implements IOneofDescriptorProto {
    name?: string;
    options?: IOneofOptions;

    // #region create
    /**
     * Constructs a new OneofDescriptorProto.
     */
    constructor(properties?: IOneofDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new OneofDescriptorProto instance using the specified properties.
     */
    static create(properties: IOneofDescriptorProto): OneofDescriptorProto {
        return new OneofDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link OneofDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IOneofDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link OneofDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IOneofDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an OneofDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): OneofDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new OneofDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.options = OneofOptions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): OneofDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an OneofDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = OneofOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IOneofDescriptorProto {
        if (object instanceof OneofDescriptorProto)
            return object;
        let message = new OneofDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("OneofDescriptorProto.options: object expected");
            message.options = OneofOptions.fromObject(object.options);
        }
        return message;
    }

    /**
     * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
     * @param message OneofDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IOneofDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.name = "";
            object.options = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = OneofOptions.toObject(message.options, options);
        return object;
    }

    /**
     * Converts this OneofDescriptorProto to JSON.
     */
    toJSON() {
        return OneofDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IOneofDescriptorProto, b?: IOneofDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && OneofOptions.equals(a.options, b.options);
    }
    // #endregion
}

/** Properties of an EnumDescriptorProto. */
export interface IEnumDescriptorProto {
    name?: string;
    value?: IEnumValueDescriptorProto[];
    options?: IEnumOptions;
}

/**
 * Represents an EnumDescriptorProto.
 */
export class EnumDescriptorProto implements IEnumDescriptorProto {
    name?: string;
    value?: IEnumValueDescriptorProto[];
    options?: IEnumOptions;

    // #region create
    /**
     * Constructs a new EnumDescriptorProto.
     */
    constructor(properties?: IEnumDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EnumDescriptorProto instance using the specified properties.
     */
    static create(properties: IEnumDescriptorProto): EnumDescriptorProto {
        return new EnumDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link EnumDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IEnumDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.value != null && message.value.length)
            for (let i = 0; i < message.value.length; ++i)
                EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link EnumDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IEnumDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an EnumDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): EnumDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new EnumDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.options = EnumOptions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): EnumDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an EnumDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.value != null && message.hasOwnProperty("value")) {
            if (!Array.isArray(message.value))
                return "value: array expected";
            for (let i = 0; i < message.value.length; ++i) {
                let error = EnumValueDescriptorProto.verify(message.value[i]);
                if (error)
                    return "value." + error;
            }
        }
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = EnumOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEnumDescriptorProto {
        if (object instanceof EnumDescriptorProto)
            return object;
        let message = new EnumDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.value) {
            if (!Array.isArray(object.value))
                throw TypeError("EnumDescriptorProto.value: array expected");
            message.value = [];
            for (let i = 0; i < object.value.length; ++i) {
                if (typeof object.value[i] !== "object")
                    throw TypeError("EnumDescriptorProto.value: object expected");
                message.value[i] = EnumValueDescriptorProto.fromObject(object.value[i]);
            }
        }
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("EnumDescriptorProto.options: object expected");
            message.options = EnumOptions.fromObject(object.options);
        }
        return message;
    }

    /**
     * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
     * @param message EnumDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEnumDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.value = [];
        if (options.defaults) {
            object.name = "";
            object.options = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.value && message.value.length) {
            object.value = [];
            for (let j = 0; j < message.value.length; ++j)
                object.value[j] = EnumValueDescriptorProto.toObject(message.value[j], options);
        }
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = EnumOptions.toObject(message.options, options);
        return object;
    }

    /**
     * Converts this EnumDescriptorProto to JSON.
     */
    toJSON() {
        return EnumDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEnumDescriptorProto, b?: IEnumDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && (!!a.value && !!b.value && a.value.length === b.value.length && !a.value.find(function (aValue, i) {
            return EnumValueDescriptorProto.equals(a.value && a.value[i], b.value && b.value[i]);
        })) && EnumOptions.equals(a.options, b.options);
    }
    // #endregion
}

/** Properties of an EnumValueDescriptorProto. */
export interface IEnumValueDescriptorProto {
    name?: string;
    number?: number;
    options?: IEnumValueOptions;
}

/**
 * Represents an EnumValueDescriptorProto.
 */
export class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
    name?: string;
    number?: number;
    options?: IEnumValueOptions;

    // #region create
    /**
     * Constructs a new EnumValueDescriptorProto.
     */
    constructor(properties?: IEnumValueDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EnumValueDescriptorProto instance using the specified properties.
     */
    static create(properties: IEnumValueDescriptorProto): EnumValueDescriptorProto {
        return new EnumValueDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link EnumValueDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IEnumValueDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.number != null && Object.hasOwnProperty.call(message, "number"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link EnumValueDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IEnumValueDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): EnumValueDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new EnumValueDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.number = reader.int32();
                    break;
                }
            case 3: {
                    message.options = EnumValueOptions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): EnumValueDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an EnumValueDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.number != null && message.hasOwnProperty("number"))
            if (!$util.isInteger(message.number))
                return "number: integer expected";
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = EnumValueOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEnumValueDescriptorProto {
        if (object instanceof EnumValueDescriptorProto)
            return object;
        let message = new EnumValueDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.number != null)
            message.number = object.number | 0;
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("EnumValueDescriptorProto.options: object expected");
            message.options = EnumValueOptions.fromObject(object.options);
        }
        return message;
    }

    /**
     * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
     * @param message EnumValueDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEnumValueDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.name = "";
            object.number = 0;
            object.options = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.number != null && message.hasOwnProperty("number"))
            object.number = message.number;
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = EnumValueOptions.toObject(message.options, options);
        return object;
    }

    /**
     * Converts this EnumValueDescriptorProto to JSON.
     */
    toJSON() {
        return EnumValueDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEnumValueDescriptorProto, b?: IEnumValueDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && a.number === b.number && EnumValueOptions.equals(a.options, b.options);
    }
    // #endregion
}

/** Properties of a ServiceDescriptorProto. */
export interface IServiceDescriptorProto {
    name?: string;
    method?: IMethodDescriptorProto[];
    options?: IServiceOptions;
}

/**
 * Represents a ServiceDescriptorProto.
 */
export class ServiceDescriptorProto implements IServiceDescriptorProto {
    name?: string;
    method?: IMethodDescriptorProto[];
    options?: IServiceOptions;

    // #region create
    /**
     * Constructs a new ServiceDescriptorProto.
     */
    constructor(properties?: IServiceDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ServiceDescriptorProto instance using the specified properties.
     */
    static create(properties: IServiceDescriptorProto): ServiceDescriptorProto {
        return new ServiceDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link ServiceDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IServiceDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.method != null && message.method.length)
            for (let i = 0; i < message.method.length; ++i)
                MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link ServiceDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IServiceDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): ServiceDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new ServiceDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.method && message.method.length))
                        message.method = [];
                    message.method.push(MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.options = ServiceOptions.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): ServiceDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a ServiceDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.method != null && message.hasOwnProperty("method")) {
            if (!Array.isArray(message.method))
                return "method: array expected";
            for (let i = 0; i < message.method.length; ++i) {
                let error = MethodDescriptorProto.verify(message.method[i]);
                if (error)
                    return "method." + error;
            }
        }
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = ServiceOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IServiceDescriptorProto {
        if (object instanceof ServiceDescriptorProto)
            return object;
        let message = new ServiceDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.method) {
            if (!Array.isArray(object.method))
                throw TypeError("ServiceDescriptorProto.method: array expected");
            message.method = [];
            for (let i = 0; i < object.method.length; ++i) {
                if (typeof object.method[i] !== "object")
                    throw TypeError("ServiceDescriptorProto.method: object expected");
                message.method[i] = MethodDescriptorProto.fromObject(object.method[i]);
            }
        }
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("ServiceDescriptorProto.options: object expected");
            message.options = ServiceOptions.fromObject(object.options);
        }
        return message;
    }

    /**
     * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
     * @param message ServiceDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IServiceDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.method = [];
        if (options.defaults) {
            object.name = "";
            object.options = null;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.method && message.method.length) {
            object.method = [];
            for (let j = 0; j < message.method.length; ++j)
                object.method[j] = MethodDescriptorProto.toObject(message.method[j], options);
        }
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = ServiceOptions.toObject(message.options, options);
        return object;
    }

    /**
     * Converts this ServiceDescriptorProto to JSON.
     */
    toJSON() {
        return ServiceDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IServiceDescriptorProto, b?: IServiceDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && (!!a.method && !!b.method && a.method.length === b.method.length && !a.method.find(function (aValue, i) {
            return MethodDescriptorProto.equals(a.method && a.method[i], b.method && b.method[i]);
        })) && ServiceOptions.equals(a.options, b.options);
    }
    // #endregion
}

/** Properties of a MethodDescriptorProto. */
export interface IMethodDescriptorProto {
    name?: string;
    inputType?: string;
    outputType?: string;
    options?: IMethodOptions;
    clientStreaming?: boolean;
    serverStreaming?: boolean;
}

/**
 * Represents a MethodDescriptorProto.
 */
export class MethodDescriptorProto implements IMethodDescriptorProto {
    name?: string;
    inputType?: string;
    outputType?: string;
    options?: IMethodOptions;
    clientStreaming?: boolean;
    serverStreaming?: boolean;

    // #region create
    /**
     * Constructs a new MethodDescriptorProto.
     */
    constructor(properties?: IMethodDescriptorProto) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MethodDescriptorProto instance using the specified properties.
     */
    static create(properties: IMethodDescriptorProto): MethodDescriptorProto {
        return new MethodDescriptorProto(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link MethodDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMethodDescriptorProto, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
        if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
        if (message.options != null && Object.hasOwnProperty.call(message, "options"))
            MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
        if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
        return writer;
    }

    /**
     * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link MethodDescriptorProto.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMethodDescriptorProto, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a MethodDescriptorProto message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): MethodDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new MethodDescriptorProto();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.inputType = reader.string();
                    break;
                }
            case 3: {
                    message.outputType = reader.string();
                    break;
                }
            case 4: {
                    message.options = MethodOptions.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.clientStreaming = reader.bool();
                    break;
                }
            case 6: {
                    message.serverStreaming = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): MethodDescriptorProto {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a MethodDescriptorProto message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.inputType != null && message.hasOwnProperty("inputType"))
            if (!$util.isString(message.inputType))
                return "inputType: string expected";
        if (message.outputType != null && message.hasOwnProperty("outputType"))
            if (!$util.isString(message.outputType))
                return "outputType: string expected";
        if (message.options != null && message.hasOwnProperty("options")) {
            let error = MethodOptions.verify(message.options);
            if (error)
                return "options." + error;
        }
        if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
            if (typeof message.clientStreaming !== "boolean")
                return "clientStreaming: boolean expected";
        if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
            if (typeof message.serverStreaming !== "boolean")
                return "serverStreaming: boolean expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMethodDescriptorProto {
        if (object instanceof MethodDescriptorProto)
            return object;
        let message = new MethodDescriptorProto();
        if (object.name != null)
            message.name = String(object.name);
        if (object.inputType != null)
            message.inputType = String(object.inputType);
        if (object.outputType != null)
            message.outputType = String(object.outputType);
        if (object.options != null) {
            if (typeof object.options !== "object")
                throw TypeError("MethodDescriptorProto.options: object expected");
            message.options = MethodOptions.fromObject(object.options);
        }
        if (object.clientStreaming != null)
            message.clientStreaming = Boolean(object.clientStreaming);
        if (object.serverStreaming != null)
            message.serverStreaming = Boolean(object.serverStreaming);
        return message;
    }

    /**
     * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
     * @param message MethodDescriptorProto
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMethodDescriptorProto, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.name = "";
            object.inputType = "";
            object.outputType = "";
            object.options = null;
            object.clientStreaming = false;
            object.serverStreaming = false;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.inputType != null && message.hasOwnProperty("inputType"))
            object.inputType = message.inputType;
        if (message.outputType != null && message.hasOwnProperty("outputType"))
            object.outputType = message.outputType;
        if (message.options != null && message.hasOwnProperty("options"))
            object.options = MethodOptions.toObject(message.options, options);
        if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
            object.clientStreaming = message.clientStreaming;
        if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
            object.serverStreaming = message.serverStreaming;
        return object;
    }

    /**
     * Converts this MethodDescriptorProto to JSON.
     */
    toJSON() {
        return MethodDescriptorProto.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMethodDescriptorProto, b?: IMethodDescriptorProto): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && a.inputType === b.inputType && a.outputType === b.outputType && MethodOptions.equals(a.options, b.options) && a.clientStreaming === b.clientStreaming && a.serverStreaming === b.serverStreaming;
    }
    // #endregion
}

/** Properties of a FileOptions. */
export interface IFileOptions {
    javaPackage?: string;
    javaOuterClassname?: string;
    javaMultipleFiles?: boolean;
    javaGenerateEqualsAndHash?: boolean;
    javaStringCheckUtf8?: boolean;
    optimizeFor?: FileOptions.OptimizeMode;
    goPackage?: string;
    ccGenericServices?: boolean;
    javaGenericServices?: boolean;
    pyGenericServices?: boolean;
    deprecated?: boolean;
    ccEnableArenas?: boolean;
    objcClassPrefix?: string;
    csharpNamespace?: string;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents a FileOptions.
 */
export class FileOptions implements IFileOptions {
    javaPackage?: string;
    javaOuterClassname?: string;
    javaMultipleFiles?: boolean;
    javaGenerateEqualsAndHash?: boolean;
    javaStringCheckUtf8?: boolean;
    optimizeFor?: FileOptions.OptimizeMode;
    goPackage?: string;
    ccGenericServices?: boolean;
    javaGenericServices?: boolean;
    pyGenericServices?: boolean;
    deprecated?: boolean;
    ccEnableArenas?: boolean;
    objcClassPrefix?: string;
    csharpNamespace?: string;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new FileOptions.
     */
    constructor(properties?: IFileOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FileOptions instance using the specified properties.
     */
    static create(properties: IFileOptions): FileOptions {
        return new FileOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified FileOptions message. Does not implicitly {@link FileOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IFileOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.javaPackage != null && Object.hasOwnProperty.call(message, "javaPackage"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
        if (message.javaOuterClassname != null && Object.hasOwnProperty.call(message, "javaOuterClassname"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
        if (message.optimizeFor != null && Object.hasOwnProperty.call(message, "optimizeFor"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
        if (message.javaMultipleFiles != null && Object.hasOwnProperty.call(message, "javaMultipleFiles"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
        if (message.goPackage != null && Object.hasOwnProperty.call(message, "goPackage"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
        if (message.ccGenericServices != null && Object.hasOwnProperty.call(message, "ccGenericServices"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
        if (message.javaGenericServices != null && Object.hasOwnProperty.call(message, "javaGenericServices"))
            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
        if (message.pyGenericServices != null && Object.hasOwnProperty.call(message, "pyGenericServices"))
            writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
        if (message.javaGenerateEqualsAndHash != null && Object.hasOwnProperty.call(message, "javaGenerateEqualsAndHash"))
            writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
        if (message.javaStringCheckUtf8 != null && Object.hasOwnProperty.call(message, "javaStringCheckUtf8"))
            writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
        if (message.ccEnableArenas != null && Object.hasOwnProperty.call(message, "ccEnableArenas"))
            writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
        if (message.objcClassPrefix != null && Object.hasOwnProperty.call(message, "objcClassPrefix"))
            writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
        if (message.csharpNamespace != null && Object.hasOwnProperty.call(message, "csharpNamespace"))
            writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link FileOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IFileOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a FileOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): FileOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new FileOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.javaPackage = reader.string();
                    break;
                }
            case 8: {
                    message.javaOuterClassname = reader.string();
                    break;
                }
            case 10: {
                    message.javaMultipleFiles = reader.bool();
                    break;
                }
            case 20: {
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                }
            case 27: {
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                }
            case 9: {
                    message.optimizeFor = reader.int32();
                    break;
                }
            case 11: {
                    message.goPackage = reader.string();
                    break;
                }
            case 16: {
                    message.ccGenericServices = reader.bool();
                    break;
                }
            case 17: {
                    message.javaGenericServices = reader.bool();
                    break;
                }
            case 18: {
                    message.pyGenericServices = reader.bool();
                    break;
                }
            case 23: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 31: {
                    message.ccEnableArenas = reader.bool();
                    break;
                }
            case 36: {
                    message.objcClassPrefix = reader.string();
                    break;
                }
            case 37: {
                    message.csharpNamespace = reader.string();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a FileOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): FileOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a FileOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
            if (!$util.isString(message.javaPackage))
                return "javaPackage: string expected";
        if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
            if (!$util.isString(message.javaOuterClassname))
                return "javaOuterClassname: string expected";
        if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
            if (typeof message.javaMultipleFiles !== "boolean")
                return "javaMultipleFiles: boolean expected";
        if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
            if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                return "javaGenerateEqualsAndHash: boolean expected";
        if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
            if (typeof message.javaStringCheckUtf8 !== "boolean")
                return "javaStringCheckUtf8: boolean expected";
        if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
            switch (message.optimizeFor) {
            default:
                return "optimizeFor: enum value expected";
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.goPackage != null && message.hasOwnProperty("goPackage"))
            if (!$util.isString(message.goPackage))
                return "goPackage: string expected";
        if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
            if (typeof message.ccGenericServices !== "boolean")
                return "ccGenericServices: boolean expected";
        if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
            if (typeof message.javaGenericServices !== "boolean")
                return "javaGenericServices: boolean expected";
        if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
            if (typeof message.pyGenericServices !== "boolean")
                return "pyGenericServices: boolean expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
            if (typeof message.ccEnableArenas !== "boolean")
                return "ccEnableArenas: boolean expected";
        if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
            if (!$util.isString(message.objcClassPrefix))
                return "objcClassPrefix: string expected";
        if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
            if (!$util.isString(message.csharpNamespace))
                return "csharpNamespace: string expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFileOptions {
        if (object instanceof FileOptions)
            return object;
        let message = new FileOptions();
        if (object.javaPackage != null)
            message.javaPackage = String(object.javaPackage);
        if (object.javaOuterClassname != null)
            message.javaOuterClassname = String(object.javaOuterClassname);
        if (object.javaMultipleFiles != null)
            message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
        if (object.javaGenerateEqualsAndHash != null)
            message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
        if (object.javaStringCheckUtf8 != null)
            message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
        switch (object.optimizeFor) {
        case "SPEED":
        case 1:
            message.optimizeFor = 1;
            break;
        case "CODE_SIZE":
        case 2:
            message.optimizeFor = 2;
            break;
        case "LITE_RUNTIME":
        case 3:
            message.optimizeFor = 3;
            break;
        }
        if (object.goPackage != null)
            message.goPackage = String(object.goPackage);
        if (object.ccGenericServices != null)
            message.ccGenericServices = Boolean(object.ccGenericServices);
        if (object.javaGenericServices != null)
            message.javaGenericServices = Boolean(object.javaGenericServices);
        if (object.pyGenericServices != null)
            message.pyGenericServices = Boolean(object.pyGenericServices);
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.ccEnableArenas != null)
            message.ccEnableArenas = Boolean(object.ccEnableArenas);
        if (object.objcClassPrefix != null)
            message.objcClassPrefix = String(object.objcClassPrefix);
        if (object.csharpNamespace != null)
            message.csharpNamespace = String(object.csharpNamespace);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("FileOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("FileOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
     * @param message FileOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFileOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults) {
            object.javaPackage = "";
            object.javaOuterClassname = "";
            object.optimizeFor = 1;
            object.javaMultipleFiles = false;
            object.goPackage = "";
            object.ccGenericServices = false;
            object.javaGenericServices = false;
            object.pyGenericServices = false;
            object.javaGenerateEqualsAndHash = false;
            object.deprecated = false;
            object.javaStringCheckUtf8 = false;
            object.ccEnableArenas = false;
            object.objcClassPrefix = "";
            object.csharpNamespace = "";
        }
        if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
            object.javaPackage = message.javaPackage;
        if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
            object.javaOuterClassname = message.javaOuterClassname;
        if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
            object.optimizeFor = options.enums === String ? FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
        if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
            object.javaMultipleFiles = message.javaMultipleFiles;
        if (message.goPackage != null && message.hasOwnProperty("goPackage"))
            object.goPackage = message.goPackage;
        if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
            object.ccGenericServices = message.ccGenericServices;
        if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
            object.javaGenericServices = message.javaGenericServices;
        if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
            object.pyGenericServices = message.pyGenericServices;
        if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
            object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
            object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
        if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
            object.ccEnableArenas = message.ccEnableArenas;
        if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
            object.objcClassPrefix = message.objcClassPrefix;
        if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
            object.csharpNamespace = message.csharpNamespace;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this FileOptions to JSON.
     */
    toJSON() {
        return FileOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFileOptions, b?: IFileOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.javaPackage === b.javaPackage && a.javaOuterClassname === b.javaOuterClassname && a.javaMultipleFiles === b.javaMultipleFiles && a.javaGenerateEqualsAndHash === b.javaGenerateEqualsAndHash && a.javaStringCheckUtf8 === b.javaStringCheckUtf8 && a.optimizeFor === b.optimizeFor && a.goPackage === b.goPackage && a.ccGenericServices === b.ccGenericServices && a.javaGenericServices === b.javaGenericServices && a.pyGenericServices === b.pyGenericServices && a.deprecated === b.deprecated && a.ccEnableArenas === b.ccEnableArenas && a.objcClassPrefix === b.objcClassPrefix && a.csharpNamespace === b.csharpNamespace && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

export namespace FileOptions {
    export enum OptimizeMode {
        SPEED = 1,
        CODE_SIZE = 2,
        LITE_RUNTIME = 3,
    }

}

/** Properties of a MessageOptions. */
export interface IMessageOptions {
    messageSetWireFormat?: boolean;
    noStandardDescriptorAccessor?: boolean;
    deprecated?: boolean;
    mapEntry?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents a MessageOptions.
 */
export class MessageOptions implements IMessageOptions {
    messageSetWireFormat?: boolean;
    noStandardDescriptorAccessor?: boolean;
    deprecated?: boolean;
    mapEntry?: boolean;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new MessageOptions.
     */
    constructor(properties?: IMessageOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MessageOptions instance using the specified properties.
     */
    static create(properties: IMessageOptions): MessageOptions {
        return new MessageOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified MessageOptions message. Does not implicitly {@link MessageOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMessageOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.messageSetWireFormat != null && Object.hasOwnProperty.call(message, "messageSetWireFormat"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
        if (message.noStandardDescriptorAccessor != null && Object.hasOwnProperty.call(message, "noStandardDescriptorAccessor"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
        if (message.mapEntry != null && Object.hasOwnProperty.call(message, "mapEntry"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link MessageOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMessageOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a MessageOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): MessageOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new MessageOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.messageSetWireFormat = reader.bool();
                    break;
                }
            case 2: {
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                }
            case 3: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 7: {
                    message.mapEntry = reader.bool();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): MessageOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a MessageOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
            if (typeof message.messageSetWireFormat !== "boolean")
                return "messageSetWireFormat: boolean expected";
        if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
            if (typeof message.noStandardDescriptorAccessor !== "boolean")
                return "noStandardDescriptorAccessor: boolean expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
            if (typeof message.mapEntry !== "boolean")
                return "mapEntry: boolean expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMessageOptions {
        if (object instanceof MessageOptions)
            return object;
        let message = new MessageOptions();
        if (object.messageSetWireFormat != null)
            message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
        if (object.noStandardDescriptorAccessor != null)
            message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.mapEntry != null)
            message.mapEntry = Boolean(object.mapEntry);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("MessageOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("MessageOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
     * @param message MessageOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMessageOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults) {
            object.messageSetWireFormat = false;
            object.noStandardDescriptorAccessor = false;
            object.deprecated = false;
            object.mapEntry = false;
        }
        if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
            object.messageSetWireFormat = message.messageSetWireFormat;
        if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
            object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
            object.mapEntry = message.mapEntry;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this MessageOptions to JSON.
     */
    toJSON() {
        return MessageOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMessageOptions, b?: IMessageOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.messageSetWireFormat === b.messageSetWireFormat && a.noStandardDescriptorAccessor === b.noStandardDescriptorAccessor && a.deprecated === b.deprecated && a.mapEntry === b.mapEntry && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

/** Properties of a FieldOptions. */
export interface IFieldOptions {
    ctype?: FieldOptions.CType;
    packed?: boolean;
    jstype?: FieldOptions.JSType;
    lazy?: boolean;
    deprecated?: boolean;
    weak?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents a FieldOptions.
 */
export class FieldOptions implements IFieldOptions {
    ctype?: FieldOptions.CType;
    packed?: boolean;
    jstype?: FieldOptions.JSType;
    lazy?: boolean;
    deprecated?: boolean;
    weak?: boolean;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new FieldOptions.
     */
    constructor(properties?: IFieldOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new FieldOptions instance using the specified properties.
     */
    static create(properties: IFieldOptions): FieldOptions {
        return new FieldOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified FieldOptions message. Does not implicitly {@link FieldOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IFieldOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.ctype != null && Object.hasOwnProperty.call(message, "ctype"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
        if (message.packed != null && Object.hasOwnProperty.call(message, "packed"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
        if (message.lazy != null && Object.hasOwnProperty.call(message, "lazy"))
            writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
        if (message.jstype != null && Object.hasOwnProperty.call(message, "jstype"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
        if (message.weak != null && Object.hasOwnProperty.call(message, "weak"))
            writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link FieldOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IFieldOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a FieldOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): FieldOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new FieldOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.ctype = reader.int32();
                    break;
                }
            case 2: {
                    message.packed = reader.bool();
                    break;
                }
            case 6: {
                    message.jstype = reader.int32();
                    break;
                }
            case 5: {
                    message.lazy = reader.bool();
                    break;
                }
            case 3: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 10: {
                    message.weak = reader.bool();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): FieldOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a FieldOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ctype != null && message.hasOwnProperty("ctype"))
            switch (message.ctype) {
            default:
                return "ctype: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.packed != null && message.hasOwnProperty("packed"))
            if (typeof message.packed !== "boolean")
                return "packed: boolean expected";
        if (message.jstype != null && message.hasOwnProperty("jstype"))
            switch (message.jstype) {
            default:
                return "jstype: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.lazy != null && message.hasOwnProperty("lazy"))
            if (typeof message.lazy !== "boolean")
                return "lazy: boolean expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.weak != null && message.hasOwnProperty("weak"))
            if (typeof message.weak !== "boolean")
                return "weak: boolean expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFieldOptions {
        if (object instanceof FieldOptions)
            return object;
        let message = new FieldOptions();
        switch (object.ctype) {
        case "STRING":
        case 0:
            message.ctype = 0;
            break;
        case "CORD":
        case 1:
            message.ctype = 1;
            break;
        case "STRING_PIECE":
        case 2:
            message.ctype = 2;
            break;
        }
        if (object.packed != null)
            message.packed = Boolean(object.packed);
        switch (object.jstype) {
        case "JS_NORMAL":
        case 0:
            message.jstype = 0;
            break;
        case "JS_STRING":
        case 1:
            message.jstype = 1;
            break;
        case "JS_NUMBER":
        case 2:
            message.jstype = 2;
            break;
        }
        if (object.lazy != null)
            message.lazy = Boolean(object.lazy);
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.weak != null)
            message.weak = Boolean(object.weak);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("FieldOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("FieldOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
     * @param message FieldOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFieldOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults) {
            object.ctype = 0;
            object.packed = false;
            object.deprecated = false;
            object.lazy = false;
            object.jstype = 0;
            object.weak = false;
        }
        if (message.ctype != null && message.hasOwnProperty("ctype"))
            object.ctype = options.enums === String ? FieldOptions.CType[message.ctype] : message.ctype;
        if (message.packed != null && message.hasOwnProperty("packed"))
            object.packed = message.packed;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.lazy != null && message.hasOwnProperty("lazy"))
            object.lazy = message.lazy;
        if (message.jstype != null && message.hasOwnProperty("jstype"))
            object.jstype = options.enums === String ? FieldOptions.JSType[message.jstype] : message.jstype;
        if (message.weak != null && message.hasOwnProperty("weak"))
            object.weak = message.weak;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this FieldOptions to JSON.
     */
    toJSON() {
        return FieldOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFieldOptions, b?: IFieldOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.ctype === b.ctype && a.packed === b.packed && a.jstype === b.jstype && a.lazy === b.lazy && a.deprecated === b.deprecated && a.weak === b.weak && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

export namespace FieldOptions {
    export enum CType {
        STRING = 0,
        CORD = 1,
        STRING_PIECE = 2,
    }

    export enum JSType {
        JS_NORMAL = 0,
        JS_STRING = 1,
        JS_NUMBER = 2,
    }

}

/** Properties of an OneofOptions. */
export interface IOneofOptions {
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents an OneofOptions.
 */
export class OneofOptions implements IOneofOptions {
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new OneofOptions.
     */
    constructor(properties?: IOneofOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new OneofOptions instance using the specified properties.
     */
    static create(properties: IOneofOptions): OneofOptions {
        return new OneofOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified OneofOptions message. Does not implicitly {@link OneofOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IOneofOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link OneofOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IOneofOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an OneofOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): OneofOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new OneofOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): OneofOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an OneofOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IOneofOptions {
        if (object instanceof OneofOptions)
            return object;
        let message = new OneofOptions();
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("OneofOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("OneofOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
     * @param message OneofOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IOneofOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this OneofOptions to JSON.
     */
    toJSON() {
        return OneofOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IOneofOptions, b?: IOneofOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        });
    }
    // #endregion
}

/** Properties of an EnumOptions. */
export interface IEnumOptions {
    allowAlias?: boolean;
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
    "IsExtension.simpleOption"?: string;
}

/**
 * Represents an EnumOptions.
 */
export class EnumOptions implements IEnumOptions {
    allowAlias?: boolean;
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
    ["IsExtension.simpleOption"]?: string;

    // #region create
    /**
     * Constructs a new EnumOptions.
     */
    constructor(properties?: IEnumOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EnumOptions instance using the specified properties.
     */
    static create(properties: IEnumOptions): EnumOptions {
        return new EnumOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified EnumOptions message. Does not implicitly {@link EnumOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IEnumOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        if (message["IsExtension.simpleOption"] != null && Object.hasOwnProperty.call(message, "IsExtension.simpleOption"))
            writer.uint32(/* id 42113038, wireType 2 =*/336904306).string(message["IsExtension.simpleOption"]);
        return writer;
    }

    /**
     * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link EnumOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IEnumOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an EnumOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): EnumOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new EnumOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.allowAlias = reader.bool();
                    break;
                }
            case 3: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            case 42113038: {
                    message["IsExtension.simpleOption"] = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): EnumOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an EnumOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
            if (typeof message.allowAlias !== "boolean")
                return "allowAlias: boolean expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        if (message["IsExtension.simpleOption"] != null && message.hasOwnProperty("IsExtension.simpleOption"))
            if (!$util.isString(message["IsExtension.simpleOption"]))
                return "IsExtension.simpleOption: string expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEnumOptions {
        if (object instanceof EnumOptions)
            return object;
        let message = new EnumOptions();
        if (object.allowAlias != null)
            message.allowAlias = Boolean(object.allowAlias);
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("EnumOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("EnumOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        if (object["IsExtension.simpleOption"] != null)
            message["IsExtension.simpleOption"] = String(object["IsExtension.simpleOption"]);
        return message;
    }

    /**
     * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
     * @param message EnumOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEnumOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults) {
            object.allowAlias = false;
            object.deprecated = false;
            object["IsExtension.simpleOption"] = "";
        }
        if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
            object.allowAlias = message.allowAlias;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        if (message["IsExtension.simpleOption"] != null && message.hasOwnProperty("IsExtension.simpleOption"))
            object["IsExtension.simpleOption"] = message["IsExtension.simpleOption"];
        return object;
    }

    /**
     * Converts this EnumOptions to JSON.
     */
    toJSON() {
        return EnumOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEnumOptions, b?: IEnumOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.allowAlias === b.allowAlias && a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        })) && a["IsExtension.simpleOption"] === b["IsExtension.simpleOption"];
    }
    // #endregion
}

/** Properties of an EnumValueOptions. */
export interface IEnumValueOptions {
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents an EnumValueOptions.
 */
export class EnumValueOptions implements IEnumValueOptions {
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new EnumValueOptions.
     */
    constructor(properties?: IEnumValueOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new EnumValueOptions instance using the specified properties.
     */
    static create(properties: IEnumValueOptions): EnumValueOptions {
        return new EnumValueOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified EnumValueOptions message. Does not implicitly {@link EnumValueOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IEnumValueOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link EnumValueOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IEnumValueOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an EnumValueOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): EnumValueOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new EnumValueOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): EnumValueOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an EnumValueOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEnumValueOptions {
        if (object instanceof EnumValueOptions)
            return object;
        let message = new EnumValueOptions();
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("EnumValueOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("EnumValueOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
     * @param message EnumValueOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEnumValueOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults)
            object.deprecated = false;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this EnumValueOptions to JSON.
     */
    toJSON() {
        return EnumValueOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEnumValueOptions, b?: IEnumValueOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

/** Properties of a ServiceOptions. */
export interface IServiceOptions {
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents a ServiceOptions.
 */
export class ServiceOptions implements IServiceOptions {
    deprecated?: boolean;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new ServiceOptions.
     */
    constructor(properties?: IServiceOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ServiceOptions instance using the specified properties.
     */
    static create(properties: IServiceOptions): ServiceOptions {
        return new ServiceOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified ServiceOptions message. Does not implicitly {@link ServiceOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IServiceOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link ServiceOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IServiceOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a ServiceOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): ServiceOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new ServiceOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 33: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): ServiceOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a ServiceOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IServiceOptions {
        if (object instanceof ServiceOptions)
            return object;
        let message = new ServiceOptions();
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("ServiceOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("ServiceOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
     * @param message ServiceOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IServiceOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults)
            object.deprecated = false;
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this ServiceOptions to JSON.
     */
    toJSON() {
        return ServiceOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IServiceOptions, b?: IServiceOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

/** Properties of a MethodOptions. */
export interface IMethodOptions {
    deprecated?: boolean;
    idempotencyLevel?: MethodOptions.IdempotencyLevel;
    uninterpretedOption?: IUninterpretedOption[];
}

/**
 * Represents a MethodOptions.
 */
export class MethodOptions implements IMethodOptions {
    deprecated?: boolean;
    idempotencyLevel?: MethodOptions.IdempotencyLevel;
    uninterpretedOption?: IUninterpretedOption[];

    // #region create
    /**
     * Constructs a new MethodOptions.
     */
    constructor(properties?: IMethodOptions) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MethodOptions instance using the specified properties.
     */
    static create(properties: IMethodOptions): MethodOptions {
        return new MethodOptions(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified MethodOptions message. Does not implicitly {@link MethodOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMethodOptions, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
            writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
        if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
            writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
        if (message.uninterpretedOption != null && message.uninterpretedOption.length)
            for (let i = 0; i < message.uninterpretedOption.length; ++i)
                UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link MethodOptions.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMethodOptions, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a MethodOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): MethodOptions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new MethodOptions();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 33: {
                    message.deprecated = reader.bool();
                    break;
                }
            case 34: {
                    message.idempotencyLevel = reader.int32();
                    break;
                }
            case 999: {
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): MethodOptions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a MethodOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            if (typeof message.deprecated !== "boolean")
                return "deprecated: boolean expected";
        if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
            switch (message.idempotencyLevel) {
            default:
                return "idempotencyLevel: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
            if (!Array.isArray(message.uninterpretedOption))
                return "uninterpretedOption: array expected";
            for (let i = 0; i < message.uninterpretedOption.length; ++i) {
                let error = UninterpretedOption.verify(message.uninterpretedOption[i]);
                if (error)
                    return "uninterpretedOption." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMethodOptions {
        if (object instanceof MethodOptions)
            return object;
        let message = new MethodOptions();
        if (object.deprecated != null)
            message.deprecated = Boolean(object.deprecated);
        switch (object.idempotencyLevel) {
        case "IDEMPOTENCY_UNKNOWN":
        case 0:
            message.idempotencyLevel = 0;
            break;
        case "NO_SIDE_EFFECTS":
        case 1:
            message.idempotencyLevel = 1;
            break;
        case "IDEMPOTENT":
        case 2:
            message.idempotencyLevel = 2;
            break;
        }
        if (object.uninterpretedOption) {
            if (!Array.isArray(object.uninterpretedOption))
                throw TypeError("MethodOptions.uninterpretedOption: array expected");
            message.uninterpretedOption = [];
            for (let i = 0; i < object.uninterpretedOption.length; ++i) {
                if (typeof object.uninterpretedOption[i] !== "object")
                    throw TypeError("MethodOptions.uninterpretedOption: object expected");
                message.uninterpretedOption[i] = UninterpretedOption.fromObject(object.uninterpretedOption[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
     * @param message MethodOptions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMethodOptions, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.uninterpretedOption = [];
        if (options.defaults) {
            object.deprecated = false;
            object.idempotencyLevel = 0;
        }
        if (message.deprecated != null && message.hasOwnProperty("deprecated"))
            object.deprecated = message.deprecated;
        if (message.idempotencyLevel != null && message.hasOwnProperty("idempotencyLevel"))
            object.idempotencyLevel = options.enums === String ? MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
        if (message.uninterpretedOption && message.uninterpretedOption.length) {
            object.uninterpretedOption = [];
            for (let j = 0; j < message.uninterpretedOption.length; ++j)
                object.uninterpretedOption[j] = UninterpretedOption.toObject(message.uninterpretedOption[j], options);
        }
        return object;
    }

    /**
     * Converts this MethodOptions to JSON.
     */
    toJSON() {
        return MethodOptions.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMethodOptions, b?: IMethodOptions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.deprecated === b.deprecated && a.idempotencyLevel === b.idempotencyLevel && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
            return UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
        }));
    }
    // #endregion
}

export namespace MethodOptions {
    export enum IdempotencyLevel {
        IDEMPOTENCY_UNKNOWN = 0,
        NO_SIDE_EFFECTS = 1,
        IDEMPOTENT = 2,
    }

}

/** Properties of an UninterpretedOption. */
export interface IUninterpretedOption {
    name?: UninterpretedOption.INamePart[];
    identifierValue?: string;
    positiveIntValue?: (number|$Long);
    negativeIntValue?: (number|$Long);
    doubleValue?: number;
    stringValue?: Uint8Array;
    aggregateValue?: string;
}

/**
 * Represents an UninterpretedOption.
 */
export class UninterpretedOption implements IUninterpretedOption {
    name?: UninterpretedOption.INamePart[];
    identifierValue?: string;
    positiveIntValue?: (number|$Long);
    negativeIntValue?: (number|$Long);
    doubleValue?: number;
    stringValue?: Uint8Array;
    aggregateValue?: string;

    // #region create
    /**
     * Constructs a new UninterpretedOption.
     */
    constructor(properties?: IUninterpretedOption) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new UninterpretedOption instance using the specified properties.
     */
    static create(properties: IUninterpretedOption): UninterpretedOption {
        return new UninterpretedOption(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified UninterpretedOption message. Does not implicitly {@link UninterpretedOption.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IUninterpretedOption, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.name.length)
            for (let i = 0; i < message.name.length; ++i)
                UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.identifierValue != null && Object.hasOwnProperty.call(message, "identifierValue"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
        if (message.positiveIntValue != null && Object.hasOwnProperty.call(message, "positiveIntValue"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
        if (message.negativeIntValue != null && Object.hasOwnProperty.call(message, "negativeIntValue"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
        if (message.doubleValue != null && Object.hasOwnProperty.call(message, "doubleValue"))
            writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
        if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
            writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
        if (message.aggregateValue != null && Object.hasOwnProperty.call(message, "aggregateValue"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
        return writer;
    }

    /**
     * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link UninterpretedOption.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IUninterpretedOption, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes an UninterpretedOption message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): UninterpretedOption {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new UninterpretedOption();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    if (!(message.name && message.name.length))
                        message.name = [];
                    message.name.push(UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.identifierValue = reader.string();
                    break;
                }
            case 4: {
                    message.positiveIntValue = reader.uint64();
                    break;
                }
            case 5: {
                    message.negativeIntValue = reader.int64();
                    break;
                }
            case 6: {
                    message.doubleValue = reader.double();
                    break;
                }
            case 7: {
                    message.stringValue = reader.bytes();
                    break;
                }
            case 8: {
                    message.aggregateValue = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): UninterpretedOption {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies an UninterpretedOption message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name")) {
            if (!Array.isArray(message.name))
                return "name: array expected";
            for (let i = 0; i < message.name.length; ++i) {
                let error = UninterpretedOption.NamePart.verify(message.name[i]);
                if (error)
                    return "name." + error;
            }
        }
        if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
            if (!$util.isString(message.identifierValue))
                return "identifierValue: string expected";
        if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
            if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                return "positiveIntValue: integer|Long expected";
        if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
            if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                return "negativeIntValue: integer|Long expected";
        if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
            if (typeof message.doubleValue !== "number")
                return "doubleValue: number expected";
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                return "stringValue: buffer expected";
        if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
            if (!$util.isString(message.aggregateValue))
                return "aggregateValue: string expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IUninterpretedOption {
        if (object instanceof UninterpretedOption)
            return object;
        let message = new UninterpretedOption();
        if (object.name) {
            if (!Array.isArray(object.name))
                throw TypeError("UninterpretedOption.name: array expected");
            message.name = [];
            for (let i = 0; i < object.name.length; ++i) {
                if (typeof object.name[i] !== "object")
                    throw TypeError("UninterpretedOption.name: object expected");
                message.name[i] = UninterpretedOption.NamePart.fromObject(object.name[i]);
            }
        }
        if (object.identifierValue != null)
            message.identifierValue = String(object.identifierValue);
        if (object.positiveIntValue != null)
            message.positiveIntValue = $util.longValue(object.positiveIntValue, true);
        if (object.negativeIntValue != null)
            message.negativeIntValue = $util.longValue(object.negativeIntValue, false);
        if (object.doubleValue != null)
            message.doubleValue = Number(object.doubleValue);
        if (object.stringValue != null)
            if (typeof object.stringValue === "string")
                $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
            else if (object.stringValue.length)
                message.stringValue = object.stringValue;
        if (object.aggregateValue != null)
            message.aggregateValue = String(object.aggregateValue);
        return message;
    }

    /**
     * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
     * @param message UninterpretedOption
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IUninterpretedOption, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.name = [];
        if (options.defaults) {
            object.identifierValue = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.positiveIntValue = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.negativeIntValue = options.longs === String ? "0" : 0;
            object.doubleValue = 0;
            if (options.bytes === String)
                object.stringValue = "";
            else {
                object.stringValue = [];
                if (options.bytes !== Array)
                    object.stringValue = $util.newBuffer(object.stringValue);
            }
            object.aggregateValue = "";
        }
        if (message.name && message.name.length) {
            object.name = [];
            for (let j = 0; j < message.name.length; ++j)
                object.name[j] = UninterpretedOption.NamePart.toObject(message.name[j], options);
        }
        if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
            object.identifierValue = message.identifierValue;
        if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
            if (typeof message.positiveIntValue === "number")
                object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
            else
                object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue).toNumber(true) : message.positiveIntValue;
        if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
            if (typeof message.negativeIntValue === "number")
                object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
            else
                object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue).toNumber() : message.negativeIntValue;
        if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
            object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
        if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
            object.aggregateValue = message.aggregateValue;
        return object;
    }

    /**
     * Converts this UninterpretedOption to JSON.
     */
    toJSON() {
        return UninterpretedOption.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IUninterpretedOption, b?: IUninterpretedOption): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.name && !!b.name && a.name.length === b.name.length && !a.name.find(function (aValue, i) {
            return UninterpretedOption.NamePart.equals(a.name && a.name[i], b.name && b.name[i]);
        }) && a.identifierValue === b.identifierValue && $util.longEquals(a.positiveIntValue, b.positiveIntValue) && $util.longEquals(a.negativeIntValue, b.negativeIntValue) && a.doubleValue === b.doubleValue && $util.bytesEquals(a.stringValue, b.stringValue) && a.aggregateValue === b.aggregateValue;
    }
    // #endregion
}

export namespace UninterpretedOption {
    /** Properties of a NamePart. */
    export interface INamePart {
        namePart: string;
        isExtension: boolean;
    }

    /**
     * Represents a NamePart.
     */
    export class NamePart implements INamePart {
        namePart: string = "";
        isExtension: boolean = false;

        // #region create
        /**
         * Constructs a new NamePart.
         */
        constructor(properties?: INamePart) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new NamePart instance using the specified properties.
         */
        static create(properties: INamePart): NamePart {
            return new NamePart(properties);
        }
        // #endregion

        // #region encode
        /**
         * Encodes the specified NamePart message. Does not implicitly {@link NamePart.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encode(message: INamePart, writer?: $Writer): $Writer {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
            return writer;
        }

        /**
         * Encodes the specified NamePart message, length delimited. Does not implicitly {@link NamePart.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encodeDelimited(message: INamePart, writer?: $Writer): $Writer {
            return this.encode(message, writer).ldelim();
        }
        // #endregion

        // #region decode
        /**
         * Decodes a NamePart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $Reader|Uint8Array, length?: number): NamePart {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new UninterpretedOption.NamePart();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.namePart = reader.string();
                        break;
                    }
                case 2: {
                        message.isExtension = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("namePart"))
                throw new $util.ProtocolError("missing required 'namePart'", { instance: message });
            if (!message.hasOwnProperty("isExtension"))
                throw new $util.ProtocolError("missing required 'isExtension'", { instance: message });
            return message;
        }

        /**
         * Decodes a NamePart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $Reader|Uint8Array): NamePart {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $Reader).uint32());
        }
        // #endregion

        // #region verify
        /**
         * Verifies a NamePart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.namePart))
                return "namePart: string expected";
            if (typeof message.isExtension !== "boolean")
                return "isExtension: boolean expected";
            return null;
        }
        // #endregion

        // #region convert
        /**
         * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): INamePart {
            if (object instanceof UninterpretedOption.NamePart)
                return object;
            let message = new UninterpretedOption.NamePart();
            if (object.namePart != null)
                message.namePart = String(object.namePart);
            if (object.isExtension != null)
                message.isExtension = Boolean(object.isExtension);
            return message;
        }

        /**
         * Creates a plain object from a NamePart message. Also converts values to other types if specified.
         * @param message NamePart
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: INamePart, options: $IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults) {
                object.namePart = "";
                object.isExtension = false;
            }
            if (message.namePart != null && message.hasOwnProperty("namePart"))
                object.namePart = message.namePart;
            if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                object.isExtension = message.isExtension;
            return object;
        }

        /**
         * Converts this NamePart to JSON.
         */
        toJSON() {
            return NamePart.toObject(this, $util.toJSONOptions);
        };
        // #endregion

        // #region equals
        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: INamePart, b?: INamePart): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.namePart === b.namePart && a.isExtension === b.isExtension;
        }
        // #endregion
    }

}

/** Properties of a SourceCodeInfo. */
export interface ISourceCodeInfo {
    location?: SourceCodeInfo.ILocation[];
}

/**
 * Represents a SourceCodeInfo.
 */
export class SourceCodeInfo implements ISourceCodeInfo {
    location?: SourceCodeInfo.ILocation[];

    // #region create
    /**
     * Constructs a new SourceCodeInfo.
     */
    constructor(properties?: ISourceCodeInfo) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new SourceCodeInfo instance using the specified properties.
     */
    static create(properties: ISourceCodeInfo): SourceCodeInfo {
        return new SourceCodeInfo(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified SourceCodeInfo message. Does not implicitly {@link SourceCodeInfo.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: ISourceCodeInfo, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.location != null && message.location.length)
            for (let i = 0; i < message.location.length; ++i)
                SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link SourceCodeInfo.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: ISourceCodeInfo, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a SourceCodeInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): SourceCodeInfo {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new SourceCodeInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.location && message.location.length))
                        message.location = [];
                    message.location.push(SourceCodeInfo.Location.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): SourceCodeInfo {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a SourceCodeInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.location != null && message.hasOwnProperty("location")) {
            if (!Array.isArray(message.location))
                return "location: array expected";
            for (let i = 0; i < message.location.length; ++i) {
                let error = SourceCodeInfo.Location.verify(message.location[i]);
                if (error)
                    return "location." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ISourceCodeInfo {
        if (object instanceof SourceCodeInfo)
            return object;
        let message = new SourceCodeInfo();
        if (object.location) {
            if (!Array.isArray(object.location))
                throw TypeError("SourceCodeInfo.location: array expected");
            message.location = [];
            for (let i = 0; i < object.location.length; ++i) {
                if (typeof object.location[i] !== "object")
                    throw TypeError("SourceCodeInfo.location: object expected");
                message.location[i] = SourceCodeInfo.Location.fromObject(object.location[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
     * @param message SourceCodeInfo
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ISourceCodeInfo, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.location = [];
        if (message.location && message.location.length) {
            object.location = [];
            for (let j = 0; j < message.location.length; ++j)
                object.location[j] = SourceCodeInfo.Location.toObject(message.location[j], options);
        }
        return object;
    }

    /**
     * Converts this SourceCodeInfo to JSON.
     */
    toJSON() {
        return SourceCodeInfo.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ISourceCodeInfo, b?: ISourceCodeInfo): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.location && !!b.location && a.location.length === b.location.length && !a.location.find(function (aValue, i) {
            return SourceCodeInfo.Location.equals(a.location && a.location[i], b.location && b.location[i]);
        });
    }
    // #endregion
}

export namespace SourceCodeInfo {
    /** Properties of a Location. */
    export interface ILocation {
        path?: number[];
        span?: number[];
        leadingComments?: string;
        trailingComments?: string;
        leadingDetachedComments?: string[];
    }

    /**
     * Represents a Location.
     */
    export class Location implements ILocation {
        path?: number[];
        span?: number[];
        leadingComments?: string;
        trailingComments?: string;
        leadingDetachedComments?: string[];

        // #region create
        /**
         * Constructs a new Location.
         */
        constructor(properties?: ILocation) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Location instance using the specified properties.
         */
        static create(properties: ILocation): Location {
            return new Location(properties);
        }
        // #endregion

        // #region encode
        /**
         * Encodes the specified Location message. Does not implicitly {@link Location.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encode(message: ILocation, writer?: $Writer): $Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.path.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.path.length; ++i)
                    writer.int32(message.path[i]);
                writer.ldelim();
            }
            if (message.span != null && message.span.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.span.length; ++i)
                    writer.int32(message.span[i]);
                writer.ldelim();
            }
            if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
            if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
            if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
            return writer;
        }

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link Location.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encodeDelimited(message: ILocation, writer?: $Writer): $Writer {
            return this.encode(message, writer).ldelim();
        }
        // #endregion

        // #region decode
        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $Reader|Uint8Array, length?: number): Location {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new SourceCodeInfo.Location();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.path && message.path.length))
                            message.path = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.path.push(reader.int32());
                        } else
                            message.path.push(reader.int32());
                        break;
                    }
                case 2: {
                        if (!(message.span && message.span.length))
                            message.span = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.span.push(reader.int32());
                        } else
                            message.span.push(reader.int32());
                        break;
                    }
                case 3: {
                        message.leadingComments = reader.string();
                        break;
                    }
                case 4: {
                        message.trailingComments = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                            message.leadingDetachedComments = [];
                        message.leadingDetachedComments.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $Reader|Uint8Array): Location {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $Reader).uint32());
        }
        // #endregion

        // #region verify
        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (let i = 0; i < message.path.length; ++i)
                    if (!$util.isInteger(message.path[i]))
                        return "path: integer[] expected";
            }
            if (message.span != null && message.hasOwnProperty("span")) {
                if (!Array.isArray(message.span))
                    return "span: array expected";
                for (let i = 0; i < message.span.length; ++i)
                    if (!$util.isInteger(message.span[i]))
                        return "span: integer[] expected";
            }
            if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                if (!$util.isString(message.leadingComments))
                    return "leadingComments: string expected";
            if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                if (!$util.isString(message.trailingComments))
                    return "trailingComments: string expected";
            if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                if (!Array.isArray(message.leadingDetachedComments))
                    return "leadingDetachedComments: array expected";
                for (let i = 0; i < message.leadingDetachedComments.length; ++i)
                    if (!$util.isString(message.leadingDetachedComments[i]))
                        return "leadingDetachedComments: string[] expected";
            }
            return null;
        }
        // #endregion

        // #region convert
        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): ILocation {
            if (object instanceof SourceCodeInfo.Location)
                return object;
            let message = new SourceCodeInfo.Location();
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError("SourceCodeInfo.Location.path: array expected");
                message.path = [];
                for (let i = 0; i < object.path.length; ++i)
                    message.path[i] = object.path[i] | 0;
            }
            if (object.span) {
                if (!Array.isArray(object.span))
                    throw TypeError("SourceCodeInfo.Location.span: array expected");
                message.span = [];
                for (let i = 0; i < object.span.length; ++i)
                    message.span[i] = object.span[i] | 0;
            }
            if (object.leadingComments != null)
                message.leadingComments = String(object.leadingComments);
            if (object.trailingComments != null)
                message.trailingComments = String(object.trailingComments);
            if (object.leadingDetachedComments) {
                if (!Array.isArray(object.leadingDetachedComments))
                    throw TypeError("SourceCodeInfo.Location.leadingDetachedComments: array expected");
                message.leadingDetachedComments = [];
                for (let i = 0; i < object.leadingDetachedComments.length; ++i)
                    message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
            }
            return message;
        }

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: ILocation, options: $IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults) {
                object.path = [];
                object.span = [];
                object.leadingDetachedComments = [];
            }
            if (options.defaults) {
                object.leadingComments = "";
                object.trailingComments = "";
            }
            if (message.path && message.path.length) {
                object.path = [];
                for (let j = 0; j < message.path.length; ++j)
                    object.path[j] = message.path[j];
            }
            if (message.span && message.span.length) {
                object.span = [];
                for (let j = 0; j < message.span.length; ++j)
                    object.span[j] = message.span[j];
            }
            if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                object.leadingComments = message.leadingComments;
            if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                object.trailingComments = message.trailingComments;
            if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                object.leadingDetachedComments = [];
                for (let j = 0; j < message.leadingDetachedComments.length; ++j)
                    object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
            }
            return object;
        }

        /**
         * Converts this Location to JSON.
         */
        toJSON() {
            return Location.toObject(this, $util.toJSONOptions);
        };
        // #endregion

        // #region equals
        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: ILocation, b?: ILocation): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.path && !!b.path && a.path.length === b.path.length && !a.path.find(function (aValue, i) {
                return (a.path && a.path[i]) === (b.path && b.path[i]);
            }) && (!!a.span && !!b.span && a.span.length === b.span.length && !a.span.find(function (aValue, i) {
                return (a.span && a.span[i]) === (b.span && b.span[i]);
            })) && a.leadingComments === b.leadingComments && a.trailingComments === b.trailingComments && (!!a.leadingDetachedComments && !!b.leadingDetachedComments && a.leadingDetachedComments.length === b.leadingDetachedComments.length && !a.leadingDetachedComments.find(function (aValue, i) {
                return (a.leadingDetachedComments && a.leadingDetachedComments[i]) === (b.leadingDetachedComments && b.leadingDetachedComments[i]);
            }));
        }
        // #endregion
    }

}

/** Properties of a GeneratedCodeInfo. */
export interface IGeneratedCodeInfo {
    annotation?: GeneratedCodeInfo.IAnnotation[];
}

/**
 * Represents a GeneratedCodeInfo.
 */
export class GeneratedCodeInfo implements IGeneratedCodeInfo {
    annotation?: GeneratedCodeInfo.IAnnotation[];

    // #region create
    /**
     * Constructs a new GeneratedCodeInfo.
     */
    constructor(properties?: IGeneratedCodeInfo) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GeneratedCodeInfo instance using the specified properties.
     */
    static create(properties: IGeneratedCodeInfo): GeneratedCodeInfo {
        return new GeneratedCodeInfo(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link GeneratedCodeInfo.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IGeneratedCodeInfo, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.annotation != null && message.annotation.length)
            for (let i = 0; i < message.annotation.length; ++i)
                GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link GeneratedCodeInfo.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IGeneratedCodeInfo, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): GeneratedCodeInfo {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new GeneratedCodeInfo();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.annotation && message.annotation.length))
                        message.annotation = [];
                    message.annotation.push(GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): GeneratedCodeInfo {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a GeneratedCodeInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.annotation != null && message.hasOwnProperty("annotation")) {
            if (!Array.isArray(message.annotation))
                return "annotation: array expected";
            for (let i = 0; i < message.annotation.length; ++i) {
                let error = GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                if (error)
                    return "annotation." + error;
            }
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IGeneratedCodeInfo {
        if (object instanceof GeneratedCodeInfo)
            return object;
        let message = new GeneratedCodeInfo();
        if (object.annotation) {
            if (!Array.isArray(object.annotation))
                throw TypeError("GeneratedCodeInfo.annotation: array expected");
            message.annotation = [];
            for (let i = 0; i < object.annotation.length; ++i) {
                if (typeof object.annotation[i] !== "object")
                    throw TypeError("GeneratedCodeInfo.annotation: object expected");
                message.annotation[i] = GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
     * @param message GeneratedCodeInfo
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IGeneratedCodeInfo, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.annotation = [];
        if (message.annotation && message.annotation.length) {
            object.annotation = [];
            for (let j = 0; j < message.annotation.length; ++j)
                object.annotation[j] = GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
        }
        return object;
    }

    /**
     * Converts this GeneratedCodeInfo to JSON.
     */
    toJSON() {
        return GeneratedCodeInfo.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IGeneratedCodeInfo, b?: IGeneratedCodeInfo): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.annotation && !!b.annotation && a.annotation.length === b.annotation.length && !a.annotation.find(function (aValue, i) {
            return GeneratedCodeInfo.Annotation.equals(a.annotation && a.annotation[i], b.annotation && b.annotation[i]);
        });
    }
    // #endregion
}

export namespace GeneratedCodeInfo {
    /** Properties of an Annotation. */
    export interface IAnnotation {
        path?: number[];
        sourceFile?: string;
        begin?: number;
        end?: number;
    }

    /**
     * Represents an Annotation.
     */
    export class Annotation implements IAnnotation {
        path?: number[];
        sourceFile?: string;
        begin?: number;
        end?: number;

        // #region create
        /**
         * Constructs a new Annotation.
         */
        constructor(properties?: IAnnotation) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Annotation instance using the specified properties.
         */
        static create(properties: IAnnotation): Annotation {
            return new Annotation(properties);
        }
        // #endregion

        // #region encode
        /**
         * Encodes the specified Annotation message. Does not implicitly {@link Annotation.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encode(message: IAnnotation, writer?: $Writer): $Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.path != null && message.path.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.path.length; ++i)
                    writer.int32(message.path[i]);
                writer.ldelim();
            }
            if (message.sourceFile != null && Object.hasOwnProperty.call(message, "sourceFile"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
            if (message.begin != null && Object.hasOwnProperty.call(message, "begin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
            if (message.end != null && Object.hasOwnProperty.call(message, "end"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
            return writer;
        }

        /**
         * Encodes the specified Annotation message, length delimited. Does not implicitly {@link Annotation.verify|verify} messages.
         * @param message message or plain object to encode
         * @param writer to encode to
         */
        static encodeDelimited(message: IAnnotation, writer?: $Writer): $Writer {
            return this.encode(message, writer).ldelim();
        }
        // #endregion

        // #region decode
        /**
         * Decodes an Annotation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $Reader|Uint8Array, length?: number): Annotation {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new GeneratedCodeInfo.Annotation();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.path && message.path.length))
                            message.path = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.path.push(reader.int32());
                        } else
                            message.path.push(reader.int32());
                        break;
                    }
                case 2: {
                        message.sourceFile = reader.string();
                        break;
                    }
                case 3: {
                        message.begin = reader.int32();
                        break;
                    }
                case 4: {
                        message.end = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes an Annotation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $Reader|Uint8Array): Annotation {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $Reader).uint32());
        }
        // #endregion

        // #region verify
        /**
         * Verifies an Annotation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (let i = 0; i < message.path.length; ++i)
                    if (!$util.isInteger(message.path[i]))
                        return "path: integer[] expected";
            }
            if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                if (!$util.isString(message.sourceFile))
                    return "sourceFile: string expected";
            if (message.begin != null && message.hasOwnProperty("begin"))
                if (!$util.isInteger(message.begin))
                    return "begin: integer expected";
            if (message.end != null && message.hasOwnProperty("end"))
                if (!$util.isInteger(message.end))
                    return "end: integer expected";
            return null;
        }
        // #endregion

        // #region convert
        /**
         * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IAnnotation {
            if (object instanceof GeneratedCodeInfo.Annotation)
                return object;
            let message = new GeneratedCodeInfo.Annotation();
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError("GeneratedCodeInfo.Annotation.path: array expected");
                message.path = [];
                for (let i = 0; i < object.path.length; ++i)
                    message.path[i] = object.path[i] | 0;
            }
            if (object.sourceFile != null)
                message.sourceFile = String(object.sourceFile);
            if (object.begin != null)
                message.begin = object.begin | 0;
            if (object.end != null)
                message.end = object.end | 0;
            return message;
        }

        /**
         * Creates a plain object from an Annotation message. Also converts values to other types if specified.
         * @param message Annotation
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IAnnotation, options: $IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.path = [];
            if (options.defaults) {
                object.sourceFile = "";
                object.begin = 0;
                object.end = 0;
            }
            if (message.path && message.path.length) {
                object.path = [];
                for (let j = 0; j < message.path.length; ++j)
                    object.path[j] = message.path[j];
            }
            if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                object.sourceFile = message.sourceFile;
            if (message.begin != null && message.hasOwnProperty("begin"))
                object.begin = message.begin;
            if (message.end != null && message.hasOwnProperty("end"))
                object.end = message.end;
            return object;
        }

        /**
         * Converts this Annotation to JSON.
         */
        toJSON() {
            return Annotation.toObject(this, $util.toJSONOptions);
        };
        // #endregion

        // #region equals
        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IAnnotation, b?: IAnnotation): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.path && !!b.path && a.path.length === b.path.length && !a.path.find(function (aValue, i) {
                return (a.path && a.path[i]) === (b.path && b.path[i]);
            }) && a.sourceFile === b.sourceFile && a.begin === b.begin && a.end === b.end;
        }
        // #endregion
    }

}
;
