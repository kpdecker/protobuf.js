import * as $protobuf from "../../../minimal";
import { ISomething, Something } from "./package-a";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

/** Properties of an Empty. */
export interface IEmpty {
}

/**
 * Represents an Empty.
 */
export class Empty implements IEmpty {
    /**
     * Constructs a new Empty.
     */
    constructor(properties?: IEmpty) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Empty instance using the specified properties.
     */
    static create(properties: IEmpty): Empty {
        return new Empty(properties);
    }

    /**
     * Encodes the specified Empty message. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Emptymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified Empty message, length delimited. Does not implicitly {@link Empty.verify|verify} messages.
     * @param message Emptymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IEmpty, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an Empty message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Empty {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Empty();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an Empty message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Empty {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an Empty message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates an Empty message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEmpty {
        if (object instanceof Empty)
            return object;
        return new Empty();
    }

    /**
     * Creates a plain object from an Empty message. Also converts values to other types if specified.
     * @param message Empty
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEmpty, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this Empty to JSON.
     */
    toJSON() {
        return Empty.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEmpty, b?: IEmpty): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export enum OuterEnum {
    FOO = 1,
    BAR = 2,
}

/** Properties of an EnumContainer. */
export interface IEnumContainer {
    outerEnum?: OuterEnum;
}

/**
 * Represents an EnumContainer.
 */
export class EnumContainer implements IEnumContainer {
    /**
     * Constructs a new EnumContainer.
     */
    constructor(properties?: IEnumContainer) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    outerEnum?: OuterEnum = 1;

    /**
     * Creates a new EnumContainer instance using the specified properties.
     */
    static create(properties: IEnumContainer): EnumContainer {
        return new EnumContainer(properties);
    }

    /**
     * Encodes the specified EnumContainer message. Does not implicitly {@link EnumContainer.verify|verify} messages.
     * @param message EnumContainermessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IEnumContainer, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.outerEnum != null && Object.hasOwnProperty.call(message, "outerEnum"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.outerEnum);
        return writer;
    }

    /**
     * Encodes the specified EnumContainer message, length delimited. Does not implicitly {@link EnumContainer.verify|verify} messages.
     * @param message EnumContainermessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IEnumContainer, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an EnumContainer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): EnumContainer {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new EnumContainer();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.outerEnum = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an EnumContainer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): EnumContainer {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an EnumContainer message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.outerEnum != null && message.hasOwnProperty("outerEnum"))
            switch (message.outerEnum) {
            default:
                return "outerEnum: enum value expected";
            case 1:
            case 2:
                break;
            }
        return null;
    }

    /**
     * Creates an EnumContainer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IEnumContainer {
        if (object instanceof EnumContainer)
            return object;
        var message = new EnumContainer();
        switch (object.outerEnum) {
        case "FOO":
        case 1:
            message.outerEnum = 1;
            break;
        case "BAR":
        case 2:
            message.outerEnum = 2;
            break;
        }
        return message;
    }

    /**
     * Creates a plain object from an EnumContainer message. Also converts values to other types if specified.
     * @param message EnumContainer
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IEnumContainer, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.outerEnum = 1;
        if (message.outerEnum != null && message.hasOwnProperty("outerEnum"))
            object.outerEnum = options.enums === String ? OuterEnum[message.outerEnum] : message.outerEnum;
        return object;
    }

    /**
     * Converts this EnumContainer to JSON.
     */
    toJSON() {
        return EnumContainer.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IEnumContainer, b?: IEnumContainer): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.outerEnum === b.outerEnum;
    }
}

/** Properties of a Simple1. */
export interface ISimple1 {
    aString: string;
    aRepeatedString?: string[];
    aBoolean?: boolean;
    aSomething?: ISomething;
}

/**
 * Represents a Simple1.
 */
export class Simple1 implements ISimple1 {
    /**
     * Constructs a new Simple1.
     */
    constructor(properties?: ISimple1) {
        this.aRepeatedString = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    aString: string = "";
    aRepeatedString?: string[];
    aBoolean?: boolean = false;
    aSomething?: ISomething;

    /**
     * Creates a new Simple1 instance using the specified properties.
     */
    static create(properties: ISimple1): Simple1 {
        return new Simple1(properties);
    }

    /**
     * Encodes the specified Simple1 message. Does not implicitly {@link Simple1.verify|verify} messages.
     * @param message Simple1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ISimple1, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
        if (message.aRepeatedString != null && message.aRepeatedString.length)
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.aRepeatedString[i]);
        if (message.aBoolean != null && Object.hasOwnProperty.call(message, "aBoolean"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.aBoolean);
        if (message.aSomething != null && Object.hasOwnProperty.call(message, "aSomething"))
            Something.encode(message.aSomething, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified Simple1 message, length delimited. Does not implicitly {@link Simple1.verify|verify} messages.
     * @param message Simple1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ISimple1, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Simple1 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Simple1 {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Simple1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.aString = reader.string();
                break;
            case 2:
                if (!(message.aRepeatedString && message.aRepeatedString.length))
                    message.aRepeatedString = [];
                message.aRepeatedString.push(reader.string());
                break;
            case 3:
                message.aBoolean = reader.bool();
                break;
            case 4:
                message.aSomething = Something.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("aString"))
            throw new $util.ProtocolError("missing required 'aString'", { instance: message });
        return message;
    }

    /**
     * Decodes a Simple1 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Simple1 {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Simple1 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.aString))
            return "aString: string expected";
        if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
            if (!Array.isArray(message.aRepeatedString))
                return "aRepeatedString: array expected";
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                if (!$util.isString(message.aRepeatedString[i]))
                    return "aRepeatedString: string[] expected";
        }
        if (message.aBoolean != null && message.hasOwnProperty("aBoolean"))
            if (typeof message.aBoolean !== "boolean")
                return "aBoolean: boolean expected";
        if (message.aSomething != null && message.hasOwnProperty("aSomething")) {
            var error = Something.verify(message.aSomething);
            if (error)
                return "aSomething." + error;
        }
        return null;
    }

    /**
     * Creates a Simple1 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ISimple1 {
        if (object instanceof Simple1)
            return object;
        var message = new Simple1();
        if (object.aString != null)
            message.aString = String(object.aString);
        if (object.aRepeatedString) {
            if (!Array.isArray(object.aRepeatedString))
                throw TypeError("Simple1.aRepeatedString: array expected");
            message.aRepeatedString = [];
            for (var i = 0; i < object.aRepeatedString.length; ++i)
                message.aRepeatedString[i] = String(object.aRepeatedString[i]);
        }
        if (object.aBoolean != null)
            message.aBoolean = Boolean(object.aBoolean);
        if (object.aSomething != null) {
            if (typeof object.aSomething !== "object")
                throw TypeError("Simple1.aSomething: object expected");
            message.aSomething = Something.fromObject(object.aSomething);
        }
        return message;
    }

    /**
     * Creates a plain object from a Simple1 message. Also converts values to other types if specified.
     * @param message Simple1
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ISimple1, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.aRepeatedString = [];
        if (options.defaults) {
            object.aString = "";
            object.aBoolean = false;
            object.aSomething = null;
        }
        if (message.aString != null && message.hasOwnProperty("aString"))
            object.aString = message.aString;
        if (message.aRepeatedString && message.aRepeatedString.length) {
            object.aRepeatedString = [];
            for (var j = 0; j < message.aRepeatedString.length; ++j)
                object.aRepeatedString[j] = message.aRepeatedString[j];
        }
        if (message.aBoolean != null && message.hasOwnProperty("aBoolean"))
            object.aBoolean = message.aBoolean;
        if (message.aSomething != null && message.hasOwnProperty("aSomething"))
            object.aSomething = Something.toObject(message.aSomething, options);
        return object;
    }

    /**
     * Converts this Simple1 to JSON.
     */
    toJSON() {
        return Simple1.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ISimple1, b?: ISimple1): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.aString === b.aString && (!!a.aRepeatedString && !!b.aRepeatedString && a.aRepeatedString.length === b.aRepeatedString.length && !a.aRepeatedString.find(function (aValue, i) {
            return (a.aRepeatedString && a.aRepeatedString[i]) === (b.aRepeatedString && b.aRepeatedString[i]);
        })) && a.aBoolean === b.aBoolean && Something.equals(a.aSomething, b.aSomething);
    }
}

/** Properties of a Simple2. */
export interface ISimple2 {
    aString: string;
    aRepeatedString?: string[];
}

/**
 * Represents a Simple2.
 */
export class Simple2 implements ISimple2 {
    /**
     * Constructs a new Simple2.
     */
    constructor(properties?: ISimple2) {
        this.aRepeatedString = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    aString: string = "";
    aRepeatedString?: string[];

    /**
     * Creates a new Simple2 instance using the specified properties.
     */
    static create(properties: ISimple2): Simple2 {
        return new Simple2(properties);
    }

    /**
     * Encodes the specified Simple2 message. Does not implicitly {@link Simple2.verify|verify} messages.
     * @param message Simple2message or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ISimple2, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
        if (message.aRepeatedString != null && message.aRepeatedString.length)
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.aRepeatedString[i]);
        return writer;
    }

    /**
     * Encodes the specified Simple2 message, length delimited. Does not implicitly {@link Simple2.verify|verify} messages.
     * @param message Simple2message or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ISimple2, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Simple2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Simple2 {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Simple2();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.aString = reader.string();
                break;
            case 2:
                if (!(message.aRepeatedString && message.aRepeatedString.length))
                    message.aRepeatedString = [];
                message.aRepeatedString.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("aString"))
            throw new $util.ProtocolError("missing required 'aString'", { instance: message });
        return message;
    }

    /**
     * Decodes a Simple2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Simple2 {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Simple2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.aString))
            return "aString: string expected";
        if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
            if (!Array.isArray(message.aRepeatedString))
                return "aRepeatedString: array expected";
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                if (!$util.isString(message.aRepeatedString[i]))
                    return "aRepeatedString: string[] expected";
        }
        return null;
    }

    /**
     * Creates a Simple2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ISimple2 {
        if (object instanceof Simple2)
            return object;
        var message = new Simple2();
        if (object.aString != null)
            message.aString = String(object.aString);
        if (object.aRepeatedString) {
            if (!Array.isArray(object.aRepeatedString))
                throw TypeError("Simple2.aRepeatedString: array expected");
            message.aRepeatedString = [];
            for (var i = 0; i < object.aRepeatedString.length; ++i)
                message.aRepeatedString[i] = String(object.aRepeatedString[i]);
        }
        return message;
    }

    /**
     * Creates a plain object from a Simple2 message. Also converts values to other types if specified.
     * @param message Simple2
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ISimple2, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.aRepeatedString = [];
        if (options.defaults)
            object.aString = "";
        if (message.aString != null && message.hasOwnProperty("aString"))
            object.aString = message.aString;
        if (message.aRepeatedString && message.aRepeatedString.length) {
            object.aRepeatedString = [];
            for (var j = 0; j < message.aRepeatedString.length; ++j)
                object.aRepeatedString[j] = message.aRepeatedString[j];
        }
        return object;
    }

    /**
     * Converts this Simple2 to JSON.
     */
    toJSON() {
        return Simple2.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ISimple2, b?: ISimple2): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.aString === b.aString && (!!a.aRepeatedString && !!b.aRepeatedString && a.aRepeatedString.length === b.aRepeatedString.length && !a.aRepeatedString.find(function (aValue, i) {
            return (a.aRepeatedString && a.aRepeatedString[i]) === (b.aRepeatedString && b.aRepeatedString[i]);
        }));
    }
}

/** Properties of a SpecialCases. */
export interface ISpecialCases {
    normal: string;
    "default": string;
    "function": string;
    "var": string;
}

/**
 * Represents a SpecialCases.
 */
export class SpecialCases implements ISpecialCases {
    /**
     * Constructs a new SpecialCases.
     */
    constructor(properties?: ISpecialCases) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    normal: string = "";
    ["default"]: string = "";
    ["function"]: string = "";
    ["var"]: string = "";

    /**
     * Creates a new SpecialCases instance using the specified properties.
     */
    static create(properties: ISpecialCases): SpecialCases {
        return new SpecialCases(properties);
    }

    /**
     * Encodes the specified SpecialCases message. Does not implicitly {@link SpecialCases.verify|verify} messages.
     * @param message SpecialCasesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ISpecialCases, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.normal);
        writer.uint32(/* id 2, wireType 2 =*/18).string(message["default"]);
        writer.uint32(/* id 3, wireType 2 =*/26).string(message["function"]);
        writer.uint32(/* id 4, wireType 2 =*/34).string(message["var"]);
        return writer;
    }

    /**
     * Encodes the specified SpecialCases message, length delimited. Does not implicitly {@link SpecialCases.verify|verify} messages.
     * @param message SpecialCasesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ISpecialCases, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a SpecialCases message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): SpecialCases {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new SpecialCases();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.normal = reader.string();
                break;
            case 2:
                message["default"] = reader.string();
                break;
            case 3:
                message["function"] = reader.string();
                break;
            case 4:
                message["var"] = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("normal"))
            throw new $util.ProtocolError("missing required 'normal'", { instance: message });
        if (!message.hasOwnProperty("default"))
            throw new $util.ProtocolError("missing required 'default'", { instance: message });
        if (!message.hasOwnProperty("function"))
            throw new $util.ProtocolError("missing required 'function'", { instance: message });
        if (!message.hasOwnProperty("var"))
            throw new $util.ProtocolError("missing required 'var'", { instance: message });
        return message;
    }

    /**
     * Decodes a SpecialCases message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): SpecialCases {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a SpecialCases message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.normal))
            return "normal: string expected";
        if (!$util.isString(message["default"]))
            return "default: string expected";
        if (!$util.isString(message["function"]))
            return "function: string expected";
        if (!$util.isString(message["var"]))
            return "var: string expected";
        return null;
    }

    /**
     * Creates a SpecialCases message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ISpecialCases {
        if (object instanceof SpecialCases)
            return object;
        var message = new SpecialCases();
        if (object.normal != null)
            message.normal = String(object.normal);
        if (object["default"] != null)
            message["default"] = String(object["default"]);
        if (object["function"] != null)
            message["function"] = String(object["function"]);
        if (object["var"] != null)
            message["var"] = String(object["var"]);
        return message;
    }

    /**
     * Creates a plain object from a SpecialCases message. Also converts values to other types if specified.
     * @param message SpecialCases
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ISpecialCases, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.normal = "";
            object["default"] = "";
            object["function"] = "";
            object["var"] = "";
        }
        if (message.normal != null && message.hasOwnProperty("normal"))
            object.normal = message.normal;
        if (message["default"] != null && message.hasOwnProperty("default"))
            object["default"] = message["default"];
        if (message["function"] != null && message.hasOwnProperty("function"))
            object["function"] = message["function"];
        if (message["var"] != null && message.hasOwnProperty("var"))
            object["var"] = message["var"];
        return object;
    }

    /**
     * Converts this SpecialCases to JSON.
     */
    toJSON() {
        return SpecialCases.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ISpecialCases, b?: ISpecialCases): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.normal === b.normal && a["default"] === b["default"] && a["function"] === b["function"] && a["var"] === b["var"];
    }
}

/** Properties of an OptionalFields. */
export interface IOptionalFields {
    aString?: string;
    aBool: boolean;
    aNestedMessage?: OptionalFields.INested;
    aRepeatedMessage?: OptionalFields.INested[];
    aRepeatedString?: string[];
}

/**
 * Represents an OptionalFields.
 */
