import { HydratedDocument } from "mongoose";
export type VideoDocument = HydratedDocument<Video>;
export declare class Video {
    id: string;
    title: string;
    creatorName: string;
    tags: string[];
    duration: number;
    fileFormat: string;
    resolution: string;
    bitrate: string;
    uploadDate: string;
    thumbnail: string;
    technicalMetadata: {};
    administrativeMetadata: {};
    feedback: {
        likes: number;
        comments: number;
    };
}
export declare const VideoSchema: import("mongoose").Schema<Video, import("mongoose").Model<Video, any, any, any, import("mongoose").Document<unknown, any, Video> & Video & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Video, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Video>> & import("mongoose").FlatRecord<Video> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
