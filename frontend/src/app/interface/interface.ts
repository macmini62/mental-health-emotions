export interface user {
  _id: string;
  userId: string;
  profile: {
    profileURL: string;
    nickname: string;
    imageURL: string;
  };
  contents: {
    topics: Array<string>;
    bookmarks: {
      articles: Array<string>;
      videos: Array<string>;
    }
  }
  createdAt: string;
  updatedAt: string;
}

export interface topic {
  _id: string;
  name: string;
}

export interface article {
  _id: string;
  creatorId: string;
  title: string;
  overview: string;
  content: string;
  tags: Array<string>;
  thumbnail: {
    _id: string;
    imageURL: string;
    caption: string;
  }
  stats: {
    _id: string;
    likes: Array<string>;
    comments: number;
  }
  createdAt: string;
  updatedAt: string;
}