"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeekersModule = void 0;
const common_1 = require("@nestjs/common");
const seekers_controller_1 = require("./seekers.controller");
const seekers_service_1 = require("./seekers.service");
const mongoose_1 = require("@nestjs/mongoose");
const seekers_schema_1 = require("./schema/seekers.schema");
let SeekersModule = class SeekersModule {
};
exports.SeekersModule = SeekersModule;
exports.SeekersModule = SeekersModule = __decorate([
    (0, common_1.Module)({
        providers: [seekers_service_1.SeekersService],
        controllers: [seekers_controller_1.SeekersController],
        imports: [mongoose_1.MongooseModule.forFeature([{ name: seekers_schema_1.Seeker.name, schema: seekers_schema_1.SeekerSchema }])],
    })
], SeekersModule);
//# sourceMappingURL=seekers.module.js.map