import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type ProfessionalDocument = HydratedDocument<Professional>;

@Schema({ timestamps: true })
export class Professional {
  
  @Prop({ required: true, unique: true, default: uuidv4 })
  _id: string;
  
  @Prop({unique: true })
  userId: string;

  @Prop()
  profession: string;

  @Prop()
  institution: string;

  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      profileURL: { type: String },
      imageURL: { type: String }
    }
  })
  profile: {
    profileURL: string;
    imageURL: string; 
  }

  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      topics: { type: Array<String> },
      authored: { 
        articles: { type: Array<String> },
        videos: { type: Array<String> },
        liveSessions:{ type: Array<String> }
      },
    }
  })
  contents: {
    topics: string[];
    authored: {
      articles: string[];
      videos: string[];
      liveSessions: string[];
    }
  }
}

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);