export class OptionalFields implements IOptionalFields {
    /**
     * Constructs a new OptionalFields.
     */
    constructor(properties?: IOptionalFields) {
        this.aRepeatedMessage = [];
        this.aRepeatedString = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    aString?: string = "";
    aBool: boolean = false;
    aNestedMessage?: OptionalFields.INested;
    aRepeatedMessage?: OptionalFields.INested[];
    aRepeatedString?: string[];

    /**
     * Creates a new OptionalFields instance using the specified properties.
     */
    static create(properties: IOptionalFields): OptionalFields {
        return new OptionalFields(properties);
    }

    /**
     * Encodes the specified OptionalFields message. Does not implicitly {@link OptionalFields.verify|verify} messages.
     * @param message OptionalFieldsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IOptionalFields, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.aString != null && Object.hasOwnProperty.call(message, "aString"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.aBool);
        if (message.aNestedMessage != null && Object.hasOwnProperty.call(message, "aNestedMessage"))
            OptionalFields.Nested.encode(message.aNestedMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
            for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                OptionalFields.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.aRepeatedString != null && message.aRepeatedString.length)
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.aRepeatedString[i]);
        return writer;
    }

    /**
     * Encodes the specified OptionalFields message, length delimited. Does not implicitly {@link OptionalFields.verify|verify} messages.
     * @param message OptionalFieldsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IOptionalFields, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an OptionalFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): OptionalFields {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new OptionalFields();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.aString = reader.string();
                break;
            case 2:
                message.aBool = reader.bool();
                break;
            case 3:
                message.aNestedMessage = OptionalFields.Nested.decode(reader, reader.uint32());
                break;
            case 4:
                if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                    message.aRepeatedMessage = [];
                message.aRepeatedMessage.push(OptionalFields.Nested.decode(reader, reader.uint32()));
                break;
            case 5:
                if (!(message.aRepeatedString && message.aRepeatedString.length))
                    message.aRepeatedString = [];
                message.aRepeatedString.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("aBool"))
            throw new $util.ProtocolError("missing required 'aBool'", { instance: message });
        return message;
    }

    /**
     * Decodes an OptionalFields message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): OptionalFields {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an OptionalFields message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.aString != null && message.hasOwnProperty("aString"))
            if (!$util.isString(message.aString))
                return "aString: string expected";
        if (typeof message.aBool !== "boolean")
            return "aBool: boolean expected";
        if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage")) {
            var error = OptionalFields.Nested.verify(message.aNestedMessage);
            if (error)
                return "aNestedMessage." + error;
        }
        if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
            if (!Array.isArray(message.aRepeatedMessage))
                return "aRepeatedMessage: array expected";
            for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                var error = OptionalFields.Nested.verify(message.aRepeatedMessage[i]);
                if (error)
                    return "aRepeatedMessage." + error;
            }
        }
        if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
            if (!Array.isArray(message.aRepeatedString))
                return "aRepeatedString: array expected";
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                if (!$util.isString(message.aRepeatedString[i]))
                    return "aRepeatedString: string[] expected";
        }
        return null;
    }

    /**
     * Creates an OptionalFields message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IOptionalFields {
        if (object instanceof OptionalFields)
            return object;
        var message = new OptionalFields();
        if (object.aString != null)
            message.aString = String(object.aString);
        if (object.aBool != null)
            message.aBool = Boolean(object.aBool);
        if (object.aNestedMessage != null) {
            if (typeof object.aNestedMessage !== "object")
                throw TypeError("OptionalFields.aNestedMessage: object expected");
            message.aNestedMessage = OptionalFields.Nested.fromObject(object.aNestedMessage);
        }
        if (object.aRepeatedMessage) {
            if (!Array.isArray(object.aRepeatedMessage))
                throw TypeError("OptionalFields.aRepeatedMessage: array expected");
            message.aRepeatedMessage = [];
            for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                if (typeof object.aRepeatedMessage[i] !== "object")
                    throw TypeError("OptionalFields.aRepeatedMessage: object expected");
                message.aRepeatedMessage[i] = OptionalFields.Nested.fromObject(object.aRepeatedMessage[i]);
            }
        }
        if (object.aRepeatedString) {
            if (!Array.isArray(object.aRepeatedString))
                throw TypeError("OptionalFields.aRepeatedString: array expected");
            message.aRepeatedString = [];
            for (var i = 0; i < object.aRepeatedString.length; ++i)
                message.aRepeatedString[i] = String(object.aRepeatedString[i]);
        }
        return message;
    }

    /**
     * Creates a plain object from an OptionalFields message. Also converts values to other types if specified.
     * @param message OptionalFields
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IOptionalFields, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.aRepeatedMessage = [];
            object.aRepeatedString = [];
        }
        if (options.defaults) {
            object.aString = "";
            object.aBool = false;
            object.aNestedMessage = null;
        }
        if (message.aString != null && message.hasOwnProperty("aString"))
            object.aString = message.aString;
        if (message.aBool != null && message.hasOwnProperty("aBool"))
            object.aBool = message.aBool;
        if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage"))
            object.aNestedMessage = OptionalFields.Nested.toObject(message.aNestedMessage, options);
        if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
            object.aRepeatedMessage = [];
            for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                object.aRepeatedMessage[j] = OptionalFields.Nested.toObject(message.aRepeatedMessage[j], options);
        }
        if (message.aRepeatedString && message.aRepeatedString.length) {
            object.aRepeatedString = [];
            for (var j = 0; j < message.aRepeatedString.length; ++j)
                object.aRepeatedString[j] = message.aRepeatedString[j];
        }
        return object;
    }

    /**
     * Converts this OptionalFields to JSON.
     */
    toJSON() {
        return OptionalFields.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IOptionalFields, b?: IOptionalFields): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.aString === b.aString && a.aBool === b.aBool && OptionalFields.Nested.equals(a.aNestedMessage, b.aNestedMessage) && (!!a.aRepeatedMessage && !!b.aRepeatedMessage && a.aRepeatedMessage.length === b.aRepeatedMessage.length && !a.aRepeatedMessage.find(function (aValue, i) {
            return OptionalFields.Nested.equals(a.aRepeatedMessage && a.aRepeatedMessage[i], b.aRepeatedMessage && b.aRepeatedMessage[i]);
        })) && (!!a.aRepeatedString && !!b.aRepeatedString && a.aRepeatedString.length === b.aRepeatedString.length && !a.aRepeatedString.find(function (aValue, i) {
            return (a.aRepeatedString && a.aRepeatedString[i]) === (b.aRepeatedString && b.aRepeatedString[i]);
        }));
    }
}

export namespace OptionalFields {
    /** Properties of a Nested. */
    export interface INested {
        anInt?: number;
    }

    /**
     * Represents a Nested.
     */
    export class Nested implements INested {
        /**
         * Constructs a new Nested.
         */
        constructor(properties?: INested) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        anInt?: number = 0;

        /**
         * Creates a new Nested instance using the specified properties.
         */
        static create(properties: INested): Nested {
            return new Nested(properties);
        }

        /**
         * Encodes the specified Nested message. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.anInt != null && Object.hasOwnProperty.call(message, "anInt"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.anInt);
            return writer;
        }

        /**
         * Encodes the specified Nested message, length delimited. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Nested message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Nested {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new OptionalFields.Nested();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.anInt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a Nested message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Nested {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Nested message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.anInt != null && message.hasOwnProperty("anInt"))
                if (!$util.isInteger(message.anInt))
                    return "anInt: integer expected";
            return null;
        }

        /**
         * Creates a Nested message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): INested {
            if (object instanceof OptionalFields.Nested)
                return object;
            var message = new OptionalFields.Nested();
            if (object.anInt != null)
                message.anInt = object.anInt | 0;
            return message;
        }

        /**
         * Creates a plain object from a Nested message. Also converts values to other types if specified.
         * @param message Nested
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: INested, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults)
                object.anInt = 0;
            if (message.anInt != null && message.hasOwnProperty("anInt"))
                object.anInt = message.anInt;
            return object;
        }

        /**
         * Converts this Nested to JSON.
         */
        toJSON() {
            return Nested.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: INested, b?: INested): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.anInt === b.anInt;
        }
    }

}

/** Properties of a HasExtensions. */
export interface IHasExtensions {
    str1?: string;
    str2?: string;
    str3?: string;
    "IsExtension.extField"?: IIsExtension;
    "IndirectExtension.simple"?: ISimple1;
    "IndirectExtension.str"?: string;
    "IndirectExtension.repeatedStr"?: string[];
    "IndirectExtension.repeatedSimple"?: ISimple1[];
    simple1?: ISimple1;
}

/**
 * Represents a HasExtensions.
 */
export class HasExtensions implements IHasExtensions {
    /**
     * Constructs a new HasExtensions.
     */
    constructor(properties?: IHasExtensions) {
        this["IndirectExtension.repeatedStr"] = [];
        this["IndirectExtension.repeatedSimple"] = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    str1?: string = "";
    str2?: string = "";
    str3?: string = "";
    ["IsExtension.extField"]?: IIsExtension;
    ["IndirectExtension.simple"]?: ISimple1;
    ["IndirectExtension.str"]?: string = "";
    ["IndirectExtension.repeatedStr"]?: string[];
    ["IndirectExtension.repeatedSimple"]?: ISimple1[];
    simple1?: ISimple1;

    /**
     * Creates a new HasExtensions instance using the specified properties.
     */
    static create(properties: IHasExtensions): HasExtensions {
        return new HasExtensions(properties);
    }

    /**
     * Encodes the specified HasExtensions message. Does not implicitly {@link HasExtensions.verify|verify} messages.
     * @param message HasExtensionsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IHasExtensions, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.str1 != null && Object.hasOwnProperty.call(message, "str1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str1);
        if (message.str2 != null && Object.hasOwnProperty.call(message, "str2"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.str2);
        if (message.str3 != null && Object.hasOwnProperty.call(message, "str3"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.str3);
        if (message["IsExtension.extField"] != null && Object.hasOwnProperty.call(message, "IsExtension.extField"))
            IsExtension.encode(message["IsExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        if (message["IndirectExtension.simple"] != null && Object.hasOwnProperty.call(message, "IndirectExtension.simple"))
            Simple1.encode(message["IndirectExtension.simple"], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
        if (message["IndirectExtension.str"] != null && Object.hasOwnProperty.call(message, "IndirectExtension.str"))
            writer.uint32(/* id 102, wireType 2 =*/818).string(message["IndirectExtension.str"]);
        if (message["IndirectExtension.repeatedStr"] != null && message["IndirectExtension.repeatedStr"].length)
            for (var i = 0; i < message["IndirectExtension.repeatedStr"].length; ++i)
                writer.uint32(/* id 103, wireType 2 =*/826).string(message["IndirectExtension.repeatedStr"][i]);
        if (message["IndirectExtension.repeatedSimple"] != null && message["IndirectExtension.repeatedSimple"].length)
            for (var i = 0; i < message["IndirectExtension.repeatedSimple"].length; ++i)
                Simple1.encode(message["IndirectExtension.repeatedSimple"][i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
        if (message.simple1 != null && Object.hasOwnProperty.call(message, "simple1"))
            Simple1.encode(message.simple1, writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified HasExtensions message, length delimited. Does not implicitly {@link HasExtensions.verify|verify} messages.
     * @param message HasExtensionsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IHasExtensions, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a HasExtensions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): HasExtensions {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new HasExtensions();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.str1 = reader.string();
                break;
            case 2:
                message.str2 = reader.string();
                break;
            case 3:
                message.str3 = reader.string();
                break;
            case 100:
                message["IsExtension.extField"] = IsExtension.decode(reader, reader.uint32());
                break;
            case 101:
                message["IndirectExtension.simple"] = Simple1.decode(reader, reader.uint32());
                break;
            case 102:
                message["IndirectExtension.str"] = reader.string();
                break;
            case 103:
                if (!(message["IndirectExtension.repeatedStr"] && message["IndirectExtension.repeatedStr"].length))
                    message["IndirectExtension.repeatedStr"] = [];
                message["IndirectExtension.repeatedStr"].push(reader.string());
                break;
            case 104:
                if (!(message["IndirectExtension.repeatedSimple"] && message["IndirectExtension.repeatedSimple"].length))
                    message["IndirectExtension.repeatedSimple"] = [];
                message["IndirectExtension.repeatedSimple"].push(Simple1.decode(reader, reader.uint32()));
                break;
            case 105:
                message.simple1 = Simple1.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a HasExtensions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): HasExtensions {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a HasExtensions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.str1 != null && message.hasOwnProperty("str1"))
            if (!$util.isString(message.str1))
                return "str1: string expected";
        if (message.str2 != null && message.hasOwnProperty("str2"))
            if (!$util.isString(message.str2))
                return "str2: string expected";
        if (message.str3 != null && message.hasOwnProperty("str3"))
            if (!$util.isString(message.str3))
                return "str3: string expected";
        if (message["IsExtension.extField"] != null && message.hasOwnProperty("IsExtension.extField")) {
            var error = IsExtension.verify(message["IsExtension.extField"]);
            if (error)
                return "IsExtension.extField." + error;
        }
        if (message["IndirectExtension.simple"] != null && message.hasOwnProperty("IndirectExtension.simple")) {
            var error = Simple1.verify(message["IndirectExtension.simple"]);
            if (error)
                return "IndirectExtension.simple." + error;
        }
        if (message["IndirectExtension.str"] != null && message.hasOwnProperty("IndirectExtension.str"))
            if (!$util.isString(message["IndirectExtension.str"]))
                return "IndirectExtension.str: string expected";
        if (message["IndirectExtension.repeatedStr"] != null && message.hasOwnProperty("IndirectExtension.repeatedStr")) {
            if (!Array.isArray(message["IndirectExtension.repeatedStr"]))
                return "IndirectExtension.repeatedStr: array expected";
            for (var i = 0; i < message["IndirectExtension.repeatedStr"].length; ++i)
                if (!$util.isString(message["IndirectExtension.repeatedStr"][i]))
                    return "IndirectExtension.repeatedStr: string[] expected";
        }
        if (message["IndirectExtension.repeatedSimple"] != null && message.hasOwnProperty("IndirectExtension.repeatedSimple")) {
            if (!Array.isArray(message["IndirectExtension.repeatedSimple"]))
                return "IndirectExtension.repeatedSimple: array expected";
            for (var i = 0; i < message["IndirectExtension.repeatedSimple"].length; ++i) {
                var error = Simple1.verify(message["IndirectExtension.repeatedSimple"][i]);
                if (error)
                    return "IndirectExtension.repeatedSimple." + error;
            }
        }
        if (message.simple1 != null && message.hasOwnProperty("simple1")) {
            var error = Simple1.verify(message.simple1);
            if (error)
                return "simple1." + error;
        }
        return null;
    }

    /**
     * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IHasExtensions {
        if (object instanceof HasExtensions)
            return object;
        var message = new HasExtensions();
        if (object.str1 != null)
            message.str1 = String(object.str1);
        if (object.str2 != null)
            message.str2 = String(object.str2);
        if (object.str3 != null)
            message.str3 = String(object.str3);
        if (object["IsExtension.extField"] != null) {
            if (typeof object["IsExtension.extField"] !== "object")
                throw TypeError("HasExtensions.IsExtension.extField: object expected");
            message["IsExtension.extField"] = IsExtension.fromObject(object["IsExtension.extField"]);
        }
        if (object["IndirectExtension.simple"] != null) {
            if (typeof object["IndirectExtension.simple"] !== "object")
                throw TypeError("HasExtensions.IndirectExtension.simple: object expected");
            message["IndirectExtension.simple"] = Simple1.fromObject(object["IndirectExtension.simple"]);
        }
        if (object["IndirectExtension.str"] != null)
            message["IndirectExtension.str"] = String(object["IndirectExtension.str"]);
        if (object["IndirectExtension.repeatedStr"]) {
            if (!Array.isArray(object["IndirectExtension.repeatedStr"]))
                throw TypeError("HasExtensions.IndirectExtension.repeatedStr: array expected");
            message["IndirectExtension.repeatedStr"] = [];
            for (var i = 0; i < object["IndirectExtension.repeatedStr"].length; ++i)
                message["IndirectExtension.repeatedStr"][i] = String(object["IndirectExtension.repeatedStr"][i]);
        }
        if (object["IndirectExtension.repeatedSimple"]) {
            if (!Array.isArray(object["IndirectExtension.repeatedSimple"]))
                throw TypeError("HasExtensions.IndirectExtension.repeatedSimple: array expected");
            message["IndirectExtension.repeatedSimple"] = [];
            for (var i = 0; i < object["IndirectExtension.repeatedSimple"].length; ++i) {
                if (typeof object["IndirectExtension.repeatedSimple"][i] !== "object")
                    throw TypeError("HasExtensions.IndirectExtension.repeatedSimple: object expected");
                message["IndirectExtension.repeatedSimple"][i] = Simple1.fromObject(object["IndirectExtension.repeatedSimple"][i]);
            }
        }
        if (object.simple1 != null) {
            if (typeof object.simple1 !== "object")
                throw TypeError("HasExtensions.simple1: object expected");
            message.simple1 = Simple1.fromObject(object.simple1);
        }
        return message;
    }

    /**
     * Creates a plain object from a HasExtensions message. Also converts values to other types if specified.
     * @param message HasExtensions
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IHasExtensions, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object["IndirectExtension.repeatedStr"] = [];
            object["IndirectExtension.repeatedSimple"] = [];
        }
        if (options.defaults) {
            object.str1 = "";
            object.str2 = "";
            object.str3 = "";
            object["IsExtension.extField"] = null;
            object["IndirectExtension.simple"] = null;
            object["IndirectExtension.str"] = "";
            object.simple1 = null;
        }
        if (message.str1 != null && message.hasOwnProperty("str1"))
            object.str1 = message.str1;
        if (message.str2 != null && message.hasOwnProperty("str2"))
            object.str2 = message.str2;
        if (message.str3 != null && message.hasOwnProperty("str3"))
            object.str3 = message.str3;
        if (message["IsExtension.extField"] != null && message.hasOwnProperty("IsExtension.extField"))
            object["IsExtension.extField"] = IsExtension.toObject(message["IsExtension.extField"], options);
        if (message["IndirectExtension.simple"] != null && message.hasOwnProperty("IndirectExtension.simple"))
            object["IndirectExtension.simple"] = Simple1.toObject(message["IndirectExtension.simple"], options);
        if (message["IndirectExtension.str"] != null && message.hasOwnProperty("IndirectExtension.str"))
            object["IndirectExtension.str"] = message["IndirectExtension.str"];
        if (message["IndirectExtension.repeatedStr"] && message["IndirectExtension.repeatedStr"].length) {
            object["IndirectExtension.repeatedStr"] = [];
            for (var j = 0; j < message["IndirectExtension.repeatedStr"].length; ++j)
                object["IndirectExtension.repeatedStr"][j] = message["IndirectExtension.repeatedStr"][j];
        }
        if (message["IndirectExtension.repeatedSimple"] && message["IndirectExtension.repeatedSimple"].length) {
            object["IndirectExtension.repeatedSimple"] = [];
            for (var j = 0; j < message["IndirectExtension.repeatedSimple"].length; ++j)
                object["IndirectExtension.repeatedSimple"][j] = Simple1.toObject(message["IndirectExtension.repeatedSimple"][j], options);
        }
        if (message.simple1 != null && message.hasOwnProperty("simple1"))
            object.simple1 = Simple1.toObject(message.simple1, options);
        return object;
    }

    /**
     * Converts this HasExtensions to JSON.
     */
    toJSON() {
        return HasExtensions.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IHasExtensions, b?: IHasExtensions): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.str1 === b.str1 && a.str2 === b.str2 && a.str3 === b.str3 && IsExtension.equals(a["IsExtension.extField"], b["IsExtension.extField"]) && Simple1.equals(a["IndirectExtension.simple"], b["IndirectExtension.simple"]) && a["IndirectExtension.str"] === b["IndirectExtension.str"] && (!!a["IndirectExtension.repeatedStr"] && !!b["IndirectExtension.repeatedStr"] && a["IndirectExtension.repeatedStr"].length === b["IndirectExtension.repeatedStr"].length && !a["IndirectExtension.repeatedStr"].find(function (aValue, i) {
            return (a["IndirectExtension.repeatedStr"] && a["IndirectExtension.repeatedStr"][i]) === (b["IndirectExtension.repeatedStr"] && b["IndirectExtension.repeatedStr"][i]);
        })) && (!!a["IndirectExtension.repeatedSimple"] && !!b["IndirectExtension.repeatedSimple"] && a["IndirectExtension.repeatedSimple"].length === b["IndirectExtension.repeatedSimple"].length && !a["IndirectExtension.repeatedSimple"].find(function (aValue, i) {
            return Simple1.equals(a["IndirectExtension.repeatedSimple"] && a["IndirectExtension.repeatedSimple"][i], b["IndirectExtension.repeatedSimple"] && b["IndirectExtension.repeatedSimple"][i]);
        })) && Simple1.equals(a.simple1, b.simple1);
    }
}

