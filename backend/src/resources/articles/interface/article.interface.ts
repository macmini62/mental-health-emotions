export interface article{
  _id: string;
  creatorId: string;  
  title: string;
  overview: string;
  content: string;
  tags: string[];
  thumbnail: {
    imageURL: string;
    caption: string;
  };
  stats: {
    likes: Array<string>;
    comments: number;
  };
}