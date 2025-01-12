import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getAll(): Promise<import("./schema/user.schema").User[]>;
    get(userId: string): Promise<import("./schema/user.schema").User>;
    verify(response: Response): Promise<Response>;
    add(data: object): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User> & import("./schema/user.schema").User & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    update(data: object, userId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(userId: string): Promise<import("mongodb").DeleteResult>;
}
