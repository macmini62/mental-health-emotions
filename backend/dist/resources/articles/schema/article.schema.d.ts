import { HydratedDocument } from "mongoose";
import { ContentItem } from "src/types/types";
export type ArticleDocument = HydratedDocument<Article>;
export declare class Article {
    _id: string;
    creatorId: string;
    title: string;
    overview: string;
    content: Array<ContentItem>;
    tags: string[];
    thumbnail: {
        imageURL: string;
    };
    stats: {
        likes: Array<string>;
        bookmarks: Array<string>;
        comments: Array<string>;
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
