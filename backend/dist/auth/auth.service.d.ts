import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    constructor(userService: UsersService);
    logIn(email: string, password: string): Promise<any>;
}
