"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const professionals_module_1 = require("../professionals/professionals.module");
const seekers_module_1 = require("../seekers/seekers.module");
const core_1 = require("@nestjs/core");
const roles_guards_1 = require("../guards/roles.guards");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard,
            },
        ],
        imports: [professionals_module_1.ProfessionalsModule, seekers_module_1.SeekersModule]
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map