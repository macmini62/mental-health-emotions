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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_decorator_1 = require("../decorators/auth.decorator");
const auth_guard_1 = require("../guards/auth.guard");
const users_service_1 = require("../users/users.service");
let AuthController = class AuthController {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    async signUp(res, userData) {
        const accessToken = await this.authService.signUp(userData);
        if (accessToken) {
            res.status(201).send(accessToken);
        }
        res.status(500).send("User email already in user!!");
    }
    async completeSignUp(res, userId, data) {
        if (data.role === "professional") {
            const results = await this.userService.addUserProfessional(userId, data);
            if (results) {
                res.status(201).send(results);
            }
            else {
                res.status(500).send();
            }
        }
        else if (data.role === "seeker") {
            const results = await this.userService.addUserSeeker(userId, data);
            if (results) {
                res.status(201).send(results);
            }
            else {
                res.status(500).send();
            }
        }
    }
    async logIn(res, userData) {
        const accessToken = await this.authService.logIn(userData.email, userData.password);
        if (accessToken) {
            res.status(200).send(accessToken);
        }
        else {
            res.status(500).send();
        }
    }
    getProfile(req) {
        console.log(req.user);
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("signup"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("signup/completeRegistration/:userId"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("userId")),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "completeSignUp", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Post)("login"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logIn", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)("profile"),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getProfile", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)("auth"),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map