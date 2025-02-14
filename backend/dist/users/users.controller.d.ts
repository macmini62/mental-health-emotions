import { UsersService } from "./users.service";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(): void;
    findAll(): void;
    findOne(): void;
    update(): void;
    remove(): void;
}
