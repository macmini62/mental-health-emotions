import { HydratedDocument } from "mongoose";
export type VideoDocument = HydratedDocument<Video>;
export declare class Video {
    _id: string;
    creatorId: string;
    URL: string;
    title: string;
    description: string;
    tags: Array<string>;
    duration: number;
    languages: Array<string>;
    thumbnail: string;
    license: string;
    stats: {
        likes: Array<string>;
        comments: number;
    };
}
export declare const VideoSchema: import("mongoose").Schema<Video, import("mongoose").Model<Video, any, any, any, import("mongoose").Document<unknown, any, Video> & Video & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Video, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Video>> & import("mongoose").FlatRecord<Video> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
