import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    logIn(email: string, password: string): Promise<{
        accessToken: string;
    }>;
}
