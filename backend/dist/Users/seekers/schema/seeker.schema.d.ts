import { HydratedDocument } from "mongoose";
export type SeekerDocument = HydratedDocument<Seeker>;
export declare class Seeker {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    permissions: false;
    joiningDate: string;
    lastActive: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    contents: {
        topics: string[];
        bookmarks: {
            articles: string[];
            videos: string[];
        };
    };
}
export declare const SeekerSchema: import("mongoose").Schema<Seeker, import("mongoose").Model<Seeker, any, any, any, import("mongoose").Document<unknown, any, Seeker> & Seeker & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Seeker, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Seeker>> & import("mongoose").FlatRecord<Seeker> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
