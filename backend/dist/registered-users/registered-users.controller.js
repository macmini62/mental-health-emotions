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
exports.RegisteredUsersController = void 0;
const common_1 = require("@nestjs/common");
const registered_users_service_1 = require("./registered-users.service");
const create_registered_user_dto_1 = require("./dto/create-registered-user.dto");
const update_registered_user_dto_1 = require("./dto/update-registered-user.dto");
let RegisteredUsersController = class RegisteredUsersController {
    constructor(registeredUsersService) {
        this.registeredUsersService = registeredUsersService;
    }
    create(createRegisteredUserDto) {
        return this.registeredUsersService.create(createRegisteredUserDto);
    }
    findAll() {
        return this.registeredUsersService.findAll();
    }
    findOne(id) {
        return this.registeredUsersService.findOne(+id);
    }
    update(id, updateRegisteredUserDto) {
        return this.registeredUsersService.update(+id, updateRegisteredUserDto);
    }
    remove(id) {
        return this.registeredUsersService.remove(+id);
    }
};
exports.RegisteredUsersController = RegisteredUsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_registered_user_dto_1.CreateRegisteredUserDto]),
    __metadata("design:returntype", void 0)
], RegisteredUsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegisteredUsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisteredUsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_registered_user_dto_1.UpdateRegisteredUserDto]),
    __metadata("design:returntype", void 0)
], RegisteredUsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegisteredUsersController.prototype, "remove", null);
exports.RegisteredUsersController = RegisteredUsersController = __decorate([
    (0, common_1.Controller)('registered-users'),
    __metadata("design:paramtypes", [registered_users_service_1.RegisteredUsersService])
], RegisteredUsersController);
//# sourceMappingURL=registered-users.controller.js.map