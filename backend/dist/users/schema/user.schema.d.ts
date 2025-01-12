import { HydratedDocument } from "mongoose";
export type UserDocument = HydratedDocument<User>;
export declare class User {
    _id: string;
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    role: string;
    licenseNo: string;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any, import("mongoose").Document<unknown, any, User> & User & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
