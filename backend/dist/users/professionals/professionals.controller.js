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
exports.ProfessionalController = void 0;
const common_1 = require("@nestjs/common");
const professionals_service_1 = require("./professionals.service");
const role_guard_1 = require("../../guards/role.guard");
const auth_decorator_1 = require("../../decorators/auth.decorator");
let ProfessionalController = class ProfessionalController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    getAll() {
    }
    get(req, userId) {
        console.log(req);
        return this.usersService.getUser(userId);
    }
    async add(data, res) {
        const results = await this.usersService.addUser(data);
        if (results) {
            return res.status(201).send(results);
        }
        return res.status(500).send({ Error: "Professional already exists!!" });
    }
    update(data, userId) {
        return this.usersService.updateUser(userId, data);
    }
    delete(userId) {
        return this.usersService.deleteUser(userId);
    }
};
exports.ProfessionalController = ProfessionalController;
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProfessionalController.prototype, "getAll", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessionalController.prototype, "get", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProfessionalController.prototype, "add", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProfessionalController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProfessionalController.prototype, "delete", null);
exports.ProfessionalController = ProfessionalController = __decorate([
    (0, common_1.Controller)("professionals"),
    (0, common_1.UseGuards)(role_guard_1.RolesGuard),
    __metadata("design:paramtypes", [professionals_service_1.ProfessionalService])
], ProfessionalController);
//# sourceMappingURL=professionals.controller.js.map