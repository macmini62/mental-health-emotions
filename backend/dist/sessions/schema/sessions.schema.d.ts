import { Date, HydratedDocument } from "mongoose";
export type SessionDocument = HydratedDocument<Session>;
export declare class Session {
    id: string;
    userId: string;
    date: Date;
    startTime: string;
    endTime: string;
}
export declare const SessionSchema: import("mongoose").Schema<Session, import("mongoose").Model<Session, any, any, any, import("mongoose").Document<unknown, any, Session> & Session & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Session, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Session>> & import("mongoose").FlatRecord<Session> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
