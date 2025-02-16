import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    logIn(userData: user): Promise<{
        accessToken: string;
    }>;
    getProfile(req: any): {
        user: string;
        password: string;
    };
}
