import { Model } from "mongoose";
import { User } from "./schema/users.schema";
import { user } from "./interface/user.interface";
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<User>);
    create(user: user): Promise<user>;
    findOne(email: string): Promise<User>;
    userExists(userId: string): Promise<boolean>;
}
