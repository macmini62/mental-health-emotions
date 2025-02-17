import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export type topicDocument = HydratedDocument<Topic>;

@Schema({ timestamps: true })
export class Topic{
  @Prop({ required: true, type: String, default: uuidv4(), unique: true })
  _id: string;
  
  @Prop({ required: true })
  name: string
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
