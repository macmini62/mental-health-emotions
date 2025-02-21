import { Topic } from './schema/topic.schema';
import { Model } from 'mongoose';
import { UsersService } from 'src/users/users.service';
import { topic } from './interface/topic.interface';
export declare class TopicsService {
    private TopicModel;
    private userService;
    constructor(TopicModel: {
        new (doc?: Topic, fields?: any | null, options?: boolean | import("mongoose").AnyObject): any;
        aggregate<R = any>(pipeline?: import("mongoose").PipelineStage[], options?: import("mongoose").AggregateOptions): import("mongoose").Aggregate<R[]>;
        aggregate<R = any>(pipeline: import("mongoose").PipelineStage[]): import("mongoose").Aggregate<R[]>;
        base: import("mongoose").Mongoose;
        baseModelName: string | undefined;
        castObject(obj: import("mongoose").AnyObject, options?: {
            ignoreCastErrors?: boolean;
        }): any;
        applyDefaults(obj: import("mongoose").AnyObject): import("mongoose").AnyObject;
        applyDefaults(obj: any): any;
        applyVirtuals(obj: import("mongoose").AnyObject, virtalsToApply?: string[]): import("mongoose").AnyObject;
        applyTimestamps(obj: import("mongoose").AnyObject, options?: {
            isUpdate?: boolean;
            currentTime?: () => import("mongoose").Date;
        }): import("mongoose").AnyObject;
        bulkWrite<DocContents = any>(writes: import("mongoose").AnyBulkWriteOperation<DocContents extends import("mongoose").Document<unknown, any, any> ? any : DocContents extends {} ? DocContents : any>[], options: import("mongoose").MongooseBulkWriteOptions & {
            ordered: false;
        }): Promise<import("mongodb").BulkWriteResult & {
            mongoose?: {
                validationErrors: import("mongoose").Error[];
            };
        }>;
        bulkWrite<DocContents = any>(writes: import("mongoose").AnyBulkWriteOperation<DocContents extends import("mongoose").Document<unknown, any, any> ? any : DocContents extends {} ? DocContents : any>[], options?: import("mongoose").MongooseBulkWriteOptions): Promise<import("mongodb").BulkWriteResult>;
        bulkSave(documents: Array<import("mongoose").Document>, options?: import("mongoose").MongooseBulkSaveOptions): Promise<import("mongodb").BulkWriteResult>;
        collection: import("mongoose").Collection;
        countDocuments(filter?: import("mongoose").RootFilterQuery<any>, options?: import("mongodb").CountOptions & Pick<import("mongoose").QueryOptions<any>, import("mongoose").MongooseBaseQueryOptionKeys> & {
            [other: string]: any;
        }): import("mongoose").Query<number, any, {}, any, "countDocuments", {}>;
        create<DocContents = import("mongoose").AnyKeys<any>>(docs: any[], options: import("mongoose").CreateOptions & {
            aggregateErrors: true;
        }): Promise<any[]>;
        create<DocContents = import("mongoose").AnyKeys<any>>(docs: any[], options?: import("mongoose").CreateOptions): Promise<any[]>;
        create<DocContents = import("mongoose").AnyKeys<any>>(doc: any): Promise<any>;
        create<DocContents = import("mongoose").AnyKeys<any>>(...docs: any[]): Promise<any[]>;
        createCollection<T extends import("bson").Document>(options?: import("mongodb").CreateCollectionOptions & Pick<import("mongoose").SchemaOptions, "expires">): Promise<import("mongodb").Collection<T>>;
        createSearchIndex(description: import("mongoose").SearchIndexDescription): Promise<string>;
        db: import("mongoose").Connection;
        deleteMany(filter?: import("mongoose").RootFilterQuery<any>, options?: import("mongodb").DeleteOptions & Pick<import("mongoose").QueryOptions<any>, import("mongoose").MongooseBaseQueryOptionKeys> & {
            [other: string]: any;
        }): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteMany", {}>;
        deleteMany(filter: import("mongoose").RootFilterQuery<any>): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteMany", {}>;
        deleteOne(filter?: import("mongoose").RootFilterQuery<any>, options?: import("mongodb").DeleteOptions & Pick<import("mongoose").QueryOptions<any>, import("mongoose").MongooseBaseQueryOptionKeys> & {
            [other: string]: any;
        }): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteOne", {}>;
        deleteOne(filter: import("mongoose").RootFilterQuery<any>): import("mongoose").Query<import("mongodb").DeleteResult, any, {}, any, "deleteOne", {}>;
        dropSearchIndex(name: string): Promise<void>;
        events: NodeJS.EventEmitter;
        findById<ResultDoc = any>(id: any, projection: import("mongoose").ProjectionType<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOne", {}>;
        findById<ResultDoc = any>(id: any, projection?: import("mongoose").ProjectionType<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOne", {}>;
        findById<ResultDoc = any>(id: any, projection?: import("mongoose").ProjectionType<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOne", {}>;
        findOne<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, projection: import("mongoose").ProjectionType<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOne", {}>;
        findOne<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, projection?: import("mongoose").ProjectionType<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOne", {}>;
        findOne<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, projection?: import("mongoose").ProjectionType<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOne", {}>;
        findOne<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOne", {}>;
        hydrate(obj: any, projection?: import("mongoose").AnyObject, options?: import("mongoose").HydrateOptions): any;
        init(): Promise<any>;
        insertMany(docs: any[]): Promise<any[]>;
        insertMany(docs: any[], options: import("mongoose").InsertManyOptions & {
            lean: true;
        }): Promise<any[]>;
        insertMany(doc: any[], options: import("mongoose").InsertManyOptions & {
            ordered: false;
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<any> & {
            mongoose: {
                validationErrors: (import("mongoose").CastError | import("mongoose").Error.ValidatorError)[];
                results: any[];
            };
        }>;
        insertMany(docs: any[], options: import("mongoose").InsertManyOptions & {
            lean: true;
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<any>>;
        insertMany(docs: any[], options: import("mongoose").InsertManyOptions & {
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<any>>;
        insertMany(doc: any[], options: import("mongoose").InsertManyOptions): Promise<any[]>;
        insertMany<DocContents = any>(docs: any[], options: import("mongoose").InsertManyOptions & {
            lean: true;
        }): Promise<import("mongoose").Require_id<DocContents>[]>;
        insertMany<DocContents = any>(docs: any, options: import("mongoose").InsertManyOptions & {
            lean: true;
        }): Promise<import("mongoose").Require_id<DocContents>[]>;
        insertMany<DocContents = any>(doc: any, options: import("mongoose").InsertManyOptions & {
            ordered: false;
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<import("mongoose").Require_id<DocContents>> & {
            mongoose: {
                validationErrors: (import("mongoose").CastError | import("mongoose").Error.ValidatorError)[];
                results: (Object | import("mongoose").Error | import("mongoose").MergeType<any, DocContents>)[];
            };
        }>;
        insertMany<DocContents = any>(docs: any[], options: import("mongoose").InsertManyOptions & {
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<import("mongoose").Require_id<DocContents>>>;
        insertMany<DocContents = any>(docs: any[]): Promise<import("mongoose").MergeType<any, Omit<DocContents, "_id">>[]>;
        insertMany<DocContents = any>(doc: DocContents, options: import("mongoose").InsertManyOptions & {
            lean: true;
        }): Promise<import("mongoose").Require_id<DocContents>[]>;
        insertMany<DocContents = any>(doc: DocContents, options: import("mongoose").InsertManyOptions & {
            rawResult: true;
        }): Promise<import("mongodb").InsertManyResult<import("mongoose").Require_id<DocContents>>>;
        insertMany<DocContents = any>(doc: DocContents, options: import("mongoose").InsertManyOptions): Promise<import("mongoose").MergeType<any, Omit<DocContents, "_id">>[]>;
        insertMany<DocContents = any>(docs: any[], options: import("mongoose").InsertManyOptions): Promise<import("mongoose").MergeType<any, Omit<DocContents, "_id">>[]>;
        insertMany<DocContents = any>(doc: DocContents): Promise<import("mongoose").MergeType<any, Omit<DocContents, "_id">>[]>;
        listSearchIndexes(options?: import("mongodb").ListSearchIndexesOptions): Promise<{
            name: string;
        }[]>;
        modelName: string;
        populate(docs: Array<any>, options: import("mongoose").PopulateOptions | Array<import("mongoose").PopulateOptions> | string): Promise<any[]>;
        populate(doc: any, options: import("mongoose").PopulateOptions | Array<import("mongoose").PopulateOptions> | string): Promise<any>;
        populate<Paths>(docs: Array<any>, options: import("mongoose").PopulateOptions | Array<import("mongoose").PopulateOptions> | string): Promise<import("mongoose").MergeType<any, Paths>[]>;
        populate<Paths>(doc: any, options: import("mongoose").PopulateOptions | Array<import("mongoose").PopulateOptions> | string): Promise<import("mongoose").MergeType<any, Paths>>;
        updateSearchIndex(name: string, definition: import("mongoose").AnyObject): Promise<void>;
        validate(): Promise<void>;
        validate(obj: any): Promise<void>;
        validate(obj: any, pathsOrOptions: import("mongoose").PathsToValidate): Promise<void>;
        validate(obj: any, pathsOrOptions: {
            pathsToSkip?: import("mongoose").pathsToSkip;
        }): Promise<void>;
        watch<ResultType extends import("bson").Document = any, ChangeType extends import("mongodb").ChangeStreamDocument = any>(pipeline?: Array<Record<string, unknown>>, options?: import("mongodb").ChangeStreamOptions & {
            hydrate?: boolean;
        }): import("mongodb").ChangeStream<ResultType, ChangeType>;
        $where(argument: string | Function): import("mongoose").Query<any[], any, {}, any, "find", {}>;
        discriminators: {
            [name: string]: Model<any, {}, {}, {}, any, any>;
        };
        translateAliases(raw: any): any;
        distinct<DocKey extends string, ResultType = unknown>(field: DocKey, filter?: import("mongoose").RootFilterQuery<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<(DocKey extends string | number | symbol ? import("mongoose").WithoutUndefined<import("mongoose").Unpacked<import("mongoose").WithLevel1NestedPaths<any, string | number | symbol>[DocKey]>> : ResultType)[], any, {}, any, "distinct", {}>;
        estimatedDocumentCount(options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<number, any, {}, any, "estimatedDocumentCount", {}>;
        exists(filter: import("mongoose").RootFilterQuery<any>): import("mongoose").Query<{
            _id: any;
        }, any, {}, any, "findOne", {}>;
        find<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, projection: import("mongoose").ProjectionType<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[], ResultDoc, {}, any, "find", {}>;
        find<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, projection?: import("mongoose").ProjectionType<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        find<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, projection?: import("mongoose").ProjectionType<any>): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        find<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        find<ResultDoc = any>(): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        findByIdAndDelete<ResultDoc = any>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOneAndDelete", {}>;
        findByIdAndDelete<ResultDoc = any>(id: import("bson").ObjectId | any, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, any, "findOneAndDelete", {}>;
        findByIdAndDelete<ResultDoc = any>(id?: import("bson").ObjectId | any, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndDelete", {}>;
        findByIdAndUpdate<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
            lean: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<any>, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findByIdAndUpdate<ResultDoc = any>(id: import("bson").ObjectId | any, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findByIdAndUpdate<ResultDoc = any>(id: import("bson").ObjectId | any, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findByIdAndUpdate<ResultDoc = any>(id: import("bson").ObjectId | any, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & ({
            upsert: true;
        } & import("mongoose").ReturnsNewDoc)): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findByIdAndUpdate<ResultDoc = any>(id?: import("bson").ObjectId | any, update?: import("mongoose").UpdateQuery<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findByIdAndUpdate<ResultDoc = any>(id: import("bson").ObjectId | any, update: import("mongoose").UpdateQuery<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findOneAndDelete<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOneAndDelete", {}>;
        findOneAndDelete<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, any, "findOneAndDelete", {}>;
        findOneAndDelete<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndDelete", {}>;
        findOneAndReplace<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, replacement: any, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOneAndReplace", {}>;
        findOneAndReplace<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, replacement: any, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, any, "findOneAndReplace", {}>;
        findOneAndReplace<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, replacement: any, options: import("mongoose").QueryOptions<any> & ({
            upsert: true;
        } & import("mongoose").ReturnsNewDoc)): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndReplace", {}>;
        findOneAndReplace<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, replacement?: any, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndReplace", {}>;
        findOneAndUpdate<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
            lean: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<any>, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findOneAndUpdate<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            lean: true;
        }): import("mongoose").Query<(import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[] | (import("mongoose").FlattenMaps<any> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }), ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findOneAndUpdate<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & {
            includeResultMetadata: true;
        }): import("mongoose").Query<import("mongoose").ModifyResult<ResultDoc>, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findOneAndUpdate<ResultDoc = any>(filter: import("mongoose").RootFilterQuery<any>, update: import("mongoose").UpdateQuery<any>, options: import("mongoose").QueryOptions<any> & ({
            upsert: true;
        } & import("mongoose").ReturnsNewDoc)): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        findOneAndUpdate<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, update?: import("mongoose").UpdateQuery<any>, options?: import("mongoose").QueryOptions<any>): import("mongoose").Query<ResultDoc, ResultDoc, {}, any, "findOneAndUpdate", {}>;
        replaceOne<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, replacement?: any, options?: import("mongodb").ReplaceOptions & Pick<import("mongoose").QueryOptions<any>, "timestamps" | import("mongoose").MongooseBaseQueryOptionKeys | "lean"> & {
            [other: string]: any;
        }): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, ResultDoc, {}, any, "replaceOne", {}>;
        recompileSchema(): void;
        schema: import("mongoose").Schema<any, Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
            [x: string]: unknown;
        }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }>> & import("mongoose").FlatRecord<{
            [x: string]: unknown;
        }> & Required<{
            _id: unknown;
        }> & {
            __v: number;
        }>;
        updateMany<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<any>, options?: import("mongodb").UpdateOptions & Pick<import("mongoose").QueryOptions<any>, "timestamps" | import("mongoose").MongooseBaseQueryOptionKeys> & {
            [other: string]: any;
        }): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, ResultDoc, {}, any, "updateMany", {}>;
        updateOne<ResultDoc = any>(filter?: import("mongoose").RootFilterQuery<any>, update?: import("mongoose").UpdateWithAggregationPipeline | import("mongoose").UpdateQuery<any>, options?: import("mongodb").UpdateOptions & Pick<import("mongoose").QueryOptions<any>, "timestamps" | import("mongoose").MongooseBaseQueryOptionKeys> & {
            [other: string]: any;
        }): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, ResultDoc, {}, any, "updateOne", {}>;
        where<ResultDoc = any>(path: string, val?: any): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        where<ResultDoc = any>(obj: object): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        where<ResultDoc = any>(): import("mongoose").Query<ResultDoc[], ResultDoc, {}, any, "find", {}>;
        addListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        on<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        once<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        off<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        removeAllListeners(eventName?: string | symbol): Model<any, {}, {}, {}, any, any>;
        setMaxListeners(n: number): Model<any, {}, {}, {}, any, any>;
        getMaxListeners(): number;
        listeners<K>(eventName: string | symbol): Function[];
        rawListeners<K>(eventName: string | symbol): Function[];
        emit<K>(eventName: string | symbol, ...args: any[]): boolean;
        listenerCount<K>(eventName: string | symbol, listener?: Function): number;
        prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): Model<any, {}, {}, {}, any, any>;
        eventNames(): (string | symbol)[];
        [EventEmitter.captureRejectionSymbol]?<K>(error: Error, event: string | symbol, ...args: any[]): void;
        discriminator<D>(name: string | number, schema: import("mongoose").Schema, value?: string | number | import("mongoose").ObjectId | import("mongoose").DiscriminatorOptions): Model<D>;
        discriminator<T, U>(name: string | number, schema: import("mongoose").Schema<T, U>, value?: string | number | import("mongoose").ObjectId | import("mongoose").DiscriminatorOptions): U;
        cleanIndexes(options?: {
            toDrop?: string[];
            hideIndexes?: boolean;
        }): Promise<string[]>;
        createIndexes(options?: import("mongodb").CreateIndexesOptions): Promise<void>;
        diffIndexes(options?: Record<string, unknown>): Promise<import("mongoose").IndexesDiff>;
        ensureIndexes(options?: import("mongodb").CreateIndexesOptions): Promise<void>;
        listIndexes(): Promise<Array<any>>;
        syncIndexes(options?: import("mongoose").SyncIndexesOptions): Promise<Array<string>>;
        startSession(options?: import("mongoose").ClientSessionOptions): Promise<import("mongoose").ClientSession>;
    }, userService: UsersService);
    createTopic(data: topic[]): Promise<topic[]>;
    fetchTopics(size: number): Promise<topic[]>;
    fetchUserTopics(data: topic[], userId: {
        id: string;
    }): Promise<Array<string>>;
}
