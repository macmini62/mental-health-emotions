import { ContentItem } from "../types/types";

export interface user {
  _id: any,
  name: string,
  email: string,
  password: string,
  phoneNumber: string;
  role: string
}

export interface seeker {
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

export interface professional {
  _id: string;
  userId: string;
  profession: string;
  institution: string;
  profile: profile;
  contents: contents;
}
interface contents{
  topics: Array<string>,
  authored: {
    articles: Array<string>,
    videos: Array<string>,
    liveSessions: Array<string>
  }
}
interface profile{
  profileURL: string;
  imageURL: string;
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
  content: Array<ContentItem>;
  tags: Array<tag>;
  thumbnail: {
    _id: string;
    imageURL: string;
  }
  stats: {
    _id: string;
    likes: Array<string>;
    comments: number;
  }
  createdAt: string;
  updatedAt: string;
}

export interface tag {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface createArticle {
  creatorId: string;
  title: string;
  overview: string;
  content: Array<ContentItem>;
  tags: Array<string>;
  thumbnail: {
    imageURL: string;
  }
}

export interface userData {
  role: string;
  title: string;
  topics: string[];
}

export interface topic {
  _id: string;
  name: string;
}
