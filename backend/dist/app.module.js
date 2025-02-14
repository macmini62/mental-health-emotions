"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const topics_module_1 = require("./resources/topics/topics.module");
const sessions_module_1 = require("./sessions/sessions.module");
const professionals_module_1 = require("./professionals/professionals.module");
const seekers_module_1 = require("./seekers/seekers.module");
const core_1 = require("@nestjs/core");
const roles_guards_1 = require("./guards/roles.guards");
require("dotenv/config");
const app_middleware_1 = require("./app.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(app_middleware_1.AppMiddleware)
            .forRoutes();
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL_LOCAL),
            topics_module_1.TopicsModule,
            sessions_module_1.SessionsModule,
            professionals_module_1.ProfessionalsModule,
            seekers_module_1.SeekersModule
        ],
        controllers: [],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: roles_guards_1.RolesGuard,
            },
        ]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map