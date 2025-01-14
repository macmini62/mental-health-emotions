import { UsersService } from "./users.service";
import { user } from "./interface/user";
import { Response } from "express";
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("./schema/user.schema").User[]>;
    get(userId: string): Promise<import("./schema/user.schema").User>;
    verify(data: user, res: Response): Promise<Response<any, Record<string, any>>>;
    add(data: user, res: Response): Promise<Response<any, Record<string, any>>>;
    update(data: object, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
