import * as $protobuf from "../../minimal";


// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

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
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }
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
        type?: string;
        url?: string;

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
;
