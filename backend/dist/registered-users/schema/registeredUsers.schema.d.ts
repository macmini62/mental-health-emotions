import { HydratedDocument } from "mongoose";
export type RegisteredUserDocument = HydratedDocument<RegisteredUser>;
export declare class RegisteredUser {
    name: string;
    _id: string;
    email: string;
    image: {
        url: string;
        height: number;
        width: number;
    };
    role: string;
    title: string;
    followers: number;
}
export declare const RegisteredUserSchema: import("mongoose").Schema<RegisteredUser, import("mongoose").Model<RegisteredUser, any, any, any, import("mongoose").Document<unknown, any, RegisteredUser> & RegisteredUser & Required<{
    _id: string;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RegisteredUser, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<RegisteredUser>> & import("mongoose").FlatRecord<RegisteredUser> & Required<{
    _id: string;
}> & {
    __v: number;
}>;
