import { User } from "./schema/user.schema";
import { Model } from "mongoose";
import { user } from "./interface/user";
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<User>);
    addUser(data: user): Promise<string>;
    getUser(profId: string): Promise<User>;
    getAllUsers(): Promise<Array<User>>;
    deleteUser(profId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(profId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
    verifyUser(data: user): Promise<object>;
}
