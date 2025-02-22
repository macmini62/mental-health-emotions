export interface user {
  _id: string;
  userId: string;
  phoneNumber: string;
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
}

export interface topic {
  _id: string;
  name: string;
}

export interface article {
  _id: string;
  creatorId: string;
  title: string;
  content: string;
  tags: Array<string>;
  thumbnail: {
    _id: string;
    imageURL: string;
    caption: string;
  }
  stats: {
    _id: string;
    likes: number;
    comments: number;
  }
}