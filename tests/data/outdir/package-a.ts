import { Writer as $Writer, Reader as $Reader, IConversionOptions as $IConversionOptions, util as $util } from "../../../minimal";

/** Properties of a Something. */
export interface ISomething {
}

/**
 * Represents a Something.
 */
export class Something implements ISomething {

    // #region create
    /**
     * Constructs a new Something.
     */
    constructor(properties?: ISomething) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Something instance using the specified properties.
     */
    static create(properties: ISomething): Something {
        return new Something(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified Something message. Does not implicitly {@link Something.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: ISomething, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        return writer;
    }

    /**
     * Encodes the specified Something message, length delimited. Does not implicitly {@link Something.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: ISomething, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a Something message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): Something {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new Something();
        while (reader.pos < end) {
            let tag = reader.uint32();
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
    static decodeDelimited(reader: $Reader|Uint8Array): Something {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
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
    // #endregion

    // #region convert
    /**
     * Creates a Something message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): ISomething {
        if (object instanceof Something)
            return object;
        return new Something();
    }

    /**
     * Creates a plain object from a Something message. Also converts values to other types if specified.
     * @param message Something
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: ISomething, options: $IConversionOptions = {}) {
        return {};
    }

    /**
     * Converts this Something to JSON.
     */
    toJSON() {
        return Something.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
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
    // #endregion
}

