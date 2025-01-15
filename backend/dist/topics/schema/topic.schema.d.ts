import { HydratedDocument } from "mongoose";
export type topicDocument = HydratedDocument<Topic>;
export declare class Topic {
    _id: string;
    name: string;
    users: string[];
}
export declare const TopicSchema: import("mongoose").Schema<Topic, import("mongoose").Model<Topic, any, any, any, import("mongoose").Document<unknown, any, Topic> & Topic & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Topic, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Topic>> & import("mongoose").FlatRecord<Topic> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
