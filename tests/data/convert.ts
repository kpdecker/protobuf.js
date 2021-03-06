import { Long as $Long, Writer as $Writer, Reader as $Reader, util as $util, IConversionOptions as $IConversionOptions } from "../../minimal";

/** Properties of a Message. */
export interface IMessage {
    stringVal?: string;
    stringRepeated?: string[];
    uint64Val?: (number|$Long);
    uint64Repeated?: (number|$Long)[];
    bytesVal?: Uint8Array;
    bytesRepeated?: Uint8Array[];
    enumVal?: Message.SomeEnum;
    enumRepeated?: Message.SomeEnum[];
    int64Map?: {[key: string]: (number|$Long)};
}

/**
 * Represents a Message.
 */
export class Message implements IMessage {
    stringVal?: string;
    stringRepeated?: string[];
    uint64Val?: (number|$Long);
    uint64Repeated?: (number|$Long)[];
    bytesVal?: Uint8Array;
    bytesRepeated?: Uint8Array[];
    enumVal?: Message.SomeEnum;
    enumRepeated?: Message.SomeEnum[];
    int64Map?: {[key: string]: (number|$Long)};

    // #region create
    /**
     * Constructs a new Message.
     */
    constructor(properties?: IMessage) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Message instance using the specified properties.
     */
    static create(properties: IMessage): Message {
        return new Message(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMessage, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.stringVal != null && Object.hasOwnProperty.call(message, "stringVal"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringVal);
        if (message.stringRepeated != null && message.stringRepeated.length)
            for (let i = 0; i < message.stringRepeated.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringRepeated[i]);
        if (message.uint64Val != null && Object.hasOwnProperty.call(message, "uint64Val"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.uint64Val);
        if (message.uint64Repeated != null && message.uint64Repeated.length) {
            writer.uint32(/* id 4, wireType 2 =*/34).fork();
            for (let i = 0; i < message.uint64Repeated.length; ++i)
                writer.uint64(message.uint64Repeated[i]);
            writer.ldelim();
        }
        if (message.bytesVal != null && Object.hasOwnProperty.call(message, "bytesVal"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.bytesVal);
        if (message.bytesRepeated != null && message.bytesRepeated.length)
            for (let i = 0; i < message.bytesRepeated.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesRepeated[i]);
        if (message.enumVal != null && Object.hasOwnProperty.call(message, "enumVal"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.enumVal);
        if (message.enumRepeated != null && message.enumRepeated.length) {
            writer.uint32(/* id 8, wireType 2 =*/66).fork();
            for (let i = 0; i < message.enumRepeated.length; ++i)
                writer.int32(message.enumRepeated[i]);
            writer.ldelim();
        }
        if (message.int64Map != null && Object.hasOwnProperty.call(message, "int64Map"))
            for (let keys = Object.keys(message.int64Map), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.int64Map[keys[i]]).ldelim();
        return writer;
    }

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMessage, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): Message {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new Message(), key, value;
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.stringVal = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.stringRepeated && message.stringRepeated.length))
                        message.stringRepeated = [];
                    message.stringRepeated.push(reader.string());
                    break;
                }
            case 3: {
                    message.uint64Val = reader.uint64();
                    break;
                }
            case 4: {
                    if (!(message.uint64Repeated && message.uint64Repeated.length))
                        message.uint64Repeated = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.uint64Repeated.push(reader.uint64());
                    } else
                        message.uint64Repeated.push(reader.uint64());
                    break;
                }
            case 5: {
                    message.bytesVal = reader.bytes();
                    break;
                }
            case 6: {
                    if (!(message.bytesRepeated && message.bytesRepeated.length))
                        message.bytesRepeated = [];
                    message.bytesRepeated.push(reader.bytes());
                    break;
                }
            case 7: {
                    message.enumVal = reader.int32();
                    break;
                }
            case 8: {
                    if (!(message.enumRepeated && message.enumRepeated.length))
                        message.enumRepeated = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.enumRepeated.push(reader.int32());
                    } else
                        message.enumRepeated.push(reader.int32());
                    break;
                }
            case 9: {
                    if (message.int64Map === $util.emptyObject || !message.int64Map)
                        message.int64Map = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.int64Map[key] = value;
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
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): Message {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            if (!$util.isString(message.stringVal))
                return "stringVal: string expected";
        if (message.stringRepeated != null && message.hasOwnProperty("stringRepeated")) {
            if (!Array.isArray(message.stringRepeated))
                return "stringRepeated: array expected";
            for (let i = 0; i < message.stringRepeated.length; ++i)
                if (!$util.isString(message.stringRepeated[i]))
                    return "stringRepeated: string[] expected";
        }
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            if (!$util.isInteger(message.uint64Val) && !(message.uint64Val && $util.isInteger(message.uint64Val.low) && $util.isInteger(message.uint64Val.high)))
                return "uint64Val: integer|Long expected";
        if (message.uint64Repeated != null && message.hasOwnProperty("uint64Repeated")) {
            if (!Array.isArray(message.uint64Repeated))
                return "uint64Repeated: array expected";
            for (let i = 0; i < message.uint64Repeated.length; ++i)
                if (!$util.isInteger(message.uint64Repeated[i]) && !(message.uint64Repeated[i] && $util.isInteger(message.uint64Repeated[i].low) && $util.isInteger(message.uint64Repeated[i].high)))
                    return "uint64Repeated: integer|Long[] expected";
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            if (!(message.bytesVal && typeof message.bytesVal.length === "number" || $util.isString(message.bytesVal)))
                return "bytesVal: buffer expected";
        if (message.bytesRepeated != null && message.hasOwnProperty("bytesRepeated")) {
            if (!Array.isArray(message.bytesRepeated))
                return "bytesRepeated: array expected";
            for (let i = 0; i < message.bytesRepeated.length; ++i)
                if (!(message.bytesRepeated[i] && typeof message.bytesRepeated[i].length === "number" || $util.isString(message.bytesRepeated[i])))
                    return "bytesRepeated: buffer[] expected";
        }
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            switch (message.enumVal) {
            default:
                return "enumVal: enum value expected";
            case 1:
            case 2:
                break;
            }
        if (message.enumRepeated != null && message.hasOwnProperty("enumRepeated")) {
            if (!Array.isArray(message.enumRepeated))
                return "enumRepeated: array expected";
            for (let i = 0; i < message.enumRepeated.length; ++i)
                switch (message.enumRepeated[i]) {
                default:
                    return "enumRepeated: enum value[] expected";
                case 1:
                case 2:
                    break;
                }
        }
        if (message.int64Map != null && message.hasOwnProperty("int64Map")) {
            if (!$util.isObject(message.int64Map))
                return "int64Map: object expected";
            let key = Object.keys(message.int64Map);
            for (let i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.int64Map[key[i]]) && !(message.int64Map[key[i]] && $util.isInteger(message.int64Map[key[i]].low) && $util.isInteger(message.int64Map[key[i]].high)))
                    return "int64Map: integer|Long{k:string} expected";
        }
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMessage {
        if (object instanceof Message)
            return object;
        let message = new Message();
        if (object.stringVal != null)
            message.stringVal = String(object.stringVal);
        if (object.stringRepeated) {
            if (!Array.isArray(object.stringRepeated))
                throw TypeError(".Message.stringRepeated: array expected");
            message.stringRepeated = [];
            for (let i = 0; i < object.stringRepeated.length; ++i)
                message.stringRepeated[i] = String(object.stringRepeated[i]);
        }
        if (object.uint64Val != null)
            message.uint64Val = $util.longValue(object.uint64Val, true);
        if (object.uint64Repeated) {
            if (!Array.isArray(object.uint64Repeated))
                throw TypeError(".Message.uint64Repeated: array expected");
            message.uint64Repeated = [];
            for (let i = 0; i < object.uint64Repeated.length; ++i)
                message.uint64Repeated[i] = $util.longValue(object.uint64Repeated[i], true);
        }
        if (object.bytesVal != null)
            if (typeof object.bytesVal === "string")
                $util.base64.decode(object.bytesVal, message.bytesVal = $util.newBuffer($util.base64.length(object.bytesVal)), 0);
            else if (object.bytesVal.length)
                message.bytesVal = object.bytesVal;
        if (object.bytesRepeated) {
            if (!Array.isArray(object.bytesRepeated))
                throw TypeError(".Message.bytesRepeated: array expected");
            message.bytesRepeated = [];
            for (let i = 0; i < object.bytesRepeated.length; ++i)
                if (typeof object.bytesRepeated[i] === "string")
                    $util.base64.decode(object.bytesRepeated[i], message.bytesRepeated[i] = $util.newBuffer($util.base64.length(object.bytesRepeated[i])), 0);
                else if (object.bytesRepeated[i].length)
                    message.bytesRepeated[i] = object.bytesRepeated[i];
        }
        switch (object.enumVal) {
        case "ONE":
        case 1:
            message.enumVal = 1;
            break;
        case "TWO":
        case 2:
            message.enumVal = 2;
            break;
        }
        if (object.enumRepeated) {
            if (!Array.isArray(object.enumRepeated))
                throw TypeError(".Message.enumRepeated: array expected");
            message.enumRepeated = [];
            for (let i = 0; i < object.enumRepeated.length; ++i)
                switch (object.enumRepeated[i]) {
                default:
                case "ONE":
                case 1:
                    message.enumRepeated[i] = 1;
                    break;
                case "TWO":
                case 2:
                    message.enumRepeated[i] = 2;
                    break;
                }
        }
        if (object.int64Map) {
            if (typeof object.int64Map !== "object")
                throw TypeError(".Message.int64Map: object expected");
            message.int64Map = {};
            for (let keys = Object.keys(object.int64Map), i = 0; i < keys.length; ++i)
                message.int64Map[keys[i]] = $util.longValue(object.int64Map[keys[i]], false);
        }
        return message;
    }

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMessage, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.stringRepeated = [];
            object.uint64Repeated = [];
            object.bytesRepeated = [];
            object.enumRepeated = [];
        }
        if (options.objects || options.defaults)
            object.int64Map = {};
        if (options.defaults) {
            object.stringVal = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.uint64Val = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.uint64Val = options.longs === String ? "0" : 0;
            if (options.bytes === String)
                object.bytesVal = "";
            else {
                object.bytesVal = [];
                if (options.bytes !== Array)
                    object.bytesVal = $util.newBuffer(object.bytesVal);
            }
            object.enumVal = 1;
        }
        if (message.stringVal != null && message.hasOwnProperty("stringVal"))
            object.stringVal = message.stringVal;
        if (message.stringRepeated && message.stringRepeated.length) {
            object.stringRepeated = [];
            for (let j = 0; j < message.stringRepeated.length; ++j)
                object.stringRepeated[j] = message.stringRepeated[j];
        }
        if (message.uint64Val != null && message.hasOwnProperty("uint64Val"))
            if (typeof message.uint64Val === "number")
                object.uint64Val = options.longs === String ? String(message.uint64Val) : message.uint64Val;
            else
                object.uint64Val = options.longs === String ? $util.Long.prototype.toString.call(message.uint64Val) : options.longs === Number ? new $util.LongBits(message.uint64Val).toNumber(true) : message.uint64Val;
        if (message.uint64Repeated && message.uint64Repeated.length) {
            object.uint64Repeated = [];
            for (let j = 0; j < message.uint64Repeated.length; ++j)
                if (typeof message.uint64Repeated[j] === "number")
                    object.uint64Repeated[j] = options.longs === String ? String(message.uint64Repeated[j]) : message.uint64Repeated[j];
                else
                    object.uint64Repeated[j] = options.longs === String ? $util.Long.prototype.toString.call(message.uint64Repeated[j]) : options.longs === Number ? new $util.LongBits(message.uint64Repeated[j]).toNumber(true) : message.uint64Repeated[j];
        }
        if (message.bytesVal != null && message.hasOwnProperty("bytesVal"))
            object.bytesVal = options.bytes === String ? $util.base64.encode(message.bytesVal, 0, message.bytesVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesVal) : message.bytesVal;
        if (message.bytesRepeated && message.bytesRepeated.length) {
            object.bytesRepeated = [];
            for (let j = 0; j < message.bytesRepeated.length; ++j)
                object.bytesRepeated[j] = options.bytes === String ? $util.base64.encode(message.bytesRepeated[j], 0, message.bytesRepeated[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesRepeated[j]) : message.bytesRepeated[j];
        }
        if (message.enumVal != null && message.hasOwnProperty("enumVal"))
            object.enumVal = message.enumVal;
        if (message.enumRepeated && message.enumRepeated.length) {
            object.enumRepeated = [];
            for (let j = 0; j < message.enumRepeated.length; ++j)
                object.enumRepeated[j] = message.enumRepeated[j];
        }
        let keys2;
        if (message.int64Map && (keys2 = Object.keys(message.int64Map)).length) {
            object.int64Map = {};
            for (let j = 0; j < keys2.length; ++j)
                if (typeof message.int64Map[keys2[j]] === "number")
                    object.int64Map[keys2[j]] = options.longs === String ? String(message.int64Map[keys2[j]]) : message.int64Map[keys2[j]];
                else
                    object.int64Map[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.int64Map[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.int64Map[keys2[j]]).toNumber() : message.int64Map[keys2[j]];
        }
        return object;
    }

    /**
     * Converts this Message to JSON.
     */
    toJSON() {
        return Message.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMessage, b?: IMessage): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.stringVal === b.stringVal && (!!a.stringRepeated && !!b.stringRepeated && a.stringRepeated.length === b.stringRepeated.length && !a.stringRepeated.find(function (aValue, i) {
            return (a.stringRepeated && a.stringRepeated[i]) === (b.stringRepeated && b.stringRepeated[i]);
        })) && $util.longEquals(a.uint64Val, b.uint64Val) && (!!a.uint64Repeated && !!b.uint64Repeated && a.uint64Repeated.length === b.uint64Repeated.length && !a.uint64Repeated.find(function (aValue, i) {
            return $util.longEquals(a.uint64Repeated && a.uint64Repeated[i], b.uint64Repeated && b.uint64Repeated[i]);
        })) && $util.bytesEquals(a.bytesVal, b.bytesVal) && (!!a.bytesRepeated && !!b.bytesRepeated && a.bytesRepeated.length === b.bytesRepeated.length && !a.bytesRepeated.find(function (aValue, i) {
            return $util.bytesEquals(a.bytesRepeated && a.bytesRepeated[i], b.bytesRepeated && b.bytesRepeated[i]);
        })) && a.enumVal === b.enumVal && (!!a.enumRepeated && !!b.enumRepeated && a.enumRepeated.length === b.enumRepeated.length && !a.enumRepeated.find(function (aValue, i) {
            return (a.enumRepeated && a.enumRepeated[i]) === (b.enumRepeated && b.enumRepeated[i]);
        })) && $util.mapEquals(a.int64Map, b.int64Map, function (keyName) {
            return !!b.int64Map && (!(keyName in b.int64Map) && $util.longEquals(a.int64Map && a.int64Map[keyName], b.int64Map && b.int64Map[keyName]));
        });
    }
    // #endregion
}

export namespace Message {
    export enum SomeEnum {
        ONE = 1,
        TWO = 2,
    }

}

