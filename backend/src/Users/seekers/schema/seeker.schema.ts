import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SeekerDocument = HydratedDocument<Seeker>;

@Schema()
export class Seeker {
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
  permissions: boolean;

  @Prop({
    type: {
      url: { type: String, required: true },
      width: { type: Number, required: true },
      height: { type: Number, required: true },
    },
    required: true,
  })
  image: {
    url: string;
    width: number;
    height: number;
  };
}

export const SeekerSchema = SchemaFactory.createForClass(Seeker);
