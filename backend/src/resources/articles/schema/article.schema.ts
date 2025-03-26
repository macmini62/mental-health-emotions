import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { ContentItem } from "src/types/types";
import { v4 as uuidv4 } from "uuid";

export type ArticleDocument = HydratedDocument<Article>;

@Schema({ timestamps: true })
export class Article{
  @Prop({ required: true, default: uuidv4, unique: true })
  _id: string;

  @Prop({ required: true })
  creatorId: string

  @Prop({ required: true, unique: true })
  title: string;
  
  @Prop({ required: true })
  overview: string;

  @Prop({ required: true })
  content: Array<ContentItem>;
  
  @Prop({ required: true })
  tags: string[];
  
  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      imageURL: { type: String }
    }
  })
  thumbnail: {
    imageURL: string;
  }

  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      likes: { type: Array<String> },
      comments: { type: Number }
    }
  })
  stats: {
    likes: Array<string>,
    comments: number //change to store comments ids from comments schema.
  }
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
