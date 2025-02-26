export interface seeker {
    _id: string;
    userId: string;
    profile: profile;
    contents: contents;
    following: Array<string>;
}
export interface profile {
    profileURL: string;
    nickname: string;
    imageURL: string;
}
export interface contents {
    topics: string[];
    bookmarks: {
        articles: string[];
        videos: string[];
    };
}
