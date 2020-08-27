import { rpc as $rpc, RPCImpl as $RPCImpl, Writer as $Writer, Reader as $Reader, util as $util, IConversionOptions as $IConversionOptions } from "../../minimal";

export class MyService extends $rpc.Service {
    /**
     * Constructs a new MyService service.
     * @param rpcImpl RPC implementation
     * @param requestDelimited Whether requests are length-delimited
     * @param responseDelimited Whether responses are length-delimited
     */
    constructor(rpcImpl: $RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false) {
        super(rpcImpl, requestDelimited, responseDelimited);

        (this.myMethod as any).serviceName = "MyService";
        (this.myMethod as any).requestCtor = MyRequest;
        (this.myMethod as any).responseCtor = MyResponse;
        (this.myMethod as any).requestStream = undefined;
        (this.myMethod as any).responseStream = undefined;
    }


    /**
     * Creates new MyService service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param requestDelimited Whether requests are length-delimited
     * @param responseDelimited Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    static create(rpcImpl: $RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false): MyService {
        return new MyService(rpcImpl, requestDelimited, responseDelimited);
    };

    async myMethod(request: IMyRequest): Promise<MyResponse> {
        return (this.rpcCall as any)(this.myMethod, MyRequest, MyResponse, request);
    }
}

/** Properties of a MyRequest. */
export interface IMyRequest {
    path?: string;
}

/**
 * Represents a MyRequest.
 */
export class MyRequest implements IMyRequest {
    path?: string;

    // #region create
    /**
     * Constructs a new MyRequest.
     */
    constructor(properties?: IMyRequest) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MyRequest instance using the specified properties.
     */
    static create(properties: IMyRequest): MyRequest {
        return new MyRequest(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified MyRequest message. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMyRequest, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
        return writer;
    }

    /**
     * Encodes the specified MyRequest message, length delimited. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMyRequest, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a MyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): MyRequest {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new MyRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.path = reader.string();
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
     * Decodes a MyRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): MyRequest {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a MyRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a MyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMyRequest {
        if (object instanceof MyRequest)
            return object;
        let message = new MyRequest();
        if (object.path != null)
            message.path = String(object.path);
        return message;
    }

    /**
     * Creates a plain object from a MyRequest message. Also converts values to other types if specified.
     * @param message MyRequest
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMyRequest, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.path = "";
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    }

    /**
     * Converts this MyRequest to JSON.
     */
    toJSON() {
        return MyRequest.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMyRequest, b?: IMyRequest): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.path === b.path;
    }
    // #endregion
}

/** Properties of a MyResponse. */
export interface IMyResponse {
    status?: number;
}

/**
 * Represents a MyResponse.
 */
export class MyResponse implements IMyResponse {
    status?: number;

    // #region create
    /**
     * Constructs a new MyResponse.
     */
    constructor(properties?: IMyResponse) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new MyResponse instance using the specified properties.
     */
    static create(properties: IMyResponse): MyResponse {
        return new MyResponse(properties);
    }
    // #endregion

    // #region encode
    /**
     * Encodes the specified MyResponse message. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encode(message: IMyResponse, writer?: $Writer): $Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        return writer;
    }

    /**
     * Encodes the specified MyResponse message, length delimited. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @param message message or plain object to encode
     * @param writer to encode to
     */
    static encodeDelimited(message: IMyResponse, writer?: $Writer): $Writer {
        return this.encode(message, writer).ldelim();
    }
    // #endregion

    // #region decode
    /**
     * Decodes a MyResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $Reader|Uint8Array, length?: number): MyResponse {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new MyResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.status = reader.int32();
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
     * Decodes a MyResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: $Reader|Uint8Array): MyResponse {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $Reader).uint32());
    }
    // #endregion

    // #region verify
    /**
     * Verifies a MyResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message): string | null | void {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    }
    // #endregion

    // #region convert
    /**
     * Creates a MyResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMyResponse {
        if (object instanceof MyResponse)
            return object;
        let message = new MyResponse();
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    }

    /**
     * Creates a plain object from a MyResponse message. Also converts values to other types if specified.
     * @param message MyResponse
     * @param optionsConversion options
     * @returns Plain object
     */
    static toObject(message: IMyResponse, options: $IConversionOptions = {}) {
        let object: any = {};
        if (options.defaults)
            object.status = 0;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    }

    /**
     * Converts this MyResponse to JSON.
     */
    toJSON() {
        return MyResponse.toObject(this, $util.toJSONOptions);
    };
    // #endregion

    // #region equals
    /**
     * Compares two messages, checking for strict equality.
     */
    static equals(a?: IMyResponse, b?: IMyResponse): boolean {
        if (!a || !b)
            return a === b;
        if (a === b)
            return true;
        return a.status === b.status;
    }
    // #endregion
}

