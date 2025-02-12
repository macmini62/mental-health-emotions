export interface Video {
    id: string;
    title: string;
    creatorName: string;
    tags: string[];
    duration: number;
    fileFormat: string;
    resolution: string;
    bitrate: string;
    thumbnail: string;
    technicalMetadata: Record<string, any>;
    administrativeMetadata: Record<string, any>;
    feedback: {
        likes: number;
        comments: number;
    };
}
