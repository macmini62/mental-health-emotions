import { HydratedDocument } from "mongoose";
export type ArticleDocument = HydratedDocument<Article>;
export declare class Article {
    _id: string;
    creatorId: string;
    title: string;
    overview: string;
    content: string;
    tags: string[];
    thumbnail: {
        imageURL: string;
        caption: string;
    };
    stats: {
        likes: Array<string>;
        comments: number;
    };
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