/** Properties of a Complex. */
export interface IComplex {
    aString: string;
    anOutOfOrderBool: boolean;
    aNestedMessage?: Complex.INested;
    aRepeatedMessage?: Complex.INested[];
    aRepeatedString?: string[];
}

/**
 * Represents a Complex.
 */
export class Complex implements IComplex {
    /**
     * Constructs a new Complex.
     */
    constructor(properties?: IComplex) {
        this.aRepeatedMessage = [];
        this.aRepeatedString = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    aString: string = "";
    anOutOfOrderBool: boolean = false;
    aNestedMessage?: Complex.INested;
    aRepeatedMessage?: Complex.INested[];
    aRepeatedString?: string[];

    /**
     * Creates a new Complex instance using the specified properties.
     */
    static create(properties: IComplex): Complex {
        return new Complex(properties);
    }

    /**
     * Encodes the specified Complex message. Does not implicitly {@link Complex.verify|verify} messages.
     * @param message Complexmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        writer.uint32(/* id 1, wireType 2 =*/10).string(message.aString);
        if (message.aNestedMessage != null && Object.hasOwnProperty.call(message, "aNestedMessage"))
            Complex.Nested.encode(message.aNestedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
            for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                Complex.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.aRepeatedString != null && message.aRepeatedString.length)
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.aRepeatedString[i]);
        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.anOutOfOrderBool);
        return writer;
    }

    /**
     * Encodes the specified Complex message, length delimited. Does not implicitly {@link Complex.verify|verify} messages.
     * @param message Complexmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Complex message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Complex {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Complex();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.aString = reader.string();
                break;
            case 9:
                message.anOutOfOrderBool = reader.bool();
                break;
            case 4:
                message.aNestedMessage = Complex.Nested.decode(reader, reader.uint32());
                break;
            case 5:
                if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                    message.aRepeatedMessage = [];
                message.aRepeatedMessage.push(Complex.Nested.decode(reader, reader.uint32()));
                break;
            case 7:
                if (!(message.aRepeatedString && message.aRepeatedString.length))
                    message.aRepeatedString = [];
                message.aRepeatedString.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("aString"))
            throw new $util.ProtocolError("missing required 'aString'", { instance: message });
        if (!message.hasOwnProperty("anOutOfOrderBool"))
            throw new $util.ProtocolError("missing required 'anOutOfOrderBool'", { instance: message });
        return message;
    }

    /**
     * Decodes a Complex message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Complex {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Complex message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (!$util.isString(message.aString))
            return "aString: string expected";
        if (typeof message.anOutOfOrderBool !== "boolean")
            return "anOutOfOrderBool: boolean expected";
        if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage")) {
            var error = Complex.Nested.verify(message.aNestedMessage);
            if (error)
                return "aNestedMessage." + error;
        }
        if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
            if (!Array.isArray(message.aRepeatedMessage))
                return "aRepeatedMessage: array expected";
            for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                var error = Complex.Nested.verify(message.aRepeatedMessage[i]);
                if (error)
                    return "aRepeatedMessage." + error;
            }
        }
        if (message.aRepeatedString != null && message.hasOwnProperty("aRepeatedString")) {
            if (!Array.isArray(message.aRepeatedString))
                return "aRepeatedString: array expected";
            for (var i = 0; i < message.aRepeatedString.length; ++i)
                if (!$util.isString(message.aRepeatedString[i]))
                    return "aRepeatedString: string[] expected";
        }
        return null;
    }

    /**
     * Creates a Complex message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IComplex {
        if (object instanceof Complex)
            return object;
        var message = new Complex();
        if (object.aString != null)
            message.aString = String(object.aString);
        if (object.anOutOfOrderBool != null)
            message.anOutOfOrderBool = Boolean(object.anOutOfOrderBool);
        if (object.aNestedMessage != null) {
            if (typeof object.aNestedMessage !== "object")
                throw TypeError("Complex.aNestedMessage: object expected");
            message.aNestedMessage = Complex.Nested.fromObject(object.aNestedMessage);
        }
        if (object.aRepeatedMessage) {
            if (!Array.isArray(object.aRepeatedMessage))
                throw TypeError("Complex.aRepeatedMessage: array expected");
            message.aRepeatedMessage = [];
            for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                if (typeof object.aRepeatedMessage[i] !== "object")
                    throw TypeError("Complex.aRepeatedMessage: object expected");
                message.aRepeatedMessage[i] = Complex.Nested.fromObject(object.aRepeatedMessage[i]);
            }
        }
        if (object.aRepeatedString) {
            if (!Array.isArray(object.aRepeatedString))
                throw TypeError("Complex.aRepeatedString: array expected");
            message.aRepeatedString = [];
            for (var i = 0; i < object.aRepeatedString.length; ++i)
                message.aRepeatedString[i] = String(object.aRepeatedString[i]);
        }
        return message;
    }

    /**
     * Creates a plain object from a Complex message. Also converts values to other types if specified.
     * @param message Complex
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IComplex, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.aRepeatedMessage = [];
            object.aRepeatedString = [];
        }
        if (options.defaults) {
            object.aString = "";
            object.aNestedMessage = null;
            object.anOutOfOrderBool = false;
        }
        if (message.aString != null && message.hasOwnProperty("aString"))
            object.aString = message.aString;
        if (message.aNestedMessage != null && message.hasOwnProperty("aNestedMessage"))
            object.aNestedMessage = Complex.Nested.toObject(message.aNestedMessage, options);
        if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
            object.aRepeatedMessage = [];
            for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                object.aRepeatedMessage[j] = Complex.Nested.toObject(message.aRepeatedMessage[j], options);
        }
        if (message.aRepeatedString && message.aRepeatedString.length) {
            object.aRepeatedString = [];
            for (var j = 0; j < message.aRepeatedString.length; ++j)
                object.aRepeatedString[j] = message.aRepeatedString[j];
        }
        if (message.anOutOfOrderBool != null && message.hasOwnProperty("anOutOfOrderBool"))
            object.anOutOfOrderBool = message.anOutOfOrderBool;
        return object;
    }

    /**
     * Converts this Complex to JSON.
     */
    toJSON() {
        return Complex.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IComplex, b?: IComplex): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.aString === b.aString && a.anOutOfOrderBool === b.anOutOfOrderBool && Complex.Nested.equals(a.aNestedMessage, b.aNestedMessage) && (!!a.aRepeatedMessage && !!b.aRepeatedMessage && a.aRepeatedMessage.length === b.aRepeatedMessage.length && !a.aRepeatedMessage.find(function (aValue, i) {
            return Complex.Nested.equals(a.aRepeatedMessage && a.aRepeatedMessage[i], b.aRepeatedMessage && b.aRepeatedMessage[i]);
        })) && (!!a.aRepeatedString && !!b.aRepeatedString && a.aRepeatedString.length === b.aRepeatedString.length && !a.aRepeatedString.find(function (aValue, i) {
            return (a.aRepeatedString && a.aRepeatedString[i]) === (b.aRepeatedString && b.aRepeatedString[i]);
        }));
    }
}

export namespace Complex {
    /** Properties of a Nested. */
    export interface INested {
        anInt: number;
    }

    /**
     * Represents a Nested.
     */
    export class Nested implements INested {
        /**
         * Constructs a new Nested.
         */
        constructor(properties?: INested) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        anInt: number = 0;

        /**
         * Creates a new Nested instance using the specified properties.
         */
        static create(properties: INested): Nested {
            return new Nested(properties);
        }

        /**
         * Encodes the specified Nested message. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.anInt);
            return writer;
        }

        /**
         * Encodes the specified Nested message, length delimited. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Nested message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Nested {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new Complex.Nested();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.anInt = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("anInt"))
                throw new $util.ProtocolError("missing required 'anInt'", { instance: message });
            return message;
        }

        /**
         * Decodes a Nested message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Nested {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Nested message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.anInt))
                return "anInt: integer expected";
            return null;
        }

        /**
         * Creates a Nested message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): INested {
            if (object instanceof Complex.Nested)
                return object;
            var message = new Complex.Nested();
            if (object.anInt != null)
                message.anInt = object.anInt | 0;
            return message;
        }

        /**
         * Creates a plain object from a Nested message. Also converts values to other types if specified.
         * @param message Nested
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: INested, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults)
                object.anInt = 0;
            if (message.anInt != null && message.hasOwnProperty("anInt"))
                object.anInt = message.anInt;
            return object;
        }

        /**
         * Converts this Nested to JSON.
         */
        toJSON() {
            return Nested.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: INested, b?: INested): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.anInt === b.anInt;
        }
    }

}

/** Properties of an OuterMessage. */
export interface IOuterMessage {
}

/**
 * Represents an OuterMessage.
 */
export class OuterMessage implements IOuterMessage {
    /**
     * Constructs a new OuterMessage.
     */
    constructor(properties?: IOuterMessage) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new OuterMessage instance using the specified properties.
     */
    static create(properties: IOuterMessage): OuterMessage {
        return new OuterMessage(properties);
    }

    /**
     * Encodes the specified OuterMessage message. Does not implicitly {@link OuterMessage.verify|verify} messages.
     * @param message OuterMessagemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IOuterMessage, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified OuterMessage message, length delimited. Does not implicitly {@link OuterMessage.verify|verify} messages.
     * @param message OuterMessagemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IOuterMessage, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an OuterMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): OuterMessage {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new OuterMessage();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an OuterMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): OuterMessage {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an OuterMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates an OuterMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IOuterMessage {
        if (object instanceof OuterMessage)
            return object;
        return new OuterMessage();
    }

    /**
     * Creates a plain object from an OuterMessage message. Also converts values to other types if specified.
     * @param message OuterMessage
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IOuterMessage, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this OuterMessage to JSON.
     */
    toJSON() {
        return OuterMessage.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IOuterMessage, b?: IOuterMessage): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export namespace OuterMessage {
    /** Properties of a Complex. */
    export interface IComplex {
        innerComplexField?: number;
    }

    /**
     * Represents a Complex.
     */
    export class Complex implements IComplex {
        /**
         * Constructs a new Complex.
         */
        constructor(properties?: IComplex) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        innerComplexField?: number = 0;

        /**
         * Creates a new Complex instance using the specified properties.
         */
        static create(properties: IComplex): Complex {
            return new Complex(properties);
        }

        /**
         * Encodes the specified Complex message. Does not implicitly {@link Complex.verify|verify} messages.
         * @param message Complexmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.innerComplexField != null && Object.hasOwnProperty.call(message, "innerComplexField"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.innerComplexField);
            return writer;
        }

        /**
         * Encodes the specified Complex message, length delimited. Does not implicitly {@link Complex.verify|verify} messages.
         * @param message Complexmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IComplex, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Complex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Complex {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new OuterMessage.Complex();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.innerComplexField = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a Complex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Complex {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Complex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.innerComplexField != null && message.hasOwnProperty("innerComplexField"))
                if (!$util.isInteger(message.innerComplexField))
                    return "innerComplexField: integer expected";
            return null;
        }

        /**
         * Creates a Complex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IComplex {
            if (object instanceof OuterMessage.Complex)
                return object;
            var message = new OuterMessage.Complex();
            if (object.innerComplexField != null)
                message.innerComplexField = object.innerComplexField | 0;
            return message;
        }

        /**
         * Creates a plain object from a Complex message. Also converts values to other types if specified.
         * @param message Complex
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IComplex, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults)
                object.innerComplexField = 0;
            if (message.innerComplexField != null && message.hasOwnProperty("innerComplexField"))
                object.innerComplexField = message.innerComplexField;
            return object;
        }

        /**
         * Converts this Complex to JSON.
         */
        toJSON() {
            return Complex.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IComplex, b?: IComplex): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.innerComplexField === b.innerComplexField;
        }
    }

}

/** Properties of an IsExtension. */
export interface IIsExtension {
    ext1?: string;
}

/**
 * Represents an IsExtension.
 */
export class IsExtension implements IIsExtension {
    /**
     * Constructs a new IsExtension.
     */
    constructor(properties?: IIsExtension) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ext1?: string = "";

    /**
     * Creates a new IsExtension instance using the specified properties.
     */
    static create(properties: IIsExtension): IsExtension {
        return new IsExtension(properties);
    }

    /**
     * Encodes the specified IsExtension message. Does not implicitly {@link IsExtension.verify|verify} messages.
     * @param message IsExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IIsExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.ext1 != null && Object.hasOwnProperty.call(message, "ext1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ext1);
        return writer;
    }

    /**
     * Encodes the specified IsExtension message, length delimited. Does not implicitly {@link IsExtension.verify|verify} messages.
     * @param message IsExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IIsExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an IsExtension message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): IsExtension {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new IsExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.ext1 = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an IsExtension message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): IsExtension {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an IsExtension message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ext1 != null && message.hasOwnProperty("ext1"))
            if (!$util.isString(message.ext1))
                return "ext1: string expected";
        return null;
    }

    /**
     * Creates an IsExtension message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IIsExtension {
        if (object instanceof IsExtension)
            return object;
        var message = new IsExtension();
        if (object.ext1 != null)
            message.ext1 = String(object.ext1);
        return message;
    }

    /**
     * Creates a plain object from an IsExtension message. Also converts values to other types if specified.
     * @param message IsExtension
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IIsExtension, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.ext1 = "";
        if (message.ext1 != null && message.hasOwnProperty("ext1"))
            object.ext1 = message.ext1;
        return object;
    }

    /**
     * Converts this IsExtension to JSON.
     */
    toJSON() {
        return IsExtension.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IIsExtension, b?: IIsExtension): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.ext1 === b.ext1;
    }
}

export namespace IsExtension {


}

/** Properties of an IndirectExtension. */
export interface IIndirectExtension {
}

/**
 * Represents an IndirectExtension.
 */
export class IndirectExtension implements IIndirectExtension {
    /**
     * Constructs a new IndirectExtension.
     */
    constructor(properties?: IIndirectExtension) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new IndirectExtension instance using the specified properties.
     */
    static create(properties: IIndirectExtension): IndirectExtension {
        return new IndirectExtension(properties);
    }

    /**
     * Encodes the specified IndirectExtension message. Does not implicitly {@link IndirectExtension.verify|verify} messages.
     * @param message IndirectExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IIndirectExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified IndirectExtension message, length delimited. Does not implicitly {@link IndirectExtension.verify|verify} messages.
     * @param message IndirectExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IIndirectExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes an IndirectExtension message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): IndirectExtension {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new IndirectExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes an IndirectExtension message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): IndirectExtension {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies an IndirectExtension message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates an IndirectExtension message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IIndirectExtension {
        if (object instanceof IndirectExtension)
            return object;
        return new IndirectExtension();
    }

    /**
     * Creates a plain object from an IndirectExtension message. Also converts values to other types if specified.
     * @param message IndirectExtension
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IIndirectExtension, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this IndirectExtension to JSON.
     */
    toJSON() {
        return IndirectExtension.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IIndirectExtension, b?: IIndirectExtension): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export namespace IndirectExtension {




}


/** Properties of a DefaultValues. */
export interface IDefaultValues {
    stringField?: string;
    boolField?: boolean;
    intField?: (number|$protobuf.Long);
    enumField?: DefaultValues.Enum;
    emptyField?: string;
    bytesField?: Uint8Array;
}

/**
 * Represents a DefaultValues.
 */
export class DefaultValues implements IDefaultValues {
    /**
     * Constructs a new DefaultValues.
     */
    constructor(properties?: IDefaultValues) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    stringField?: string = "default<>abc";
    boolField?: boolean = true;
    intField?: (number|$protobuf.Long) = $util.Long ? ($util.Long as any).fromBits(11, 0, false) : 11;
    enumField?: DefaultValues.Enum = 13;
    emptyField?: string = "";
    bytesField?: Uint8Array= $util.newBuffer([109,111,111]);

    /**
     * Creates a new DefaultValues instance using the specified properties.
     */
    static create(properties: IDefaultValues): DefaultValues {
        return new DefaultValues(properties);
    }

