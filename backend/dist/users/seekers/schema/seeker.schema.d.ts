import { HydratedDocument } from "mongoose";
export type SeekerDocument = HydratedDocument<Seeker>;
export declare class Seeker {
    _id: string;
    userId: string;
    profile: {
        profileURL: string;
        nickname: string;
        imageURL: string;
    };
    contents: {
        topics: Array<string>;
        bookmarks: {
            articles: Array<string>;
            videos: Array<string>;
        };
    };
    following: Array<string>;
}
export declare const SeekerSchema: import("mongoose").Schema<Seeker, import("mongoose").Model<Seeker, any, any, any, import("mongoose").Document<unknown, any, Seeker> & Seeker & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Seeker, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Seeker>> & import("mongoose").FlatRecord<Seeker> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
