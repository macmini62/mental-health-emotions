import { HydratedDocument } from "mongoose";
export type VideoDocument = HydratedDocument<Video>;
export declare class Video {
    _id: string;
    title: string;
    creatorName: string;
    duration: number;
    fileFormat: string;
    tags: string[];
    resolution: string;
    bitrate: string;
    uploadDate: string;
    copyrightInfo: string;
    thumbnail: string;
    likes: number;
    technicalMetadata: {};
    administrativeMetadata: {};
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
