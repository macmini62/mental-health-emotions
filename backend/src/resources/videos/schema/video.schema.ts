import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type VideoDocument = HydratedDocument<Video>;

export class Video {
  @Prop({ required: true, default: uuidv4, unique: true })
  _id: string
  
  @Prop({ required: true })
  creatorId: string

  @Prop({ required: true, unique: true })
  URL: string
  
  @Prop({ required: true, unique: true })
  title: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  tags: Array<string>

  @Prop({ required: true })
  duration: number

  @Prop({ required: true })
  languages: Array<string>
  
  @Prop({ required: true })
  thumbnail: string

  @Prop({ required: true })
  license: string

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

export const VideoSchema = SchemaFactory.createForClass(Video);