    /**
     * Encodes the specified DefaultValues message. Does not implicitly {@link DefaultValues.verify|verify} messages.
     * @param message DefaultValuesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IDefaultValues, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.stringField != null && Object.hasOwnProperty.call(message, "stringField"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.stringField);
        if (message.boolField != null && Object.hasOwnProperty.call(message, "boolField"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolField);
        if (message.intField != null && Object.hasOwnProperty.call(message, "intField"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.intField);
        if (message.enumField != null && Object.hasOwnProperty.call(message, "enumField"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.enumField);
        if (message.emptyField != null && Object.hasOwnProperty.call(message, "emptyField"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.emptyField);
        if (message.bytesField != null && Object.hasOwnProperty.call(message, "bytesField"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.bytesField);
        return writer;
    }

    /**
     * Encodes the specified DefaultValues message, length delimited. Does not implicitly {@link DefaultValues.verify|verify} messages.
     * @param message DefaultValuesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IDefaultValues, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a DefaultValues message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): DefaultValues {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new DefaultValues();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.stringField = reader.string();
                break;
            case 2:
                message.boolField = reader.bool();
                break;
            case 3:
                message.intField = reader.int64();
                break;
            case 4:
                message.enumField = reader.int32();
                break;
            case 6:
                message.emptyField = reader.string();
                break;
            case 8:
                message.bytesField = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a DefaultValues message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): DefaultValues {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a DefaultValues message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.stringField != null && message.hasOwnProperty("stringField"))
            if (!$util.isString(message.stringField))
                return "stringField: string expected";
        if (message.boolField != null && message.hasOwnProperty("boolField"))
            if (typeof message.boolField !== "boolean")
                return "boolField: boolean expected";
        if (message.intField != null && message.hasOwnProperty("intField"))
            if (!$util.isInteger(message.intField) && !(message.intField && $util.isInteger(message.intField.low) && $util.isInteger(message.intField.high)))
                return "intField: integer|Long expected";
        if (message.enumField != null && message.hasOwnProperty("enumField"))
            switch (message.enumField) {
            default:
                return "enumField: enum value expected";
            case 13:
            case 77:
                break;
            }
        if (message.emptyField != null && message.hasOwnProperty("emptyField"))
            if (!$util.isString(message.emptyField))
                return "emptyField: string expected";
        if (message.bytesField != null && message.hasOwnProperty("bytesField"))
            if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField)))
                return "bytesField: buffer expected";
        return null;
    }

    /**
     * Creates a DefaultValues message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IDefaultValues {
        if (object instanceof DefaultValues)
            return object;
        var message = new DefaultValues();
        if (object.stringField != null)
            message.stringField = String(object.stringField);
        if (object.boolField != null)
            message.boolField = Boolean(object.boolField);
        if (object.intField != null)
            if ($util.Long)
                (message.intField = ($util.Long as any).fromValue(object.intField)).unsigned = false;
            else if (typeof object.intField === "string")
                message.intField = parseInt(object.intField, 10);
            else if (typeof object.intField === "number")
                message.intField = object.intField;
            else if (typeof object.intField === "object")
                message.intField = new $util.LongBits(object.intField).toNumber();
        switch (object.enumField) {
        case "E1":
        case 13:
            message.enumField = 13;
            break;
        case "E2":
        case 77:
            message.enumField = 77;
            break;
        }
        if (object.emptyField != null)
            message.emptyField = String(object.emptyField);
        if (object.bytesField != null)
            if (typeof object.bytesField === "string")
                $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
            else if (object.bytesField.length)
                message.bytesField = object.bytesField;
        return message;
    }

    /**
     * Creates a plain object from a DefaultValues message. Also converts values to other types if specified.
     * @param message DefaultValues
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IDefaultValues, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.stringField = "default<>abc";
            object.boolField = true;
            if ($util.Long) {
                var long = new $util.Long(11, 0, false);
                object.intField = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.intField = options.longs === String ? "11" : 11;
            object.enumField = 13;
            object.emptyField = "";
            if (options.bytes === String)
                object.bytesField = "moo";
            else {
                object.bytesField = [
                    109,
                    111,
                    111
                ];
                if (options.bytes !== Array)
                    object.bytesField = $util.newBuffer(object.bytesField);
            }
        }
        if (message.stringField != null && message.hasOwnProperty("stringField"))
            object.stringField = message.stringField;
        if (message.boolField != null && message.hasOwnProperty("boolField"))
            object.boolField = message.boolField;
        if (message.intField != null && message.hasOwnProperty("intField"))
            if (typeof message.intField === "number")
                object.intField = options.longs === String ? String(message.intField) : message.intField;
            else
                object.intField = options.longs === String ? $util.Long.prototype.toString.call(message.intField) : options.longs === Number ? new $util.LongBits(message.intField).toNumber() : message.intField;
        if (message.enumField != null && message.hasOwnProperty("enumField"))
            object.enumField = options.enums === String ? DefaultValues.Enum[message.enumField] : message.enumField;
        if (message.emptyField != null && message.hasOwnProperty("emptyField"))
            object.emptyField = message.emptyField;
        if (message.bytesField != null && message.hasOwnProperty("bytesField"))
            object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
        return object;
    }

    /**
     * Converts this DefaultValues to JSON.
     */
    toJSON() {
        return DefaultValues.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IDefaultValues, b?: IDefaultValues): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.stringField === b.stringField && a.boolField === b.boolField && $util.longEquals(a.intField, b.intField) && a.enumField === b.enumField && a.emptyField === b.emptyField && $util.bytesEquals(a.bytesField, b.bytesField);
    }
}

export namespace DefaultValues {
    export enum Enum {
        E1 = 13,
        E2 = 77,
    }

}

/** Properties of a FloatingPointFields. */
export interface IFloatingPointFields {
    optionalFloatField?: number;
    requiredFloatField: number;
    repeatedFloatField?: number[];
    defaultFloatField?: number;
    optionalDoubleField?: number;
    requiredDoubleField: number;
    repeatedDoubleField?: number[];
    defaultDoubleField?: number;
}

/**
 * Represents a FloatingPointFields.
 */
export class FloatingPointFields implements IFloatingPointFields {
    /**
     * Constructs a new FloatingPointFields.
     */
    constructor(properties?: IFloatingPointFields) {
        this.repeatedFloatField = [];
        this.repeatedDoubleField = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    optionalFloatField?: number = 0;
    requiredFloatField: number = 0;
    repeatedFloatField?: number[];
    defaultFloatField?: number = 2;
    optionalDoubleField?: number = 0;
    requiredDoubleField: number = 0;
    repeatedDoubleField?: number[];
    defaultDoubleField?: number = 2;

    /**
     * Creates a new FloatingPointFields instance using the specified properties.
     */
    static create(properties: IFloatingPointFields): FloatingPointFields {
        return new FloatingPointFields(properties);
    }

    /**
     * Encodes the specified FloatingPointFields message. Does not implicitly {@link FloatingPointFields.verify|verify} messages.
     * @param message FloatingPointFieldsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IFloatingPointFields, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.optionalFloatField != null && Object.hasOwnProperty.call(message, "optionalFloatField"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.optionalFloatField);
        writer.uint32(/* id 2, wireType 5 =*/21).float(message.requiredFloatField);
        if (message.repeatedFloatField != null && message.repeatedFloatField.length)
            for (var i = 0; i < message.repeatedFloatField.length; ++i)
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.repeatedFloatField[i]);
        if (message.defaultFloatField != null && Object.hasOwnProperty.call(message, "defaultFloatField"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.defaultFloatField);
        if (message.optionalDoubleField != null && Object.hasOwnProperty.call(message, "optionalDoubleField"))
            writer.uint32(/* id 5, wireType 1 =*/41).double(message.optionalDoubleField);
        writer.uint32(/* id 6, wireType 1 =*/49).double(message.requiredDoubleField);
        if (message.repeatedDoubleField != null && message.repeatedDoubleField.length)
            for (var i = 0; i < message.repeatedDoubleField.length; ++i)
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.repeatedDoubleField[i]);
        if (message.defaultDoubleField != null && Object.hasOwnProperty.call(message, "defaultDoubleField"))
            writer.uint32(/* id 8, wireType 1 =*/65).double(message.defaultDoubleField);
        return writer;
    }

    /**
     * Encodes the specified FloatingPointFields message, length delimited. Does not implicitly {@link FloatingPointFields.verify|verify} messages.
     * @param message FloatingPointFieldsmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IFloatingPointFields, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a FloatingPointFields message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FloatingPointFields {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new FloatingPointFields();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.optionalFloatField = reader.float();
                break;
            case 2:
                message.requiredFloatField = reader.float();
                break;
            case 3:
                if (!(message.repeatedFloatField && message.repeatedFloatField.length))
                    message.repeatedFloatField = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.repeatedFloatField.push(reader.float());
                } else
                    message.repeatedFloatField.push(reader.float());
                break;
            case 4:
                message.defaultFloatField = reader.float();
                break;
            case 5:
                message.optionalDoubleField = reader.double();
                break;
            case 6:
                message.requiredDoubleField = reader.double();
                break;
            case 7:
                if (!(message.repeatedDoubleField && message.repeatedDoubleField.length))
                    message.repeatedDoubleField = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.repeatedDoubleField.push(reader.double());
                } else
                    message.repeatedDoubleField.push(reader.double());
                break;
            case 8:
                message.defaultDoubleField = reader.double();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("requiredFloatField"))
            throw new $util.ProtocolError("missing required 'requiredFloatField'", { instance: message });
        if (!message.hasOwnProperty("requiredDoubleField"))
            throw new $util.ProtocolError("missing required 'requiredDoubleField'", { instance: message });
        return message;
    }

    /**
     * Decodes a FloatingPointFields message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FloatingPointFields {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a FloatingPointFields message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.optionalFloatField != null && message.hasOwnProperty("optionalFloatField"))
            if (typeof message.optionalFloatField !== "number")
                return "optionalFloatField: number expected";
        if (typeof message.requiredFloatField !== "number")
            return "requiredFloatField: number expected";
        if (message.repeatedFloatField != null && message.hasOwnProperty("repeatedFloatField")) {
            if (!Array.isArray(message.repeatedFloatField))
                return "repeatedFloatField: array expected";
            for (var i = 0; i < message.repeatedFloatField.length; ++i)
                if (typeof message.repeatedFloatField[i] !== "number")
                    return "repeatedFloatField: number[] expected";
        }
        if (message.defaultFloatField != null && message.hasOwnProperty("defaultFloatField"))
            if (typeof message.defaultFloatField !== "number")
                return "defaultFloatField: number expected";
        if (message.optionalDoubleField != null && message.hasOwnProperty("optionalDoubleField"))
            if (typeof message.optionalDoubleField !== "number")
                return "optionalDoubleField: number expected";
        if (typeof message.requiredDoubleField !== "number")
            return "requiredDoubleField: number expected";
        if (message.repeatedDoubleField != null && message.hasOwnProperty("repeatedDoubleField")) {
            if (!Array.isArray(message.repeatedDoubleField))
                return "repeatedDoubleField: array expected";
            for (var i = 0; i < message.repeatedDoubleField.length; ++i)
                if (typeof message.repeatedDoubleField[i] !== "number")
                    return "repeatedDoubleField: number[] expected";
        }
        if (message.defaultDoubleField != null && message.hasOwnProperty("defaultDoubleField"))
            if (typeof message.defaultDoubleField !== "number")
                return "defaultDoubleField: number expected";
        return null;
    }

    /**
     * Creates a FloatingPointFields message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IFloatingPointFields {
        if (object instanceof FloatingPointFields)
            return object;
        var message = new FloatingPointFields();
        if (object.optionalFloatField != null)
            message.optionalFloatField = Number(object.optionalFloatField);
        if (object.requiredFloatField != null)
            message.requiredFloatField = Number(object.requiredFloatField);
        if (object.repeatedFloatField) {
            if (!Array.isArray(object.repeatedFloatField))
                throw TypeError("FloatingPointFields.repeatedFloatField: array expected");
            message.repeatedFloatField = [];
            for (var i = 0; i < object.repeatedFloatField.length; ++i)
                message.repeatedFloatField[i] = Number(object.repeatedFloatField[i]);
        }
        if (object.defaultFloatField != null)
            message.defaultFloatField = Number(object.defaultFloatField);
        if (object.optionalDoubleField != null)
            message.optionalDoubleField = Number(object.optionalDoubleField);
        if (object.requiredDoubleField != null)
            message.requiredDoubleField = Number(object.requiredDoubleField);
        if (object.repeatedDoubleField) {
            if (!Array.isArray(object.repeatedDoubleField))
                throw TypeError("FloatingPointFields.repeatedDoubleField: array expected");
            message.repeatedDoubleField = [];
            for (var i = 0; i < object.repeatedDoubleField.length; ++i)
                message.repeatedDoubleField[i] = Number(object.repeatedDoubleField[i]);
        }
        if (object.defaultDoubleField != null)
            message.defaultDoubleField = Number(object.defaultDoubleField);
        return message;
    }

    /**
     * Creates a plain object from a FloatingPointFields message. Also converts values to other types if specified.
     * @param message FloatingPointFields
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IFloatingPointFields, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.repeatedFloatField = [];
            object.repeatedDoubleField = [];
        }
        if (options.defaults) {
            object.optionalFloatField = 0;
            object.requiredFloatField = 0;
            object.defaultFloatField = 2;
            object.optionalDoubleField = 0;
            object.requiredDoubleField = 0;
            object.defaultDoubleField = 2;
        }
        if (message.optionalFloatField != null && message.hasOwnProperty("optionalFloatField"))
            object.optionalFloatField = options.json && !isFinite(message.optionalFloatField) ? String(message.optionalFloatField) : message.optionalFloatField;
        if (message.requiredFloatField != null && message.hasOwnProperty("requiredFloatField"))
            object.requiredFloatField = options.json && !isFinite(message.requiredFloatField) ? String(message.requiredFloatField) : message.requiredFloatField;
        if (message.repeatedFloatField && message.repeatedFloatField.length) {
            object.repeatedFloatField = [];
            for (var j = 0; j < message.repeatedFloatField.length; ++j)
                object.repeatedFloatField[j] = options.json && !isFinite(message.repeatedFloatField[j]) ? String(message.repeatedFloatField[j]) : message.repeatedFloatField[j];
        }
        if (message.defaultFloatField != null && message.hasOwnProperty("defaultFloatField"))
            object.defaultFloatField = options.json && !isFinite(message.defaultFloatField) ? String(message.defaultFloatField) : message.defaultFloatField;
        if (message.optionalDoubleField != null && message.hasOwnProperty("optionalDoubleField"))
            object.optionalDoubleField = options.json && !isFinite(message.optionalDoubleField) ? String(message.optionalDoubleField) : message.optionalDoubleField;
        if (message.requiredDoubleField != null && message.hasOwnProperty("requiredDoubleField"))
            object.requiredDoubleField = options.json && !isFinite(message.requiredDoubleField) ? String(message.requiredDoubleField) : message.requiredDoubleField;
        if (message.repeatedDoubleField && message.repeatedDoubleField.length) {
            object.repeatedDoubleField = [];
            for (var j = 0; j < message.repeatedDoubleField.length; ++j)
                object.repeatedDoubleField[j] = options.json && !isFinite(message.repeatedDoubleField[j]) ? String(message.repeatedDoubleField[j]) : message.repeatedDoubleField[j];
        }
        if (message.defaultDoubleField != null && message.hasOwnProperty("defaultDoubleField"))
            object.defaultDoubleField = options.json && !isFinite(message.defaultDoubleField) ? String(message.defaultDoubleField) : message.defaultDoubleField;
        return object;
    }

    /**
     * Converts this FloatingPointFields to JSON.
     */
    toJSON() {
        return FloatingPointFields.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IFloatingPointFields, b?: IFloatingPointFields): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.optionalFloatField === b.optionalFloatField && a.requiredFloatField === b.requiredFloatField && (!!a.repeatedFloatField && !!b.repeatedFloatField && a.repeatedFloatField.length === b.repeatedFloatField.length && !a.repeatedFloatField.find(function (aValue, i) {
            return (a.repeatedFloatField && a.repeatedFloatField[i]) === (b.repeatedFloatField && b.repeatedFloatField[i]);
        })) && a.defaultFloatField === b.defaultFloatField && a.optionalDoubleField === b.optionalDoubleField && a.requiredDoubleField === b.requiredDoubleField && (!!a.repeatedDoubleField && !!b.repeatedDoubleField && a.repeatedDoubleField.length === b.repeatedDoubleField.length && !a.repeatedDoubleField.find(function (aValue, i) {
            return (a.repeatedDoubleField && a.repeatedDoubleField[i]) === (b.repeatedDoubleField && b.repeatedDoubleField[i]);
        })) && a.defaultDoubleField === b.defaultDoubleField;
    }
}

/** Properties of a TestClone. */
export interface ITestClone {
    str?: string;
    simple1?: ISimple1;
    simple2?: ISimple1[];
    bytesField?: Uint8Array;
    unused?: string;
    "CloneExtension.extField"?: ICloneExtension;
}

/**
 * Represents a TestClone.
 */
export class TestClone implements ITestClone {
    /**
     * Constructs a new TestClone.
     */
    constructor(properties?: ITestClone) {
        this.simple2 = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    str?: string = "";
    simple1?: ISimple1;
    simple2?: ISimple1[];
    bytesField?: Uint8Array= $util.newBuffer([]);
    unused?: string = "";
    ["CloneExtension.extField"]?: ICloneExtension;

    /**
     * Creates a new TestClone instance using the specified properties.
     */
    static create(properties: ITestClone): TestClone {
        return new TestClone(properties);
    }

    /**
     * Encodes the specified TestClone message. Does not implicitly {@link TestClone.verify|verify} messages.
     * @param message TestClonemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestClone, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.str != null && Object.hasOwnProperty.call(message, "str"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.str);
        if (message.simple1 != null && Object.hasOwnProperty.call(message, "simple1"))
            Simple1.encode(message.simple1, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.simple2 != null && message.simple2.length)
            for (var i = 0; i < message.simple2.length; ++i)
                Simple1.encode(message.simple2[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.bytesField != null && Object.hasOwnProperty.call(message, "bytesField"))
            writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesField);
        if (message.unused != null && Object.hasOwnProperty.call(message, "unused"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.unused);
        if (message["CloneExtension.extField"] != null && Object.hasOwnProperty.call(message, "CloneExtension.extField"))
            CloneExtension.encode(message["CloneExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified TestClone message, length delimited. Does not implicitly {@link TestClone.verify|verify} messages.
     * @param message TestClonemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestClone, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestClone message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestClone {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestClone();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.str = reader.string();
                break;
            case 3:
                message.simple1 = Simple1.decode(reader, reader.uint32());
                break;
            case 5:
                if (!(message.simple2 && message.simple2.length))
                    message.simple2 = [];
                message.simple2.push(Simple1.decode(reader, reader.uint32()));
                break;
            case 6:
                message.bytesField = reader.bytes();
                break;
            case 7:
                message.unused = reader.string();
                break;
            case 100:
                message["CloneExtension.extField"] = CloneExtension.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestClone message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestClone {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestClone message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.str != null && message.hasOwnProperty("str"))
            if (!$util.isString(message.str))
                return "str: string expected";
        if (message.simple1 != null && message.hasOwnProperty("simple1")) {
            var error = Simple1.verify(message.simple1);
            if (error)
                return "simple1." + error;
        }
        if (message.simple2 != null && message.hasOwnProperty("simple2")) {
            if (!Array.isArray(message.simple2))
                return "simple2: array expected";
            for (var i = 0; i < message.simple2.length; ++i) {
                var error = Simple1.verify(message.simple2[i]);
                if (error)
                    return "simple2." + error;
            }
        }
        if (message.bytesField != null && message.hasOwnProperty("bytesField"))
            if (!(message.bytesField && typeof message.bytesField.length === "number" || $util.isString(message.bytesField)))
                return "bytesField: buffer expected";
        if (message.unused != null && message.hasOwnProperty("unused"))
            if (!$util.isString(message.unused))
                return "unused: string expected";
        if (message["CloneExtension.extField"] != null && message.hasOwnProperty("CloneExtension.extField")) {
            var error = CloneExtension.verify(message["CloneExtension.extField"]);
            if (error)
                return "CloneExtension.extField." + error;
        }
        return null;
    }

    /**
     * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestClone {
        if (object instanceof TestClone)
            return object;
        var message = new TestClone();
        if (object.str != null)
            message.str = String(object.str);
        if (object.simple1 != null) {
            if (typeof object.simple1 !== "object")
                throw TypeError("TestClone.simple1: object expected");
            message.simple1 = Simple1.fromObject(object.simple1);
        }
        if (object.simple2) {
            if (!Array.isArray(object.simple2))
                throw TypeError("TestClone.simple2: array expected");
            message.simple2 = [];
            for (var i = 0; i < object.simple2.length; ++i) {
                if (typeof object.simple2[i] !== "object")
                    throw TypeError("TestClone.simple2: object expected");
                message.simple2[i] = Simple1.fromObject(object.simple2[i]);
            }
        }
        if (object.bytesField != null)
            if (typeof object.bytesField === "string")
                $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
            else if (object.bytesField.length)
                message.bytesField = object.bytesField;
        if (object.unused != null)
            message.unused = String(object.unused);
        if (object["CloneExtension.extField"] != null) {
            if (typeof object["CloneExtension.extField"] !== "object")
                throw TypeError("TestClone.CloneExtension.extField: object expected");
            message["CloneExtension.extField"] = CloneExtension.fromObject(object["CloneExtension.extField"]);
        }
        return message;
    }

    /**
     * Creates a plain object from a TestClone message. Also converts values to other types if specified.
     * @param message TestClone
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestClone, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.simple2 = [];
        if (options.defaults) {
            object.str = "";
            object.simple1 = null;
            if (options.bytes === String)
                object.bytesField = "";
            else {
                object.bytesField = [];
                if (options.bytes !== Array)
                    object.bytesField = $util.newBuffer(object.bytesField);
            }
            object.unused = "";
            object["CloneExtension.extField"] = null;
        }
        if (message.str != null && message.hasOwnProperty("str"))
            object.str = message.str;
        if (message.simple1 != null && message.hasOwnProperty("simple1"))
            object.simple1 = Simple1.toObject(message.simple1, options);
        if (message.simple2 && message.simple2.length) {
            object.simple2 = [];
            for (var j = 0; j < message.simple2.length; ++j)
                object.simple2[j] = Simple1.toObject(message.simple2[j], options);
        }
        if (message.bytesField != null && message.hasOwnProperty("bytesField"))
            object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
        if (message.unused != null && message.hasOwnProperty("unused"))
            object.unused = message.unused;
        if (message["CloneExtension.extField"] != null && message.hasOwnProperty("CloneExtension.extField"))
            object["CloneExtension.extField"] = CloneExtension.toObject(message["CloneExtension.extField"], options);
        return object;
    }

    /**
     * Converts this TestClone to JSON.
     */
    toJSON() {
        return TestClone.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestClone, b?: ITestClone): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.str === b.str && Simple1.equals(a.simple1, b.simple1) && (!!a.simple2 && !!b.simple2 && a.simple2.length === b.simple2.length && !a.simple2.find(function (aValue, i) {
            return Simple1.equals(a.simple2 && a.simple2[i], b.simple2 && b.simple2[i]);
        })) && $util.bytesEquals(a.bytesField, b.bytesField) && a.unused === b.unused && CloneExtension.equals(a["CloneExtension.extField"], b["CloneExtension.extField"]);
    }
}

