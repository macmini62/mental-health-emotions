export interface article {
    _id: string;
    creatorId: string;
    title: string;
    content: string;
    tags: string[];
    thumbnail: {
        imageURL: string;
        caption: string;
    };
    stats: {
        likes: number;
        comments: number;
    };
}
