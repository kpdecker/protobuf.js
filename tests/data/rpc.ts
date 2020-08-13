import * as $protobuf from "../../minimal";


// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

export class MyService extends $protobuf.rpc.Service {
    /**
     * Constructs a new MyService service.
     * @param rpcImpl RPC implementation
     * @param requestDelimited Whether requests are length-delimited
     * @param responseDelimited Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false) {
        super(rpcImpl, requestDelimited, responseDelimited);

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
    static create(rpcImpl: $protobuf.RPCImpl, requestDelimited: boolean = false, responseDelimited: boolean = false): MyService {
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
    /**
     * Constructs a new MyRequest.
     */
    constructor(properties?: IMyRequest) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    path?: string;

    /**
     * Creates a new MyRequest instance using the specified properties.
     */
    static create(properties: IMyRequest): MyRequest {
        return new MyRequest(properties);
    }

    /**
     * Encodes the specified MyRequest message. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @param message MyRequestmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IMyRequest, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.path);
        return writer;
    }

    /**
     * Encodes the specified MyRequest message, length delimited. Does not implicitly {@link MyRequest.verify|verify} messages.
     * @param message MyRequestmessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IMyRequest, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a MyRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MyRequest {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new MyRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.path = reader.string();
                break;
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
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MyRequest {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

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

    /**
     * Creates a MyRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMyRequest {
        if (object instanceof MyRequest)
            return object;
        var message = new MyRequest();
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
    static toObject(message: IMyRequest, options: $protobuf.IConversionOptions = {}) {
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
        return MyRequest.toObject(this, $protobuf.util.toJSONOptions);
    };

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
}

/** Properties of a MyResponse. */
export interface IMyResponse {
    status?: number;
}

/**
 * Represents a MyResponse.
 */
export class MyResponse implements IMyResponse {
    /**
     * Constructs a new MyResponse.
     */
    constructor(properties?: IMyResponse) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
    status?: number;

    /**
     * Creates a new MyResponse instance using the specified properties.
     */
    static create(properties: IMyResponse): MyResponse {
        return new MyResponse(properties);
    }

    /**
     * Encodes the specified MyResponse message. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @param message MyResponsemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encode(message: IMyResponse, writer?: $protobuf.Writer): $protobuf.Writer {
        if (!writer)
            writer = $Writer.create();
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        return writer;
    }

    /**
     * Encodes the specified MyResponse message, length delimited. Does not implicitly {@link MyResponse.verify|verify} messages.
     * @param message MyResponsemessage or plain object to encode
     * @param writer Writer to encode to
     */
    static encodeDelimited(message: IMyResponse, writer?: $protobuf.Writer): $protobuf.Writer {
        return this.encode(message, writer).ldelim();
    }

    /**
     * Decodes a MyResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param length Message length if known beforehand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: $protobuf.Reader|Uint8Array, length?: number): MyResponse {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new MyResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 2:
                message.status = reader.int32();
                break;
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
    static decodeDelimited(reader: $protobuf.Reader|Uint8Array): MyResponse {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, (reader as $protobuf.Reader).uint32());
    }

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

    /**
     * Creates a MyResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     */
    static fromObject(object): IMyResponse {
        if (object instanceof MyResponse)
            return object;
        var message = new MyResponse();
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
    static toObject(message: IMyResponse, options: $protobuf.IConversionOptions = {}) {
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
        return MyResponse.toObject(this, $protobuf.util.toJSONOptions);
    };

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
}
;
