import { AuthService } from "./auth.service";
import { user } from "src/users/interface/user.interface";
import { Response } from "express";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(res: Response, userData: user): Promise<void>;
    logIn(res: Response, userData: user): Promise<void>;
}
