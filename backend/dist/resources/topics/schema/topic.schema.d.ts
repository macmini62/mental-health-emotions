import { HydratedDocument } from "mongoose";
export type topicDocument = HydratedDocument<Topic>;
export declare class Topic {
    id: string;
    name: string;
}
export declare const TopicSchema: import("mongoose").Schema<Topic, import("mongoose").Model<Topic, any, any, any, import("mongoose").Document<unknown, any, Topic> & Topic & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Topic, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Topic>> & import("mongoose").FlatRecord<Topic> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