/** Properties of a CloneExtension. */
export interface ICloneExtension {
    ext?: string;
}

/**
 * Represents a CloneExtension.
 */
export class CloneExtension implements ICloneExtension {
    /**
     * Constructs a new CloneExtension.
     */
    constructor(properties?: ICloneExtension) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    ext?: string = "";

    /**
     * Creates a new CloneExtension instance using the specified properties.
     */
    static create(properties: ICloneExtension): CloneExtension {
        return new CloneExtension(properties);
    }

    /**
     * Encodes the specified CloneExtension message. Does not implicitly {@link CloneExtension.verify|verify} messages.
     * @param message CloneExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ICloneExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.ext != null && Object.hasOwnProperty.call(message, "ext"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ext);
        return writer;
    }

    /**
     * Encodes the specified CloneExtension message, length delimited. Does not implicitly {@link CloneExtension.verify|verify} messages.
     * @param message CloneExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ICloneExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a CloneExtension message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): CloneExtension {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new CloneExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.ext = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a CloneExtension message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): CloneExtension {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a CloneExtension message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.ext != null && message.hasOwnProperty("ext"))
            if (!$util.isString(message.ext))
                return "ext: string expected";
        return null;
    }

    /**
     * Creates a CloneExtension message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ICloneExtension {
        if (object instanceof CloneExtension)
            return object;
        var message = new CloneExtension();
        if (object.ext != null)
            message.ext = String(object.ext);
        return message;
    }

    /**
     * Creates a plain object from a CloneExtension message. Also converts values to other types if specified.
     * @param message CloneExtension
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ICloneExtension, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.ext = "";
        if (message.ext != null && message.hasOwnProperty("ext"))
            object.ext = message.ext;
        return object;
    }

    /**
     * Converts this CloneExtension to JSON.
     */
    toJSON() {
        return CloneExtension.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ICloneExtension, b?: ICloneExtension): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.ext === b.ext;
    }
}

export namespace CloneExtension {

}

/** Properties of a TestGroup. */
export interface ITestGroup {
    repeatedGroup?: TestGroup.IRepeatedGroup[];
    requiredGroup: TestGroup.IRequiredGroup;
    optionalGroup?: TestGroup.IOptionalGroup;
    id?: string;
    requiredSimple: ISimple2;
    optionalSimple?: ISimple2;
}

/**
 * Represents a TestGroup.
 */
export class TestGroup implements ITestGroup {
    /**
     * Constructs a new TestGroup.
     */
    constructor(properties?: ITestGroup) {
        this.repeatedGroup = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    repeatedGroup?: TestGroup.IRepeatedGroup[];
    requiredGroup: TestGroup.IRequiredGroup;
    optionalGroup?: TestGroup.IOptionalGroup;
    id?: string = "";
    requiredSimple: ISimple2;
    optionalSimple?: ISimple2;

    /**
     * Creates a new TestGroup instance using the specified properties.
     */
    static create(properties: ITestGroup): TestGroup {
        return new TestGroup(properties);
    }

    /**
     * Encodes the specified TestGroup message. Does not implicitly {@link TestGroup.verify|verify} messages.
     * @param message TestGroupmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestGroup, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.repeatedGroup != null && message.repeatedGroup.length)
            for (var i = 0; i < message.repeatedGroup.length; ++i)
                TestGroup.RepeatedGroup.encode(message.repeatedGroup[i], writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
        TestGroup.RequiredGroup.encode(message.requiredGroup, writer.uint32(/* id 2, wireType 3 =*/19)).uint32(/* id 2, wireType 4 =*/20);
        if (message.optionalGroup != null && Object.hasOwnProperty.call(message, "optionalGroup"))
            TestGroup.OptionalGroup.encode(message.optionalGroup, writer.uint32(/* id 3, wireType 3 =*/27)).uint32(/* id 3, wireType 4 =*/28);
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
        Simple2.encode(message.requiredSimple, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.optionalSimple != null && Object.hasOwnProperty.call(message, "optionalSimple"))
            Simple2.encode(message.optionalSimple, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    }

    /**
     * Encodes the specified TestGroup message, length delimited. Does not implicitly {@link TestGroup.verify|verify} messages.
     * @param message TestGroupmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestGroup, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestGroup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestGroup {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestGroup();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.repeatedGroup && message.repeatedGroup.length))
                    message.repeatedGroup = [];
                message.repeatedGroup.push(TestGroup.RepeatedGroup.decode(reader));
                break;
            case 2:
                message.requiredGroup = TestGroup.RequiredGroup.decode(reader);
                break;
            case 3:
                message.optionalGroup = TestGroup.OptionalGroup.decode(reader);
                break;
            case 4:
                message.id = reader.string();
                break;
            case 5:
                message.requiredSimple = Simple2.decode(reader, reader.uint32());
                break;
            case 6:
                message.optionalSimple = Simple2.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        if (!message.hasOwnProperty("requiredGroup"))
            throw new $util.ProtocolError("missing required 'requiredGroup'", { instance: message });
        if (!message.hasOwnProperty("requiredSimple"))
            throw new $util.ProtocolError("missing required 'requiredSimple'", { instance: message });
        return message;
    }

    /**
     * Decodes a TestGroup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestGroup {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestGroup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.repeatedGroup != null && message.hasOwnProperty("repeatedGroup")) {
            if (!Array.isArray(message.repeatedGroup))
                return "repeatedGroup: array expected";
            for (var i = 0; i < message.repeatedGroup.length; ++i) {
                var error = TestGroup.RepeatedGroup.verify(message.repeatedGroup[i]);
                if (error)
                    return "repeatedGroup." + error;
            }
        }
        {
            var error = TestGroup.RequiredGroup.verify(message.requiredGroup);
            if (error)
                return "requiredGroup." + error;
        }
        if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup")) {
            var error = TestGroup.OptionalGroup.verify(message.optionalGroup);
            if (error)
                return "optionalGroup." + error;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        {
            var error = Simple2.verify(message.requiredSimple);
            if (error)
                return "requiredSimple." + error;
        }
        if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple")) {
            var error = Simple2.verify(message.optionalSimple);
            if (error)
                return "optionalSimple." + error;
        }
        return null;
    }

    /**
     * Creates a TestGroup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestGroup {
        if (object instanceof TestGroup)
            return object;
        var message = new TestGroup();
        if (object.repeatedGroup) {
            if (!Array.isArray(object.repeatedGroup))
                throw TypeError("TestGroup.repeatedGroup: array expected");
            message.repeatedGroup = [];
            for (var i = 0; i < object.repeatedGroup.length; ++i) {
                if (typeof object.repeatedGroup[i] !== "object")
                    throw TypeError("TestGroup.repeatedGroup: object expected");
                message.repeatedGroup[i] = TestGroup.RepeatedGroup.fromObject(object.repeatedGroup[i]);
            }
        }
        if (object.requiredGroup != null) {
            if (typeof object.requiredGroup !== "object")
                throw TypeError("TestGroup.requiredGroup: object expected");
            message.requiredGroup = TestGroup.RequiredGroup.fromObject(object.requiredGroup);
        }
        if (object.optionalGroup != null) {
            if (typeof object.optionalGroup !== "object")
                throw TypeError("TestGroup.optionalGroup: object expected");
            message.optionalGroup = TestGroup.OptionalGroup.fromObject(object.optionalGroup);
        }
        if (object.id != null)
            message.id = String(object.id);
        if (object.requiredSimple != null) {
            if (typeof object.requiredSimple !== "object")
                throw TypeError("TestGroup.requiredSimple: object expected");
            message.requiredSimple = Simple2.fromObject(object.requiredSimple);
        }
        if (object.optionalSimple != null) {
            if (typeof object.optionalSimple !== "object")
                throw TypeError("TestGroup.optionalSimple: object expected");
            message.optionalSimple = Simple2.fromObject(object.optionalSimple);
        }
        return message;
    }

    /**
     * Creates a plain object from a TestGroup message. Also converts values to other types if specified.
     * @param message TestGroup
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestGroup, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.repeatedGroup = [];
        if (options.defaults) {
            object.requiredGroup = null;
            object.optionalGroup = null;
            object.id = "";
            object.requiredSimple = null;
            object.optionalSimple = null;
        }
        if (message.repeatedGroup && message.repeatedGroup.length) {
            object.repeatedGroup = [];
            for (var j = 0; j < message.repeatedGroup.length; ++j)
                object.repeatedGroup[j] = TestGroup.RepeatedGroup.toObject(message.repeatedGroup[j], options);
        }
        if (message.requiredGroup != null && message.hasOwnProperty("requiredGroup"))
            object.requiredGroup = TestGroup.RequiredGroup.toObject(message.requiredGroup, options);
        if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup"))
            object.optionalGroup = TestGroup.OptionalGroup.toObject(message.optionalGroup, options);
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.requiredSimple != null && message.hasOwnProperty("requiredSimple"))
            object.requiredSimple = Simple2.toObject(message.requiredSimple, options);
        if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple"))
            object.optionalSimple = Simple2.toObject(message.optionalSimple, options);
        return object;
    }

    /**
     * Converts this TestGroup to JSON.
     */
    toJSON() {
        return TestGroup.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestGroup, b?: ITestGroup): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return !!a.repeatedGroup && !!b.repeatedGroup && a.repeatedGroup.length === b.repeatedGroup.length && !a.repeatedGroup.find(function (aValue, i) {
            return TestGroup.RepeatedGroup.equals(a.repeatedGroup && a.repeatedGroup[i], b.repeatedGroup && b.repeatedGroup[i]);
        }) && TestGroup.RequiredGroup.equals(a.requiredGroup, b.requiredGroup) && TestGroup.OptionalGroup.equals(a.optionalGroup, b.optionalGroup) && a.id === b.id && Simple2.equals(a.requiredSimple, b.requiredSimple) && Simple2.equals(a.optionalSimple, b.optionalSimple);
    }
}

export namespace TestGroup {
    /** Properties of a RepeatedGroup. */
    export interface IRepeatedGroup {
        id: string;
        someBool?: boolean[];
    }

    /**
     * Represents a RepeatedGroup.
     */
    export class RepeatedGroup implements IRepeatedGroup {
        /**
         * Constructs a new RepeatedGroup.
         */
        constructor(properties?: IRepeatedGroup) {
            this.someBool = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        id: string = "";
        someBool?: boolean[];

        /**
         * Creates a new RepeatedGroup instance using the specified properties.
         */
        static create(properties: IRepeatedGroup): RepeatedGroup {
            return new RepeatedGroup(properties);
        }

        /**
         * Encodes the specified RepeatedGroup message. Does not implicitly {@link RepeatedGroup.verify|verify} messages.
         * @param message RepeatedGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IRepeatedGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.someBool != null && message.someBool.length)
                for (var i = 0; i < message.someBool.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.someBool[i]);
            return writer;
        }

        /**
         * Encodes the specified RepeatedGroup message, length delimited. Does not implicitly {@link RepeatedGroup.verify|verify} messages.
         * @param message RepeatedGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IRepeatedGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a RepeatedGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): RepeatedGroup {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new TestGroup.RepeatedGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if ((tag & 7) === 4)
                    break;
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    if (!(message.someBool && message.someBool.length))
                        message.someBool = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.someBool.push(reader.bool());
                    } else
                        message.someBool.push(reader.bool());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw new $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        }

        /**
         * Decodes a RepeatedGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): RepeatedGroup {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a RepeatedGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            if (message.someBool != null && message.hasOwnProperty("someBool")) {
                if (!Array.isArray(message.someBool))
                    return "someBool: array expected";
                for (var i = 0; i < message.someBool.length; ++i)
                    if (typeof message.someBool[i] !== "boolean")
                        return "someBool: boolean[] expected";
            }
            return null;
        }

        /**
         * Creates a RepeatedGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IRepeatedGroup {
            if (object instanceof TestGroup.RepeatedGroup)
                return object;
            var message = new TestGroup.RepeatedGroup();
            if (object.id != null)
                message.id = String(object.id);
            if (object.someBool) {
                if (!Array.isArray(object.someBool))
                    throw TypeError("TestGroup.RepeatedGroup.someBool: array expected");
                message.someBool = [];
                for (var i = 0; i < object.someBool.length; ++i)
                    message.someBool[i] = Boolean(object.someBool[i]);
            }
            return message;
        }

        /**
         * Creates a plain object from a RepeatedGroup message. Also converts values to other types if specified.
         * @param message RepeatedGroup
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IRepeatedGroup, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.someBool = [];
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.someBool && message.someBool.length) {
                object.someBool = [];
                for (var j = 0; j < message.someBool.length; ++j)
                    object.someBool[j] = message.someBool[j];
            }
            return object;
        }

        /**
         * Converts this RepeatedGroup to JSON.
         */
        toJSON() {
            return RepeatedGroup.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IRepeatedGroup, b?: IRepeatedGroup): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.id === b.id && (!!a.someBool && !!b.someBool && a.someBool.length === b.someBool.length && !a.someBool.find(function (aValue, i) {
                return (a.someBool && a.someBool[i]) === (b.someBool && b.someBool[i]);
            }));
        }
    }

    /** Properties of a RequiredGroup. */
    export interface IRequiredGroup {
        id: string;
    }

    /**
     * Represents a RequiredGroup.
     */
    export class RequiredGroup implements IRequiredGroup {
        /**
         * Constructs a new RequiredGroup.
         */
        constructor(properties?: IRequiredGroup) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        id: string = "";

        /**
         * Creates a new RequiredGroup instance using the specified properties.
         */
        static create(properties: IRequiredGroup): RequiredGroup {
            return new RequiredGroup(properties);
        }

        /**
         * Encodes the specified RequiredGroup message. Does not implicitly {@link RequiredGroup.verify|verify} messages.
         * @param message RequiredGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IRequiredGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        }

        /**
         * Encodes the specified RequiredGroup message, length delimited. Does not implicitly {@link RequiredGroup.verify|verify} messages.
         * @param message RequiredGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IRequiredGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a RequiredGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): RequiredGroup {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new TestGroup.RequiredGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if ((tag & 7) === 4)
                    break;
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw new $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        }

        /**
         * Decodes a RequiredGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): RequiredGroup {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a RequiredGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        }

        /**
         * Creates a RequiredGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IRequiredGroup {
            if (object instanceof TestGroup.RequiredGroup)
                return object;
            var message = new TestGroup.RequiredGroup();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        }

        /**
         * Creates a plain object from a RequiredGroup message. Also converts values to other types if specified.
         * @param message RequiredGroup
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IRequiredGroup, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        }

        /**
         * Converts this RequiredGroup to JSON.
         */
        toJSON() {
            return RequiredGroup.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IRequiredGroup, b?: IRequiredGroup): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.id === b.id;
        }
    }

    /** Properties of an OptionalGroup. */
    export interface IOptionalGroup {
        id: string;
    }

    /**
     * Represents an OptionalGroup.
     */
    export class OptionalGroup implements IOptionalGroup {
        /**
         * Constructs a new OptionalGroup.
         */
        constructor(properties?: IOptionalGroup) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        id: string = "";

        /**
         * Creates a new OptionalGroup instance using the specified properties.
         */
        static create(properties: IOptionalGroup): OptionalGroup {
            return new OptionalGroup(properties);
        }

        /**
         * Encodes the specified OptionalGroup message. Does not implicitly {@link OptionalGroup.verify|verify} messages.
         * @param message OptionalGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        }

        /**
         * Encodes the specified OptionalGroup message, length delimited. Does not implicitly {@link OptionalGroup.verify|verify} messages.
         * @param message OptionalGroupmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IOptionalGroup, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an OptionalGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): OptionalGroup {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new TestGroup.OptionalGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if ((tag & 7) === 4)
                    break;
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw new $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        }

        /**
         * Decodes an OptionalGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): OptionalGroup {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies an OptionalGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.id))
                return "id: string expected";
            return null;
        }

        /**
         * Creates an OptionalGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IOptionalGroup {
            if (object instanceof TestGroup.OptionalGroup)
                return object;
            var message = new TestGroup.OptionalGroup();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        }

        /**
         * Creates a plain object from an OptionalGroup message. Also converts values to other types if specified.
         * @param message OptionalGroup
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IOptionalGroup, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        }

        /**
         * Converts this OptionalGroup to JSON.
         */
        toJSON() {
            return OptionalGroup.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IOptionalGroup, b?: IOptionalGroup): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.id === b.id;
        }
    }

}

