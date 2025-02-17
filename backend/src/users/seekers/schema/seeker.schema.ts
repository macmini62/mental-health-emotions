import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema({ timestamps: true })
export class Seeker {
  
  @Prop({ required: true, unique: true })
  _id: string;
  
  @Prop({ required: true, unique: true })
  userId: string;
  
  @Prop({ required: true, unique: true })
  phoneNumber: string;
  
  @Prop({
    type: {
      profileURL: { type: String, required: true },
      nickname: { type: String, required: true },
      imageURL: { type: String, required: true }
    }
  })
  profile: {
    profileURL: string;
    nickname: string;
    imageURL: string;
  }

  @Prop({
    type: {
      topics: { type: Array<String> },
      bookmarks: { 
        articles: { type: Array<String> },
        videos: { type: Array<String> }
      },
    }
  })
  contents: {
    topics: string[];
    bookmarks: {
      articles: string[];
      videos: string[];
    }
  }
}

export const SeekerSchema = SchemaFactory.createForClass(Seeker);
