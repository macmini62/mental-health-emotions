import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProfessionalDocument = HydratedDocument<Professional>;

@Schema()
export class Professional{
  @Prop({ required: true })
  _id: string
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  email: string
  @Prop({ required: true })
  password: string
  @Prop({ required: true })
  phoneNumber: string
  @Prop({ required: true })
  role: string
  @Prop({ required: true })
  licenseNo: string
}

export const ProfessionalSchema = SchemaFactory.createForClass(Professional);