/** Properties of a TestGroup1. */
export interface ITestGroup1 {
    group?: TestGroup.IRepeatedGroup;
}

/**
 * Represents a TestGroup1.
 */
export class TestGroup1 implements ITestGroup1 {
    /**
     * Constructs a new TestGroup1.
     */
    constructor(properties?: ITestGroup1) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    group?: TestGroup.IRepeatedGroup;

    /**
     * Creates a new TestGroup1 instance using the specified properties.
     */
    static create(properties: ITestGroup1): TestGroup1 {
        return new TestGroup1(properties);
    }

    /**
     * Encodes the specified TestGroup1 message. Does not implicitly {@link TestGroup1.verify|verify} messages.
     * @param message TestGroup1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestGroup1, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.group != null && Object.hasOwnProperty.call(message, "group"))
            TestGroup.RepeatedGroup.encode(message.group, writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
        return writer;
    }

    /**
     * Encodes the specified TestGroup1 message, length delimited. Does not implicitly {@link TestGroup1.verify|verify} messages.
     * @param message TestGroup1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestGroup1, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestGroup1 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestGroup1 {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestGroup1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.group = TestGroup.RepeatedGroup.decode(reader);
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestGroup1 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestGroup1 {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestGroup1 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.group != null && message.hasOwnProperty("group")) {
            var error = TestGroup.RepeatedGroup.verify(message.group);
            if (error)
                return "group." + error;
        }
        return null;
    }

    /**
     * Creates a TestGroup1 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestGroup1 {
        if (object instanceof TestGroup1)
            return object;
        var message = new TestGroup1();
        if (object.group != null) {
            if (typeof object.group !== "object")
                throw TypeError("TestGroup1.group: object expected");
            message.group = TestGroup.RepeatedGroup.fromObject(object.group);
        }
        return message;
    }

    /**
     * Creates a plain object from a TestGroup1 message. Also converts values to other types if specified.
     * @param message TestGroup1
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestGroup1, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.group = null;
        if (message.group != null && message.hasOwnProperty("group"))
            object.group = TestGroup.RepeatedGroup.toObject(message.group, options);
        return object;
    }

    /**
     * Converts this TestGroup1 to JSON.
     */
    toJSON() {
        return TestGroup1.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestGroup1, b?: ITestGroup1): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return TestGroup.RepeatedGroup.equals(a.group, b.group);
    }
}

/** Properties of a TestReservedNames. */
export interface ITestReservedNames {
    extension?: number;
    "TestReservedNamesExtension.foo"?: number;
}

/**
 * Represents a TestReservedNames.
 */
export class TestReservedNames implements ITestReservedNames {
    /**
     * Constructs a new TestReservedNames.
     */
    constructor(properties?: ITestReservedNames) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    extension?: number = 0;
    ["TestReservedNamesExtension.foo"]?: number = 0;

    /**
     * Creates a new TestReservedNames instance using the specified properties.
     */
    static create(properties: ITestReservedNames): TestReservedNames {
        return new TestReservedNames(properties);
    }

    /**
     * Encodes the specified TestReservedNames message. Does not implicitly {@link TestReservedNames.verify|verify} messages.
     * @param message TestReservedNamesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestReservedNames, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.extension != null && Object.hasOwnProperty.call(message, "extension"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.extension);
        if (message["TestReservedNamesExtension.foo"] != null && Object.hasOwnProperty.call(message, "TestReservedNamesExtension.foo"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message["TestReservedNamesExtension.foo"]);
        return writer;
    }

    /**
     * Encodes the specified TestReservedNames message, length delimited. Does not implicitly {@link TestReservedNames.verify|verify} messages.
     * @param message TestReservedNamesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestReservedNames, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestReservedNames message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestReservedNames {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestReservedNames();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.extension = reader.int32();
                break;
            case 10:
                message["TestReservedNamesExtension.foo"] = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestReservedNames message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestReservedNames {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestReservedNames message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.extension != null && message.hasOwnProperty("extension"))
            if (!$util.isInteger(message.extension))
                return "extension: integer expected";
        if (message["TestReservedNamesExtension.foo"] != null && message.hasOwnProperty("TestReservedNamesExtension.foo"))
            if (!$util.isInteger(message["TestReservedNamesExtension.foo"]))
                return "TestReservedNamesExtension.foo: integer expected";
        return null;
    }

    /**
     * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestReservedNames {
        if (object instanceof TestReservedNames)
            return object;
        var message = new TestReservedNames();
        if (object.extension != null)
            message.extension = object.extension | 0;
        if (object["TestReservedNamesExtension.foo"] != null)
            message["TestReservedNamesExtension.foo"] = object["TestReservedNamesExtension.foo"] | 0;
        return message;
    }

    /**
     * Creates a plain object from a TestReservedNames message. Also converts values to other types if specified.
     * @param message TestReservedNames
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestReservedNames, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.extension = 0;
            object["TestReservedNamesExtension.foo"] = 0;
        }
        if (message.extension != null && message.hasOwnProperty("extension"))
            object.extension = message.extension;
        if (message["TestReservedNamesExtension.foo"] != null && message.hasOwnProperty("TestReservedNamesExtension.foo"))
            object["TestReservedNamesExtension.foo"] = message["TestReservedNamesExtension.foo"];
        return object;
    }

    /**
     * Converts this TestReservedNames to JSON.
     */
    toJSON() {
        return TestReservedNames.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestReservedNames, b?: ITestReservedNames): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.extension === b.extension && a["TestReservedNamesExtension.foo"] === b["TestReservedNamesExtension.foo"];
    }
}

/** Properties of a TestReservedNamesExtension. */
export interface ITestReservedNamesExtension {
}

/**
 * Represents a TestReservedNamesExtension.
 */
export class TestReservedNamesExtension implements ITestReservedNamesExtension {
    /**
     * Constructs a new TestReservedNamesExtension.
     */
    constructor(properties?: ITestReservedNamesExtension) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new TestReservedNamesExtension instance using the specified properties.
     */
    static create(properties: ITestReservedNamesExtension): TestReservedNamesExtension {
        return new TestReservedNamesExtension(properties);
    }

    /**
     * Encodes the specified TestReservedNamesExtension message. Does not implicitly {@link TestReservedNamesExtension.verify|verify} messages.
     * @param message TestReservedNamesExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestReservedNamesExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified TestReservedNamesExtension message, length delimited. Does not implicitly {@link TestReservedNamesExtension.verify|verify} messages.
     * @param message TestReservedNamesExtensionmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestReservedNamesExtension, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestReservedNamesExtension message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestReservedNamesExtension {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestReservedNamesExtension();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestReservedNamesExtension message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestReservedNamesExtension {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestReservedNamesExtension message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates a TestReservedNamesExtension message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestReservedNamesExtension {
        if (object instanceof TestReservedNamesExtension)
            return object;
        return new TestReservedNamesExtension();
    }

    /**
     * Creates a plain object from a TestReservedNamesExtension message. Also converts values to other types if specified.
     * @param message TestReservedNamesExtension
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestReservedNamesExtension, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this TestReservedNamesExtension to JSON.
     */
    toJSON() {
        return TestReservedNamesExtension.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestReservedNamesExtension, b?: ITestReservedNamesExtension): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export namespace TestReservedNamesExtension {

}

/** Properties of a TestMessageWithOneof. */
export interface ITestMessageWithOneof {
    pone?: string;
    pthree?: string;
    rone?: ITestMessageWithOneof;
    rtwo?: string;
    normalField?: boolean;
    repeatedField?: string[];
    aone?: number;
    atwo?: number;
    bone?: number;
    btwo?: number;
}

/**
 * Represents a TestMessageWithOneof.
 */
export class TestMessageWithOneof implements ITestMessageWithOneof {
    /**
     * Constructs a new TestMessageWithOneof.
     */
    constructor(properties?: ITestMessageWithOneof) {
        this.repeatedField = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    pone?: string = "";
    pthree?: string = "";
    rone?: ITestMessageWithOneof;
    rtwo?: string = "";
    normalField?: boolean = false;
    repeatedField?: string[];
    aone?: number = 1234;
    atwo?: number = 0;
    bone?: number = 0;
    btwo?: number = 1234;

    // OneOf field names bound to virtual getters and setters

    static oneOf_partialOneofGet = $util.oneOfGetter(["pone", "pthree"]);
    static oneOf_partialOneofSet = $util.oneOfSetter(["pone", "pthree"]);
    get partialOneof(): string {
        return TestMessageWithOneof.oneOf_partialOneofGet();
    }
    set partialOneof(value: string) {
        TestMessageWithOneof.oneOf_partialOneofSet(value);
    }

    static oneOf_recursiveOneofGet = $util.oneOfGetter(["rone", "rtwo"]);
    static oneOf_recursiveOneofSet = $util.oneOfSetter(["rone", "rtwo"]);
    get recursiveOneof(): ITestMessageWithOneof | string {
        return TestMessageWithOneof.oneOf_recursiveOneofGet();
    }
    set recursiveOneof(value: ITestMessageWithOneof | string) {
        TestMessageWithOneof.oneOf_recursiveOneofSet(value);
    }

    static oneOf_defaultOneofAGet = $util.oneOfGetter(["aone", "atwo"]);
    static oneOf_defaultOneofASet = $util.oneOfSetter(["aone", "atwo"]);
    get defaultOneofA(): number {
        return TestMessageWithOneof.oneOf_defaultOneofAGet();
    }
    set defaultOneofA(value: number) {
        TestMessageWithOneof.oneOf_defaultOneofASet(value);
    }

    static oneOf_defaultOneofBGet = $util.oneOfGetter(["bone", "btwo"]);
    static oneOf_defaultOneofBSet = $util.oneOfSetter(["bone", "btwo"]);
    get defaultOneofB(): number {
        return TestMessageWithOneof.oneOf_defaultOneofBGet();
    }
    set defaultOneofB(value: number) {
        TestMessageWithOneof.oneOf_defaultOneofBSet(value);
    }

    /**
     * Creates a new TestMessageWithOneof instance using the specified properties.
     */
    static create(properties: ITestMessageWithOneof): TestMessageWithOneof {
        return new TestMessageWithOneof(properties);
    }

    /**
     * Encodes the specified TestMessageWithOneof message. Does not implicitly {@link TestMessageWithOneof.verify|verify} messages.
     * @param message TestMessageWithOneofmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestMessageWithOneof, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.pone != null && Object.hasOwnProperty.call(message, "pone"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.pone);
        if (message.pthree != null && Object.hasOwnProperty.call(message, "pthree"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.pthree);
        if (message.rone != null && Object.hasOwnProperty.call(message, "rone"))
            TestMessageWithOneof.encode(message.rone, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.rtwo != null && Object.hasOwnProperty.call(message, "rtwo"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.rtwo);
        if (message.normalField != null && Object.hasOwnProperty.call(message, "normalField"))
            writer.uint32(/* id 8, wireType 0 =*/64).bool(message.normalField);
        if (message.repeatedField != null && message.repeatedField.length)
            for (var i = 0; i < message.repeatedField.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.repeatedField[i]);
        if (message.aone != null && Object.hasOwnProperty.call(message, "aone"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.aone);
        if (message.atwo != null && Object.hasOwnProperty.call(message, "atwo"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.atwo);
        if (message.bone != null && Object.hasOwnProperty.call(message, "bone"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.bone);
        if (message.btwo != null && Object.hasOwnProperty.call(message, "btwo"))
            writer.uint32(/* id 13, wireType 0 =*/104).int32(message.btwo);
        return writer;
    }

    /**
     * Encodes the specified TestMessageWithOneof message, length delimited. Does not implicitly {@link TestMessageWithOneof.verify|verify} messages.
     * @param message TestMessageWithOneofmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestMessageWithOneof, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestMessageWithOneof message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestMessageWithOneof {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestMessageWithOneof();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 3:
                message.pone = reader.string();
                break;
            case 5:
                message.pthree = reader.string();
                break;
            case 6:
                message.rone = TestMessageWithOneof.decode(reader, reader.uint32());
                break;
            case 7:
                message.rtwo = reader.string();
                break;
            case 8:
                message.normalField = reader.bool();
                break;
            case 9:
                if (!(message.repeatedField && message.repeatedField.length))
                    message.repeatedField = [];
                message.repeatedField.push(reader.string());
                break;
            case 10:
                message.aone = reader.int32();
                break;
            case 11:
                message.atwo = reader.int32();
                break;
            case 12:
                message.bone = reader.int32();
                break;
            case 13:
                message.btwo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestMessageWithOneof message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestMessageWithOneof {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestMessageWithOneof message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties: any = {};
        if (message.pone != null && message.hasOwnProperty("pone")) {
            properties.partialOneof = 1;
            if (!$util.isString(message.pone))
                return "pone: string expected";
        }
        if (message.pthree != null && message.hasOwnProperty("pthree")) {
            if (properties.partialOneof === 1)
                return "partialOneof: multiple values";
            properties.partialOneof = 1;
            if (!$util.isString(message.pthree))
                return "pthree: string expected";
        }
        if (message.rone != null && message.hasOwnProperty("rone")) {
            properties.recursiveOneof = 1;
            {
                var error = TestMessageWithOneof.verify(message.rone);
                if (error)
                    return "rone." + error;
            }
        }
        if (message.rtwo != null && message.hasOwnProperty("rtwo")) {
            if (properties.recursiveOneof === 1)
                return "recursiveOneof: multiple values";
            properties.recursiveOneof = 1;
            if (!$util.isString(message.rtwo))
                return "rtwo: string expected";
        }
        if (message.normalField != null && message.hasOwnProperty("normalField"))
            if (typeof message.normalField !== "boolean")
                return "normalField: boolean expected";
        if (message.repeatedField != null && message.hasOwnProperty("repeatedField")) {
            if (!Array.isArray(message.repeatedField))
                return "repeatedField: array expected";
            for (var i = 0; i < message.repeatedField.length; ++i)
                if (!$util.isString(message.repeatedField[i]))
                    return "repeatedField: string[] expected";
        }
        if (message.aone != null && message.hasOwnProperty("aone")) {
            properties.defaultOneofA = 1;
            if (!$util.isInteger(message.aone))
                return "aone: integer expected";
        }
        if (message.atwo != null && message.hasOwnProperty("atwo")) {
            if (properties.defaultOneofA === 1)
                return "defaultOneofA: multiple values";
            properties.defaultOneofA = 1;
            if (!$util.isInteger(message.atwo))
                return "atwo: integer expected";
        }
        if (message.bone != null && message.hasOwnProperty("bone")) {
            properties.defaultOneofB = 1;
            if (!$util.isInteger(message.bone))
                return "bone: integer expected";
        }
        if (message.btwo != null && message.hasOwnProperty("btwo")) {
            if (properties.defaultOneofB === 1)
                return "defaultOneofB: multiple values";
            properties.defaultOneofB = 1;
            if (!$util.isInteger(message.btwo))
                return "btwo: integer expected";
        }
        return null;
    }

    /**
     * Creates a TestMessageWithOneof message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestMessageWithOneof {
        if (object instanceof TestMessageWithOneof)
            return object;
        var message = new TestMessageWithOneof();
        if (object.pone != null)
            message.pone = String(object.pone);
        if (object.pthree != null)
            message.pthree = String(object.pthree);
        if (object.rone != null) {
            if (typeof object.rone !== "object")
                throw TypeError("TestMessageWithOneof.rone: object expected");
            message.rone = TestMessageWithOneof.fromObject(object.rone);
        }
        if (object.rtwo != null)
            message.rtwo = String(object.rtwo);
        if (object.normalField != null)
            message.normalField = Boolean(object.normalField);
        if (object.repeatedField) {
            if (!Array.isArray(object.repeatedField))
                throw TypeError("TestMessageWithOneof.repeatedField: array expected");
            message.repeatedField = [];
            for (var i = 0; i < object.repeatedField.length; ++i)
                message.repeatedField[i] = String(object.repeatedField[i]);
        }
        if (object.aone != null)
            message.aone = object.aone | 0;
        if (object.atwo != null)
            message.atwo = object.atwo | 0;
        if (object.bone != null)
            message.bone = object.bone | 0;
        if (object.btwo != null)
            message.btwo = object.btwo | 0;
        return message;
    }

    /**
     * Creates a plain object from a TestMessageWithOneof message. Also converts values to other types if specified.
     * @param message TestMessageWithOneof
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestMessageWithOneof, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults)
            object.repeatedField = [];
        if (options.defaults)
            object.normalField = false;
        if (message.pone != null && message.hasOwnProperty("pone")) {
            object.pone = message.pone;
            if (options.oneofs)
                object.partialOneof = "pone";
        }
        if (message.pthree != null && message.hasOwnProperty("pthree")) {
            object.pthree = message.pthree;
            if (options.oneofs)
                object.partialOneof = "pthree";
        }
        if (message.rone != null && message.hasOwnProperty("rone")) {
            object.rone = TestMessageWithOneof.toObject(message.rone, options);
            if (options.oneofs)
                object.recursiveOneof = "rone";
        }
        if (message.rtwo != null && message.hasOwnProperty("rtwo")) {
            object.rtwo = message.rtwo;
            if (options.oneofs)
                object.recursiveOneof = "rtwo";
        }
        if (message.normalField != null && message.hasOwnProperty("normalField"))
            object.normalField = message.normalField;
        if (message.repeatedField && message.repeatedField.length) {
            object.repeatedField = [];
            for (var j = 0; j < message.repeatedField.length; ++j)
                object.repeatedField[j] = message.repeatedField[j];
        }
        if (message.aone != null && message.hasOwnProperty("aone")) {
            object.aone = message.aone;
            if (options.oneofs)
                object.defaultOneofA = "aone";
        }
        if (message.atwo != null && message.hasOwnProperty("atwo")) {
            object.atwo = message.atwo;
            if (options.oneofs)
                object.defaultOneofA = "atwo";
        }
        if (message.bone != null && message.hasOwnProperty("bone")) {
            object.bone = message.bone;
            if (options.oneofs)
                object.defaultOneofB = "bone";
        }
        if (message.btwo != null && message.hasOwnProperty("btwo")) {
            object.btwo = message.btwo;
            if (options.oneofs)
                object.defaultOneofB = "btwo";
        }
        return object;
    }

    /**
     * Converts this TestMessageWithOneof to JSON.
     */
    toJSON() {
        return TestMessageWithOneof.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestMessageWithOneof, b?: ITestMessageWithOneof): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.pone === b.pone && a.pthree === b.pthree && TestMessageWithOneof.equals(a.rone, b.rone) && a.rtwo === b.rtwo && a.normalField === b.normalField && (!!a.repeatedField && !!b.repeatedField && a.repeatedField.length === b.repeatedField.length && !a.repeatedField.find(function (aValue, i) {
            return (a.repeatedField && a.repeatedField[i]) === (b.repeatedField && b.repeatedField[i]);
        })) && a.aone === b.aone && a.atwo === b.atwo && a.bone === b.bone && a.btwo === b.btwo;
    }
}

/** Properties of a TestEndsWithBytes. */
export interface ITestEndsWithBytes {
    value?: number;
    data?: Uint8Array;
}

/**
 * Represents a TestEndsWithBytes.
 */
export class TestEndsWithBytes implements ITestEndsWithBytes {
    /**
     * Constructs a new TestEndsWithBytes.
     */
    constructor(properties?: ITestEndsWithBytes) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    value?: number = 0;
    data?: Uint8Array= $util.newBuffer([]);

