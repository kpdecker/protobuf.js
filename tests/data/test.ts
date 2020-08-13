import * as $protobuf from "../../minimal";


// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;


export namespace jspb.test {
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Empty();
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
            if (object instanceof jspb.test.Empty)
                return object;
            return new jspb.test.Empty();
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
        outerEnum?: jspb.test.OuterEnum;
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
        outerEnum?: jspb.test.OuterEnum = 1;

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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.EnumContainer();
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
            if (object instanceof jspb.test.EnumContainer)
                return object;
            var message = new jspb.test.EnumContainer();
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
                object.outerEnum = options.enums === String ? jspb.test.OuterEnum[message.outerEnum] : message.outerEnum;
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
        aSomething?: aaaa.b.ISomething;
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
        aSomething?: aaaa.b.ISomething;

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
                aaaa.b.Something.encode(message.aSomething, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Simple1();
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
                    message.aSomething = aaaa.b.Something.decode(reader, reader.uint32());
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
                var error = aaaa.b.Something.verify(message.aSomething);
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
            if (object instanceof jspb.test.Simple1)
                return object;
            var message = new jspb.test.Simple1();
            if (object.aString != null)
                message.aString = String(object.aString);
            if (object.aRepeatedString) {
                if (!Array.isArray(object.aRepeatedString))
                    throw TypeError(".jspb.test.Simple1.aRepeatedString: array expected");
                message.aRepeatedString = [];
                for (var i = 0; i < object.aRepeatedString.length; ++i)
                    message.aRepeatedString[i] = String(object.aRepeatedString[i]);
            }
            if (object.aBoolean != null)
                message.aBoolean = Boolean(object.aBoolean);
            if (object.aSomething != null) {
                if (typeof object.aSomething !== "object")
                    throw TypeError(".jspb.test.Simple1.aSomething: object expected");
                message.aSomething = aaaa.b.Something.fromObject(object.aSomething);
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
                object.aSomething = aaaa.b.Something.toObject(message.aSomething, options);
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
            })) && a.aBoolean === b.aBoolean && aaaa.b.Something.equals(a.aSomething, b.aSomething);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Simple2();
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
            if (object instanceof jspb.test.Simple2)
                return object;
            var message = new jspb.test.Simple2();
            if (object.aString != null)
                message.aString = String(object.aString);
            if (object.aRepeatedString) {
                if (!Array.isArray(object.aRepeatedString))
                    throw TypeError(".jspb.test.Simple2.aRepeatedString: array expected");
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.SpecialCases();
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
            if (object instanceof jspb.test.SpecialCases)
                return object;
            var message = new jspb.test.SpecialCases();
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
        aNestedMessage?: jspb.test.OptionalFields.INested;
        aRepeatedMessage?: jspb.test.OptionalFields.INested[];
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
        aNestedMessage?: jspb.test.OptionalFields.INested;
        aRepeatedMessage?: jspb.test.OptionalFields.INested[];
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
                jspb.test.OptionalFields.Nested.encode(message.aNestedMessage, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
                for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                    jspb.test.OptionalFields.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.OptionalFields();
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
                    message.aNestedMessage = jspb.test.OptionalFields.Nested.decode(reader, reader.uint32());
                    break;
                case 4:
                    if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                        message.aRepeatedMessage = [];
                    message.aRepeatedMessage.push(jspb.test.OptionalFields.Nested.decode(reader, reader.uint32()));
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
                var error = jspb.test.OptionalFields.Nested.verify(message.aNestedMessage);
                if (error)
                    return "aNestedMessage." + error;
            }
            if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
                if (!Array.isArray(message.aRepeatedMessage))
                    return "aRepeatedMessage: array expected";
                for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                    var error = jspb.test.OptionalFields.Nested.verify(message.aRepeatedMessage[i]);
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
            if (object instanceof jspb.test.OptionalFields)
                return object;
            var message = new jspb.test.OptionalFields();
            if (object.aString != null)
                message.aString = String(object.aString);
            if (object.aBool != null)
                message.aBool = Boolean(object.aBool);
            if (object.aNestedMessage != null) {
                if (typeof object.aNestedMessage !== "object")
                    throw TypeError(".jspb.test.OptionalFields.aNestedMessage: object expected");
                message.aNestedMessage = jspb.test.OptionalFields.Nested.fromObject(object.aNestedMessage);
            }
            if (object.aRepeatedMessage) {
                if (!Array.isArray(object.aRepeatedMessage))
                    throw TypeError(".jspb.test.OptionalFields.aRepeatedMessage: array expected");
                message.aRepeatedMessage = [];
                for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                    if (typeof object.aRepeatedMessage[i] !== "object")
                        throw TypeError(".jspb.test.OptionalFields.aRepeatedMessage: object expected");
                    message.aRepeatedMessage[i] = jspb.test.OptionalFields.Nested.fromObject(object.aRepeatedMessage[i]);
                }
            }
            if (object.aRepeatedString) {
                if (!Array.isArray(object.aRepeatedString))
                    throw TypeError(".jspb.test.OptionalFields.aRepeatedString: array expected");
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
                object.aNestedMessage = jspb.test.OptionalFields.Nested.toObject(message.aNestedMessage, options);
            if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
                object.aRepeatedMessage = [];
                for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                    object.aRepeatedMessage[j] = jspb.test.OptionalFields.Nested.toObject(message.aRepeatedMessage[j], options);
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
            return a.aString === b.aString && a.aBool === b.aBool && jspb.test.OptionalFields.Nested.equals(a.aNestedMessage, b.aNestedMessage) && (!!a.aRepeatedMessage && !!b.aRepeatedMessage && a.aRepeatedMessage.length === b.aRepeatedMessage.length && !a.aRepeatedMessage.find(function (aValue, i) {
                return jspb.test.OptionalFields.Nested.equals(a.aRepeatedMessage && a.aRepeatedMessage[i], b.aRepeatedMessage && b.aRepeatedMessage[i]);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.OptionalFields.Nested();
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
                if (object instanceof jspb.test.OptionalFields.Nested)
                    return object;
                var message = new jspb.test.OptionalFields.Nested();
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
        ".jspb.test.IsExtension.extField"?: jspb.test.IIsExtension;
        ".jspb.test.IndirectExtension.simple"?: jspb.test.ISimple1;
        ".jspb.test.IndirectExtension.str"?: string;
        ".jspb.test.IndirectExtension.repeatedStr"?: string[];
        ".jspb.test.IndirectExtension.repeatedSimple"?: jspb.test.ISimple1[];
        ".jspb.test.simple1"?: jspb.test.ISimple1;
    }

    /**
     * Represents a HasExtensions.
     */
    export class HasExtensions implements IHasExtensions {
        /**
         * Constructs a new HasExtensions.
         */
        constructor(properties?: IHasExtensions) {
            this[".jspb.test.IndirectExtension.repeatedStr"] = [];
            this[".jspb.test.IndirectExtension.repeatedSimple"] = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        str1?: string = "";
        str2?: string = "";
        str3?: string = "";
        [".jspb.test.IsExtension.extField"]?: jspb.test.IIsExtension;
        [".jspb.test.IndirectExtension.simple"]?: jspb.test.ISimple1;
        [".jspb.test.IndirectExtension.str"]?: string = "";
        [".jspb.test.IndirectExtension.repeatedStr"]?: string[];
        [".jspb.test.IndirectExtension.repeatedSimple"]?: jspb.test.ISimple1[];
        [".jspb.test.simple1"]?: jspb.test.ISimple1;

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
            if (message[".jspb.test.IsExtension.extField"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IsExtension.extField"))
                jspb.test.IsExtension.encode(message[".jspb.test.IsExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
            if (message[".jspb.test.IndirectExtension.simple"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IndirectExtension.simple"))
                jspb.test.Simple1.encode(message[".jspb.test.IndirectExtension.simple"], writer.uint32(/* id 101, wireType 2 =*/810).fork()).ldelim();
            if (message[".jspb.test.IndirectExtension.str"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IndirectExtension.str"))
                writer.uint32(/* id 102, wireType 2 =*/818).string(message[".jspb.test.IndirectExtension.str"]);
            if (message[".jspb.test.IndirectExtension.repeatedStr"] != null && message[".jspb.test.IndirectExtension.repeatedStr"].length)
                for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                    writer.uint32(/* id 103, wireType 2 =*/826).string(message[".jspb.test.IndirectExtension.repeatedStr"][i]);
            if (message[".jspb.test.IndirectExtension.repeatedSimple"] != null && message[".jspb.test.IndirectExtension.repeatedSimple"].length)
                for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i)
                    jspb.test.Simple1.encode(message[".jspb.test.IndirectExtension.repeatedSimple"][i], writer.uint32(/* id 104, wireType 2 =*/834).fork()).ldelim();
            if (message[".jspb.test.simple1"] != null && Object.hasOwnProperty.call(message, ".jspb.test.simple1"))
                jspb.test.Simple1.encode(message[".jspb.test.simple1"], writer.uint32(/* id 105, wireType 2 =*/842).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.HasExtensions();
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
                    message[".jspb.test.IsExtension.extField"] = jspb.test.IsExtension.decode(reader, reader.uint32());
                    break;
                case 101:
                    message[".jspb.test.IndirectExtension.simple"] = jspb.test.Simple1.decode(reader, reader.uint32());
                    break;
                case 102:
                    message[".jspb.test.IndirectExtension.str"] = reader.string();
                    break;
                case 103:
                    if (!(message[".jspb.test.IndirectExtension.repeatedStr"] && message[".jspb.test.IndirectExtension.repeatedStr"].length))
                        message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                    message[".jspb.test.IndirectExtension.repeatedStr"].push(reader.string());
                    break;
                case 104:
                    if (!(message[".jspb.test.IndirectExtension.repeatedSimple"] && message[".jspb.test.IndirectExtension.repeatedSimple"].length))
                        message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                    message[".jspb.test.IndirectExtension.repeatedSimple"].push(jspb.test.Simple1.decode(reader, reader.uint32()));
                    break;
                case 105:
                    message[".jspb.test.simple1"] = jspb.test.Simple1.decode(reader, reader.uint32());
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
            if (message[".jspb.test.IsExtension.extField"] != null && message.hasOwnProperty(".jspb.test.IsExtension.extField")) {
                var error = jspb.test.IsExtension.verify(message[".jspb.test.IsExtension.extField"]);
                if (error)
                    return ".jspb.test.IsExtension.extField." + error;
            }
            if (message[".jspb.test.IndirectExtension.simple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.simple")) {
                var error = jspb.test.Simple1.verify(message[".jspb.test.IndirectExtension.simple"]);
                if (error)
                    return ".jspb.test.IndirectExtension.simple." + error;
            }
            if (message[".jspb.test.IndirectExtension.str"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.str"))
                if (!$util.isString(message[".jspb.test.IndirectExtension.str"]))
                    return ".jspb.test.IndirectExtension.str: string expected";
            if (message[".jspb.test.IndirectExtension.repeatedStr"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.repeatedStr")) {
                if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedStr"]))
                    return ".jspb.test.IndirectExtension.repeatedStr: array expected";
                for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                    if (!$util.isString(message[".jspb.test.IndirectExtension.repeatedStr"][i]))
                        return ".jspb.test.IndirectExtension.repeatedStr: string[] expected";
            }
            if (message[".jspb.test.IndirectExtension.repeatedSimple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.repeatedSimple")) {
                if (!Array.isArray(message[".jspb.test.IndirectExtension.repeatedSimple"]))
                    return ".jspb.test.IndirectExtension.repeatedSimple: array expected";
                for (var i = 0; i < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                    var error = jspb.test.Simple1.verify(message[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                    if (error)
                        return ".jspb.test.IndirectExtension.repeatedSimple." + error;
                }
            }
            if (message[".jspb.test.simple1"] != null && message.hasOwnProperty(".jspb.test.simple1")) {
                var error = jspb.test.Simple1.verify(message[".jspb.test.simple1"]);
                if (error)
                    return ".jspb.test.simple1." + error;
            }
            return null;
        }

        /**
         * Creates a HasExtensions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IHasExtensions {
            if (object instanceof jspb.test.HasExtensions)
                return object;
            var message = new jspb.test.HasExtensions();
            if (object.str1 != null)
                message.str1 = String(object.str1);
            if (object.str2 != null)
                message.str2 = String(object.str2);
            if (object.str3 != null)
                message.str3 = String(object.str3);
            if (object[".jspb.test.IsExtension.extField"] != null) {
                if (typeof object[".jspb.test.IsExtension.extField"] !== "object")
                    throw TypeError(".jspb.test.HasExtensions..jspb.test.IsExtension.extField: object expected");
                message[".jspb.test.IsExtension.extField"] = jspb.test.IsExtension.fromObject(object[".jspb.test.IsExtension.extField"]);
            }
            if (object[".jspb.test.IndirectExtension.simple"] != null) {
                if (typeof object[".jspb.test.IndirectExtension.simple"] !== "object")
                    throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.simple: object expected");
                message[".jspb.test.IndirectExtension.simple"] = jspb.test.Simple1.fromObject(object[".jspb.test.IndirectExtension.simple"]);
            }
            if (object[".jspb.test.IndirectExtension.str"] != null)
                message[".jspb.test.IndirectExtension.str"] = String(object[".jspb.test.IndirectExtension.str"]);
            if (object[".jspb.test.IndirectExtension.repeatedStr"]) {
                if (!Array.isArray(object[".jspb.test.IndirectExtension.repeatedStr"]))
                    throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedStr: array expected");
                message[".jspb.test.IndirectExtension.repeatedStr"] = [];
                for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedStr"].length; ++i)
                    message[".jspb.test.IndirectExtension.repeatedStr"][i] = String(object[".jspb.test.IndirectExtension.repeatedStr"][i]);
            }
            if (object[".jspb.test.IndirectExtension.repeatedSimple"]) {
                if (!Array.isArray(object[".jspb.test.IndirectExtension.repeatedSimple"]))
                    throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedSimple: array expected");
                message[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                for (var i = 0; i < object[".jspb.test.IndirectExtension.repeatedSimple"].length; ++i) {
                    if (typeof object[".jspb.test.IndirectExtension.repeatedSimple"][i] !== "object")
                        throw TypeError(".jspb.test.HasExtensions..jspb.test.IndirectExtension.repeatedSimple: object expected");
                    message[".jspb.test.IndirectExtension.repeatedSimple"][i] = jspb.test.Simple1.fromObject(object[".jspb.test.IndirectExtension.repeatedSimple"][i]);
                }
            }
            if (object[".jspb.test.simple1"] != null) {
                if (typeof object[".jspb.test.simple1"] !== "object")
                    throw TypeError(".jspb.test.HasExtensions..jspb.test.simple1: object expected");
                message[".jspb.test.simple1"] = jspb.test.Simple1.fromObject(object[".jspb.test.simple1"]);
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
                object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
            }
            if (options.defaults) {
                object.str1 = "";
                object.str2 = "";
                object.str3 = "";
                object[".jspb.test.IsExtension.extField"] = null;
                object[".jspb.test.IndirectExtension.simple"] = null;
                object[".jspb.test.IndirectExtension.str"] = "";
                object[".jspb.test.simple1"] = null;
            }
            if (message.str1 != null && message.hasOwnProperty("str1"))
                object.str1 = message.str1;
            if (message.str2 != null && message.hasOwnProperty("str2"))
                object.str2 = message.str2;
            if (message.str3 != null && message.hasOwnProperty("str3"))
                object.str3 = message.str3;
            if (message[".jspb.test.IsExtension.extField"] != null && message.hasOwnProperty(".jspb.test.IsExtension.extField"))
                object[".jspb.test.IsExtension.extField"] = jspb.test.IsExtension.toObject(message[".jspb.test.IsExtension.extField"], options);
            if (message[".jspb.test.IndirectExtension.simple"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.simple"))
                object[".jspb.test.IndirectExtension.simple"] = jspb.test.Simple1.toObject(message[".jspb.test.IndirectExtension.simple"], options);
            if (message[".jspb.test.IndirectExtension.str"] != null && message.hasOwnProperty(".jspb.test.IndirectExtension.str"))
                object[".jspb.test.IndirectExtension.str"] = message[".jspb.test.IndirectExtension.str"];
            if (message[".jspb.test.IndirectExtension.repeatedStr"] && message[".jspb.test.IndirectExtension.repeatedStr"].length) {
                object[".jspb.test.IndirectExtension.repeatedStr"] = [];
                for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedStr"].length; ++j)
                    object[".jspb.test.IndirectExtension.repeatedStr"][j] = message[".jspb.test.IndirectExtension.repeatedStr"][j];
            }
            if (message[".jspb.test.IndirectExtension.repeatedSimple"] && message[".jspb.test.IndirectExtension.repeatedSimple"].length) {
                object[".jspb.test.IndirectExtension.repeatedSimple"] = [];
                for (var j = 0; j < message[".jspb.test.IndirectExtension.repeatedSimple"].length; ++j)
                    object[".jspb.test.IndirectExtension.repeatedSimple"][j] = jspb.test.Simple1.toObject(message[".jspb.test.IndirectExtension.repeatedSimple"][j], options);
            }
            if (message[".jspb.test.simple1"] != null && message.hasOwnProperty(".jspb.test.simple1"))
                object[".jspb.test.simple1"] = jspb.test.Simple1.toObject(message[".jspb.test.simple1"], options);
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
            return a.str1 === b.str1 && a.str2 === b.str2 && a.str3 === b.str3 && jspb.test.IsExtension.equals(a[".jspb.test.IsExtension.extField"], b[".jspb.test.IsExtension.extField"]) && jspb.test.Simple1.equals(a[".jspb.test.IndirectExtension.simple"], b[".jspb.test.IndirectExtension.simple"]) && a[".jspb.test.IndirectExtension.str"] === b[".jspb.test.IndirectExtension.str"] && (!!a[".jspb.test.IndirectExtension.repeatedStr"] && !!b[".jspb.test.IndirectExtension.repeatedStr"] && a[".jspb.test.IndirectExtension.repeatedStr"].length === b[".jspb.test.IndirectExtension.repeatedStr"].length && !a[".jspb.test.IndirectExtension.repeatedStr"].find(function (aValue, i) {
                return (a[".jspb.test.IndirectExtension.repeatedStr"] && a[".jspb.test.IndirectExtension.repeatedStr"][i]) === (b[".jspb.test.IndirectExtension.repeatedStr"] && b[".jspb.test.IndirectExtension.repeatedStr"][i]);
            })) && (!!a[".jspb.test.IndirectExtension.repeatedSimple"] && !!b[".jspb.test.IndirectExtension.repeatedSimple"] && a[".jspb.test.IndirectExtension.repeatedSimple"].length === b[".jspb.test.IndirectExtension.repeatedSimple"].length && !a[".jspb.test.IndirectExtension.repeatedSimple"].find(function (aValue, i) {
                return jspb.test.Simple1.equals(a[".jspb.test.IndirectExtension.repeatedSimple"] && a[".jspb.test.IndirectExtension.repeatedSimple"][i], b[".jspb.test.IndirectExtension.repeatedSimple"] && b[".jspb.test.IndirectExtension.repeatedSimple"][i]);
            })) && jspb.test.Simple1.equals(a[".jspb.test.simple1"], b[".jspb.test.simple1"]);
        }
    }

    /** Properties of a Complex. */
    export interface IComplex {
        aString: string;
        anOutOfOrderBool: boolean;
        aNestedMessage?: jspb.test.Complex.INested;
        aRepeatedMessage?: jspb.test.Complex.INested[];
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
        aNestedMessage?: jspb.test.Complex.INested;
        aRepeatedMessage?: jspb.test.Complex.INested[];
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
                jspb.test.Complex.Nested.encode(message.aNestedMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.aRepeatedMessage != null && message.aRepeatedMessage.length)
                for (var i = 0; i < message.aRepeatedMessage.length; ++i)
                    jspb.test.Complex.Nested.encode(message.aRepeatedMessage[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Complex();
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
                    message.aNestedMessage = jspb.test.Complex.Nested.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.aRepeatedMessage && message.aRepeatedMessage.length))
                        message.aRepeatedMessage = [];
                    message.aRepeatedMessage.push(jspb.test.Complex.Nested.decode(reader, reader.uint32()));
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
                var error = jspb.test.Complex.Nested.verify(message.aNestedMessage);
                if (error)
                    return "aNestedMessage." + error;
            }
            if (message.aRepeatedMessage != null && message.hasOwnProperty("aRepeatedMessage")) {
                if (!Array.isArray(message.aRepeatedMessage))
                    return "aRepeatedMessage: array expected";
                for (var i = 0; i < message.aRepeatedMessage.length; ++i) {
                    var error = jspb.test.Complex.Nested.verify(message.aRepeatedMessage[i]);
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
            if (object instanceof jspb.test.Complex)
                return object;
            var message = new jspb.test.Complex();
            if (object.aString != null)
                message.aString = String(object.aString);
            if (object.anOutOfOrderBool != null)
                message.anOutOfOrderBool = Boolean(object.anOutOfOrderBool);
            if (object.aNestedMessage != null) {
                if (typeof object.aNestedMessage !== "object")
                    throw TypeError(".jspb.test.Complex.aNestedMessage: object expected");
                message.aNestedMessage = jspb.test.Complex.Nested.fromObject(object.aNestedMessage);
            }
            if (object.aRepeatedMessage) {
                if (!Array.isArray(object.aRepeatedMessage))
                    throw TypeError(".jspb.test.Complex.aRepeatedMessage: array expected");
                message.aRepeatedMessage = [];
                for (var i = 0; i < object.aRepeatedMessage.length; ++i) {
                    if (typeof object.aRepeatedMessage[i] !== "object")
                        throw TypeError(".jspb.test.Complex.aRepeatedMessage: object expected");
                    message.aRepeatedMessage[i] = jspb.test.Complex.Nested.fromObject(object.aRepeatedMessage[i]);
                }
            }
            if (object.aRepeatedString) {
                if (!Array.isArray(object.aRepeatedString))
                    throw TypeError(".jspb.test.Complex.aRepeatedString: array expected");
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
                object.aNestedMessage = jspb.test.Complex.Nested.toObject(message.aNestedMessage, options);
            if (message.aRepeatedMessage && message.aRepeatedMessage.length) {
                object.aRepeatedMessage = [];
                for (var j = 0; j < message.aRepeatedMessage.length; ++j)
                    object.aRepeatedMessage[j] = jspb.test.Complex.Nested.toObject(message.aRepeatedMessage[j], options);
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
            return a.aString === b.aString && a.anOutOfOrderBool === b.anOutOfOrderBool && jspb.test.Complex.Nested.equals(a.aNestedMessage, b.aNestedMessage) && (!!a.aRepeatedMessage && !!b.aRepeatedMessage && a.aRepeatedMessage.length === b.aRepeatedMessage.length && !a.aRepeatedMessage.find(function (aValue, i) {
                return jspb.test.Complex.Nested.equals(a.aRepeatedMessage && a.aRepeatedMessage[i], b.aRepeatedMessage && b.aRepeatedMessage[i]);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Complex.Nested();
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
                if (object instanceof jspb.test.Complex.Nested)
                    return object;
                var message = new jspb.test.Complex.Nested();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.OuterMessage();
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
            if (object instanceof jspb.test.OuterMessage)
                return object;
            return new jspb.test.OuterMessage();
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.OuterMessage.Complex();
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
                if (object instanceof jspb.test.OuterMessage.Complex)
                    return object;
                var message = new jspb.test.OuterMessage.Complex();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.IsExtension();
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
            if (object instanceof jspb.test.IsExtension)
                return object;
            var message = new jspb.test.IsExtension();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.IndirectExtension();
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
            if (object instanceof jspb.test.IndirectExtension)
                return object;
            return new jspb.test.IndirectExtension();
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
        enumField?: jspb.test.DefaultValues.Enum;
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
        enumField?: jspb.test.DefaultValues.Enum = 13;
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.DefaultValues();
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
            if (object instanceof jspb.test.DefaultValues)
                return object;
            var message = new jspb.test.DefaultValues();
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
                object.enumField = options.enums === String ? jspb.test.DefaultValues.Enum[message.enumField] : message.enumField;
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.FloatingPointFields();
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
            if (object instanceof jspb.test.FloatingPointFields)
                return object;
            var message = new jspb.test.FloatingPointFields();
            if (object.optionalFloatField != null)
                message.optionalFloatField = Number(object.optionalFloatField);
            if (object.requiredFloatField != null)
                message.requiredFloatField = Number(object.requiredFloatField);
            if (object.repeatedFloatField) {
                if (!Array.isArray(object.repeatedFloatField))
                    throw TypeError(".jspb.test.FloatingPointFields.repeatedFloatField: array expected");
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
                    throw TypeError(".jspb.test.FloatingPointFields.repeatedDoubleField: array expected");
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
        simple1?: jspb.test.ISimple1;
        simple2?: jspb.test.ISimple1[];
        bytesField?: Uint8Array;
        unused?: string;
        ".jspb.test.CloneExtension.extField"?: jspb.test.ICloneExtension;
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
        simple1?: jspb.test.ISimple1;
        simple2?: jspb.test.ISimple1[];
        bytesField?: Uint8Array= $util.newBuffer([]);
        unused?: string = "";
        [".jspb.test.CloneExtension.extField"]?: jspb.test.ICloneExtension;

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
                jspb.test.Simple1.encode(message.simple1, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.simple2 != null && message.simple2.length)
                for (var i = 0; i < message.simple2.length; ++i)
                    jspb.test.Simple1.encode(message.simple2[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.bytesField != null && Object.hasOwnProperty.call(message, "bytesField"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.bytesField);
            if (message.unused != null && Object.hasOwnProperty.call(message, "unused"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.unused);
            if (message[".jspb.test.CloneExtension.extField"] != null && Object.hasOwnProperty.call(message, ".jspb.test.CloneExtension.extField"))
                jspb.test.CloneExtension.encode(message[".jspb.test.CloneExtension.extField"], writer.uint32(/* id 100, wireType 2 =*/802).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestClone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.str = reader.string();
                    break;
                case 3:
                    message.simple1 = jspb.test.Simple1.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.simple2 && message.simple2.length))
                        message.simple2 = [];
                    message.simple2.push(jspb.test.Simple1.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.bytesField = reader.bytes();
                    break;
                case 7:
                    message.unused = reader.string();
                    break;
                case 100:
                    message[".jspb.test.CloneExtension.extField"] = jspb.test.CloneExtension.decode(reader, reader.uint32());
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
                var error = jspb.test.Simple1.verify(message.simple1);
                if (error)
                    return "simple1." + error;
            }
            if (message.simple2 != null && message.hasOwnProperty("simple2")) {
                if (!Array.isArray(message.simple2))
                    return "simple2: array expected";
                for (var i = 0; i < message.simple2.length; ++i) {
                    var error = jspb.test.Simple1.verify(message.simple2[i]);
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
            if (message[".jspb.test.CloneExtension.extField"] != null && message.hasOwnProperty(".jspb.test.CloneExtension.extField")) {
                var error = jspb.test.CloneExtension.verify(message[".jspb.test.CloneExtension.extField"]);
                if (error)
                    return ".jspb.test.CloneExtension.extField." + error;
            }
            return null;
        }

        /**
         * Creates a TestClone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): ITestClone {
            if (object instanceof jspb.test.TestClone)
                return object;
            var message = new jspb.test.TestClone();
            if (object.str != null)
                message.str = String(object.str);
            if (object.simple1 != null) {
                if (typeof object.simple1 !== "object")
                    throw TypeError(".jspb.test.TestClone.simple1: object expected");
                message.simple1 = jspb.test.Simple1.fromObject(object.simple1);
            }
            if (object.simple2) {
                if (!Array.isArray(object.simple2))
                    throw TypeError(".jspb.test.TestClone.simple2: array expected");
                message.simple2 = [];
                for (var i = 0; i < object.simple2.length; ++i) {
                    if (typeof object.simple2[i] !== "object")
                        throw TypeError(".jspb.test.TestClone.simple2: object expected");
                    message.simple2[i] = jspb.test.Simple1.fromObject(object.simple2[i]);
                }
            }
            if (object.bytesField != null)
                if (typeof object.bytesField === "string")
                    $util.base64.decode(object.bytesField, message.bytesField = $util.newBuffer($util.base64.length(object.bytesField)), 0);
                else if (object.bytesField.length)
                    message.bytesField = object.bytesField;
            if (object.unused != null)
                message.unused = String(object.unused);
            if (object[".jspb.test.CloneExtension.extField"] != null) {
                if (typeof object[".jspb.test.CloneExtension.extField"] !== "object")
                    throw TypeError(".jspb.test.TestClone..jspb.test.CloneExtension.extField: object expected");
                message[".jspb.test.CloneExtension.extField"] = jspb.test.CloneExtension.fromObject(object[".jspb.test.CloneExtension.extField"]);
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
                object[".jspb.test.CloneExtension.extField"] = null;
            }
            if (message.str != null && message.hasOwnProperty("str"))
                object.str = message.str;
            if (message.simple1 != null && message.hasOwnProperty("simple1"))
                object.simple1 = jspb.test.Simple1.toObject(message.simple1, options);
            if (message.simple2 && message.simple2.length) {
                object.simple2 = [];
                for (var j = 0; j < message.simple2.length; ++j)
                    object.simple2[j] = jspb.test.Simple1.toObject(message.simple2[j], options);
            }
            if (message.bytesField != null && message.hasOwnProperty("bytesField"))
                object.bytesField = options.bytes === String ? $util.base64.encode(message.bytesField, 0, message.bytesField.length) : options.bytes === Array ? Array.prototype.slice.call(message.bytesField) : message.bytesField;
            if (message.unused != null && message.hasOwnProperty("unused"))
                object.unused = message.unused;
            if (message[".jspb.test.CloneExtension.extField"] != null && message.hasOwnProperty(".jspb.test.CloneExtension.extField"))
                object[".jspb.test.CloneExtension.extField"] = jspb.test.CloneExtension.toObject(message[".jspb.test.CloneExtension.extField"], options);
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
            return a.str === b.str && jspb.test.Simple1.equals(a.simple1, b.simple1) && (!!a.simple2 && !!b.simple2 && a.simple2.length === b.simple2.length && !a.simple2.find(function (aValue, i) {
                return jspb.test.Simple1.equals(a.simple2 && a.simple2[i], b.simple2 && b.simple2[i]);
            })) && $util.bytesEquals(a.bytesField, b.bytesField) && a.unused === b.unused && jspb.test.CloneExtension.equals(a[".jspb.test.CloneExtension.extField"], b[".jspb.test.CloneExtension.extField"]);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.CloneExtension();
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
            if (object instanceof jspb.test.CloneExtension)
                return object;
            var message = new jspb.test.CloneExtension();
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
        repeatedGroup?: jspb.test.TestGroup.IRepeatedGroup[];
        requiredGroup: jspb.test.TestGroup.IRequiredGroup;
        optionalGroup?: jspb.test.TestGroup.IOptionalGroup;
        id?: string;
        requiredSimple: jspb.test.ISimple2;
        optionalSimple?: jspb.test.ISimple2;
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
        repeatedGroup?: jspb.test.TestGroup.IRepeatedGroup[];
        requiredGroup: jspb.test.TestGroup.IRequiredGroup;
        optionalGroup?: jspb.test.TestGroup.IOptionalGroup;
        id?: string = "";
        requiredSimple: jspb.test.ISimple2;
        optionalSimple?: jspb.test.ISimple2;

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
                    jspb.test.TestGroup.RepeatedGroup.encode(message.repeatedGroup[i], writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
            jspb.test.TestGroup.RequiredGroup.encode(message.requiredGroup, writer.uint32(/* id 2, wireType 3 =*/19)).uint32(/* id 2, wireType 4 =*/20);
            if (message.optionalGroup != null && Object.hasOwnProperty.call(message, "optionalGroup"))
                jspb.test.TestGroup.OptionalGroup.encode(message.optionalGroup, writer.uint32(/* id 3, wireType 3 =*/27)).uint32(/* id 3, wireType 4 =*/28);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.id);
            jspb.test.Simple2.encode(message.requiredSimple, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.optionalSimple != null && Object.hasOwnProperty.call(message, "optionalSimple"))
                jspb.test.Simple2.encode(message.optionalSimple, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.repeatedGroup && message.repeatedGroup.length))
                        message.repeatedGroup = [];
                    message.repeatedGroup.push(jspb.test.TestGroup.RepeatedGroup.decode(reader));
                    break;
                case 2:
                    message.requiredGroup = jspb.test.TestGroup.RequiredGroup.decode(reader);
                    break;
                case 3:
                    message.optionalGroup = jspb.test.TestGroup.OptionalGroup.decode(reader);
                    break;
                case 4:
                    message.id = reader.string();
                    break;
                case 5:
                    message.requiredSimple = jspb.test.Simple2.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.optionalSimple = jspb.test.Simple2.decode(reader, reader.uint32());
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
                    var error = jspb.test.TestGroup.RepeatedGroup.verify(message.repeatedGroup[i]);
                    if (error)
                        return "repeatedGroup." + error;
                }
            }
            {
                var error = jspb.test.TestGroup.RequiredGroup.verify(message.requiredGroup);
                if (error)
                    return "requiredGroup." + error;
            }
            if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup")) {
                var error = jspb.test.TestGroup.OptionalGroup.verify(message.optionalGroup);
                if (error)
                    return "optionalGroup." + error;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            {
                var error = jspb.test.Simple2.verify(message.requiredSimple);
                if (error)
                    return "requiredSimple." + error;
            }
            if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple")) {
                var error = jspb.test.Simple2.verify(message.optionalSimple);
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
            if (object instanceof jspb.test.TestGroup)
                return object;
            var message = new jspb.test.TestGroup();
            if (object.repeatedGroup) {
                if (!Array.isArray(object.repeatedGroup))
                    throw TypeError(".jspb.test.TestGroup.repeatedGroup: array expected");
                message.repeatedGroup = [];
                for (var i = 0; i < object.repeatedGroup.length; ++i) {
                    if (typeof object.repeatedGroup[i] !== "object")
                        throw TypeError(".jspb.test.TestGroup.repeatedGroup: object expected");
                    message.repeatedGroup[i] = jspb.test.TestGroup.RepeatedGroup.fromObject(object.repeatedGroup[i]);
                }
            }
            if (object.requiredGroup != null) {
                if (typeof object.requiredGroup !== "object")
                    throw TypeError(".jspb.test.TestGroup.requiredGroup: object expected");
                message.requiredGroup = jspb.test.TestGroup.RequiredGroup.fromObject(object.requiredGroup);
            }
            if (object.optionalGroup != null) {
                if (typeof object.optionalGroup !== "object")
                    throw TypeError(".jspb.test.TestGroup.optionalGroup: object expected");
                message.optionalGroup = jspb.test.TestGroup.OptionalGroup.fromObject(object.optionalGroup);
            }
            if (object.id != null)
                message.id = String(object.id);
            if (object.requiredSimple != null) {
                if (typeof object.requiredSimple !== "object")
                    throw TypeError(".jspb.test.TestGroup.requiredSimple: object expected");
                message.requiredSimple = jspb.test.Simple2.fromObject(object.requiredSimple);
            }
            if (object.optionalSimple != null) {
                if (typeof object.optionalSimple !== "object")
                    throw TypeError(".jspb.test.TestGroup.optionalSimple: object expected");
                message.optionalSimple = jspb.test.Simple2.fromObject(object.optionalSimple);
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
                    object.repeatedGroup[j] = jspb.test.TestGroup.RepeatedGroup.toObject(message.repeatedGroup[j], options);
            }
            if (message.requiredGroup != null && message.hasOwnProperty("requiredGroup"))
                object.requiredGroup = jspb.test.TestGroup.RequiredGroup.toObject(message.requiredGroup, options);
            if (message.optionalGroup != null && message.hasOwnProperty("optionalGroup"))
                object.optionalGroup = jspb.test.TestGroup.OptionalGroup.toObject(message.optionalGroup, options);
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.requiredSimple != null && message.hasOwnProperty("requiredSimple"))
                object.requiredSimple = jspb.test.Simple2.toObject(message.requiredSimple, options);
            if (message.optionalSimple != null && message.hasOwnProperty("optionalSimple"))
                object.optionalSimple = jspb.test.Simple2.toObject(message.optionalSimple, options);
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
                return jspb.test.TestGroup.RepeatedGroup.equals(a.repeatedGroup && a.repeatedGroup[i], b.repeatedGroup && b.repeatedGroup[i]);
            }) && jspb.test.TestGroup.RequiredGroup.equals(a.requiredGroup, b.requiredGroup) && jspb.test.TestGroup.OptionalGroup.equals(a.optionalGroup, b.optionalGroup) && a.id === b.id && jspb.test.Simple2.equals(a.requiredSimple, b.requiredSimple) && jspb.test.Simple2.equals(a.optionalSimple, b.optionalSimple);
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestGroup.RepeatedGroup();
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
                if (object instanceof jspb.test.TestGroup.RepeatedGroup)
                    return object;
                var message = new jspb.test.TestGroup.RepeatedGroup();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.someBool) {
                    if (!Array.isArray(object.someBool))
                        throw TypeError(".jspb.test.TestGroup.RepeatedGroup.someBool: array expected");
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestGroup.RequiredGroup();
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
                if (object instanceof jspb.test.TestGroup.RequiredGroup)
                    return object;
                var message = new jspb.test.TestGroup.RequiredGroup();
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestGroup.OptionalGroup();
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
                if (object instanceof jspb.test.TestGroup.OptionalGroup)
                    return object;
                var message = new jspb.test.TestGroup.OptionalGroup();
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
        group?: jspb.test.TestGroup.IRepeatedGroup;
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
        group?: jspb.test.TestGroup.IRepeatedGroup;

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
                jspb.test.TestGroup.RepeatedGroup.encode(message.group, writer.uint32(/* id 1, wireType 3 =*/11)).uint32(/* id 1, wireType 4 =*/12);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestGroup1();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.group = jspb.test.TestGroup.RepeatedGroup.decode(reader);
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
                var error = jspb.test.TestGroup.RepeatedGroup.verify(message.group);
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
            if (object instanceof jspb.test.TestGroup1)
                return object;
            var message = new jspb.test.TestGroup1();
            if (object.group != null) {
                if (typeof object.group !== "object")
                    throw TypeError(".jspb.test.TestGroup1.group: object expected");
                message.group = jspb.test.TestGroup.RepeatedGroup.fromObject(object.group);
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
                object.group = jspb.test.TestGroup.RepeatedGroup.toObject(message.group, options);
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
            return jspb.test.TestGroup.RepeatedGroup.equals(a.group, b.group);
        }
    }

    /** Properties of a TestReservedNames. */
    export interface ITestReservedNames {
        extension?: number;
        ".jspb.test.TestReservedNamesExtension.foo"?: number;
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
        [".jspb.test.TestReservedNamesExtension.foo"]?: number = 0;

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
            if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && Object.hasOwnProperty.call(message, ".jspb.test.TestReservedNamesExtension.foo"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message[".jspb.test.TestReservedNamesExtension.foo"]);
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestReservedNames();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.extension = reader.int32();
                    break;
                case 10:
                    message[".jspb.test.TestReservedNamesExtension.foo"] = reader.int32();
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
            if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && message.hasOwnProperty(".jspb.test.TestReservedNamesExtension.foo"))
                if (!$util.isInteger(message[".jspb.test.TestReservedNamesExtension.foo"]))
                    return ".jspb.test.TestReservedNamesExtension.foo: integer expected";
            return null;
        }

        /**
         * Creates a TestReservedNames message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): ITestReservedNames {
            if (object instanceof jspb.test.TestReservedNames)
                return object;
            var message = new jspb.test.TestReservedNames();
            if (object.extension != null)
                message.extension = object.extension | 0;
            if (object[".jspb.test.TestReservedNamesExtension.foo"] != null)
                message[".jspb.test.TestReservedNamesExtension.foo"] = object[".jspb.test.TestReservedNamesExtension.foo"] | 0;
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
                object[".jspb.test.TestReservedNamesExtension.foo"] = 0;
            }
            if (message.extension != null && message.hasOwnProperty("extension"))
                object.extension = message.extension;
            if (message[".jspb.test.TestReservedNamesExtension.foo"] != null && message.hasOwnProperty(".jspb.test.TestReservedNamesExtension.foo"))
                object[".jspb.test.TestReservedNamesExtension.foo"] = message[".jspb.test.TestReservedNamesExtension.foo"];
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
            return a.extension === b.extension && a[".jspb.test.TestReservedNamesExtension.foo"] === b[".jspb.test.TestReservedNamesExtension.foo"];
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestReservedNamesExtension();
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
            if (object instanceof jspb.test.TestReservedNamesExtension)
                return object;
            return new jspb.test.TestReservedNamesExtension();
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
        rone?: jspb.test.ITestMessageWithOneof;
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
        rone?: jspb.test.ITestMessageWithOneof;
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
        get recursiveOneof(): jspb.test.ITestMessageWithOneof | string {
            return TestMessageWithOneof.oneOf_recursiveOneofGet();
        }
        set recursiveOneof(value: jspb.test.ITestMessageWithOneof | string) {
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
                jspb.test.TestMessageWithOneof.encode(message.rone, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestMessageWithOneof();
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
                    message.rone = jspb.test.TestMessageWithOneof.decode(reader, reader.uint32());
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
                    var error = jspb.test.TestMessageWithOneof.verify(message.rone);
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
            if (object instanceof jspb.test.TestMessageWithOneof)
                return object;
            var message = new jspb.test.TestMessageWithOneof();
            if (object.pone != null)
                message.pone = String(object.pone);
            if (object.pthree != null)
                message.pthree = String(object.pthree);
            if (object.rone != null) {
                if (typeof object.rone !== "object")
                    throw TypeError(".jspb.test.TestMessageWithOneof.rone: object expected");
                message.rone = jspb.test.TestMessageWithOneof.fromObject(object.rone);
            }
            if (object.rtwo != null)
                message.rtwo = String(object.rtwo);
            if (object.normalField != null)
                message.normalField = Boolean(object.normalField);
            if (object.repeatedField) {
                if (!Array.isArray(object.repeatedField))
                    throw TypeError(".jspb.test.TestMessageWithOneof.repeatedField: array expected");
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
                object.rone = jspb.test.TestMessageWithOneof.toObject(message.rone, options);
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
            return a.pone === b.pone && a.pthree === b.pthree && jspb.test.TestMessageWithOneof.equals(a.rone, b.rone) && a.rtwo === b.rtwo && a.normalField === b.normalField && (!!a.repeatedField && !!b.repeatedField && a.repeatedField.length === b.repeatedField.length && !a.repeatedField.find(function (aValue, i) {
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestEndsWithBytes();
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
            if (object instanceof jspb.test.TestEndsWithBytes)
                return object;
            var message = new jspb.test.TestEndsWithBytes();
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
        mapStringEnum?: {[key: string]: jspb.test.MapValueEnumNoBinary};
        mapStringMsg?: {[key: string]: jspb.test.IMapValueMessageNoBinary};
        mapInt32String?: {[key: string]: string};
        mapInt64String?: {[key: string]: string};
        mapBoolString?: {[key: string]: string};
        testMapFields?: jspb.test.ITestMapFieldsNoBinary;
        mapStringTestmapfields?: {[key: string]: jspb.test.ITestMapFieldsNoBinary};
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
        mapStringEnum?: {[key: string]: jspb.test.MapValueEnumNoBinary};
        mapStringMsg?: {[key: string]: jspb.test.IMapValueMessageNoBinary};
        mapInt32String?: {[key: string]: string};
        mapInt64String?: {[key: string]: string};
        mapBoolString?: {[key: string]: string};
        testMapFields?: jspb.test.ITestMapFieldsNoBinary;
        mapStringTestmapfields?: {[key: string]: jspb.test.ITestMapFieldsNoBinary};

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
                    jspb.test.MapValueMessageNoBinary.encode(message.mapStringMsg[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
                jspb.test.TestMapFieldsNoBinary.encode(message.testMapFields, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.mapStringTestmapfields != null && Object.hasOwnProperty.call(message, "mapStringTestmapfields"))
                for (var keys = Object.keys(message.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    jspb.test.TestMapFieldsNoBinary.encode(message.mapStringTestmapfields[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.TestMapFieldsNoBinary(), key, value;
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
                            value = jspb.test.MapValueMessageNoBinary.decode(reader, reader.uint32());
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
                    message.testMapFields = jspb.test.TestMapFieldsNoBinary.decode(reader, reader.uint32());
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
                            value = jspb.test.TestMapFieldsNoBinary.decode(reader, reader.uint32());
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
                    var error = jspb.test.MapValueMessageNoBinary.verify(message.mapStringMsg[key[i]]);
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
                var error = jspb.test.TestMapFieldsNoBinary.verify(message.testMapFields);
                if (error)
                    return "testMapFields." + error;
            }
            if (message.mapStringTestmapfields != null && message.hasOwnProperty("mapStringTestmapfields")) {
                if (!$util.isObject(message.mapStringTestmapfields))
                    return "mapStringTestmapfields: object expected";
                var key = Object.keys(message.mapStringTestmapfields);
                for (var i = 0; i < key.length; ++i) {
                    var error = jspb.test.TestMapFieldsNoBinary.verify(message.mapStringTestmapfields[key[i]]);
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
            if (object instanceof jspb.test.TestMapFieldsNoBinary)
                return object;
            var message = new jspb.test.TestMapFieldsNoBinary();
            if (object.mapStringString) {
                if (typeof object.mapStringString !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringString: object expected");
                message.mapStringString = {};
                for (var keys = Object.keys(object.mapStringString), i = 0; i < keys.length; ++i)
                    message.mapStringString[keys[i]] = String(object.mapStringString[keys[i]]);
            }
            if (object.mapStringInt32) {
                if (typeof object.mapStringInt32 !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringInt32: object expected");
                message.mapStringInt32 = {};
                for (var keys = Object.keys(object.mapStringInt32), i = 0; i < keys.length; ++i)
                    message.mapStringInt32[keys[i]] = object.mapStringInt32[keys[i]] | 0;
            }
            if (object.mapStringInt64) {
                if (typeof object.mapStringInt64 !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringInt64: object expected");
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
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringBool: object expected");
                message.mapStringBool = {};
                for (var keys = Object.keys(object.mapStringBool), i = 0; i < keys.length; ++i)
                    message.mapStringBool[keys[i]] = Boolean(object.mapStringBool[keys[i]]);
            }
            if (object.mapStringDouble) {
                if (typeof object.mapStringDouble !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringDouble: object expected");
                message.mapStringDouble = {};
                for (var keys = Object.keys(object.mapStringDouble), i = 0; i < keys.length; ++i)
                    message.mapStringDouble[keys[i]] = Number(object.mapStringDouble[keys[i]]);
            }
            if (object.mapStringEnum) {
                if (typeof object.mapStringEnum !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringEnum: object expected");
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
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringMsg: object expected");
                message.mapStringMsg = {};
                for (var keys = Object.keys(object.mapStringMsg), i = 0; i < keys.length; ++i) {
                    if (typeof object.mapStringMsg[keys[i]] !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringMsg: object expected");
                    message.mapStringMsg[keys[i]] = jspb.test.MapValueMessageNoBinary.fromObject(object.mapStringMsg[keys[i]]);
                }
            }
            if (object.mapInt32String) {
                if (typeof object.mapInt32String !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapInt32String: object expected");
                message.mapInt32String = {};
                for (var keys = Object.keys(object.mapInt32String), i = 0; i < keys.length; ++i)
                    message.mapInt32String[keys[i]] = String(object.mapInt32String[keys[i]]);
            }
            if (object.mapInt64String) {
                if (typeof object.mapInt64String !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapInt64String: object expected");
                message.mapInt64String = {};
                for (var keys = Object.keys(object.mapInt64String), i = 0; i < keys.length; ++i)
                    message.mapInt64String[keys[i]] = String(object.mapInt64String[keys[i]]);
            }
            if (object.mapBoolString) {
                if (typeof object.mapBoolString !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapBoolString: object expected");
                message.mapBoolString = {};
                for (var keys = Object.keys(object.mapBoolString), i = 0; i < keys.length; ++i)
                    message.mapBoolString[keys[i]] = String(object.mapBoolString[keys[i]]);
            }
            if (object.testMapFields != null) {
                if (typeof object.testMapFields !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.testMapFields: object expected");
                message.testMapFields = jspb.test.TestMapFieldsNoBinary.fromObject(object.testMapFields);
            }
            if (object.mapStringTestmapfields) {
                if (typeof object.mapStringTestmapfields !== "object")
                    throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
                message.mapStringTestmapfields = {};
                for (var keys = Object.keys(object.mapStringTestmapfields), i = 0; i < keys.length; ++i) {
                    if (typeof object.mapStringTestmapfields[keys[i]] !== "object")
                        throw TypeError(".jspb.test.TestMapFieldsNoBinary.mapStringTestmapfields: object expected");
                    message.mapStringTestmapfields[keys[i]] = jspb.test.TestMapFieldsNoBinary.fromObject(object.mapStringTestmapfields[keys[i]]);
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
                    object.mapStringEnum[keys2[j]] = options.enums === String ? jspb.test.MapValueEnumNoBinary[message.mapStringEnum[keys2[j]]] : message.mapStringEnum[keys2[j]];
            }
            if (message.mapStringMsg && (keys2 = Object.keys(message.mapStringMsg)).length) {
                object.mapStringMsg = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.mapStringMsg[keys2[j]] = jspb.test.MapValueMessageNoBinary.toObject(message.mapStringMsg[keys2[j]], options);
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
                object.testMapFields = jspb.test.TestMapFieldsNoBinary.toObject(message.testMapFields, options);
            if (message.mapStringTestmapfields && (keys2 = Object.keys(message.mapStringTestmapfields)).length) {
                object.mapStringTestmapfields = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.mapStringTestmapfields[keys2[j]] = jspb.test.TestMapFieldsNoBinary.toObject(message.mapStringTestmapfields[keys2[j]], options);
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
                return !!b.mapStringMsg && (!(keyName in b.mapStringMsg) && jspb.test.MapValueMessageNoBinary.equals(a.mapStringMsg && a.mapStringMsg[keyName], b.mapStringMsg && b.mapStringMsg[keyName]));
            }) && $util.mapEquals(a.mapInt32String, b.mapInt32String, function (keyName) {
                return !!b.mapInt32String && (!(keyName in b.mapInt32String) && (a.mapInt32String && a.mapInt32String[keyName]) === (b.mapInt32String && b.mapInt32String[keyName]));
            }) && $util.mapEquals(a.mapInt64String, b.mapInt64String, function (keyName) {
                return !!b.mapInt64String && (!(keyName in b.mapInt64String) && (a.mapInt64String && a.mapInt64String[keyName]) === (b.mapInt64String && b.mapInt64String[keyName]));
            }) && $util.mapEquals(a.mapBoolString, b.mapBoolString, function (keyName) {
                return !!b.mapBoolString && (!(keyName in b.mapBoolString) && (a.mapBoolString && a.mapBoolString[keyName]) === (b.mapBoolString && b.mapBoolString[keyName]));
            }) && jspb.test.TestMapFieldsNoBinary.equals(a.testMapFields, b.testMapFields) && $util.mapEquals(a.mapStringTestmapfields, b.mapStringTestmapfields, function (keyName) {
                return !!b.mapStringTestmapfields && (!(keyName in b.mapStringTestmapfields) && jspb.test.TestMapFieldsNoBinary.equals(a.mapStringTestmapfields && a.mapStringTestmapfields[keyName], b.mapStringTestmapfields && b.mapStringTestmapfields[keyName]));
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.MapValueMessageNoBinary();
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
            if (object instanceof jspb.test.MapValueMessageNoBinary)
                return object;
            var message = new jspb.test.MapValueMessageNoBinary();
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Deeply();
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
            if (object instanceof jspb.test.Deeply)
                return object;
            return new jspb.test.Deeply();
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
                var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Deeply.Nested();
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
                if (object instanceof jspb.test.Deeply.Nested)
                    return object;
                return new jspb.test.Deeply.Nested();
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
                    var end = length === undefined ? reader.len : reader.pos + length, message = new jspb.test.Deeply.Nested.Message();
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
                    if (object instanceof jspb.test.Deeply.Nested.Message)
                        return object;
                    var message = new jspb.test.Deeply.Nested.Message();
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

}


export namespace google.protobuf {
    /** Properties of a FileDescriptorSet. */
    export interface IFileDescriptorSet {
        file?: google.protobuf.IFileDescriptorProto[];
    }

    /**
     * Represents a FileDescriptorSet.
     */
    export class FileDescriptorSet implements IFileDescriptorSet {
        /**
         * Constructs a new FileDescriptorSet.
         */
        constructor(properties?: IFileDescriptorSet) {
            this.file = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        file?: google.protobuf.IFileDescriptorProto[];

        /**
         * Creates a new FileDescriptorSet instance using the specified properties.
         */
        static create(properties: IFileDescriptorSet): FileDescriptorSet {
            return new FileDescriptorSet(properties);
        }

        /**
         * Encodes the specified FileDescriptorSet message. Does not implicitly {@link FileDescriptorSet.verify|verify} messages.
         * @param message FileDescriptorSetmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.file != null && message.file.length)
                for (var i = 0; i < message.file.length; ++i)
                    google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link FileDescriptorSet.verify|verify} messages.
         * @param message FileDescriptorSetmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a FileDescriptorSet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FileDescriptorSet {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.FileDescriptorSet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.file && message.file.length))
                        message.file = [];
                    message.file.push(google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FileDescriptorSet {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.file.length; ++i) {
                    var error = google.protobuf.FileDescriptorProto.verify(message.file[i]);
                    if (error)
                        return "file." + error;
                }
            }
            return null;
        }

        /**
         * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IFileDescriptorSet {
            if (object instanceof google.protobuf.FileDescriptorSet)
                return object;
            var message = new google.protobuf.FileDescriptorSet();
            if (object.file) {
                if (!Array.isArray(object.file))
                    throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                message.file = [];
                for (var i = 0; i < object.file.length; ++i) {
                    if (typeof object.file[i] !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                    message.file[i] = google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
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
        static toObject(message: IFileDescriptorSet, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.file = [];
            if (message.file && message.file.length) {
                object.file = [];
                for (var j = 0; j < message.file.length; ++j)
                    object.file[j] = google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
            }
            return object;
        }

        /**
         * Converts this FileDescriptorSet to JSON.
         */
        toJSON() {
            return FileDescriptorSet.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IFileDescriptorSet, b?: IFileDescriptorSet): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.file && !!b.file && a.file.length === b.file.length && !a.file.find(function (aValue, i) {
                return google.protobuf.FileDescriptorProto.equals(a.file && a.file[i], b.file && b.file[i]);
            });
        }
    }

    /** Properties of a FileDescriptorProto. */
    export interface IFileDescriptorProto {
        name?: string;
        "package"?: string;
        dependency?: string[];
        publicDependency?: number[];
        weakDependency?: number[];
        messageType?: google.protobuf.IDescriptorProto[];
        enumType?: google.protobuf.IEnumDescriptorProto[];
        service?: google.protobuf.IServiceDescriptorProto[];
        extension?: google.protobuf.IFieldDescriptorProto[];
        options?: google.protobuf.IFileOptions;
        sourceCodeInfo?: google.protobuf.ISourceCodeInfo;
        syntax?: string;
    }

    /**
     * Represents a FileDescriptorProto.
     */
    export class FileDescriptorProto implements IFileDescriptorProto {
        /**
         * Constructs a new FileDescriptorProto.
         */
        constructor(properties?: IFileDescriptorProto) {
            this.dependency = [];
            this.publicDependency = [];
            this.weakDependency = [];
            this.messageType = [];
            this.enumType = [];
            this.service = [];
            this.extension = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        ["package"]?: string = "";
        dependency?: string[];
        publicDependency?: number[];
        weakDependency?: number[];
        messageType?: google.protobuf.IDescriptorProto[];
        enumType?: google.protobuf.IEnumDescriptorProto[];
        service?: google.protobuf.IServiceDescriptorProto[];
        extension?: google.protobuf.IFieldDescriptorProto[];
        options?: google.protobuf.IFileOptions;
        sourceCodeInfo?: google.protobuf.ISourceCodeInfo;
        syntax?: string = "";

        /**
         * Creates a new FileDescriptorProto instance using the specified properties.
         */
        static create(properties: IFileDescriptorProto): FileDescriptorProto {
            return new FileDescriptorProto(properties);
        }

        /**
         * Encodes the specified FileDescriptorProto message. Does not implicitly {@link FileDescriptorProto.verify|verify} messages.
         * @param message FileDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message["package"] != null && Object.hasOwnProperty.call(message, "package"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
            if (message.dependency != null && message.dependency.length)
                for (var i = 0; i < message.dependency.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
            if (message.messageType != null && message.messageType.length)
                for (var i = 0; i < message.messageType.length; ++i)
                    google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.enumType != null && message.enumType.length)
                for (var i = 0; i < message.enumType.length; ++i)
                    google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.service != null && message.service.length)
                for (var i = 0; i < message.service.length; ++i)
                    google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.extension != null && message.extension.length)
                for (var i = 0; i < message.extension.length; ++i)
                    google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.sourceCodeInfo != null && Object.hasOwnProperty.call(message, "sourceCodeInfo"))
                google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.publicDependency != null && message.publicDependency.length)
                for (var i = 0; i < message.publicDependency.length; ++i)
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
            if (message.weakDependency != null && message.weakDependency.length)
                for (var i = 0; i < message.weakDependency.length; ++i)
                    writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
            if (message.syntax != null && Object.hasOwnProperty.call(message, "syntax"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
            return writer;
        }

        /**
         * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link FileDescriptorProto.verify|verify} messages.
         * @param message FileDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a FileDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FileDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.FileDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message["package"] = reader.string();
                    break;
                case 3:
                    if (!(message.dependency && message.dependency.length))
                        message.dependency = [];
                    message.dependency.push(reader.string());
                    break;
                case 10:
                    if (!(message.publicDependency && message.publicDependency.length))
                        message.publicDependency = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.publicDependency.push(reader.int32());
                    } else
                        message.publicDependency.push(reader.int32());
                    break;
                case 11:
                    if (!(message.weakDependency && message.weakDependency.length))
                        message.weakDependency = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.weakDependency.push(reader.int32());
                    } else
                        message.weakDependency.push(reader.int32());
                    break;
                case 4:
                    if (!(message.messageType && message.messageType.length))
                        message.messageType = [];
                    message.messageType.push(google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.enumType && message.enumType.length))
                        message.enumType = [];
                    message.enumType.push(google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.service && message.service.length))
                        message.service = [];
                    message.service.push(google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.extension && message.extension.length))
                        message.extension = [];
                    message.extension.push(google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.options = google.protobuf.FileOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.sourceCodeInfo = google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.syntax = reader.string();
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FileDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.dependency.length; ++i)
                    if (!$util.isString(message.dependency[i]))
                        return "dependency: string[] expected";
            }
            if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                if (!Array.isArray(message.publicDependency))
                    return "publicDependency: array expected";
                for (var i = 0; i < message.publicDependency.length; ++i)
                    if (!$util.isInteger(message.publicDependency[i]))
                        return "publicDependency: integer[] expected";
            }
            if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                if (!Array.isArray(message.weakDependency))
                    return "weakDependency: array expected";
                for (var i = 0; i < message.weakDependency.length; ++i)
                    if (!$util.isInteger(message.weakDependency[i]))
                        return "weakDependency: integer[] expected";
            }
            if (message.messageType != null && message.hasOwnProperty("messageType")) {
                if (!Array.isArray(message.messageType))
                    return "messageType: array expected";
                for (var i = 0; i < message.messageType.length; ++i) {
                    var error = google.protobuf.DescriptorProto.verify(message.messageType[i]);
                    if (error)
                        return "messageType." + error;
                }
            }
            if (message.enumType != null && message.hasOwnProperty("enumType")) {
                if (!Array.isArray(message.enumType))
                    return "enumType: array expected";
                for (var i = 0; i < message.enumType.length; ++i) {
                    var error = google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                    if (error)
                        return "enumType." + error;
                }
            }
            if (message.service != null && message.hasOwnProperty("service")) {
                if (!Array.isArray(message.service))
                    return "service: array expected";
                for (var i = 0; i < message.service.length; ++i) {
                    var error = google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                    if (error)
                        return "service." + error;
                }
            }
            if (message.extension != null && message.hasOwnProperty("extension")) {
                if (!Array.isArray(message.extension))
                    return "extension: array expected";
                for (var i = 0; i < message.extension.length; ++i) {
                    var error = google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                    if (error)
                        return "extension." + error;
                }
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = google.protobuf.FileOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                var error = google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                if (error)
                    return "sourceCodeInfo." + error;
            }
            if (message.syntax != null && message.hasOwnProperty("syntax"))
                if (!$util.isString(message.syntax))
                    return "syntax: string expected";
            return null;
        }

        /**
         * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IFileDescriptorProto {
            if (object instanceof google.protobuf.FileDescriptorProto)
                return object;
            var message = new google.protobuf.FileDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object["package"] != null)
                message["package"] = String(object["package"]);
            if (object.dependency) {
                if (!Array.isArray(object.dependency))
                    throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                message.dependency = [];
                for (var i = 0; i < object.dependency.length; ++i)
                    message.dependency[i] = String(object.dependency[i]);
            }
            if (object.publicDependency) {
                if (!Array.isArray(object.publicDependency))
                    throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                message.publicDependency = [];
                for (var i = 0; i < object.publicDependency.length; ++i)
                    message.publicDependency[i] = object.publicDependency[i] | 0;
            }
            if (object.weakDependency) {
                if (!Array.isArray(object.weakDependency))
                    throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                message.weakDependency = [];
                for (var i = 0; i < object.weakDependency.length; ++i)
                    message.weakDependency[i] = object.weakDependency[i] | 0;
            }
            if (object.messageType) {
                if (!Array.isArray(object.messageType))
                    throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                message.messageType = [];
                for (var i = 0; i < object.messageType.length; ++i) {
                    if (typeof object.messageType[i] !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                    message.messageType[i] = google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                }
            }
            if (object.enumType) {
                if (!Array.isArray(object.enumType))
                    throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                message.enumType = [];
                for (var i = 0; i < object.enumType.length; ++i) {
                    if (typeof object.enumType[i] !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                    message.enumType[i] = google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                }
            }
            if (object.service) {
                if (!Array.isArray(object.service))
                    throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                message.service = [];
                for (var i = 0; i < object.service.length; ++i) {
                    if (typeof object.service[i] !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                    message.service[i] = google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                }
            }
            if (object.extension) {
                if (!Array.isArray(object.extension))
                    throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                message.extension = [];
                for (var i = 0; i < object.extension.length; ++i) {
                    if (typeof object.extension[i] !== "object")
                        throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                    message.extension[i] = google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                }
            }
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                message.options = google.protobuf.FileOptions.fromObject(object.options);
            }
            if (object.sourceCodeInfo != null) {
                if (typeof object.sourceCodeInfo !== "object")
                    throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                message.sourceCodeInfo = google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
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
        static toObject(message: IFileDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                for (var j = 0; j < message.dependency.length; ++j)
                    object.dependency[j] = message.dependency[j];
            }
            if (message.messageType && message.messageType.length) {
                object.messageType = [];
                for (var j = 0; j < message.messageType.length; ++j)
                    object.messageType[j] = google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
            }
            if (message.enumType && message.enumType.length) {
                object.enumType = [];
                for (var j = 0; j < message.enumType.length; ++j)
                    object.enumType[j] = google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
            }
            if (message.service && message.service.length) {
                object.service = [];
                for (var j = 0; j < message.service.length; ++j)
                    object.service[j] = google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
            }
            if (message.extension && message.extension.length) {
                object.extension = [];
                for (var j = 0; j < message.extension.length; ++j)
                    object.extension[j] = google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.FileOptions.toObject(message.options, options);
            if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                object.sourceCodeInfo = google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
            if (message.publicDependency && message.publicDependency.length) {
                object.publicDependency = [];
                for (var j = 0; j < message.publicDependency.length; ++j)
                    object.publicDependency[j] = message.publicDependency[j];
            }
            if (message.weakDependency && message.weakDependency.length) {
                object.weakDependency = [];
                for (var j = 0; j < message.weakDependency.length; ++j)
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
            return FileDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

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
                return google.protobuf.DescriptorProto.equals(a.messageType && a.messageType[i], b.messageType && b.messageType[i]);
            })) && (!!a.enumType && !!b.enumType && a.enumType.length === b.enumType.length && !a.enumType.find(function (aValue, i) {
                return google.protobuf.EnumDescriptorProto.equals(a.enumType && a.enumType[i], b.enumType && b.enumType[i]);
            })) && (!!a.service && !!b.service && a.service.length === b.service.length && !a.service.find(function (aValue, i) {
                return google.protobuf.ServiceDescriptorProto.equals(a.service && a.service[i], b.service && b.service[i]);
            })) && (!!a.extension && !!b.extension && a.extension.length === b.extension.length && !a.extension.find(function (aValue, i) {
                return google.protobuf.FieldDescriptorProto.equals(a.extension && a.extension[i], b.extension && b.extension[i]);
            })) && google.protobuf.FileOptions.equals(a.options, b.options) && google.protobuf.SourceCodeInfo.equals(a.sourceCodeInfo, b.sourceCodeInfo) && a.syntax === b.syntax;
        }
    }

    /** Properties of a DescriptorProto. */
    export interface IDescriptorProto {
        name?: string;
        field?: google.protobuf.IFieldDescriptorProto[];
        extension?: google.protobuf.IFieldDescriptorProto[];
        nestedType?: google.protobuf.IDescriptorProto[];
        enumType?: google.protobuf.IEnumDescriptorProto[];
        extensionRange?: google.protobuf.DescriptorProto.IExtensionRange[];
        oneofDecl?: google.protobuf.IOneofDescriptorProto[];
        options?: google.protobuf.IMessageOptions;
        reservedRange?: google.protobuf.DescriptorProto.IReservedRange[];
        reservedName?: string[];
    }

    /**
     * Represents a DescriptorProto.
     */
    export class DescriptorProto implements IDescriptorProto {
        /**
         * Constructs a new DescriptorProto.
         */
        constructor(properties?: IDescriptorProto) {
            this.field = [];
            this.extension = [];
            this.nestedType = [];
            this.enumType = [];
            this.extensionRange = [];
            this.oneofDecl = [];
            this.reservedRange = [];
            this.reservedName = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        field?: google.protobuf.IFieldDescriptorProto[];
        extension?: google.protobuf.IFieldDescriptorProto[];
        nestedType?: google.protobuf.IDescriptorProto[];
        enumType?: google.protobuf.IEnumDescriptorProto[];
        extensionRange?: google.protobuf.DescriptorProto.IExtensionRange[];
        oneofDecl?: google.protobuf.IOneofDescriptorProto[];
        options?: google.protobuf.IMessageOptions;
        reservedRange?: google.protobuf.DescriptorProto.IReservedRange[];
        reservedName?: string[];

        /**
         * Creates a new DescriptorProto instance using the specified properties.
         */
        static create(properties: IDescriptorProto): DescriptorProto {
            return new DescriptorProto(properties);
        }

        /**
         * Encodes the specified DescriptorProto message. Does not implicitly {@link DescriptorProto.verify|verify} messages.
         * @param message DescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.field != null && message.field.length)
                for (var i = 0; i < message.field.length; ++i)
                    google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.nestedType != null && message.nestedType.length)
                for (var i = 0; i < message.nestedType.length; ++i)
                    google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.enumType != null && message.enumType.length)
                for (var i = 0; i < message.enumType.length; ++i)
                    google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.extensionRange != null && message.extensionRange.length)
                for (var i = 0; i < message.extensionRange.length; ++i)
                    google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.extension != null && message.extension.length)
                for (var i = 0; i < message.extension.length; ++i)
                    google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.oneofDecl != null && message.oneofDecl.length)
                for (var i = 0; i < message.oneofDecl.length; ++i)
                    google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.reservedRange != null && message.reservedRange.length)
                for (var i = 0; i < message.reservedRange.length; ++i)
                    google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.reservedName != null && message.reservedName.length)
                for (var i = 0; i < message.reservedName.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
            return writer;
        }

        /**
         * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link DescriptorProto.verify|verify} messages.
         * @param message DescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a DescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): DescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.DescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.field && message.field.length))
                        message.field = [];
                    message.field.push(google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.extension && message.extension.length))
                        message.extension = [];
                    message.extension.push(google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.nestedType && message.nestedType.length))
                        message.nestedType = [];
                    message.nestedType.push(google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.enumType && message.enumType.length))
                        message.enumType = [];
                    message.enumType.push(google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.extensionRange && message.extensionRange.length))
                        message.extensionRange = [];
                    message.extensionRange.push(google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                    break;
                case 8:
                    if (!(message.oneofDecl && message.oneofDecl.length))
                        message.oneofDecl = [];
                    message.oneofDecl.push(google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.options = google.protobuf.MessageOptions.decode(reader, reader.uint32());
                    break;
                case 9:
                    if (!(message.reservedRange && message.reservedRange.length))
                        message.reservedRange = [];
                    message.reservedRange.push(google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                    break;
                case 10:
                    if (!(message.reservedName && message.reservedName.length))
                        message.reservedName = [];
                    message.reservedName.push(reader.string());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): DescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.field.length; ++i) {
                    var error = google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                    if (error)
                        return "field." + error;
                }
            }
            if (message.extension != null && message.hasOwnProperty("extension")) {
                if (!Array.isArray(message.extension))
                    return "extension: array expected";
                for (var i = 0; i < message.extension.length; ++i) {
                    var error = google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                    if (error)
                        return "extension." + error;
                }
            }
            if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                if (!Array.isArray(message.nestedType))
                    return "nestedType: array expected";
                for (var i = 0; i < message.nestedType.length; ++i) {
                    var error = google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                    if (error)
                        return "nestedType." + error;
                }
            }
            if (message.enumType != null && message.hasOwnProperty("enumType")) {
                if (!Array.isArray(message.enumType))
                    return "enumType: array expected";
                for (var i = 0; i < message.enumType.length; ++i) {
                    var error = google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                    if (error)
                        return "enumType." + error;
                }
            }
            if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                if (!Array.isArray(message.extensionRange))
                    return "extensionRange: array expected";
                for (var i = 0; i < message.extensionRange.length; ++i) {
                    var error = google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                    if (error)
                        return "extensionRange." + error;
                }
            }
            if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                if (!Array.isArray(message.oneofDecl))
                    return "oneofDecl: array expected";
                for (var i = 0; i < message.oneofDecl.length; ++i) {
                    var error = google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                    if (error)
                        return "oneofDecl." + error;
                }
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = google.protobuf.MessageOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                if (!Array.isArray(message.reservedRange))
                    return "reservedRange: array expected";
                for (var i = 0; i < message.reservedRange.length; ++i) {
                    var error = google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                    if (error)
                        return "reservedRange." + error;
                }
            }
            if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                if (!Array.isArray(message.reservedName))
                    return "reservedName: array expected";
                for (var i = 0; i < message.reservedName.length; ++i)
                    if (!$util.isString(message.reservedName[i]))
                        return "reservedName: string[] expected";
            }
            return null;
        }

        /**
         * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IDescriptorProto {
            if (object instanceof google.protobuf.DescriptorProto)
                return object;
            var message = new google.protobuf.DescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.field) {
                if (!Array.isArray(object.field))
                    throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                message.field = [];
                for (var i = 0; i < object.field.length; ++i) {
                    if (typeof object.field[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                    message.field[i] = google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                }
            }
            if (object.extension) {
                if (!Array.isArray(object.extension))
                    throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                message.extension = [];
                for (var i = 0; i < object.extension.length; ++i) {
                    if (typeof object.extension[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                    message.extension[i] = google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                }
            }
            if (object.nestedType) {
                if (!Array.isArray(object.nestedType))
                    throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                message.nestedType = [];
                for (var i = 0; i < object.nestedType.length; ++i) {
                    if (typeof object.nestedType[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                    message.nestedType[i] = google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                }
            }
            if (object.enumType) {
                if (!Array.isArray(object.enumType))
                    throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                message.enumType = [];
                for (var i = 0; i < object.enumType.length; ++i) {
                    if (typeof object.enumType[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                    message.enumType[i] = google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                }
            }
            if (object.extensionRange) {
                if (!Array.isArray(object.extensionRange))
                    throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                message.extensionRange = [];
                for (var i = 0; i < object.extensionRange.length; ++i) {
                    if (typeof object.extensionRange[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                    message.extensionRange[i] = google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                }
            }
            if (object.oneofDecl) {
                if (!Array.isArray(object.oneofDecl))
                    throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                message.oneofDecl = [];
                for (var i = 0; i < object.oneofDecl.length; ++i) {
                    if (typeof object.oneofDecl[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                    message.oneofDecl[i] = google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                }
            }
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                message.options = google.protobuf.MessageOptions.fromObject(object.options);
            }
            if (object.reservedRange) {
                if (!Array.isArray(object.reservedRange))
                    throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                message.reservedRange = [];
                for (var i = 0; i < object.reservedRange.length; ++i) {
                    if (typeof object.reservedRange[i] !== "object")
                        throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                    message.reservedRange[i] = google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                }
            }
            if (object.reservedName) {
                if (!Array.isArray(object.reservedName))
                    throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                message.reservedName = [];
                for (var i = 0; i < object.reservedName.length; ++i)
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
        static toObject(message: IDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                for (var j = 0; j < message.field.length; ++j)
                    object.field[j] = google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
            }
            if (message.nestedType && message.nestedType.length) {
                object.nestedType = [];
                for (var j = 0; j < message.nestedType.length; ++j)
                    object.nestedType[j] = google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
            }
            if (message.enumType && message.enumType.length) {
                object.enumType = [];
                for (var j = 0; j < message.enumType.length; ++j)
                    object.enumType[j] = google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
            }
            if (message.extensionRange && message.extensionRange.length) {
                object.extensionRange = [];
                for (var j = 0; j < message.extensionRange.length; ++j)
                    object.extensionRange[j] = google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
            }
            if (message.extension && message.extension.length) {
                object.extension = [];
                for (var j = 0; j < message.extension.length; ++j)
                    object.extension[j] = google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.MessageOptions.toObject(message.options, options);
            if (message.oneofDecl && message.oneofDecl.length) {
                object.oneofDecl = [];
                for (var j = 0; j < message.oneofDecl.length; ++j)
                    object.oneofDecl[j] = google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
            }
            if (message.reservedRange && message.reservedRange.length) {
                object.reservedRange = [];
                for (var j = 0; j < message.reservedRange.length; ++j)
                    object.reservedRange[j] = google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
            }
            if (message.reservedName && message.reservedName.length) {
                object.reservedName = [];
                for (var j = 0; j < message.reservedName.length; ++j)
                    object.reservedName[j] = message.reservedName[j];
            }
            return object;
        }

        /**
         * Converts this DescriptorProto to JSON.
         */
        toJSON() {
            return DescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IDescriptorProto, b?: IDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && (!!a.field && !!b.field && a.field.length === b.field.length && !a.field.find(function (aValue, i) {
                return google.protobuf.FieldDescriptorProto.equals(a.field && a.field[i], b.field && b.field[i]);
            })) && (!!a.extension && !!b.extension && a.extension.length === b.extension.length && !a.extension.find(function (aValue, i) {
                return google.protobuf.FieldDescriptorProto.equals(a.extension && a.extension[i], b.extension && b.extension[i]);
            })) && (!!a.nestedType && !!b.nestedType && a.nestedType.length === b.nestedType.length && !a.nestedType.find(function (aValue, i) {
                return google.protobuf.DescriptorProto.equals(a.nestedType && a.nestedType[i], b.nestedType && b.nestedType[i]);
            })) && (!!a.enumType && !!b.enumType && a.enumType.length === b.enumType.length && !a.enumType.find(function (aValue, i) {
                return google.protobuf.EnumDescriptorProto.equals(a.enumType && a.enumType[i], b.enumType && b.enumType[i]);
            })) && (!!a.extensionRange && !!b.extensionRange && a.extensionRange.length === b.extensionRange.length && !a.extensionRange.find(function (aValue, i) {
                return google.protobuf.DescriptorProto.ExtensionRange.equals(a.extensionRange && a.extensionRange[i], b.extensionRange && b.extensionRange[i]);
            })) && (!!a.oneofDecl && !!b.oneofDecl && a.oneofDecl.length === b.oneofDecl.length && !a.oneofDecl.find(function (aValue, i) {
                return google.protobuf.OneofDescriptorProto.equals(a.oneofDecl && a.oneofDecl[i], b.oneofDecl && b.oneofDecl[i]);
            })) && google.protobuf.MessageOptions.equals(a.options, b.options) && (!!a.reservedRange && !!b.reservedRange && a.reservedRange.length === b.reservedRange.length && !a.reservedRange.find(function (aValue, i) {
                return google.protobuf.DescriptorProto.ReservedRange.equals(a.reservedRange && a.reservedRange[i], b.reservedRange && b.reservedRange[i]);
            })) && (!!a.reservedName && !!b.reservedName && a.reservedName.length === b.reservedName.length && !a.reservedName.find(function (aValue, i) {
                return (a.reservedName && a.reservedName[i]) === (b.reservedName && b.reservedName[i]);
            }));
        }
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
            /**
             * Constructs a new ExtensionRange.
             */
            constructor(properties?: IExtensionRange) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            start?: number = 0;
            end?: number = 0;

            /**
             * Creates a new ExtensionRange instance using the specified properties.
             */
            static create(properties: IExtensionRange): ExtensionRange {
                return new ExtensionRange(properties);
            }

            /**
             * Encodes the specified ExtensionRange message. Does not implicitly {@link ExtensionRange.verify|verify} messages.
             * @param message ExtensionRangemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer {
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
             * @param message ExtensionRangemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes an ExtensionRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): ExtensionRange {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.DescriptorProto.ExtensionRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.start = reader.int32();
                        break;
                    case 2:
                        message.end = reader.int32();
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): ExtensionRange {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

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

            /**
             * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): IExtensionRange {
                if (object instanceof google.protobuf.DescriptorProto.ExtensionRange)
                    return object;
                var message = new google.protobuf.DescriptorProto.ExtensionRange();
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
            static toObject(message: IExtensionRange, options: $protobuf.IConversionOptions = {}) {
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
                return ExtensionRange.toObject(this, $protobuf.util.toJSONOptions);
            };

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
            /**
             * Constructs a new ReservedRange.
             */
            constructor(properties?: IReservedRange) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            start?: number = 0;
            end?: number = 0;

            /**
             * Creates a new ReservedRange instance using the specified properties.
             */
            static create(properties: IReservedRange): ReservedRange {
                return new ReservedRange(properties);
            }

            /**
             * Encodes the specified ReservedRange message. Does not implicitly {@link ReservedRange.verify|verify} messages.
             * @param message ReservedRangemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer {
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
             * @param message ReservedRangemessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes a ReservedRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): ReservedRange {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.DescriptorProto.ReservedRange();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.start = reader.int32();
                        break;
                    case 2:
                        message.end = reader.int32();
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): ReservedRange {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

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

            /**
             * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): IReservedRange {
                if (object instanceof google.protobuf.DescriptorProto.ReservedRange)
                    return object;
                var message = new google.protobuf.DescriptorProto.ReservedRange();
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
            static toObject(message: IReservedRange, options: $protobuf.IConversionOptions = {}) {
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
                return ReservedRange.toObject(this, $protobuf.util.toJSONOptions);
            };

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
        }

    }

    /** Properties of a FieldDescriptorProto. */
    export interface IFieldDescriptorProto {
        name?: string;
        number?: number;
        label?: google.protobuf.FieldDescriptorProto.Label;
        type?: google.protobuf.FieldDescriptorProto.Type;
        typeName?: string;
        extendee?: string;
        defaultValue?: string;
        oneofIndex?: number;
        jsonName?: string;
        options?: google.protobuf.IFieldOptions;
    }

    /**
     * Represents a FieldDescriptorProto.
     */
    export class FieldDescriptorProto implements IFieldDescriptorProto {
        /**
         * Constructs a new FieldDescriptorProto.
         */
        constructor(properties?: IFieldDescriptorProto) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        number?: number = 0;
        label?: google.protobuf.FieldDescriptorProto.Label = 1;
        type?: google.protobuf.FieldDescriptorProto.Type = 1;
        typeName?: string = "";
        extendee?: string = "";
        defaultValue?: string = "";
        oneofIndex?: number = 0;
        jsonName?: string = "";
        options?: google.protobuf.IFieldOptions;

        /**
         * Creates a new FieldDescriptorProto instance using the specified properties.
         */
        static create(properties: IFieldDescriptorProto): FieldDescriptorProto {
            return new FieldDescriptorProto(properties);
        }

        /**
         * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link FieldDescriptorProto.verify|verify} messages.
         * @param message FieldDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
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
                google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.oneofIndex != null && Object.hasOwnProperty.call(message, "oneofIndex"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
            if (message.jsonName != null && Object.hasOwnProperty.call(message, "jsonName"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
            return writer;
        }

        /**
         * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link FieldDescriptorProto.verify|verify} messages.
         * @param message FieldDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a FieldDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FieldDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.FieldDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 3:
                    message.number = reader.int32();
                    break;
                case 4:
                    message.label = reader.int32();
                    break;
                case 5:
                    message.type = reader.int32();
                    break;
                case 6:
                    message.typeName = reader.string();
                    break;
                case 2:
                    message.extendee = reader.string();
                    break;
                case 7:
                    message.defaultValue = reader.string();
                    break;
                case 9:
                    message.oneofIndex = reader.int32();
                    break;
                case 10:
                    message.jsonName = reader.string();
                    break;
                case 8:
                    message.options = google.protobuf.FieldOptions.decode(reader, reader.uint32());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FieldDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                var error = google.protobuf.FieldOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        }

        /**
         * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IFieldDescriptorProto {
            if (object instanceof google.protobuf.FieldDescriptorProto)
                return object;
            var message = new google.protobuf.FieldDescriptorProto();
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
                    throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                message.options = google.protobuf.FieldOptions.fromObject(object.options);
            }
            return message;
        }

        /**
         * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
         * @param message FieldDescriptorProto
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IFieldDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                object.label = options.enums === String ? google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = options.enums === String ? google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
            if (message.typeName != null && message.hasOwnProperty("typeName"))
                object.typeName = message.typeName;
            if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                object.defaultValue = message.defaultValue;
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.FieldOptions.toObject(message.options, options);
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
            return FieldDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IFieldDescriptorProto, b?: IFieldDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && a.number === b.number && a.label === b.label && a.type === b.type && a.typeName === b.typeName && a.extendee === b.extendee && a.defaultValue === b.defaultValue && a.oneofIndex === b.oneofIndex && a.jsonName === b.jsonName && google.protobuf.FieldOptions.equals(a.options, b.options);
        }
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
        options?: google.protobuf.IOneofOptions;
    }

    /**
     * Represents an OneofDescriptorProto.
     */
    export class OneofDescriptorProto implements IOneofDescriptorProto {
        /**
         * Constructs a new OneofDescriptorProto.
         */
        constructor(properties?: IOneofDescriptorProto) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        options?: google.protobuf.IOneofOptions;

        /**
         * Creates a new OneofDescriptorProto instance using the specified properties.
         */
        static create(properties: IOneofDescriptorProto): OneofDescriptorProto {
            return new OneofDescriptorProto(properties);
        }

        /**
         * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link OneofDescriptorProto.verify|verify} messages.
         * @param message OneofDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link OneofDescriptorProto.verify|verify} messages.
         * @param message OneofDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an OneofDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): OneofDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.OneofDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.options = google.protobuf.OneofOptions.decode(reader, reader.uint32());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): OneofDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                var error = google.protobuf.OneofOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        }

        /**
         * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IOneofDescriptorProto {
            if (object instanceof google.protobuf.OneofDescriptorProto)
                return object;
            var message = new google.protobuf.OneofDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                message.options = google.protobuf.OneofOptions.fromObject(object.options);
            }
            return message;
        }

        /**
         * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
         * @param message OneofDescriptorProto
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IOneofDescriptorProto, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults) {
                object.name = "";
                object.options = null;
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.OneofOptions.toObject(message.options, options);
            return object;
        }

        /**
         * Converts this OneofDescriptorProto to JSON.
         */
        toJSON() {
            return OneofDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IOneofDescriptorProto, b?: IOneofDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && google.protobuf.OneofOptions.equals(a.options, b.options);
        }
    }

    /** Properties of an EnumDescriptorProto. */
    export interface IEnumDescriptorProto {
        name?: string;
        value?: google.protobuf.IEnumValueDescriptorProto[];
        options?: google.protobuf.IEnumOptions;
    }

    /**
     * Represents an EnumDescriptorProto.
     */
    export class EnumDescriptorProto implements IEnumDescriptorProto {
        /**
         * Constructs a new EnumDescriptorProto.
         */
        constructor(properties?: IEnumDescriptorProto) {
            this.value = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        value?: google.protobuf.IEnumValueDescriptorProto[];
        options?: google.protobuf.IEnumOptions;

        /**
         * Creates a new EnumDescriptorProto instance using the specified properties.
         */
        static create(properties: IEnumDescriptorProto): EnumDescriptorProto {
            return new EnumDescriptorProto(properties);
        }

        /**
         * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link EnumDescriptorProto.verify|verify} messages.
         * @param message EnumDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.value != null && message.value.length)
                for (var i = 0; i < message.value.length; ++i)
                    google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link EnumDescriptorProto.verify|verify} messages.
         * @param message EnumDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an EnumDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): EnumDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.EnumDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.value && message.value.length))
                        message.value = [];
                    message.value.push(google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = google.protobuf.EnumOptions.decode(reader, reader.uint32());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): EnumDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.value.length; ++i) {
                    var error = google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                    if (error)
                        return "value." + error;
                }
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = google.protobuf.EnumOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        }

        /**
         * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IEnumDescriptorProto {
            if (object instanceof google.protobuf.EnumDescriptorProto)
                return object;
            var message = new google.protobuf.EnumDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.value) {
                if (!Array.isArray(object.value))
                    throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                message.value = [];
                for (var i = 0; i < object.value.length; ++i) {
                    if (typeof object.value[i] !== "object")
                        throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                    message.value[i] = google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                }
            }
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                message.options = google.protobuf.EnumOptions.fromObject(object.options);
            }
            return message;
        }

        /**
         * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
         * @param message EnumDescriptorProto
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IEnumDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                for (var j = 0; j < message.value.length; ++j)
                    object.value[j] = google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.EnumOptions.toObject(message.options, options);
            return object;
        }

        /**
         * Converts this EnumDescriptorProto to JSON.
         */
        toJSON() {
            return EnumDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IEnumDescriptorProto, b?: IEnumDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && (!!a.value && !!b.value && a.value.length === b.value.length && !a.value.find(function (aValue, i) {
                return google.protobuf.EnumValueDescriptorProto.equals(a.value && a.value[i], b.value && b.value[i]);
            })) && google.protobuf.EnumOptions.equals(a.options, b.options);
        }
    }

    /** Properties of an EnumValueDescriptorProto. */
    export interface IEnumValueDescriptorProto {
        name?: string;
        number?: number;
        options?: google.protobuf.IEnumValueOptions;
    }

    /**
     * Represents an EnumValueDescriptorProto.
     */
    export class EnumValueDescriptorProto implements IEnumValueDescriptorProto {
        /**
         * Constructs a new EnumValueDescriptorProto.
         */
        constructor(properties?: IEnumValueDescriptorProto) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        number?: number = 0;
        options?: google.protobuf.IEnumValueOptions;

        /**
         * Creates a new EnumValueDescriptorProto instance using the specified properties.
         */
        static create(properties: IEnumValueDescriptorProto): EnumValueDescriptorProto {
            return new EnumValueDescriptorProto(properties);
        }

        /**
         * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link EnumValueDescriptorProto.verify|verify} messages.
         * @param message EnumValueDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.number != null && Object.hasOwnProperty.call(message, "number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link EnumValueDescriptorProto.verify|verify} messages.
         * @param message EnumValueDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): EnumValueDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.EnumValueDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                case 3:
                    message.options = google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): EnumValueDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                var error = google.protobuf.EnumValueOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        }

        /**
         * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IEnumValueDescriptorProto {
            if (object instanceof google.protobuf.EnumValueDescriptorProto)
                return object;
            var message = new google.protobuf.EnumValueDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.number != null)
                message.number = object.number | 0;
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                message.options = google.protobuf.EnumValueOptions.fromObject(object.options);
            }
            return message;
        }

        /**
         * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
         * @param message EnumValueDescriptorProto
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IEnumValueDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                object.options = google.protobuf.EnumValueOptions.toObject(message.options, options);
            return object;
        }

        /**
         * Converts this EnumValueDescriptorProto to JSON.
         */
        toJSON() {
            return EnumValueDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IEnumValueDescriptorProto, b?: IEnumValueDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && a.number === b.number && google.protobuf.EnumValueOptions.equals(a.options, b.options);
        }
    }

    /** Properties of a ServiceDescriptorProto. */
    export interface IServiceDescriptorProto {
        name?: string;
        method?: google.protobuf.IMethodDescriptorProto[];
        options?: google.protobuf.IServiceOptions;
    }

    /**
     * Represents a ServiceDescriptorProto.
     */
    export class ServiceDescriptorProto implements IServiceDescriptorProto {
        /**
         * Constructs a new ServiceDescriptorProto.
         */
        constructor(properties?: IServiceDescriptorProto) {
            this.method = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        method?: google.protobuf.IMethodDescriptorProto[];
        options?: google.protobuf.IServiceOptions;

        /**
         * Creates a new ServiceDescriptorProto instance using the specified properties.
         */
        static create(properties: IServiceDescriptorProto): ServiceDescriptorProto {
            return new ServiceDescriptorProto(properties);
        }

        /**
         * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link ServiceDescriptorProto.verify|verify} messages.
         * @param message ServiceDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.method != null && message.method.length)
                for (var i = 0; i < message.method.length; ++i)
                    google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link ServiceDescriptorProto.verify|verify} messages.
         * @param message ServiceDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): ServiceDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.ServiceDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.method && message.method.length))
                        message.method = [];
                    message.method.push(google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.options = google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): ServiceDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.method.length; ++i) {
                    var error = google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                    if (error)
                        return "method." + error;
                }
            }
            if (message.options != null && message.hasOwnProperty("options")) {
                var error = google.protobuf.ServiceOptions.verify(message.options);
                if (error)
                    return "options." + error;
            }
            return null;
        }

        /**
         * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IServiceDescriptorProto {
            if (object instanceof google.protobuf.ServiceDescriptorProto)
                return object;
            var message = new google.protobuf.ServiceDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.method) {
                if (!Array.isArray(object.method))
                    throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                message.method = [];
                for (var i = 0; i < object.method.length; ++i) {
                    if (typeof object.method[i] !== "object")
                        throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                    message.method[i] = google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                }
            }
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                message.options = google.protobuf.ServiceOptions.fromObject(object.options);
            }
            return message;
        }

        /**
         * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
         * @param message ServiceDescriptorProto
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IServiceDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                for (var j = 0; j < message.method.length; ++j)
                    object.method[j] = google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
            }
            if (message.options != null && message.hasOwnProperty("options"))
                object.options = google.protobuf.ServiceOptions.toObject(message.options, options);
            return object;
        }

        /**
         * Converts this ServiceDescriptorProto to JSON.
         */
        toJSON() {
            return ServiceDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IServiceDescriptorProto, b?: IServiceDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && (!!a.method && !!b.method && a.method.length === b.method.length && !a.method.find(function (aValue, i) {
                return google.protobuf.MethodDescriptorProto.equals(a.method && a.method[i], b.method && b.method[i]);
            })) && google.protobuf.ServiceOptions.equals(a.options, b.options);
        }
    }

    /** Properties of a MethodDescriptorProto. */
    export interface IMethodDescriptorProto {
        name?: string;
        inputType?: string;
        outputType?: string;
        options?: google.protobuf.IMethodOptions;
        clientStreaming?: boolean;
        serverStreaming?: boolean;
    }

    /**
     * Represents a MethodDescriptorProto.
     */
    export class MethodDescriptorProto implements IMethodDescriptorProto {
        /**
         * Constructs a new MethodDescriptorProto.
         */
        constructor(properties?: IMethodDescriptorProto) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: string = "";
        inputType?: string = "";
        outputType?: string = "";
        options?: google.protobuf.IMethodOptions;
        clientStreaming?: boolean = false;
        serverStreaming?: boolean = false;

        /**
         * Creates a new MethodDescriptorProto instance using the specified properties.
         */
        static create(properties: IMethodDescriptorProto): MethodDescriptorProto {
            return new MethodDescriptorProto(properties);
        }

        /**
         * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link MethodDescriptorProto.verify|verify} messages.
         * @param message MethodDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.inputType != null && Object.hasOwnProperty.call(message, "inputType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
            if (message.outputType != null && Object.hasOwnProperty.call(message, "outputType"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
            if (message.options != null && Object.hasOwnProperty.call(message, "options"))
                google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.clientStreaming != null && Object.hasOwnProperty.call(message, "clientStreaming"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
            if (message.serverStreaming != null && Object.hasOwnProperty.call(message, "serverStreaming"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
            return writer;
        }

        /**
         * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link MethodDescriptorProto.verify|verify} messages.
         * @param message MethodDescriptorProtomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a MethodDescriptorProto message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MethodDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.MethodDescriptorProto();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.inputType = reader.string();
                    break;
                case 3:
                    message.outputType = reader.string();
                    break;
                case 4:
                    message.options = google.protobuf.MethodOptions.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.clientStreaming = reader.bool();
                    break;
                case 6:
                    message.serverStreaming = reader.bool();
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MethodDescriptorProto {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                var error = google.protobuf.MethodOptions.verify(message.options);
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

        /**
         * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IMethodDescriptorProto {
            if (object instanceof google.protobuf.MethodDescriptorProto)
                return object;
            var message = new google.protobuf.MethodDescriptorProto();
            if (object.name != null)
                message.name = String(object.name);
            if (object.inputType != null)
                message.inputType = String(object.inputType);
            if (object.outputType != null)
                message.outputType = String(object.outputType);
            if (object.options != null) {
                if (typeof object.options !== "object")
                    throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                message.options = google.protobuf.MethodOptions.fromObject(object.options);
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
        static toObject(message: IMethodDescriptorProto, options: $protobuf.IConversionOptions = {}) {
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
                object.options = google.protobuf.MethodOptions.toObject(message.options, options);
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
            return MethodDescriptorProto.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IMethodDescriptorProto, b?: IMethodDescriptorProto): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.name === b.name && a.inputType === b.inputType && a.outputType === b.outputType && google.protobuf.MethodOptions.equals(a.options, b.options) && a.clientStreaming === b.clientStreaming && a.serverStreaming === b.serverStreaming;
        }
    }

    /** Properties of a FileOptions. */
    export interface IFileOptions {
        javaPackage?: string;
        javaOuterClassname?: string;
        javaMultipleFiles?: boolean;
        javaGenerateEqualsAndHash?: boolean;
        javaStringCheckUtf8?: boolean;
        optimizeFor?: google.protobuf.FileOptions.OptimizeMode;
        goPackage?: string;
        ccGenericServices?: boolean;
        javaGenericServices?: boolean;
        pyGenericServices?: boolean;
        deprecated?: boolean;
        ccEnableArenas?: boolean;
        objcClassPrefix?: string;
        csharpNamespace?: string;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents a FileOptions.
     */
    export class FileOptions implements IFileOptions {
        /**
         * Constructs a new FileOptions.
         */
        constructor(properties?: IFileOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        javaPackage?: string = "";
        javaOuterClassname?: string = "";
        javaMultipleFiles?: boolean = false;
        javaGenerateEqualsAndHash?: boolean = false;
        javaStringCheckUtf8?: boolean = false;
        optimizeFor?: google.protobuf.FileOptions.OptimizeMode = 1;
        goPackage?: string = "";
        ccGenericServices?: boolean = false;
        javaGenericServices?: boolean = false;
        pyGenericServices?: boolean = false;
        deprecated?: boolean = false;
        ccEnableArenas?: boolean = false;
        objcClassPrefix?: string = "";
        csharpNamespace?: string = "";
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new FileOptions instance using the specified properties.
         */
        static create(properties: IFileOptions): FileOptions {
            return new FileOptions(properties);
        }

        /**
         * Encodes the specified FileOptions message. Does not implicitly {@link FileOptions.verify|verify} messages.
         * @param message FileOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer {
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
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link FileOptions.verify|verify} messages.
         * @param message FileOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a FileOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FileOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.FileOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.javaPackage = reader.string();
                    break;
                case 8:
                    message.javaOuterClassname = reader.string();
                    break;
                case 10:
                    message.javaMultipleFiles = reader.bool();
                    break;
                case 20:
                    message.javaGenerateEqualsAndHash = reader.bool();
                    break;
                case 27:
                    message.javaStringCheckUtf8 = reader.bool();
                    break;
                case 9:
                    message.optimizeFor = reader.int32();
                    break;
                case 11:
                    message.goPackage = reader.string();
                    break;
                case 16:
                    message.ccGenericServices = reader.bool();
                    break;
                case 17:
                    message.javaGenericServices = reader.bool();
                    break;
                case 18:
                    message.pyGenericServices = reader.bool();
                    break;
                case 23:
                    message.deprecated = reader.bool();
                    break;
                case 31:
                    message.ccEnableArenas = reader.bool();
                    break;
                case 36:
                    message.objcClassPrefix = reader.string();
                    break;
                case 37:
                    message.csharpNamespace = reader.string();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FileOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IFileOptions {
            if (object instanceof google.protobuf.FileOptions)
                return object;
            var message = new google.protobuf.FileOptions();
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
                    throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IFileOptions, options: $protobuf.IConversionOptions = {}) {
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
                object.optimizeFor = options.enums === String ? google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
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
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this FileOptions to JSON.
         */
        toJSON() {
            return FileOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IFileOptions, b?: IFileOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.javaPackage === b.javaPackage && a.javaOuterClassname === b.javaOuterClassname && a.javaMultipleFiles === b.javaMultipleFiles && a.javaGenerateEqualsAndHash === b.javaGenerateEqualsAndHash && a.javaStringCheckUtf8 === b.javaStringCheckUtf8 && a.optimizeFor === b.optimizeFor && a.goPackage === b.goPackage && a.ccGenericServices === b.ccGenericServices && a.javaGenericServices === b.javaGenericServices && a.pyGenericServices === b.pyGenericServices && a.deprecated === b.deprecated && a.ccEnableArenas === b.ccEnableArenas && a.objcClassPrefix === b.objcClassPrefix && a.csharpNamespace === b.csharpNamespace && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
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
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents a MessageOptions.
     */
    export class MessageOptions implements IMessageOptions {
        /**
         * Constructs a new MessageOptions.
         */
        constructor(properties?: IMessageOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        messageSetWireFormat?: boolean = false;
        noStandardDescriptorAccessor?: boolean = false;
        deprecated?: boolean = false;
        mapEntry?: boolean = false;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new MessageOptions instance using the specified properties.
         */
        static create(properties: IMessageOptions): MessageOptions {
            return new MessageOptions(properties);
        }

        /**
         * Encodes the specified MessageOptions message. Does not implicitly {@link MessageOptions.verify|verify} messages.
         * @param message MessageOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer {
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
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link MessageOptions.verify|verify} messages.
         * @param message MessageOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a MessageOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MessageOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.MessageOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.messageSetWireFormat = reader.bool();
                    break;
                case 2:
                    message.noStandardDescriptorAccessor = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 7:
                    message.mapEntry = reader.bool();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MessageOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IMessageOptions {
            if (object instanceof google.protobuf.MessageOptions)
                return object;
            var message = new google.protobuf.MessageOptions();
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
                    throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IMessageOptions, options: $protobuf.IConversionOptions = {}) {
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
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this MessageOptions to JSON.
         */
        toJSON() {
            return MessageOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IMessageOptions, b?: IMessageOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.messageSetWireFormat === b.messageSetWireFormat && a.noStandardDescriptorAccessor === b.noStandardDescriptorAccessor && a.deprecated === b.deprecated && a.mapEntry === b.mapEntry && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
    }

    /** Properties of a FieldOptions. */
    export interface IFieldOptions {
        ctype?: google.protobuf.FieldOptions.CType;
        packed?: boolean;
        jstype?: google.protobuf.FieldOptions.JSType;
        lazy?: boolean;
        deprecated?: boolean;
        weak?: boolean;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents a FieldOptions.
     */
    export class FieldOptions implements IFieldOptions {
        /**
         * Constructs a new FieldOptions.
         */
        constructor(properties?: IFieldOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        ctype?: google.protobuf.FieldOptions.CType = 0;
        packed?: boolean = false;
        jstype?: google.protobuf.FieldOptions.JSType = 0;
        lazy?: boolean = false;
        deprecated?: boolean = false;
        weak?: boolean = false;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new FieldOptions instance using the specified properties.
         */
        static create(properties: IFieldOptions): FieldOptions {
            return new FieldOptions(properties);
        }

        /**
         * Encodes the specified FieldOptions message. Does not implicitly {@link FieldOptions.verify|verify} messages.
         * @param message FieldOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer {
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
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link FieldOptions.verify|verify} messages.
         * @param message FieldOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a FieldOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): FieldOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.FieldOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ctype = reader.int32();
                    break;
                case 2:
                    message.packed = reader.bool();
                    break;
                case 6:
                    message.jstype = reader.int32();
                    break;
                case 5:
                    message.lazy = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 10:
                    message.weak = reader.bool();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): FieldOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IFieldOptions {
            if (object instanceof google.protobuf.FieldOptions)
                return object;
            var message = new google.protobuf.FieldOptions();
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
                    throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IFieldOptions, options: $protobuf.IConversionOptions = {}) {
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
                object.ctype = options.enums === String ? google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
            if (message.packed != null && message.hasOwnProperty("packed"))
                object.packed = message.packed;
            if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                object.deprecated = message.deprecated;
            if (message.lazy != null && message.hasOwnProperty("lazy"))
                object.lazy = message.lazy;
            if (message.jstype != null && message.hasOwnProperty("jstype"))
                object.jstype = options.enums === String ? google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
            if (message.weak != null && message.hasOwnProperty("weak"))
                object.weak = message.weak;
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this FieldOptions to JSON.
         */
        toJSON() {
            return FieldOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IFieldOptions, b?: IFieldOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.ctype === b.ctype && a.packed === b.packed && a.jstype === b.jstype && a.lazy === b.lazy && a.deprecated === b.deprecated && a.weak === b.weak && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
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
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents an OneofOptions.
     */
    export class OneofOptions implements IOneofOptions {
        /**
         * Constructs a new OneofOptions.
         */
        constructor(properties?: IOneofOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new OneofOptions instance using the specified properties.
         */
        static create(properties: IOneofOptions): OneofOptions {
            return new OneofOptions(properties);
        }

        /**
         * Encodes the specified OneofOptions message. Does not implicitly {@link OneofOptions.verify|verify} messages.
         * @param message OneofOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link OneofOptions.verify|verify} messages.
         * @param message OneofOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an OneofOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): OneofOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.OneofOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): OneofOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IOneofOptions {
            if (object instanceof google.protobuf.OneofOptions)
                return object;
            var message = new google.protobuf.OneofOptions();
            if (object.uninterpretedOption) {
                if (!Array.isArray(object.uninterpretedOption))
                    throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IOneofOptions, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.uninterpretedOption = [];
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this OneofOptions to JSON.
         */
        toJSON() {
            return OneofOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IOneofOptions, b?: IOneofOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            });
        }
    }

    /** Properties of an EnumOptions. */
    export interface IEnumOptions {
        allowAlias?: boolean;
        deprecated?: boolean;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        ".jspb.test.IsExtension.simpleOption"?: string;
    }

    /**
     * Represents an EnumOptions.
     */
    export class EnumOptions implements IEnumOptions {
        /**
         * Constructs a new EnumOptions.
         */
        constructor(properties?: IEnumOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        allowAlias?: boolean = false;
        deprecated?: boolean = false;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
        [".jspb.test.IsExtension.simpleOption"]?: string = "";

        /**
         * Creates a new EnumOptions instance using the specified properties.
         */
        static create(properties: IEnumOptions): EnumOptions {
            return new EnumOptions(properties);
        }

        /**
         * Encodes the specified EnumOptions message. Does not implicitly {@link EnumOptions.verify|verify} messages.
         * @param message EnumOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.allowAlias != null && Object.hasOwnProperty.call(message, "allowAlias"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
            if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
            if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            if (message[".jspb.test.IsExtension.simpleOption"] != null && Object.hasOwnProperty.call(message, ".jspb.test.IsExtension.simpleOption"))
                writer.uint32(/* id 42113038, wireType 2 =*/336904306).string(message[".jspb.test.IsExtension.simpleOption"]);
            return writer;
        }

        /**
         * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link EnumOptions.verify|verify} messages.
         * @param message EnumOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an EnumOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): EnumOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.EnumOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.allowAlias = reader.bool();
                    break;
                case 3:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
                case 42113038:
                    message[".jspb.test.IsExtension.simpleOption"] = reader.string();
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): EnumOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            if (message[".jspb.test.IsExtension.simpleOption"] != null && message.hasOwnProperty(".jspb.test.IsExtension.simpleOption"))
                if (!$util.isString(message[".jspb.test.IsExtension.simpleOption"]))
                    return ".jspb.test.IsExtension.simpleOption: string expected";
            return null;
        }

        /**
         * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IEnumOptions {
            if (object instanceof google.protobuf.EnumOptions)
                return object;
            var message = new google.protobuf.EnumOptions();
            if (object.allowAlias != null)
                message.allowAlias = Boolean(object.allowAlias);
            if (object.deprecated != null)
                message.deprecated = Boolean(object.deprecated);
            if (object.uninterpretedOption) {
                if (!Array.isArray(object.uninterpretedOption))
                    throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                }
            }
            if (object[".jspb.test.IsExtension.simpleOption"] != null)
                message[".jspb.test.IsExtension.simpleOption"] = String(object[".jspb.test.IsExtension.simpleOption"]);
            return message;
        }

        /**
         * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
         * @param message EnumOptions
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IEnumOptions, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.uninterpretedOption = [];
            if (options.defaults) {
                object.allowAlias = false;
                object.deprecated = false;
                object[".jspb.test.IsExtension.simpleOption"] = "";
            }
            if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                object.allowAlias = message.allowAlias;
            if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                object.deprecated = message.deprecated;
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            if (message[".jspb.test.IsExtension.simpleOption"] != null && message.hasOwnProperty(".jspb.test.IsExtension.simpleOption"))
                object[".jspb.test.IsExtension.simpleOption"] = message[".jspb.test.IsExtension.simpleOption"];
            return object;
        }

        /**
         * Converts this EnumOptions to JSON.
         */
        toJSON() {
            return EnumOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IEnumOptions, b?: IEnumOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.allowAlias === b.allowAlias && a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            })) && a[".jspb.test.IsExtension.simpleOption"] === b[".jspb.test.IsExtension.simpleOption"];
        }
    }

    /** Properties of an EnumValueOptions. */
    export interface IEnumValueOptions {
        deprecated?: boolean;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents an EnumValueOptions.
     */
    export class EnumValueOptions implements IEnumValueOptions {
        /**
         * Constructs a new EnumValueOptions.
         */
        constructor(properties?: IEnumValueOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        deprecated?: boolean = false;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new EnumValueOptions instance using the specified properties.
         */
        static create(properties: IEnumValueOptions): EnumValueOptions {
            return new EnumValueOptions(properties);
        }

        /**
         * Encodes the specified EnumValueOptions message. Does not implicitly {@link EnumValueOptions.verify|verify} messages.
         * @param message EnumValueOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
            if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link EnumValueOptions.verify|verify} messages.
         * @param message EnumValueOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an EnumValueOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): EnumValueOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.EnumValueOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): EnumValueOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IEnumValueOptions {
            if (object instanceof google.protobuf.EnumValueOptions)
                return object;
            var message = new google.protobuf.EnumValueOptions();
            if (object.deprecated != null)
                message.deprecated = Boolean(object.deprecated);
            if (object.uninterpretedOption) {
                if (!Array.isArray(object.uninterpretedOption))
                    throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IEnumValueOptions, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.uninterpretedOption = [];
            if (options.defaults)
                object.deprecated = false;
            if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                object.deprecated = message.deprecated;
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this EnumValueOptions to JSON.
         */
        toJSON() {
            return EnumValueOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IEnumValueOptions, b?: IEnumValueOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
    }

    /** Properties of a ServiceOptions. */
    export interface IServiceOptions {
        deprecated?: boolean;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents a ServiceOptions.
     */
    export class ServiceOptions implements IServiceOptions {
        /**
         * Constructs a new ServiceOptions.
         */
        constructor(properties?: IServiceOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        deprecated?: boolean = false;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new ServiceOptions instance using the specified properties.
         */
        static create(properties: IServiceOptions): ServiceOptions {
            return new ServiceOptions(properties);
        }

        /**
         * Encodes the specified ServiceOptions message. Does not implicitly {@link ServiceOptions.verify|verify} messages.
         * @param message ServiceOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
            if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link ServiceOptions.verify|verify} messages.
         * @param message ServiceOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a ServiceOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): ServiceOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.ServiceOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): ServiceOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IServiceOptions {
            if (object instanceof google.protobuf.ServiceOptions)
                return object;
            var message = new google.protobuf.ServiceOptions();
            if (object.deprecated != null)
                message.deprecated = Boolean(object.deprecated);
            if (object.uninterpretedOption) {
                if (!Array.isArray(object.uninterpretedOption))
                    throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IServiceOptions, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.uninterpretedOption = [];
            if (options.defaults)
                object.deprecated = false;
            if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                object.deprecated = message.deprecated;
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this ServiceOptions to JSON.
         */
        toJSON() {
            return ServiceOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IServiceOptions, b?: IServiceOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.deprecated === b.deprecated && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
    }

    /** Properties of a MethodOptions. */
    export interface IMethodOptions {
        deprecated?: boolean;
        idempotencyLevel?: google.protobuf.MethodOptions.IdempotencyLevel;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];
    }

    /**
     * Represents a MethodOptions.
     */
    export class MethodOptions implements IMethodOptions {
        /**
         * Constructs a new MethodOptions.
         */
        constructor(properties?: IMethodOptions) {
            this.uninterpretedOption = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        deprecated?: boolean = false;
        idempotencyLevel?: google.protobuf.MethodOptions.IdempotencyLevel = 0;
        uninterpretedOption?: google.protobuf.IUninterpretedOption[];

        /**
         * Creates a new MethodOptions instance using the specified properties.
         */
        static create(properties: IMethodOptions): MethodOptions {
            return new MethodOptions(properties);
        }

        /**
         * Encodes the specified MethodOptions message. Does not implicitly {@link MethodOptions.verify|verify} messages.
         * @param message MethodOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.deprecated != null && Object.hasOwnProperty.call(message, "deprecated"))
                writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
            if (message.idempotencyLevel != null && Object.hasOwnProperty.call(message, "idempotencyLevel"))
                writer.uint32(/* id 34, wireType 0 =*/272).int32(message.idempotencyLevel);
            if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                for (var i = 0; i < message.uninterpretedOption.length; ++i)
                    google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link MethodOptions.verify|verify} messages.
         * @param message MethodOptionsmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a MethodOptions message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MethodOptions {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.MethodOptions();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 33:
                    message.deprecated = reader.bool();
                    break;
                case 34:
                    message.idempotencyLevel = reader.int32();
                    break;
                case 999:
                    if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                        message.uninterpretedOption = [];
                    message.uninterpretedOption.push(google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MethodOptions {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                    if (error)
                        return "uninterpretedOption." + error;
                }
            }
            return null;
        }

        /**
         * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IMethodOptions {
            if (object instanceof google.protobuf.MethodOptions)
                return object;
            var message = new google.protobuf.MethodOptions();
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
                    throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                message.uninterpretedOption = [];
                for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                    if (typeof object.uninterpretedOption[i] !== "object")
                        throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                    message.uninterpretedOption[i] = google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
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
        static toObject(message: IMethodOptions, options: $protobuf.IConversionOptions = {}) {
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
                object.idempotencyLevel = options.enums === String ? google.protobuf.MethodOptions.IdempotencyLevel[message.idempotencyLevel] : message.idempotencyLevel;
            if (message.uninterpretedOption && message.uninterpretedOption.length) {
                object.uninterpretedOption = [];
                for (var j = 0; j < message.uninterpretedOption.length; ++j)
                    object.uninterpretedOption[j] = google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
            }
            return object;
        }

        /**
         * Converts this MethodOptions to JSON.
         */
        toJSON() {
            return MethodOptions.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IMethodOptions, b?: IMethodOptions): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.deprecated === b.deprecated && a.idempotencyLevel === b.idempotencyLevel && (!!a.uninterpretedOption && !!b.uninterpretedOption && a.uninterpretedOption.length === b.uninterpretedOption.length && !a.uninterpretedOption.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.equals(a.uninterpretedOption && a.uninterpretedOption[i], b.uninterpretedOption && b.uninterpretedOption[i]);
            }));
        }
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
        name?: google.protobuf.UninterpretedOption.INamePart[];
        identifierValue?: string;
        positiveIntValue?: (number|$protobuf.Long);
        negativeIntValue?: (number|$protobuf.Long);
        doubleValue?: number;
        stringValue?: Uint8Array;
        aggregateValue?: string;
    }

    /**
     * Represents an UninterpretedOption.
     */
    export class UninterpretedOption implements IUninterpretedOption {
        /**
         * Constructs a new UninterpretedOption.
         */
        constructor(properties?: IUninterpretedOption) {
            this.name = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        name?: google.protobuf.UninterpretedOption.INamePart[];
        identifierValue?: string = "";
        positiveIntValue?: (number|$protobuf.Long) = $util.Long ? ($util.Long as any).fromBits(0, 0, true) : 0;
        negativeIntValue?: (number|$protobuf.Long) = $util.Long ? ($util.Long as any).fromBits(0, 0, false) : 0;
        doubleValue?: number = 0;
        stringValue?: Uint8Array= $util.newBuffer([]);
        aggregateValue?: string = "";

        /**
         * Creates a new UninterpretedOption instance using the specified properties.
         */
        static create(properties: IUninterpretedOption): UninterpretedOption {
            return new UninterpretedOption(properties);
        }

        /**
         * Encodes the specified UninterpretedOption message. Does not implicitly {@link UninterpretedOption.verify|verify} messages.
         * @param message UninterpretedOptionmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.name.length)
                for (var i = 0; i < message.name.length; ++i)
                    google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
         * @param message UninterpretedOptionmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes an UninterpretedOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): UninterpretedOption {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.UninterpretedOption();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    if (!(message.name && message.name.length))
                        message.name = [];
                    message.name.push(google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.identifierValue = reader.string();
                    break;
                case 4:
                    message.positiveIntValue = reader.uint64();
                    break;
                case 5:
                    message.negativeIntValue = reader.int64();
                    break;
                case 6:
                    message.doubleValue = reader.double();
                    break;
                case 7:
                    message.stringValue = reader.bytes();
                    break;
                case 8:
                    message.aggregateValue = reader.string();
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): UninterpretedOption {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.name.length; ++i) {
                    var error = google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
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

        /**
         * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IUninterpretedOption {
            if (object instanceof google.protobuf.UninterpretedOption)
                return object;
            var message = new google.protobuf.UninterpretedOption();
            if (object.name) {
                if (!Array.isArray(object.name))
                    throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                message.name = [];
                for (var i = 0; i < object.name.length; ++i) {
                    if (typeof object.name[i] !== "object")
                        throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                    message.name[i] = google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                }
            }
            if (object.identifierValue != null)
                message.identifierValue = String(object.identifierValue);
            if (object.positiveIntValue != null)
                if ($util.Long)
                    (message.positiveIntValue = ($util.Long as any).fromValue(object.positiveIntValue)).unsigned = true;
                else if (typeof object.positiveIntValue === "string")
                    message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                else if (typeof object.positiveIntValue === "number")
                    message.positiveIntValue = object.positiveIntValue;
                else if (typeof object.positiveIntValue === "object")
                    message.positiveIntValue = new $util.LongBits(object.positiveIntValue).toNumber(true);
            if (object.negativeIntValue != null)
                if ($util.Long)
                    (message.negativeIntValue = ($util.Long as any).fromValue(object.negativeIntValue)).unsigned = false;
                else if (typeof object.negativeIntValue === "string")
                    message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                else if (typeof object.negativeIntValue === "number")
                    message.negativeIntValue = object.negativeIntValue;
                else if (typeof object.negativeIntValue === "object")
                    message.negativeIntValue = new $util.LongBits(object.negativeIntValue).toNumber();
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
        static toObject(message: IUninterpretedOption, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.name = [];
            if (options.defaults) {
                object.identifierValue = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.positiveIntValue = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
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
                for (var j = 0; j < message.name.length; ++j)
                    object.name[j] = google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
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
            return UninterpretedOption.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IUninterpretedOption, b?: IUninterpretedOption): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.name && !!b.name && a.name.length === b.name.length && !a.name.find(function (aValue, i) {
                return google.protobuf.UninterpretedOption.NamePart.equals(a.name && a.name[i], b.name && b.name[i]);
            }) && a.identifierValue === b.identifierValue && $util.longEquals(a.positiveIntValue, b.positiveIntValue) && $util.longEquals(a.negativeIntValue, b.negativeIntValue) && a.doubleValue === b.doubleValue && $util.bytesEquals(a.stringValue, b.stringValue) && a.aggregateValue === b.aggregateValue;
        }
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
            /**
             * Constructs a new NamePart.
             */
            constructor(properties?: INamePart) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            namePart: string = "";
            isExtension: boolean = false;

            /**
             * Creates a new NamePart instance using the specified properties.
             */
            static create(properties: INamePart): NamePart {
                return new NamePart(properties);
            }

            /**
             * Encodes the specified NamePart message. Does not implicitly {@link NamePart.verify|verify} messages.
             * @param message NamePartmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: INamePart, writer?: $protobuf.Writer): $protobuf.Writer {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                return writer;
            }

            /**
             * Encodes the specified NamePart message, length delimited. Does not implicitly {@link NamePart.verify|verify} messages.
             * @param message NamePartmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: INamePart, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes a NamePart message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): NamePart {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.UninterpretedOption.NamePart();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.namePart = reader.string();
                        break;
                    case 2:
                        message.isExtension = reader.bool();
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): NamePart {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

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

            /**
             * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): INamePart {
                if (object instanceof google.protobuf.UninterpretedOption.NamePart)
                    return object;
                var message = new google.protobuf.UninterpretedOption.NamePart();
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
            static toObject(message: INamePart, options: $protobuf.IConversionOptions = {}) {
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
                return NamePart.toObject(this, $protobuf.util.toJSONOptions);
            };

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
        }

    }

    /** Properties of a SourceCodeInfo. */
    export interface ISourceCodeInfo {
        location?: google.protobuf.SourceCodeInfo.ILocation[];
    }

    /**
     * Represents a SourceCodeInfo.
     */
    export class SourceCodeInfo implements ISourceCodeInfo {
        /**
         * Constructs a new SourceCodeInfo.
         */
        constructor(properties?: ISourceCodeInfo) {
            this.location = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        location?: google.protobuf.SourceCodeInfo.ILocation[];

        /**
         * Creates a new SourceCodeInfo instance using the specified properties.
         */
        static create(properties: ISourceCodeInfo): SourceCodeInfo {
            return new SourceCodeInfo(properties);
        }

        /**
         * Encodes the specified SourceCodeInfo message. Does not implicitly {@link SourceCodeInfo.verify|verify} messages.
         * @param message SourceCodeInfomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.location != null && message.location.length)
                for (var i = 0; i < message.location.length; ++i)
                    google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link SourceCodeInfo.verify|verify} messages.
         * @param message SourceCodeInfomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a SourceCodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): SourceCodeInfo {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.SourceCodeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.location && message.location.length))
                        message.location = [];
                    message.location.push(google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): SourceCodeInfo {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.location.length; ++i) {
                    var error = google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                    if (error)
                        return "location." + error;
                }
            }
            return null;
        }

        /**
         * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): ISourceCodeInfo {
            if (object instanceof google.protobuf.SourceCodeInfo)
                return object;
            var message = new google.protobuf.SourceCodeInfo();
            if (object.location) {
                if (!Array.isArray(object.location))
                    throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                message.location = [];
                for (var i = 0; i < object.location.length; ++i) {
                    if (typeof object.location[i] !== "object")
                        throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                    message.location[i] = google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
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
        static toObject(message: ISourceCodeInfo, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.location = [];
            if (message.location && message.location.length) {
                object.location = [];
                for (var j = 0; j < message.location.length; ++j)
                    object.location[j] = google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
            }
            return object;
        }

        /**
         * Converts this SourceCodeInfo to JSON.
         */
        toJSON() {
            return SourceCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: ISourceCodeInfo, b?: ISourceCodeInfo): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.location && !!b.location && a.location.length === b.location.length && !a.location.find(function (aValue, i) {
                return google.protobuf.SourceCodeInfo.Location.equals(a.location && a.location[i], b.location && b.location[i]);
            });
        }
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
            /**
             * Constructs a new Location.
             */
            constructor(properties?: ILocation) {
                this.path = [];
                this.span = [];
                this.leadingDetachedComments = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            path?: number[];
            span?: number[];
            leadingComments?: string = "";
            trailingComments?: string = "";
            leadingDetachedComments?: string[];

            /**
             * Creates a new Location instance using the specified properties.
             */
            static create(properties: ILocation): Location {
                return new Location(properties);
            }

            /**
             * Encodes the specified Location message. Does not implicitly {@link Location.verify|verify} messages.
             * @param message Locationmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: ILocation, writer?: $protobuf.Writer): $protobuf.Writer {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.path.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.path.length; ++i)
                        writer.int32(message.path[i]);
                    writer.ldelim();
                }
                if (message.span != null && message.span.length) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork();
                    for (var i = 0; i < message.span.length; ++i)
                        writer.int32(message.span[i]);
                    writer.ldelim();
                }
                if (message.leadingComments != null && Object.hasOwnProperty.call(message, "leadingComments"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                if (message.trailingComments != null && Object.hasOwnProperty.call(message, "trailingComments"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                    for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                return writer;
            }

            /**
             * Encodes the specified Location message, length delimited. Does not implicitly {@link Location.verify|verify} messages.
             * @param message Locationmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: ILocation, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes a Location message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Location {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.SourceCodeInfo.Location();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.path && message.path.length))
                            message.path = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.path.push(reader.int32());
                        } else
                            message.path.push(reader.int32());
                        break;
                    case 2:
                        if (!(message.span && message.span.length))
                            message.span = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.span.push(reader.int32());
                        } else
                            message.span.push(reader.int32());
                        break;
                    case 3:
                        message.leadingComments = reader.string();
                        break;
                    case 4:
                        message.trailingComments = reader.string();
                        break;
                    case 6:
                        if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                            message.leadingDetachedComments = [];
                        message.leadingDetachedComments.push(reader.string());
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Location {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

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
                    for (var i = 0; i < message.path.length; ++i)
                        if (!$util.isInteger(message.path[i]))
                            return "path: integer[] expected";
                }
                if (message.span != null && message.hasOwnProperty("span")) {
                    if (!Array.isArray(message.span))
                        return "span: array expected";
                    for (var i = 0; i < message.span.length; ++i)
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
                    for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                        if (!$util.isString(message.leadingDetachedComments[i]))
                            return "leadingDetachedComments: string[] expected";
                }
                return null;
            }

            /**
             * Creates a Location message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): ILocation {
                if (object instanceof google.protobuf.SourceCodeInfo.Location)
                    return object;
                var message = new google.protobuf.SourceCodeInfo.Location();
                if (object.path) {
                    if (!Array.isArray(object.path))
                        throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                    message.path = [];
                    for (var i = 0; i < object.path.length; ++i)
                        message.path[i] = object.path[i] | 0;
                }
                if (object.span) {
                    if (!Array.isArray(object.span))
                        throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                    message.span = [];
                    for (var i = 0; i < object.span.length; ++i)
                        message.span[i] = object.span[i] | 0;
                }
                if (object.leadingComments != null)
                    message.leadingComments = String(object.leadingComments);
                if (object.trailingComments != null)
                    message.trailingComments = String(object.trailingComments);
                if (object.leadingDetachedComments) {
                    if (!Array.isArray(object.leadingDetachedComments))
                        throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                    message.leadingDetachedComments = [];
                    for (var i = 0; i < object.leadingDetachedComments.length; ++i)
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
            static toObject(message: ILocation, options: $protobuf.IConversionOptions = {}) {
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
                    for (var j = 0; j < message.path.length; ++j)
                        object.path[j] = message.path[j];
                }
                if (message.span && message.span.length) {
                    object.span = [];
                    for (var j = 0; j < message.span.length; ++j)
                        object.span[j] = message.span[j];
                }
                if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                    object.leadingComments = message.leadingComments;
                if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                    object.trailingComments = message.trailingComments;
                if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                    object.leadingDetachedComments = [];
                    for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                        object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                }
                return object;
            }

            /**
             * Converts this Location to JSON.
             */
            toJSON() {
                return Location.toObject(this, $protobuf.util.toJSONOptions);
            };

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
        }

    }

    /** Properties of a GeneratedCodeInfo. */
    export interface IGeneratedCodeInfo {
        annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[];
    }

    /**
     * Represents a GeneratedCodeInfo.
     */
    export class GeneratedCodeInfo implements IGeneratedCodeInfo {
        /**
         * Constructs a new GeneratedCodeInfo.
         */
        constructor(properties?: IGeneratedCodeInfo) {
            this.annotation = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        annotation?: google.protobuf.GeneratedCodeInfo.IAnnotation[];

        /**
         * Creates a new GeneratedCodeInfo instance using the specified properties.
         */
        static create(properties: IGeneratedCodeInfo): GeneratedCodeInfo {
            return new GeneratedCodeInfo(properties);
        }

        /**
         * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link GeneratedCodeInfo.verify|verify} messages.
         * @param message GeneratedCodeInfomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.annotation != null && message.annotation.length)
                for (var i = 0; i < message.annotation.length; ++i)
                    google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        }

        /**
         * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link GeneratedCodeInfo.verify|verify} messages.
         * @param message GeneratedCodeInfomessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): GeneratedCodeInfo {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.GeneratedCodeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.annotation && message.annotation.length))
                        message.annotation = [];
                    message.annotation.push(google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                    break;
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
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): GeneratedCodeInfo {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

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
                for (var i = 0; i < message.annotation.length; ++i) {
                    var error = google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                    if (error)
                        return "annotation." + error;
                }
            }
            return null;
        }

        /**
         * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IGeneratedCodeInfo {
            if (object instanceof google.protobuf.GeneratedCodeInfo)
                return object;
            var message = new google.protobuf.GeneratedCodeInfo();
            if (object.annotation) {
                if (!Array.isArray(object.annotation))
                    throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                message.annotation = [];
                for (var i = 0; i < object.annotation.length; ++i) {
                    if (typeof object.annotation[i] !== "object")
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                    message.annotation[i] = google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
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
        static toObject(message: IGeneratedCodeInfo, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.arrays || options.defaults)
                object.annotation = [];
            if (message.annotation && message.annotation.length) {
                object.annotation = [];
                for (var j = 0; j < message.annotation.length; ++j)
                    object.annotation[j] = google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
            }
            return object;
        }

        /**
         * Converts this GeneratedCodeInfo to JSON.
         */
        toJSON() {
            return GeneratedCodeInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IGeneratedCodeInfo, b?: IGeneratedCodeInfo): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return !!a.annotation && !!b.annotation && a.annotation.length === b.annotation.length && !a.annotation.find(function (aValue, i) {
                return google.protobuf.GeneratedCodeInfo.Annotation.equals(a.annotation && a.annotation[i], b.annotation && b.annotation[i]);
            });
        }
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
            /**
             * Constructs a new Annotation.
             */
            constructor(properties?: IAnnotation) {
                this.path = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }
            path?: number[];
            sourceFile?: string = "";
            begin?: number = 0;
            end?: number = 0;

            /**
             * Creates a new Annotation instance using the specified properties.
             */
            static create(properties: IAnnotation): Annotation {
                return new Annotation(properties);
            }

            /**
             * Encodes the specified Annotation message. Does not implicitly {@link Annotation.verify|verify} messages.
             * @param message Annotationmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encode(message: IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer {
                if (!writer)
                    writer = $Writer.create();
                if (message.path != null && message.path.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (var i = 0; i < message.path.length; ++i)
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
             * @param message Annotationmessage or plain object to encode
             * @param writer Writer to encode to
             */
            static encodeDelimited(message: IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer {
                return this.encode(message, writer).ldelim();
            }

            /**
             * Decodes an Annotation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param length Message length if known beforehand
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Annotation {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new google.protobuf.GeneratedCodeInfo.Annotation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.path && message.path.length))
                            message.path = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.path.push(reader.int32());
                        } else
                            message.path.push(reader.int32());
                        break;
                    case 2:
                        message.sourceFile = reader.string();
                        break;
                    case 3:
                        message.begin = reader.int32();
                        break;
                    case 4:
                        message.end = reader.int32();
                        break;
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
            static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Annotation {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, (reader as $protobuf.Reader).uint32());
            }

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
                    for (var i = 0; i < message.path.length; ++i)
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

            /**
             * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             */
            static fromObject(object): IAnnotation {
                if (object instanceof google.protobuf.GeneratedCodeInfo.Annotation)
                    return object;
                var message = new google.protobuf.GeneratedCodeInfo.Annotation();
                if (object.path) {
                    if (!Array.isArray(object.path))
                        throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                    message.path = [];
                    for (var i = 0; i < object.path.length; ++i)
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
            static toObject(message: IAnnotation, options: $protobuf.IConversionOptions = {}) {
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
                    for (var j = 0; j < message.path.length; ++j)
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
                return Annotation.toObject(this, $protobuf.util.toJSONOptions);
            };

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
        }

    }

}

/** Properties of a Package. */
export interface IPackage {
    name?: string;
    version?: string;
    versionScheme?: string;
    description?: string;
    author?: string;
    license?: string;
    repository?: Package.IRepository;
    bugs?: string;
    homepage?: string;
    keywords?: string[];
    main?: string;
    bin?: {[key: string]: string};
    scripts?: {[key: string]: string};
    dependencies?: {[key: string]: string};
    devDependencies?: {[key: string]: string};
    types?: string;
    cliDependencies?: string[];
}

/**
 * Represents a Package.
 */
export class Package implements IPackage {
    /**
     * Constructs a new Package.
     */
    constructor(properties?: IPackage) {
        this.keywords = [];
        this.bin = {};
        this.scripts = {};
        this.dependencies = {};
        this.devDependencies = {};
        this.cliDependencies = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    name?: string = "";
    version?: string = "";
    versionScheme?: string = "";
    description?: string = "";
    author?: string = "";
    license?: string = "";
    repository?: Package.IRepository;
    bugs?: string = "";
    homepage?: string = "";
    keywords?: string[];
    main?: string = "";
    bin?: {[key: string]: string};
    scripts?: {[key: string]: string};
    dependencies?: {[key: string]: string};
    devDependencies?: {[key: string]: string};
    types?: string = "";
    cliDependencies?: string[];

    /**
     * Creates a new Package instance using the specified properties.
     */
    static create(properties: IPackage): Package {
        return new Package(properties);
    }

    /**
     * Encodes the specified Package message. Does not implicitly {@link Package.verify|verify} messages.
     * @param message Packagemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IPackage, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
        if (message.description != null && Object.hasOwnProperty.call(message, "description"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.description);
        if (message.author != null && Object.hasOwnProperty.call(message, "author"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
        if (message.license != null && Object.hasOwnProperty.call(message, "license"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.license);
        if (message.repository != null && Object.hasOwnProperty.call(message, "repository"))
            Package.Repository.encode(message.repository, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.bugs != null && Object.hasOwnProperty.call(message, "bugs"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.bugs);
        if (message.homepage != null && Object.hasOwnProperty.call(message, "homepage"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.homepage);
        if (message.keywords != null && message.keywords.length)
            for (var i = 0; i < message.keywords.length; ++i)
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.keywords[i]);
        if (message.main != null && Object.hasOwnProperty.call(message, "main"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.main);
        if (message.bin != null && Object.hasOwnProperty.call(message, "bin"))
            for (var keys = Object.keys(message.bin), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.bin[keys[i]]).ldelim();
        if (message.scripts != null && Object.hasOwnProperty.call(message, "scripts"))
            for (var keys = Object.keys(message.scripts), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 12, wireType 2 =*/98).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.scripts[keys[i]]).ldelim();
        if (message.dependencies != null && Object.hasOwnProperty.call(message, "dependencies"))
            for (var keys = Object.keys(message.dependencies), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 13, wireType 2 =*/106).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.dependencies[keys[i]]).ldelim();
        if (message.devDependencies != null && Object.hasOwnProperty.call(message, "devDependencies"))
            for (var keys = Object.keys(message.devDependencies), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 15, wireType 2 =*/122).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.devDependencies[keys[i]]).ldelim();
        if (message.types != null && Object.hasOwnProperty.call(message, "types"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.types);
        if (message.cliDependencies != null && message.cliDependencies.length)
            for (var i = 0; i < message.cliDependencies.length; ++i)
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.cliDependencies[i]);
        if (message.versionScheme != null && Object.hasOwnProperty.call(message, "versionScheme"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.versionScheme);
        return writer;
    }

    /**
     * Encodes the specified Package message, length delimited. Does not implicitly {@link Package.verify|verify} messages.
     * @param message Packagemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IPackage, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a Package message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Package {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new Package(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.version = reader.string();
                break;
            case 19:
                message.versionScheme = reader.string();
                break;
            case 3:
                message.description = reader.string();
                break;
            case 4:
                message.author = reader.string();
                break;
            case 5:
                message.license = reader.string();
                break;
            case 6:
                message.repository = Package.Repository.decode(reader, reader.uint32());
                break;
            case 7:
                message.bugs = reader.string();
                break;
            case 8:
                message.homepage = reader.string();
                break;
            case 9:
                if (!(message.keywords && message.keywords.length))
                    message.keywords = [];
                message.keywords.push(reader.string());
                break;
            case 10:
                message.main = reader.string();
                break;
            case 11:
                if (message.bin === $util.emptyObject || !message.bin)
                    message.bin = {};
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
                message.bin[key] = value;
                break;
            case 12:
                if (message.scripts === $util.emptyObject || !message.scripts)
                    message.scripts = {};
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
                message.scripts[key] = value;
                break;
            case 13:
                if (message.dependencies === $util.emptyObject || !message.dependencies)
                    message.dependencies = {};
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
                message.dependencies[key] = value;
                break;
            case 15:
                if (message.devDependencies === $util.emptyObject || !message.devDependencies)
                    message.devDependencies = {};
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
                message.devDependencies[key] = value;
                break;
            case 17:
                message.types = reader.string();
                break;
            case 18:
                if (!(message.cliDependencies && message.cliDependencies.length))
                    message.cliDependencies = [];
                message.cliDependencies.push(reader.string());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    }

    /**
     * Decodes a Package message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Package {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

    /**
     * Verifies a Package message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isString(message.version))
                return "version: string expected";
        if (message.versionScheme != null && message.hasOwnProperty("versionScheme"))
            if (!$util.isString(message.versionScheme))
                return "versionScheme: string expected";
        if (message.description != null && message.hasOwnProperty("description"))
            if (!$util.isString(message.description))
                return "description: string expected";
        if (message.author != null && message.hasOwnProperty("author"))
            if (!$util.isString(message.author))
                return "author: string expected";
        if (message.license != null && message.hasOwnProperty("license"))
            if (!$util.isString(message.license))
                return "license: string expected";
        if (message.repository != null && message.hasOwnProperty("repository")) {
            var error = Package.Repository.verify(message.repository);
            if (error)
                return "repository." + error;
        }
        if (message.bugs != null && message.hasOwnProperty("bugs"))
            if (!$util.isString(message.bugs))
                return "bugs: string expected";
        if (message.homepage != null && message.hasOwnProperty("homepage"))
            if (!$util.isString(message.homepage))
                return "homepage: string expected";
        if (message.keywords != null && message.hasOwnProperty("keywords")) {
            if (!Array.isArray(message.keywords))
                return "keywords: array expected";
            for (var i = 0; i < message.keywords.length; ++i)
                if (!$util.isString(message.keywords[i]))
                    return "keywords: string[] expected";
        }
        if (message.main != null && message.hasOwnProperty("main"))
            if (!$util.isString(message.main))
                return "main: string expected";
        if (message.bin != null && message.hasOwnProperty("bin")) {
            if (!$util.isObject(message.bin))
                return "bin: object expected";
            var key = Object.keys(message.bin);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.bin[key[i]]))
                    return "bin: string{k:string} expected";
        }
        if (message.scripts != null && message.hasOwnProperty("scripts")) {
            if (!$util.isObject(message.scripts))
                return "scripts: object expected";
            var key = Object.keys(message.scripts);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.scripts[key[i]]))
                    return "scripts: string{k:string} expected";
        }
        if (message.dependencies != null && message.hasOwnProperty("dependencies")) {
            if (!$util.isObject(message.dependencies))
                return "dependencies: object expected";
            var key = Object.keys(message.dependencies);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.dependencies[key[i]]))
                    return "dependencies: string{k:string} expected";
        }
        if (message.devDependencies != null && message.hasOwnProperty("devDependencies")) {
            if (!$util.isObject(message.devDependencies))
                return "devDependencies: object expected";
            var key = Object.keys(message.devDependencies);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.devDependencies[key[i]]))
                    return "devDependencies: string{k:string} expected";
        }
        if (message.types != null && message.hasOwnProperty("types"))
            if (!$util.isString(message.types))
                return "types: string expected";
        if (message.cliDependencies != null && message.hasOwnProperty("cliDependencies")) {
            if (!Array.isArray(message.cliDependencies))
                return "cliDependencies: array expected";
            for (var i = 0; i < message.cliDependencies.length; ++i)
                if (!$util.isString(message.cliDependencies[i]))
                    return "cliDependencies: string[] expected";
        }
        return null;
    }

    /**
     * Creates a Package message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IPackage {
        if (object instanceof Package)
            return object;
        var message = new Package();
        if (object.name != null)
            message.name = String(object.name);
        if (object.version != null)
            message.version = String(object.version);
        if (object.versionScheme != null)
            message.versionScheme = String(object.versionScheme);
        if (object.description != null)
            message.description = String(object.description);
        if (object.author != null)
            message.author = String(object.author);
        if (object.license != null)
            message.license = String(object.license);
        if (object.repository != null) {
            if (typeof object.repository !== "object")
                throw TypeError(".Package.repository: object expected");
            message.repository = Package.Repository.fromObject(object.repository);
        }
        if (object.bugs != null)
            message.bugs = String(object.bugs);
        if (object.homepage != null)
            message.homepage = String(object.homepage);
        if (object.keywords) {
            if (!Array.isArray(object.keywords))
                throw TypeError(".Package.keywords: array expected");
            message.keywords = [];
            for (var i = 0; i < object.keywords.length; ++i)
                message.keywords[i] = String(object.keywords[i]);
        }
        if (object.main != null)
            message.main = String(object.main);
        if (object.bin) {
            if (typeof object.bin !== "object")
                throw TypeError(".Package.bin: object expected");
            message.bin = {};
            for (var keys = Object.keys(object.bin), i = 0; i < keys.length; ++i)
                message.bin[keys[i]] = String(object.bin[keys[i]]);
        }
        if (object.scripts) {
            if (typeof object.scripts !== "object")
                throw TypeError(".Package.scripts: object expected");
            message.scripts = {};
            for (var keys = Object.keys(object.scripts), i = 0; i < keys.length; ++i)
                message.scripts[keys[i]] = String(object.scripts[keys[i]]);
        }
        if (object.dependencies) {
            if (typeof object.dependencies !== "object")
                throw TypeError(".Package.dependencies: object expected");
            message.dependencies = {};
            for (var keys = Object.keys(object.dependencies), i = 0; i < keys.length; ++i)
                message.dependencies[keys[i]] = String(object.dependencies[keys[i]]);
        }
        if (object.devDependencies) {
            if (typeof object.devDependencies !== "object")
                throw TypeError(".Package.devDependencies: object expected");
            message.devDependencies = {};
            for (var keys = Object.keys(object.devDependencies), i = 0; i < keys.length; ++i)
                message.devDependencies[keys[i]] = String(object.devDependencies[keys[i]]);
        }
        if (object.types != null)
            message.types = String(object.types);
        if (object.cliDependencies) {
            if (!Array.isArray(object.cliDependencies))
                throw TypeError(".Package.cliDependencies: array expected");
            message.cliDependencies = [];
            for (var i = 0; i < object.cliDependencies.length; ++i)
                message.cliDependencies[i] = String(object.cliDependencies[i]);
        }
        return message;
    }

    /**
     * Creates a plain object from a Package message. Also converts values to other types if specified.
     * @param message Package
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IPackage, options: $protobuf.IConversionOptions = {}) {
        let object: any = {};
        if (options.arrays || options.defaults) {
            object.keywords = [];
            object.cliDependencies = [];
        }
        if (options.objects || options.defaults) {
            object.bin = {};
            object.scripts = {};
            object.dependencies = {};
            object.devDependencies = {};
        }
        if (options.defaults) {
            object.name = "";
            object.version = "";
            object.description = "";
            object.author = "";
            object.license = "";
            object.repository = null;
            object.bugs = "";
            object.homepage = "";
            object.main = "";
            object.types = "";
            object.versionScheme = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.description != null && message.hasOwnProperty("description"))
            object.description = message.description;
        if (message.author != null && message.hasOwnProperty("author"))
            object.author = message.author;
        if (message.license != null && message.hasOwnProperty("license"))
            object.license = message.license;
        if (message.repository != null && message.hasOwnProperty("repository"))
            object.repository = Package.Repository.toObject(message.repository, options);
        if (message.bugs != null && message.hasOwnProperty("bugs"))
            object.bugs = message.bugs;
        if (message.homepage != null && message.hasOwnProperty("homepage"))
            object.homepage = message.homepage;
        if (message.keywords && message.keywords.length) {
            object.keywords = [];
            for (var j = 0; j < message.keywords.length; ++j)
                object.keywords[j] = message.keywords[j];
        }
        if (message.main != null && message.hasOwnProperty("main"))
            object.main = message.main;
        var keys2;
        if (message.bin && (keys2 = Object.keys(message.bin)).length) {
            object.bin = {};
            for (var j = 0; j < keys2.length; ++j)
                object.bin[keys2[j]] = message.bin[keys2[j]];
        }
        if (message.scripts && (keys2 = Object.keys(message.scripts)).length) {
            object.scripts = {};
            for (var j = 0; j < keys2.length; ++j)
                object.scripts[keys2[j]] = message.scripts[keys2[j]];
        }
        if (message.dependencies && (keys2 = Object.keys(message.dependencies)).length) {
            object.dependencies = {};
            for (var j = 0; j < keys2.length; ++j)
                object.dependencies[keys2[j]] = message.dependencies[keys2[j]];
        }
        if (message.devDependencies && (keys2 = Object.keys(message.devDependencies)).length) {
            object.devDependencies = {};
            for (var j = 0; j < keys2.length; ++j)
                object.devDependencies[keys2[j]] = message.devDependencies[keys2[j]];
        }
        if (message.types != null && message.hasOwnProperty("types"))
            object.types = message.types;
        if (message.cliDependencies && message.cliDependencies.length) {
            object.cliDependencies = [];
            for (var j = 0; j < message.cliDependencies.length; ++j)
                object.cliDependencies[j] = message.cliDependencies[j];
        }
        if (message.versionScheme != null && message.hasOwnProperty("versionScheme"))
            object.versionScheme = message.versionScheme;
        return object;
    }

    /**
     * Converts this Package to JSON.
     */
    toJSON() {
        return Package.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IPackage, b?: IPackage): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.name === b.name && a.version === b.version && a.versionScheme === b.versionScheme && a.description === b.description && a.author === b.author && a.license === b.license && Package.Repository.equals(a.repository, b.repository) && a.bugs === b.bugs && a.homepage === b.homepage && (!!a.keywords && !!b.keywords && a.keywords.length === b.keywords.length && !a.keywords.find(function (aValue, i) {
            return (a.keywords && a.keywords[i]) === (b.keywords && b.keywords[i]);
        })) && a.main === b.main && $util.mapEquals(a.bin, b.bin, function (keyName) {
            return !!b.bin && (!(keyName in b.bin) && (a.bin && a.bin[keyName]) === (b.bin && b.bin[keyName]));
        }) && $util.mapEquals(a.scripts, b.scripts, function (keyName) {
            return !!b.scripts && (!(keyName in b.scripts) && (a.scripts && a.scripts[keyName]) === (b.scripts && b.scripts[keyName]));
        }) && $util.mapEquals(a.dependencies, b.dependencies, function (keyName) {
            return !!b.dependencies && (!(keyName in b.dependencies) && (a.dependencies && a.dependencies[keyName]) === (b.dependencies && b.dependencies[keyName]));
        }) && $util.mapEquals(a.devDependencies, b.devDependencies, function (keyName) {
            return !!b.devDependencies && (!(keyName in b.devDependencies) && (a.devDependencies && a.devDependencies[keyName]) === (b.devDependencies && b.devDependencies[keyName]));
        }) && a.types === b.types && (!!a.cliDependencies && !!b.cliDependencies && a.cliDependencies.length === b.cliDependencies.length && !a.cliDependencies.find(function (aValue, i) {
            return (a.cliDependencies && a.cliDependencies[i]) === (b.cliDependencies && b.cliDependencies[i]);
        }));
    }
}

export namespace Package {
    /** Properties of a Repository. */
    export interface IRepository {
        type?: string;
        url?: string;
    }

    /**
     * Represents a Repository.
     */
    export class Repository implements IRepository {
        /**
         * Constructs a new Repository.
         */
        constructor(properties?: IRepository) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }
        type?: string = "";
        url?: string = "";

        /**
         * Creates a new Repository instance using the specified properties.
         */
        static create(properties: IRepository): Repository {
            return new Repository(properties);
        }

        /**
         * Encodes the specified Repository message. Does not implicitly {@link Repository.verify|verify} messages.
         * @param message Repositorymessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: IRepository, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
            return writer;
        }

        /**
         * Encodes the specified Repository message, length delimited. Does not implicitly {@link Repository.verify|verify} messages.
         * @param message Repositorymessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: IRepository, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Repository message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Repository {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new Package.Repository();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.url = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        }

        /**
         * Decodes a Repository message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Repository {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Repository message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.url != null && message.hasOwnProperty("url"))
                if (!$util.isString(message.url))
                    return "url: string expected";
            return null;
        }

        /**
         * Creates a Repository message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): IRepository {
            if (object instanceof Package.Repository)
                return object;
            var message = new Package.Repository();
            if (object.type != null)
                message.type = String(object.type);
            if (object.url != null)
                message.url = String(object.url);
            return message;
        }

        /**
         * Creates a plain object from a Repository message. Also converts values to other types if specified.
         * @param message Repository
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: IRepository, options: $protobuf.IConversionOptions = {}) {
            let object: any = {};
            if (options.defaults) {
                object.type = "";
                object.url = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.url != null && message.hasOwnProperty("url"))
                object.url = message.url;
            return object;
        }

        /**
         * Converts this Repository to JSON.
         */
        toJSON() {
            return Repository.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: IRepository, b?: IRepository): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return a.type === b.type && a.url === b.url;
        }
    }

}


export namespace aaaa.b {
    /** Properties of a Something. */
    export interface ISomething {
    }

    /**
     * Represents a Something.
     */
    export class Something implements ISomething {
        /**
         * Constructs a new Something.
         */
        constructor(properties?: ISomething) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Something instance using the specified properties.
         */
        static create(properties: ISomething): Something {
            return new Something(properties);
        }

        /**
         * Encodes the specified Something message. Does not implicitly {@link Something.verify|verify} messages.
         * @param message Somethingmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encode(message: ISomething, writer?: $protobuf.Writer): $protobuf.Writer {
            if (!writer)
                writer = $Writer.create();
            return writer;
        }

        /**
         * Encodes the specified Something message, length delimited. Does not implicitly {@link Something.verify|verify} messages.
         * @param message Somethingmessage or plain object to encode
         * @param writer Writer to encode to
         */
        static encodeDelimited(message: ISomething, writer?: $protobuf.Writer): $protobuf.Writer {
            return this.encode(message, writer).ldelim();
        }

        /**
         * Decodes a Something message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param length Message length if known beforehand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(reader: $protobuf.Reader|Uint8Array, length?: number): Something {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new aaaa.b.Something();
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
         * Decodes a Something message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(reader: $protobuf.Reader|Uint8Array): Something {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, (reader as $protobuf.Reader).uint32());
        }

        /**
         * Verifies a Something message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message): string | null | void {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        }

        /**
         * Creates a Something message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         */
        static fromObject(object): ISomething {
            if (object instanceof aaaa.b.Something)
                return object;
            return new aaaa.b.Something();
        }

        /**
         * Creates a plain object from a Something message. Also converts values to other types if specified.
         * @param message Something
         * @param optionsConversion options
         * @returns Plain object
         */
        static toObject(message: ISomething, options: $protobuf.IConversionOptions = {}) {
            return {};
        }

        /**
         * Converts this Something to JSON.
         */
        toJSON() {
            return Something.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compares two messages, checking for strict equality.
         */
        static equals(a?: ISomething, b?: ISomething): boolean {
            if (!a || !b)
                return a === b;
            if (a === b)
                return true;
            return true;
        }
    }

}
;
