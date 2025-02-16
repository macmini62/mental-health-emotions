import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProfessionalDocument = HydratedDocument<Professional>;

@Schema({ timestamps: true })
export class Professional {
  
  @Prop({ required: true, unique: true })
  _id: string;
  
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true, unique: true })
  phoneNumber: string;

  @Prop({ required: true })
  profession: string;

  @Prop()
  institution: string;

  @Prop()
  lastActive: string;

  @Prop({
    type: {
      profileURL: { type: String, required: true },
      imageURL: { type: Number, required: true }
    }
  })
  profile: {
    profileURL: string;
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

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);
