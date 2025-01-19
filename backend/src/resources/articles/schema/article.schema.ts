import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article{
  @Prop()
  _id: string
  @Prop()
  title: string
  @Prop()
  creatorName: string
  @Prop()
  Tags: string[]
  @Prop()
  uploadDate: string
  @Prop()
  thumbnail: string
  @Prop()
  copyrightInfo: string
  @Prop()
  likes: number
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
