import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type topicDocument = HydratedDocument<Topic>;

@Schema()
export class Topic{
  @Prop({required:true})
  _id: string
  @Prop({required:true})
  name: string
  @Prop()
  users: string[]
}

export const TopicSchema = SchemaFactory.createForClass(Topic);
