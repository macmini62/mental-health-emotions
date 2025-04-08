export interface seeker {
  _id: string;
  userId: string;
  profile: profile;
  topics: Array<string>;
  following: Array<string>;
};

export interface profile {
  profileURL: string;
  nickname: string;
  imageURL: string;
};

