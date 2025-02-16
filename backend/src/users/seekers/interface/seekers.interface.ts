export interface seeker {
  id: string;
  userId: string;
  phoneNumber: string;
  profile: {
    profileURL: string;
    nickname: string;
    imageURL: string;
  }
  contents: {
    topics: string[];
    bookmarks: {
      articles: string[];
      videos: string[];
    }
  }
}