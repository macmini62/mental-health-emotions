import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProfessionalDocument = HydratedDocument<Professional>;

@Schema()
export class Professional {
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
  password: string;

  @Prop({ required: true })
  profession: string;

  @Prop()
  institution: string;

  @Prop({ required: true })
  permissions: true;
  
  @Prop({ required: true })
  joiningDate: string;

  @Prop()
  lastActive: string;

  @Prop({
    type: {
      image: { type: String, required: true }
    }
  })
  profile: {
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

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);
