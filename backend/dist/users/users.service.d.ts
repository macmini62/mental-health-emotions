import { User } from './schema/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private UserModel;
    constructor(UserModel: Model<User>);
    addUser(data: object): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getUser(profId: string): Promise<User>;
    getAllUsers(): Promise<Array<User>>;
    deleteUser(profId: string): Promise<import("mongodb").DeleteResult>;
    updateUser(profId: string, data: object): Promise<import("mongoose").UpdateWriteOpResult>;
}
