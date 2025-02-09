import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type RegisteredUserDocument = HydratedDocument<RegisteredUser>;

@Schema()
export class RegisteredUser {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  _id: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  image: {
    url: string;
    height: number;
    width: number;
  };

  @Prop({ required: true })
  role: string;

  @Prop()
  title: string;

  @Prop()
  followers: number;
}

export const RegisteredUserSchema = SchemaFactory.createForClass(RegisteredUser);
