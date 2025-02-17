export interface article {
    id: string;
    creatorId: string;
    title: string;
    content: string;
    tags: string[];
    thumbnail: {
        link: string;
        caption: string;
    };
    feedback: {
        likes: number;
        comments: number;
    };
}
