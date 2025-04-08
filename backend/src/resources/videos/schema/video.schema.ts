import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type VideoDocument = HydratedDocument<Video>;

@Schema({ timestamps: true })
export class Video {
  @Prop({ required: true, default: uuidv4, unique: true })
  _id: string;
  
  @Prop({ required: true })
  creatorId: string;

  @Prop({ required: true, unique: true })
  URL: string;
  
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  tags: Array<string>;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  languages: Array<string>;
  
  @Prop({ required: true })
  thumbnail: string;

  @Prop({ required: true })
  license: string;

  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      likes: { type: Array<String> },
      bookmarks: { type: Array<String> },
      comments: { type: Array<String> }
    }
  })
  stats: {
    likes: Array<string>;
    bookmarks: Array<string>;
    comments: Array<string>;
  }
}

export const VideoSchema = SchemaFactory.createForClass(Video);
