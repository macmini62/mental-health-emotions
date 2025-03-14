"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async signUp(user) {
        try {
            const existingUser = await this.userService.findOne(user.email);
            if (existingUser) {
                throw new common_1.ConflictException;
            }
            const results = await this.userService.create(user);
            if (!results) {
                throw new Error("User not added!!");
            }
            const accessToken = await this.logIn(results.email, results.password);
            return accessToken;
        }
        catch (e) {
            console.log(e);
        }
    }
    async logIn(email, password) {
        try {
            const user = await this.userService.findOne(email);
            if (user?.password !== password) {
                throw new common_1.UnauthorizedException();
            }
            const payload = { sub: user._id, email: user.email };
            return {
                user: user,
                accessToken: await this.jwtService.signAsync(payload),
            };
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map