export interface video {
  _id: string;
  creatorId: string;
  URL: string;
  title: string;
  description: string;
  tags: Array<string>;
  duration: number;
  languages: Array<string>;
  thumbnail: string;
  license: string;
  stats: {
    likes: Array<string>;
    bookmarks: Array<string>;
    comments: Array<string>;
  };
}