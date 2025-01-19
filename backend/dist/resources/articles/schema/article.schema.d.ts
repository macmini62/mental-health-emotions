import { HydratedDocument } from "mongoose";
export type ArticleDocument = HydratedDocument<Article>;
export declare class Article {
    _id: string;
    title: string;
    creatorName: string;
    Tags: string[];
    uploadDate: string;
    thumbnail: {
        link: string;
        caption: string;
    };
    copyrightInfo: string;
    likes: number;
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, import("mongoose").Document<unknown, any, Article> & Article & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