    /**
     * Creates a new TestEndsWithBytes instance using the specified properties.
     */
    static create(properties: ITestEndsWithBytes): TestEndsWithBytes {
        return new TestEndsWithBytes(properties);
    }

    /**
     * Encodes the specified TestEndsWithBytes message. Does not implicitly {@link TestEndsWithBytes.verify|verify} messages.
     * @param message TestEndsWithBytesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestEndsWithBytes, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
        return writer;
    }

    /**
     * Encodes the specified TestEndsWithBytes message, length delimited. Does not implicitly {@link TestEndsWithBytes.verify|verify} messages.
     * @param message TestEndsWithBytesmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestEndsWithBytes, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestEndsWithBytes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestEndsWithBytes {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestEndsWithBytes();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.value = reader.int32();
                break;
            case 2:
                message.data = reader.bytes();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestEndsWithBytes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestEndsWithBytes {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestEndsWithBytes message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    }

    /**
     * Creates a TestEndsWithBytes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestEndsWithBytes {
        if (object instanceof TestEndsWithBytes)
            return object;
        var message = new TestEndsWithBytes();
        if (object.value != null)
            message.value = object.value | 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length)
                message.data = object.data;
        return message;
    }

    /**
     * Creates a plain object from a TestEndsWithBytes message. Also converts values to other types if specified.
     * @param message TestEndsWithBytes
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestEndsWithBytes, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.value = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    }

    /**
     * Converts this TestEndsWithBytes to JSON.
     */
    toJSON() {
        return TestEndsWithBytes.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestEndsWithBytes, b?: ITestEndsWithBytes): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.value === b.value && $util.bytesEquals(a.data, b.data);
    }
}

/** Properties of a TestMapFieldsNoBinary. */
export interface ITestMapFieldsNoBinary {
    mapStringString?: {[key: string]: string};
    mapStringInt32?: {[key: string]: number};
    mapStringInt64?: {[key: string]: (number|$protobuf.Long)};
    mapStringBool?: {[key: string]: boolean};
    mapStringDouble?: {[key: string]: number};
    mapStringEnum?: {[key: string]: MapValueEnumNoBinary};
    mapStringMsg?: {[key: string]: IMapValueMessageNoBinary};
    mapInt32String?: {[key: string]: string};
    mapInt64String?: {[key: string]: string};
    mapBoolString?: {[key: string]: string};
    testMapFields?: ITestMapFieldsNoBinary;
    mapStringTestmapfields?: {[key: string]: ITestMapFieldsNoBinary};
}

/**
 * Represents a TestMapFieldsNoBinary.
 */
export class TestMapFieldsNoBinary implements ITestMapFieldsNoBinary {
    /**
     * Constructs a new TestMapFieldsNoBinary.
     */
    constructor(properties?: ITestMapFieldsNoBinary) {
        this.mapStringString = {};
        this.mapStringInt32 = {};
        this.mapStringInt64 = {};
        this.mapStringBool = {};
        this.mapStringDouble = {};
        this.mapStringEnum = {};
        this.mapStringMsg = {};
        this.mapInt32String = {};
        this.mapInt64String = {};
        this.mapBoolString = {};
        this.mapStringTestmapfields = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    mapStringString?: {[key: string]: string};
    mapStringInt32?: {[key: string]: number};
    mapStringInt64?: {[key: string]: (number|$protobuf.Long)};
    mapStringBool?: {[key: string]: boolean};
    mapStringDouble?: {[key: string]: number};
    mapStringEnum?: {[key: string]: MapValueEnumNoBinary};
    mapStringMsg?: {[key: string]: IMapValueMessageNoBinary};
    mapInt32String?: {[key: string]: string};
    mapInt64String?: {[key: string]: string};
    mapBoolString?: {[key: string]: string};
    testMapFields?: ITestMapFieldsNoBinary;
    mapStringTestmapfields?: {[key: string]: ITestMapFieldsNoBinary};

    /**
     * Creates a new TestMapFieldsNoBinary instance using the specified properties.
     */
    static create(properties: ITestMapFieldsNoBinary): TestMapFieldsNoBinary {
        return new TestMapFieldsNoBinary(properties);
    }

    /**
     * Encodes the specified TestMapFieldsNoBinary message. Does not implicitly {@link TestMapFieldsNoBinary.verify|verify} messages.
     * @param message TestMapFieldsNoBinarymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITestMapFieldsNoBinary, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.mapStringString != null && Object.hasOwnProperty.call(message, "mapStringString"))
            for (var keys = Object.keys(message.mapStringString), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapStringString[keys[i]]).ldelim();
        if (message.mapStringInt32 != null && Object.hasOwnProperty.call(message, "mapStringInt32"))
            for (var keys = Object.keys(message.mapStringInt32), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringInt32[keys[i]]).ldelim();
        if (message.mapStringInt64 != null && Object.hasOwnProperty.call(message, "mapStringInt64"))
            for (var keys = Object.keys(message.mapStringInt64), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int64(message.mapStringInt64[keys[i]]).ldelim();
        if (message.mapStringBool != null && Object.hasOwnProperty.call(message, "mapStringBool"))
            for (var keys = Object.keys(message.mapStringBool), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.mapStringBool[keys[i]]).ldelim();
        if (message.mapStringDouble != null && Object.hasOwnProperty.call(message, "mapStringDouble"))
            for (var keys = Object.keys(message.mapStringDouble), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 1 =*/17).double(message.mapStringDouble[keys[i]]).ldelim();
        if (message.mapStringEnum != null && Object.hasOwnProperty.call(message, "mapStringEnum"))
            for (var keys = Object.keys(message.mapStringEnum), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.mapStringEnum[keys[i]]).ldelim();
        if (message.mapStringMsg != null && Object.hasOwnProperty.call(message, "mapStringMsg"))
            for (var keys = Object.keys(message.mapStringMsg), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                MapValueMessageNoBinary.encode(message.mapStringMsg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.mapInt32String != null && Object.hasOwnProperty.call(message, "mapInt32String"))
            for (var keys = Object.keys(message.mapInt32String), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 8, wireType 2 =*/66).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapInt32String[keys[i]]).ldelim();
        if (message.mapInt64String != null && Object.hasOwnProperty.call(message, "mapInt64String"))
            for (var keys = Object.keys(message.mapInt64String), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 0 =*/8).int64(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapInt64String[keys[i]]).ldelim();
        if (message.mapBoolString != null && Object.hasOwnProperty.call(message, "mapBoolString"))
            for (var keys = Object.keys(message.mapBoolString), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 10, wireType 2 =*/82).fork().uint32(/* id 1, wireType 0 =*/8).bool(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapBoolString[keys[i]]).ldelim();
        if (message.testMapFields != null && Object.hasOwnProperty.call(message, "testMapFields"))
            TestMapFieldsNoBinary.encode(message.testMapFields, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.mapStringTestmapfields != null && Object.hasOwnProperty.call(message, "mapStringTestmapfields"))
            for (var keys = Object.keys(message.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                TestMapFieldsNoBinary.encode(message.mapStringTestmapfields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    }

    /**
     * Encodes the specified TestMapFieldsNoBinary message, length delimited. Does not implicitly {@link TestMapFieldsNoBinary.verify|verify} messages.
     * @param message TestMapFieldsNoBinarymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITestMapFieldsNoBinary, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): TestMapFieldsNoBinary {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new TestMapFieldsNoBinary(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.mapStringString === $util.emptyObject || !message.mapStringString)
                    message.mapStringString = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringString[key] = value;
                break;
            case 2:
                if (message.mapStringInt32 === $util.emptyObject || !message.mapStringInt32)
                    message.mapStringInt32 = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringInt32[key] = value;
                break;
            case 3:
                if (message.mapStringInt64 === $util.emptyObject || !message.mapStringInt64)
                    message.mapStringInt64 = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
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
                message.mapStringInt64[key] = value;
                break;
            case 4:
                if (message.mapStringBool === $util.emptyObject || !message.mapStringBool)
                    message.mapStringBool = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = false;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.bool();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringBool[key] = value;
                break;
            case 5:
                if (message.mapStringDouble === $util.emptyObject || !message.mapStringDouble)
                    message.mapStringDouble = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.double();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringDouble[key] = value;
                break;
            case 6:
                if (message.mapStringEnum === $util.emptyObject || !message.mapStringEnum)
                    message.mapStringEnum = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.int32();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringEnum[key] = value;
                break;
            case 7:
                if (message.mapStringMsg === $util.emptyObject || !message.mapStringMsg)
                    message.mapStringMsg = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = MapValueMessageNoBinary.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringMsg[key] = value;
                break;
            case 8:
                if (message.mapInt32String === $util.emptyObject || !message.mapInt32String)
                    message.mapInt32String = {};
                var end2 = reader.uint32() + reader.pos;
                key = 0;
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.int32();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapInt32String[key] = value;
                break;
            case 9:
                if (message.mapInt64String === $util.emptyObject || !message.mapInt64String)
                    message.mapInt64String = {};
                var end2 = reader.uint32() + reader.pos;
                key = 0;
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.int64();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapInt64String[typeof key === "object" ? $util.longToHash(key) : key] = value;
                break;
            case 10:
                if (message.mapBoolString === $util.emptyObject || !message.mapBoolString)
                    message.mapBoolString = {};
                var end2 = reader.uint32() + reader.pos;
                key = false;
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.bool();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapBoolString[key] = value;
                break;
            case 11:
                message.testMapFields = TestMapFieldsNoBinary.decode(reader, reader.uint32());
                break;
            case 12:
                if (message.mapStringTestmapfields === $util.emptyObject || !message.mapStringTestmapfields)
                    message.mapStringTestmapfields = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = TestMapFieldsNoBinary.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.mapStringTestmapfields[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a TestMapFieldsNoBinary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): TestMapFieldsNoBinary {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a TestMapFieldsNoBinary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapStringString != null && message.hasOwnProperty("mapStringString")) {
            if (!$util.isObject(message.mapStringString))
                return "mapStringString: object expected";
            var key = Object.keys(message.mapStringString);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.mapStringString[key[i]]))
                    return "mapStringString: string{k:string} expected";
        }
        if (message.mapStringInt32 != null && message.hasOwnProperty("mapStringInt32")) {
            if (!$util.isObject(message.mapStringInt32))
                return "mapStringInt32: object expected";
            var key = Object.keys(message.mapStringInt32);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.mapStringInt32[key[i]]))
                    return "mapStringInt32: integer{k:string} expected";
        }
        if (message.mapStringInt64 != null && message.hasOwnProperty("mapStringInt64")) {
            if (!$util.isObject(message.mapStringInt64))
                return "mapStringInt64: object expected";
            var key = Object.keys(message.mapStringInt64);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isInteger(message.mapStringInt64[key[i]]) && !(message.mapStringInt64[key[i]] && $util.isInteger(message.mapStringInt64[key[i]].low) && $util.isInteger(message.mapStringInt64[key[i]].high)))
                    return "mapStringInt64: integer|Long{k:string} expected";
        }
        if (message.mapStringBool != null && message.hasOwnProperty("mapStringBool")) {
            if (!$util.isObject(message.mapStringBool))
                return "mapStringBool: object expected";
            var key = Object.keys(message.mapStringBool);
            for (var i = 0; i < key.length; ++i)
                if (typeof message.mapStringBool[key[i]] !== "boolean")
                    return "mapStringBool: boolean{k:string} expected";
        }
        if (message.mapStringDouble != null && message.hasOwnProperty("mapStringDouble")) {
            if (!$util.isObject(message.mapStringDouble))
                return "mapStringDouble: object expected";
            var key = Object.keys(message.mapStringDouble);
            for (var i = 0; i < key.length; ++i)
                if (typeof message.mapStringDouble[key[i]] !== "number")
                    return "mapStringDouble: number{k:string} expected";
        }
        if (message.mapStringEnum != null && message.hasOwnProperty("mapStringEnum")) {
            if (!$util.isObject(message.mapStringEnum))
                return "mapStringEnum: object expected";
            var key = Object.keys(message.mapStringEnum);
            for (var i = 0; i < key.length; ++i)
                switch (message.mapStringEnum[key[i]]) {
                default:
                    return "mapStringEnum: enum value{k:string} expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
        }
        if (message.mapStringMsg != null && message.hasOwnProperty("mapStringMsg")) {
            if (!$util.isObject(message.mapStringMsg))
                return "mapStringMsg: object expected";
            var key = Object.keys(message.mapStringMsg);
            for (var i = 0; i < key.length; ++i) {
                var error = MapValueMessageNoBinary.verify(message.mapStringMsg[key[i]]);
                if (error)
                    return "mapStringMsg." + error;
            }
        }
        if (message.mapInt32String != null && message.hasOwnProperty("mapInt32String")) {
            if (!$util.isObject(message.mapInt32String))
                return "mapInt32String: object expected";
            var key = Object.keys(message.mapInt32String);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key32Re.test(key[i]))
                    return "mapInt32String: integer key{k:int32} expected";
                if (!$util.isString(message.mapInt32String[key[i]]))
                    return "mapInt32String: string{k:int32} expected";
            }
        }
        if (message.mapInt64String != null && message.hasOwnProperty("mapInt64String")) {
            if (!$util.isObject(message.mapInt64String))
                return "mapInt64String: object expected";
            var key = Object.keys(message.mapInt64String);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key64Re.test(key[i]))
                    return "mapInt64String: integer|Long key{k:int64} expected";
                if (!$util.isString(message.mapInt64String[key[i]]))
                    return "mapInt64String: string{k:int64} expected";
            }
        }
        if (message.mapBoolString != null && message.hasOwnProperty("mapBoolString")) {
            if (!$util.isObject(message.mapBoolString))
                return "mapBoolString: object expected";
            var key = Object.keys(message.mapBoolString);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key2Re.test(key[i]))
                    return "mapBoolString: boolean key{k:bool} expected";
                if (!$util.isString(message.mapBoolString[key[i]]))
                    return "mapBoolString: string{k:bool} expected";
            }
        }
        if (message.testMapFields != null && message.hasOwnProperty("testMapFields")) {
            var error = TestMapFieldsNoBinary.verify(message.testMapFields);
            if (error)
                return "testMapFields." + error;
        }
        if (message.mapStringTestmapfields != null && message.hasOwnProperty("mapStringTestmapfields")) {
            if (!$util.isObject(message.mapStringTestmapfields))
                return "mapStringTestmapfields: object expected";
            var key = Object.keys(message.mapStringTestmapfields);
            for (var i = 0; i < key.length; ++i) {
                var error = TestMapFieldsNoBinary.verify(message.mapStringTestmapfields[key[i]]);
                if (error)
                    return "mapStringTestmapfields." + error;
            }
        }
        return null;
    }

    /**
     * Creates a TestMapFieldsNoBinary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITestMapFieldsNoBinary {
        if (object instanceof TestMapFieldsNoBinary)
            return object;
        var message = new TestMapFieldsNoBinary();
        if (object.mapStringString) {
            if (typeof object.mapStringString !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringString: object expected");
            message.mapStringString = {};
            for (var keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i)
                message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
        }
        if (object.mapStringInt32) {
            if (typeof object.mapStringInt32 !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringInt32: object expected");
            message.mapStringInt32 = {};
            for (var keys = Object.keys(object.mapStringInt32), i = 0; i < keys.length; ++i)
                message.mapStringInt32[keys[i]] = object.mapStringInt32[keys[i]] | 0;
        }
        if (object.mapStringInt64) {
            if (typeof object.mapStringInt64 !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringInt64: object expected");
            message.mapStringInt64 = {};
            for (var keys = Object.keys(object.mapStringInt64), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.mapStringInt64[keys[i]] = ($util.Long as any).fromValue(object.mapStringInt64[keys[i]])).unsigned = false;
                else if (typeof object.mapStringInt64[keys[i]] === "string")
                    message.mapStringInt64[keys[i]] = parseInt(object.mapStringInt64[keys[i]], 10);
                else if (typeof object.mapStringInt64[keys[i]] === "number")
                    message.mapStringInt64[keys[i]] = object.mapStringInt64[keys[i]];
                else if (typeof object.mapStringInt64[keys[i]] === "object")
                    message.mapStringInt64[keys[i]] = new $util.LongBits(object.mapStringInt64[keys[i]]).toNumber();
        }
        if (object.mapStringBool) {
            if (typeof object.mapStringBool !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringBool: object expected");
            message.mapStringBool = {};
            for (var keys = Object.keys(object.mapStringBool), i = 0; i < keys.length; ++i)
                message.mapStringBool[keys[i]] = Boolean(object.mapStringBool[keys[i]]);
        }
        if (object.mapStringDouble) {
            if (typeof object.mapStringDouble !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringDouble: object expected");
            message.mapStringDouble = {};
            for (var keys = Object.keys(object.mapStringDouble), i = 0; i < keys.length; ++i)
                message.mapStringDouble[keys[i]] = Number(object.mapStringDouble[keys[i]]);
        }
        if (object.mapStringEnum) {
            if (typeof object.mapStringEnum !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringEnum: object expected");
            message.mapStringEnum = {};
            for (var keys = Object.keys(object.mapStringEnum), i = 0; i < keys.length; ++i)
                switch (object.mapStringEnum[keys[i]]) {
                case "MAP_VALUE_FOO_NOBINARY":
                case 0:
                    message.mapStringEnum[keys[i]] = 0;
                    break;
                case "MAP_VALUE_BAR_NOBINARY":
                case 1:
                    message.mapStringEnum[keys[i]] = 1;
                    break;
                case "MAP_VALUE_BAZ_NOBINARY":
                case 2:
                    message.mapStringEnum[keys[i]] = 2;
                    break;
                }
        }
        if (object.mapStringMsg) {
            if (typeof object.mapStringMsg !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringMsg: object expected");
            message.mapStringMsg = {};
            for (var keys = Object.keys(object.mapStringMsg), i = 0; i < keys.length; ++i) {
                if (typeof object.mapStringMsg[keys[i]] !== "object")
                    throw TypeError("TestMapFieldsNoBinary.mapStringMsg: object expected");
                message.mapStringMsg[keys[i]] = MapValueMessageNoBinary.fromObject(object.mapStringMsg[keys[i]]);
            }
        }
        if (object.mapInt32String) {
            if (typeof object.mapInt32String !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapInt32String: object expected");
            message.mapInt32String = {};
            for (var keys = Object.keys(object.mapInt32String), i = 0; i < keys.length; ++i)
                message.mapInt32String[keys[i]] = String(object.mapInt32String[keys[i]]);
        }
        if (object.mapInt64String) {
            if (typeof object.mapInt64String !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapInt64String: object expected");
            message.mapInt64String = {};
            for (var keys = Object.keys(object.mapInt64String), i = 0; i < keys.length; ++i)
                message.mapInt64String[keys[i]] = String(object.mapInt64String[keys[i]]);
        }
        if (object.mapBoolString) {
            if (typeof object.mapBoolString !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapBoolString: object expected");
            message.mapBoolString = {};
            for (var keys = Object.keys(object.mapBoolString), i = 0; i < keys.length; ++i)
                message.mapBoolString[keys[i]] = String(object.mapBoolString[keys[i]]);
        }
        if (object.testMapFields != null) {
            if (typeof object.testMapFields !== "object")
                throw TypeError("TestMapFieldsNoBinary.testMapFields: object expected");
            message.testMapFields = TestMapFieldsNoBinary.fromObject(object.testMapFields);
        }
        if (object.mapStringTestmapfields) {
            if (typeof object.mapStringTestmapfields !== "object")
                throw TypeError("TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
            message.mapStringTestmapfields = {};
            for (var keys = Object.keys(object.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                if (typeof object.mapStringTestmapfields[keys[i]] !== "object")
                    throw TypeError("TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
                message.mapStringTestmapfields[keys[i]] = TestMapFieldsNoBinary.fromObject(object.mapStringTestmapfields[keys[i]]);
            }
        }
        return message;
    }

    /**
     * Creates a plain object from a TestMapFieldsNoBinary message. Also converts values to other types if specified.
     * @param message TestMapFieldsNoBinary
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITestMapFieldsNoBinary, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.objects || options.defaults) {
            object.mapStringString = {};
            object.mapStringInt32 = {};
            object.mapStringInt64 = {};
            object.mapStringBool = {};
            object.mapStringDouble = {};
            object.mapStringEnum = {};
            object.mapStringMsg = {};
            object.mapInt32String = {};
            object.mapInt64String = {};
            object.mapBoolString = {};
            object.mapStringTestmapfields = {};
        }
        if (options.defaults)
            object.testMapFields = null;
        var keys2;
        if (message.mapStringString && (keys2 = Object.keys(message.mapStringString)).length) {
            object.mapStringString = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringString[keys2[j]] = message.mapStringString[keys2[j]];
        }
        if (message.mapStringInt32 && (keys2 = Object.keys(message.mapStringInt32)).length) {
            object.mapStringInt32 = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringInt32[keys2[j]] = message.mapStringInt32[keys2[j]];
        }
        if (message.mapStringInt64 && (keys2 = Object.keys(message.mapStringInt64)).length) {
            object.mapStringInt64 = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.mapStringInt64[keys2[j]] === "number")
                    object.mapStringInt64[keys2[j]] = options.longs === String ? String(message.mapStringInt64[keys2[j]]) : message.mapStringInt64[keys2[j]];
                else
                    object.mapStringInt64[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.mapStringInt64[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.mapStringInt64[keys2[j]]).toNumber() : message.mapStringInt64[keys2[j]];
        }
        if (message.mapStringBool && (keys2 = Object.keys(message.mapStringBool)).length) {
            object.mapStringBool = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringBool[keys2[j]] = message.mapStringBool[keys2[j]];
        }
        if (message.mapStringDouble && (keys2 = Object.keys(message.mapStringDouble)).length) {
            object.mapStringDouble = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringDouble[keys2[j]] = options.json && !isFinite(message.mapStringDouble[keys2[j]]) ? String(message.mapStringDouble[keys2[j]]) : message.mapStringDouble[keys2[j]];
        }
        if (message.mapStringEnum && (keys2 = Object.keys(message.mapStringEnum)).length) {
            object.mapStringEnum = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringEnum[keys2[j]] = options.enums === String ? MapValueEnumNoBinary[message.mapStringEnum[keys2[j]]] : message.mapStringEnum[keys2[j]];
        }
        if (message.mapStringMsg && (keys2 = Object.keys(message.mapStringMsg)).length) {
            object.mapStringMsg = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringMsg[keys2[j]] = MapValueMessageNoBinary.toObject(message.mapStringMsg[keys2[j]], options);
        }
        if (message.mapInt32String && (keys2 = Object.keys(message.mapInt32String)).length) {
            object.mapInt32String = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapInt32String[keys2[j]] = message.mapInt32String[keys2[j]];
        }
        if (message.mapInt64String && (keys2 = Object.keys(message.mapInt64String)).length) {
            object.mapInt64String = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapInt64String[keys2[j]] = message.mapInt64String[keys2[j]];
        }
        if (message.mapBoolString && (keys2 = Object.keys(message.mapBoolString)).length) {
            object.mapBoolString = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapBoolString[keys2[j]] = message.mapBoolString[keys2[j]];
        }
        if (message.testMapFields != null && message.hasOwnProperty("testMapFields"))
            object.testMapFields = TestMapFieldsNoBinary.toObject(message.testMapFields, options);
        if (message.mapStringTestmapfields && (keys2 = Object.keys(message.mapStringTestmapfields)).length) {
            object.mapStringTestmapfields = {};
            for (var j = 0; j < keys2.length; ++j)
                object.mapStringTestmapfields[keys2[j]] = TestMapFieldsNoBinary.toObject(message.mapStringTestmapfields[keys2[j]], options);
        }
        return object;
    }

    /**
     * Converts this TestMapFieldsNoBinary to JSON.
     */
    toJSON() {
        return TestMapFieldsNoBinary.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITestMapFieldsNoBinary, b?: ITestMapFieldsNoBinary): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return $util.mapEquals(a.mapStringString, b.mapStringString, function (keyName) {
            return !!b.mapStringString && (!(keyName in b.mapStringString) && (a.mapStringString && a.mapStringString[keyName]) === (b.mapStringString && b.mapStringString[keyName]));
        }) && $util.mapEquals(a.mapStringInt32, b.mapStringInt32, function (keyName) {
            return !!b.mapStringInt32 && (!(keyName in b.mapStringInt32) && (a.mapStringInt32 && a.mapStringInt32[keyName]) === (b.mapStringInt32 && b.mapStringInt32[keyName]));
        }) && $util.mapEquals(a.mapStringInt64, b.mapStringInt64, function (keyName) {
            return !!b.mapStringInt64 && (!(keyName in b.mapStringInt64) && $util.longEquals(a.mapStringInt64 && a.mapStringInt64[keyName], b.mapStringInt64 && b.mapStringInt64[keyName]));
        }) && $util.mapEquals(a.mapStringBool, b.mapStringBool, function (keyName) {
            return !!b.mapStringBool && (!(keyName in b.mapStringBool) && (a.mapStringBool && a.mapStringBool[keyName]) === (b.mapStringBool && b.mapStringBool[keyName]));
        }) && $util.mapEquals(a.mapStringDouble, b.mapStringDouble, function (keyName) {
            return !!b.mapStringDouble && (!(keyName in b.mapStringDouble) && (a.mapStringDouble && a.mapStringDouble[keyName]) === (b.mapStringDouble && b.mapStringDouble[keyName]));
        }) && $util.mapEquals(a.mapStringEnum, b.mapStringEnum, function (keyName) {
            return !!b.mapStringEnum && (!(keyName in b.mapStringEnum) && (a.mapStringEnum && a.mapStringEnum[keyName]) === (b.mapStringEnum && b.mapStringEnum[keyName]));
        }) && $util.mapEquals(a.mapStringMsg, b.mapStringMsg, function (keyName) {
            return !!b.mapStringMsg && (!(keyName in b.mapStringMsg) && MapValueMessageNoBinary.equals(a.mapStringMsg && a.mapStringMsg[keyName], b.mapStringMsg && b.mapStringMsg[keyName]));
        }) && $util.mapEquals(a.mapInt32String, b.mapInt32String, function (keyName) {
            return !!b.mapInt32String && (!(keyName in b.mapInt32String) && (a.mapInt32String && a.mapInt32String[keyName]) === (b.mapInt32String && b.mapInt32String[keyName]));
        }) && $util.mapEquals(a.mapInt64String, b.mapInt64String, function (keyName) {
            return !!b.mapInt64String && (!(keyName in b.mapInt64String) && (a.mapInt64String && a.mapInt64String[keyName]) === (b.mapInt64String && b.mapInt64String[keyName]));
        }) && $util.mapEquals(a.mapBoolString, b.mapBoolString, function (keyName) {
            return !!b.mapBoolString && (!(keyName in b.mapBoolString) && (a.mapBoolString && a.mapBoolString[keyName]) === (b.mapBoolString && b.mapBoolString[keyName]));
        }) && TestMapFieldsNoBinary.equals(a.testMapFields, b.testMapFields) && $util.mapEquals(a.mapStringTestmapfields, b.mapStringTestmapfields, function (keyName) {
            return !!b.mapStringTestmapfields && (!(keyName in b.mapStringTestmapfields) && TestMapFieldsNoBinary.equals(a.mapStringTestmapfields && a.mapStringTestmapfields[keyName], b.mapStringTestmapfields && b.mapStringTestmapfields[keyName]));
        });
    }
}

export enum MapValueEnumNoBinary {
    MAP_VALUE_FOO_NOBINARY = 0,
    MAP_VALUE_BAR_NOBINARY = 1,
    MAP_VALUE_BAZ_NOBINARY = 2,
}

/** Properties of a MapValueMessageNoBinary. */
export interface IMapValueMessageNoBinary {
    foo?: number;
}

/**
 * Represents a MapValueMessageNoBinary.
 */
export class MapValueMessageNoBinary implements IMapValueMessageNoBinary {
    /**
     * Constructs a new MapValueMessageNoBinary.
     */
    constructor(properties?: IMapValueMessageNoBinary) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    foo?: number = 0;

