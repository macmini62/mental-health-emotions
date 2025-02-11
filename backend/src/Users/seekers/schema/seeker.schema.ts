import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema({ timestamps: true })
export class Seeker {
  @Prop({ required: true })
  userURL: string;
  
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  permissions: false;
  
  @Prop({ required: true })
  joiningDate: string;

  @Prop()
  lastActive: string;

  @Prop({
    type: {
      nickname: { type: String, required: true },
      image: { type: Number, required: true }
    }
  })
  profile: {
    nickname: string;
    image: string; 
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
