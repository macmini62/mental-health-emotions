import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, HydratedDocument } from "mongoose";

export type SessionDocument = HydratedDocument<Session>;

@Schema({ timestamps: true })
export class Session{
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  userId: string;
  
  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ required: true })
  startTime: string;

  @Prop({ required: true })
  endTime: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
