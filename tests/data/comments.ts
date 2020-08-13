import * as $protobuf from "../../minimal";


// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

/** Properties of a Test1. */
export interface ITest1 {
    /** Field with a comment. */
field1?: string;
    field2?: number;
    /** Field with a comment and a <a href="http://example.com/foo/">link</a> */
field3?: boolean;
}

/**
 * Message
 * with
 * a
 * comment.
 */
export class Test1 implements ITest1 {
    /**
     * Constructs a new Test1.
     */
    constructor(properties?: ITest1) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    /**
     * Field with a comment.
     */
    field1?: string;

    field2?: number;
    /**
     * Field with a comment and a <a href="http://example.com/foo/">link</a>
     */
    field3?: boolean;


    /**
     * Creates a new Test1 instance using the specified properties.
     */
    static create(properties: ITest1): Test1 {
        return new Test1(properties);
    }

    /**
     * Encodes the specified Test1 message. Does not implicitly {@link Test1.verify|verify} messages.
     * @param message Test1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITest1, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.field1 != null && Object.hasOwnProperty.call(message, "field1"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.field1);
        if (message.field2 != null && Object.hasOwnProperty.call(message, "field2"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.field2);
        if (message.field3 != null && Object.hasOwnProperty.call(message, "field3"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.field3);
        return writer;
    }

    /**
     * Encodes the specified Test1 message, length delimited. Does not implicitly {@link Test1.verify|verify} messages.
     * @param message Test1message or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITest1, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Test1 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Test1 {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Test1();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.field1 = reader.string();
                break;
            case 2:
                message.field2 = reader.uint32();
                break;
            case 3:
                message.field3 = reader.bool();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a Test1 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Test1 {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Test1 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.field1 != null && message.hasOwnProperty("field1"))
            if (!$util.isString(message.field1))
                return "field1: string expected";
        if (message.field2 != null && message.hasOwnProperty("field2"))
            if (!$util.isInteger(message.field2))
                return "field2: integer expected";
        if (message.field3 != null && message.hasOwnProperty("field3"))
            if (typeof message.field3 !== "boolean")
                return "field3: boolean expected";
        return null;
    }

    /**
     * Creates a Test1 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITest1 {
        if (object instanceof Test1)
            return object;
        var message = new Test1();
        if (object.field1 != null)
            message.field1 = String(object.field1);
        if (object.field2 != null)
            message.field2 = object.field2 >>> 0;
        if (object.field3 != null)
            message.field3 = Boolean(object.field3);
        return message;
    }

    /**
     * Creates a plain object from a Test1 message. Also converts values to other types if specified.
     * @param message Test1
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITest1, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults) {
            object.field1 = "";
            object.field2 = 0;
            object.field3 = false;
        }
        if (message.field1 != null && message.hasOwnProperty("field1"))
            object.field1 = message.field1;
        if (message.field2 != null && message.hasOwnProperty("field2"))
            object.field2 = message.field2;
        if (message.field3 != null && message.hasOwnProperty("field3"))
            object.field3 = message.field3;
        return object;
    }

    /**
     * Converts this Test1 to JSON.
     */
    toJSON() {
        return Test1.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITest1, b?: ITest1): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.field1 === b.field1 && a.field2 === b.field2 && a.field3 === b.field3;
    }
}

/** Properties of a Test2. */
export interface ITest2 {
}

/**
 * Represents a Test2.
 */
export class Test2 implements ITest2 {
    /**
     * Constructs a new Test2.
     */
    constructor(properties?: ITest2) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Test2 instance using the specified properties.
     */
    static create(properties: ITest2): Test2 {
        return new Test2(properties);
    }

    /**
     * Encodes the specified Test2 message. Does not implicitly {@link Test2.verify|verify} messages.
     * @param message Test2message or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: ITest2, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified Test2 message, length delimited. Does not implicitly {@link Test2.verify|verify} messages.
     * @param message Test2message or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: ITest2, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Test2 message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Test2 {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Test2();
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
     * Decodes a Test2 message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Test2 {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Test2 message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    }

    /**
     * Creates a Test2 message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ITest2 {
        if (object instanceof Test2)
            return object;
        return new Test2();
    }

    /**
     * Creates a plain object from a Test2 message. Also converts values to other types if specified.
     * @param message Test2
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ITest2, options: $protobuf.IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this Test2 to JSON.
     */
    toJSON() {
        return Test2.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: ITest2, b?: ITest2): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return true;
    }
}

export enum Test3 {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
}
;
