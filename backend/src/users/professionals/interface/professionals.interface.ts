export interface professional {
  _id: string;
  userId: string;
  profession: string;
  institution: string;
  profile: {
    profileURL: string;
    imageURL: string;
  };
  contents: {
    topics: Array<string>,
    authored: {
      articles: Array<string>,
      videos: Array<string>,
      liveSessions: Array<string>
    }
  }
}