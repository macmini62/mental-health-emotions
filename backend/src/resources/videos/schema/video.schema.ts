import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type VideoDocument = HydratedDocument<Video>;

export class Video{
@Prop()
_id: string
@Prop()
title: string
@Prop()
creatorName: string
@Prop()
duration: number
@Prop()
fileFormat: string
@Prop()
tags: string[]
@Prop()
resolution: string
@Prop()
bitrate: string
@Prop()
uploadDate: string
@Prop()
copyrightInfo: string
@Prop()
thumbnail: string
@Prop()
likes: number
@Prop({ type: Object })
technicalMetadata: {}
@Prop({ type: Object })
administrativeMetadata: {}
}

export const VideoSchema = SchemaFactory.createForClass(Video);
