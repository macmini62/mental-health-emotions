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
exports.SeekerController = void 0;
const common_1 = require("@nestjs/common");
const seekers_service_1 = require("./seekers.service");
const auth_decorator_1 = require("../../decorators/auth.decorator");
let SeekerController = class SeekerController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll() {
        return this.usersService.getAllUsers();
    }
    get(userId) {
        return this.usersService.getUser(userId);
    }
    async verify(data, res) {
        const userId = await this.usersService.verifyUser(data);
        if (userId) {
            return res.status(200).send({ ...userId });
        }
        return res.status(500).send({ Error: "User does not exists!" });
    }
    update(data, userId) {
        return this.usersService.updateUser(userId, data);
    }
    delete(userId) {
        return this.usersService.deleteUser(userId);
    }
};
exports.SeekerController = SeekerController;
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeekerController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeekerController.prototype, "get", null);
__decorate([
    (0, common_1.Post)("verify"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SeekerController.prototype, "verify", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], SeekerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeekerController.prototype, "delete", null);
exports.SeekerController = SeekerController = __decorate([
    (0, common_1.Controller)("seekers"),
    __metadata("design:paramtypes", [seekers_service_1.SeekerService])
], SeekerController);
//# sourceMappingURL=seekers.controller.js.map