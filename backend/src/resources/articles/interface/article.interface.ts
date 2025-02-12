export interface article{
  id: string;
  title: string;
  content: string;
  creatorName: string;  
  tags: string[];
  thumbnail: {
    link: string;
    caption: string;
  };
  feedback: {
    likes: number;
    comments: number;
  };
}