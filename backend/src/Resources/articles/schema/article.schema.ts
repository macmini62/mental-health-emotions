import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article{
  @Prop({ required: true, unique: true })
  id: string;
  
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  content: string;
  
  @Prop({ required: true })
  creatorName: string
  
  @Prop({ required: true })
  tags: string[];
  
  @Prop({ required: true })
  uploadDate: string;
  
  @Prop({
    type: {
      thumbnail: {
        link: String,
        caption: String
      }
    }
  })
  thumbnail: {
    link: string;
    caption: string;
  }

  @Prop({
    type: {
      feedback: {
        likes: Number,
        comments: Number
      }
    },
    required: true
  })
  feedback: {
    likes: number,
    comments: number
  }
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
