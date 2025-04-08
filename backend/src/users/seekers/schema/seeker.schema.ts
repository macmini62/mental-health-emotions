import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema({ timestamps: true })
export class Seeker {
  
  @Prop({ required: true, unique: true, default: uuidv4 })
  _id: string;
  
  @Prop({ unique: true })
  userId: string;
  
  @Prop({
    type: {
      _id: { type: String, default: uuidv4 },
      profileURL: { type: String },
      nickname: { type: String },
      imageURL: { type: String }
    }
  })
  profile: {
    profileURL: string;
    nickname: string;
    imageURL: string;
  }

  @Prop()
  topics: Array<string>;

  @Prop()
  following: Array<string>;
}

export const SeekerSchema = SchemaFactory.createForClass(Seeker);
