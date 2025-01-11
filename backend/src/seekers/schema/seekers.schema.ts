import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema()
export class Seeker{
  @Prop({ required:true })
  _id: string
  @Prop({ required:true })
  name: string
  @Prop({ required:true })
  email:string
  @Prop({ required:true })
  password: string
  @Prop()
  phoneNumber: string
}

export const SeekerSchema = SchemaFactory.createForClass(Seeker);