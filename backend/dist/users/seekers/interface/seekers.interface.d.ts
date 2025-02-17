export interface seeker {
    _id: string;
    userId: string;
    profile: {
        profileURL: string;
        nickname: string;
        imageURL: string;
    };
    contents: {
        topics: string[];
        bookmarks: {
            articles: string[];
            videos: string[];
        };
    };
}
