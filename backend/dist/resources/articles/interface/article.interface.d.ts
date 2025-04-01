import { ContentItem } from "src/types/types";
export interface article {
    _id: string;
    creatorId: string;
    title: string;
    overview: string;
    content: Array<ContentItem>;
    tags: Array<string>;
    thumbnail: {
        imageURL: string;
    };
    stats: {
        likes: Array<string>;
        comments: number;
    };
}