    /**
     * Creates a new MapValueMessageNoBinary instance using the specified properties.
     */
    static create(properties: IMapValueMessageNoBinary): MapValueMessageNoBinary {
        return new MapValueMessageNoBinary(properties);
    }

    /**
     * Encodes the specified MapValueMessageNoBinary message. Does not implicitly {@link MapValueMessageNoBinary.verify|verify} messages.
     * @param message MapValueMessageNoBinarymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IMapValueMessageNoBinary, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.foo != null && Object.hasOwnProperty.call(message, "foo"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.foo);
        return writer;
    }

    /**
     * Encodes the specified MapValueMessageNoBinary message, length delimited. Does not implicitly {@link MapValueMessageNoBinary.verify|verify} messages.
     * @param message MapValueMessageNoBinarymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IMapValueMessageNoBinary, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a MapValueMessageNoBinary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MapValueMessageNoBinary {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new MapValueMessageNoBinary();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.foo = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a MapValueMessageNoBinary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MapValueMessageNoBinary {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a MapValueMessageNoBinary message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.foo != null && message.hasOwnProperty("foo"))
            if (!$util.isInteger(message.foo))
                return "foo: integer expected";
        return null;
    }

    /**
     * Creates a MapValueMessageNoBinary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMapValueMessageNoBinary {
        if (object instanceof MapValueMessageNoBinary)
            return object;
        var message = new MapValueMessageNoBinary();
        if (object.foo != null)
            message.foo = object.foo | 0;
        return message;
    }

    /**
     * Creates a plain object from a MapValueMessageNoBinary message. Also converts values to other types if specified.
     * @param message MapValueMessageNoBinary
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMapValueMessageNoBinary, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.foo = 0;
        if (message.foo != null && message.hasOwnProperty("foo"))
            object.foo = message.foo;
        return object;
    }

    /**
     * Converts this MapValueMessageNoBinary to JSON.
     */
    toJSON() {
        return MapValueMessageNoBinary.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMapValueMessageNoBinary, b?: IMapValueMessageNoBinary): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.foo === b.foo;
    }
}

/** Properties of a Deeply. */
export interface IDeeply {
}

/**
 * Represents a Deeply.
 */
export class Deeply implements IDeeply {
    /**
     * Constructs a new Deeply.
     */
    constructor(properties?: IDeeply) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Deeply instance using the specified properties.
     */
    static create(properties: IDeeply): Deeply {
        return new Deeply(properties);
    }

    /**
     * Encodes the specified Deeply message. Does not implicitly {@link Deeply.verify|verify} messages.
     * @param message Deeplymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IDeeply, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified Deeply message, length delimited. Does not implicitly {@link Deeply.verify|verify} messages.
     * @param message Deeplymessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IDeeply, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Deeply message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Deeply {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Deeply();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a Deeply message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Deeply {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Deeply message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates a Deeply message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IDeeply {
        if (object instanceof Deeply)
            return object;
        return new Deeply();
    }

    /**
     * Creates a plain object from a Deeply message. Also converts values to other types if specified.
     * @param message Deeply
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IDeeply, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this Deeply to JSON.
     */
    toJSON() {
        return Deeply.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IDeeply, b?: IDeeply): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export namespace Deeply {
    /** Properties of a Nested. */
    export interface INested {
    }

    /**
     * Represents a Nested.
     */
    export class Nested implements INested {
        /**
         * Constructs a new Nested.
         */
        constructor(properties?: INested) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Nested instance using the specified properties.
         */
        static create(properties: INested): Nested {
            return new Nested(properties);
        }

        /**
         * Encodes the specified Nested message. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            return writer;
        }

        /**
         * Encodes the specified Nested message, length delimited. Does not implicitly {@link Nested.verify|verify} messages.
         * @param message Nestedmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: INested, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Nested message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Nested {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new Deeply.Nested();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a Nested message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Nested {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Nested message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        }

        /**
         * Creates a Nested message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): INested {
            if (object instanceof Deeply.Nested)
                return object;
            return new Deeply.Nested();
        }

        /**
         * Creates a plain object from a Nested message. Also converts values to other types if specified.
         * @param message Nested
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: INested, options: $protobuf.IConversionOptions = {}) {
            return {};
        }

        /**
         * Converts this Nested to JSON.
         */
        toJSON() {
            return Nested.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: INested, b?: INested): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return true;
        }
    }

    export namespace Nested {
        /** Properties of a Message. */
        export interface IMessage {
            count?: number;
        }

        /**
         * Represents a Message.
         */
        export class Message implements IMessage {
            /**
             * Constructs a new Message.
             */
            constructor(properties?: IMessage) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            count?: number = 0;

            /**
             * Creates a new Message instance using the specified properties.
             */
            static create(properties: IMessage): Message {
                return new Message(properties);
            }

            /**
             * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
             * @param message Messagemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer {
                if (!writer)
                    writer = $Writer.create();
                if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
                return writer;
            }

            /**
             * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
             * @param message Messagemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes a Message message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Message {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new Deeply.Nested.Message();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.count = reader.int32();
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Message {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

            /**
             * Verifies a Message message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message): string | null | void {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.count != null && message.hasOwnProperty("count"))
                    if (!$util.isInteger(message.count))
                        return "count: integer expected";
                return null;
            }

            /**
             * Creates a Message message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): IMessage {
                if (object instanceof Deeply.Nested.Message)
                    return object;
                var message = new Deeply.Nested.Message();
                if (object.count != null)
                    message.count = object.count | 0;
                return message;
            }

            /**
             * Creates a plain object from a Message message. Also converts values to other types if specified.
             * @param message Message
             * @param optionsConversion options
             * @returns Plain object
             */
            static toObject(message: IMessage, options: $protobuf.IConversionOptions = {}) {
                let object: any = {};
                if (options.defaults)
                    object.count = 0;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                return object;
            }

            /**
             * Converts this Message to JSON.
             */
            toJSON() {
                return Message.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Compares two messages, checking for strict equality.
             */
            static equals(a?: IMessage, b?: IMessage): boolean {
                if (!a || !b)
                    return a === b;
                if (a === b)
                    return true;
                return a.count === b.count;
            }
        }

    }

}
;
