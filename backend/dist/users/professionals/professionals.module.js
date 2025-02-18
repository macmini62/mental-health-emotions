"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfessionalsModule = void 0;
const common_1 = require("@nestjs/common");
const professional_schema_1 = require("./schema/professional.schema");
const mongoose_1 = require("@nestjs/mongoose");
const professionals_controller_1 = require("./professionals.controller");
const professionals_service_1 = require("./professionals.service");
const professionals_middleware_1 = require("./professionals.middleware");
let ProfessionalsModule = class ProfessionalsModule {
    configure(consumer) {
        consumer
            .apply(professionals_middleware_1.ProfessionalsMiddleware)
            .forRoutes({ path: "users/verify", method: common_1.RequestMethod.GET });
    }
};
exports.ProfessionalsModule = ProfessionalsModule;
exports.ProfessionalsModule = ProfessionalsModule = __decorate([
    (0, common_1.Module)({
        controllers: [professionals_controller_1.ProfessionalController],
        providers: [professionals_service_1.ProfessionalService],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: professional_schema_1.Professional.name, schema: professional_schema_1.ProfessionalSchema }])],
        exports: [professionals_service_1.ProfessionalService]
    })
], ProfessionalsModule);
//# sourceMappingURL=professionals.module.js.map