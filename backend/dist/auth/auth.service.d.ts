import { JwtService } from "@nestjs/jwt";
import { user } from "src/users/interface/user.interface";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signUp(user: user): Promise<{
        accessToken: string;
    }>;
    logIn(email: string, password: string): Promise<{
        user: user;
        accessToken: string;
    }>;
}
