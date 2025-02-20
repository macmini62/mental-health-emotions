import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
import { Response } from "express";
import { UsersService } from "src/users/users.service";
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    signUp(res: Response, userData: user): Promise<void>;
    completeSignUp(res: Response, userId: string, data: {
        role: string;
        title: string;
        topics: string[];
    }): Promise<void>;
    logIn(res: Response, userData: user): Promise<void>;
    getProfile(req: any): any;
}
