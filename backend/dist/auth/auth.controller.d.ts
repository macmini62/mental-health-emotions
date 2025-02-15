import { AuthService } from './auth.service';
import { User } from 'src/users/users.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(userData: User): Promise<any>;
}
