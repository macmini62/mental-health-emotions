export interface professional {
  _id: string;
  userId: string;
  profession: string;
  institution: string;
  profile: profile;
  contents: contents;
}

export interface contents{
  topics: Array<string>,
  authored: {
    articles: Array<string>,
    videos: Array<string>,
    liveSessions: Array<string>
  }
}

export interface profile{
  profileURL: string;
  imageURL: string;
}
