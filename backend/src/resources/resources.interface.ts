import { ContentItem } from "src/types/types";

export interface createArticle {
  creatorId: string,
  overview: string,
  title: string,
  thumbnail: {
    caption: string,
    image: string
  },
  content: Array<ContentItem>,
  tags: Array<string>,
}