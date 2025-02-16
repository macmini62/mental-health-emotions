import { Model } from "mongoose";
import { User } from "./schema/users.schema";
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<User>);
    findOne(email: string): Promise<User>;
}
