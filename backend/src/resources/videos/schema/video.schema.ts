import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type VideoDocument = HydratedDocument<Video>;

export class Video{
  @Prop({ required: true, default: uuidv4(), unique: true })
  _id: string

  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  creatorName: string

  @Prop({ required: true })
  tags: string[]

  @Prop({ required: true })
  duration: number

  @Prop({ required: true })
  fileFormat: string

  @Prop({ required: true })
  resolution: string

  @Prop({ required: true })
  bitrate: string

  @Prop({ required: true })
  thumbnail: string
  
  @Prop({
    type: {
      
    }
  })
  technicalMetadata: {

  }
  
  @Prop({
    type: {
      
    }
  })
  administrativeMetadata: {
    
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

export const VideoSchema = SchemaFactory.createForClass(Video);
