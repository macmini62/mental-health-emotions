"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionsModule = void 0;
const common_1 = require("@nestjs/common");
const sessions_service_1 = require("./sessions.service");
const sessions_controller_1 = require("./sessions.controller");
const mongoose_1 = require("@nestjs/mongoose");
const sessions_schema_1 = require("./schema/sessions.schema");
const sessions_middleware_1 = require("./sessions.middleware");
let SessionsModule = class SessionsModule {
    configure(consumer) {
        consumer
            .apply(sessions_middleware_1.SessionsMiddleware)
            .forRoutes({ path: "professionals/", method: common_1.RequestMethod.GET }, { path: "seekers/", method: common_1.RequestMethod.GET });
    }
};
exports.SessionsModule = SessionsModule;
exports.SessionsModule = SessionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [sessions_controller_1.SessionsController],
        providers: [sessions_service_1.SessionsService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: sessions_schema_1.Session.name, schema: sessions_schema_1.SessionSchema }])]
    })
], SessionsModule);
//# sourceMappingURL=sessions.module.js.map