import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema({ timestamps: true })
export class Seeker {
  
  @Prop({ required: true, unique: true })
  _id: string;
  
  @Prop({ required: true, unique: true })
  phoneNumber: string;
  
  @Prop()
  lastActive: string;
  
  @Prop({
    type: {
      profileURL: { type: String, required: true },
      nickname: { type: String, required: true },
      imageURL: { type: Number, required: true }
    }
  })
  profile: {
    profileURL: string;
    nickname: string;
    imageURL: string; 
  }

  @Prop({
    type: {
      topics: { type: String },
      bookmarks: { 
        articles: { type: String },
        videos: { type: String }
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
