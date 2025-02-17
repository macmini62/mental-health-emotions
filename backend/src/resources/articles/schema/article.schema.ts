import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type ArticleDocument = HydratedDocument<Article>;

@Schema({ timestamps: true })

export class Article{
  @Prop({ required: true, default: uuidv4(), unique: true })
  _id: string;

  @Prop({ required: true })
  creatorId: string

  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  content: string;
  
  @Prop({ required: true })
  tags: string[];
  
  @Prop({
    type: {
      thumbnail: {
        link: String,
        caption: String
      }
    }
  })
  thumbnail: {
    imageURL: string;
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
    comments: number //change to store comments ids from comments schema.
  }
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
