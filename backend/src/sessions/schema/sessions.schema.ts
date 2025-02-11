import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, HydratedDocument } from "mongoose";

export type SessionDocument = HydratedDocument<Session>;

@Schema()
export class Session{
  @Prop()
  id: string;

  @Prop()
  userId: string;
  
  @Prop({ type: Date })
  date: Date;

  @Prop()
  startTime: string;

  @Prop()
  endTime: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
