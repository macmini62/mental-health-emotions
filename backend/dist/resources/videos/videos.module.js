"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosModule = void 0;
const common_1 = require("@nestjs/common");
const videos_service_1 = require("./videos.service");
const mongoose_1 = require("@nestjs/mongoose");
const topics_module_1 = require("../../topics/topics.module");
const professionals_module_1 = require("../../users/professionals/professionals.module");
const seekers_module_1 = require("../../users/seekers/seekers.module");
const users_module_1 = require("../../users/users.module");
const video_schema_1 = require("./schema/video.schema");
let VideosModule = class VideosModule {
};
exports.VideosModule = VideosModule;
exports.VideosModule = VideosModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [videos_service_1.VideosService],
        exports: [videos_service_1.VideosService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: video_schema_1.Video.name, schema: video_schema_1.VideoSchema }]),
            users_module_1.UsersModule,
            professionals_module_1.ProfessionalsModule,
            seekers_module_1.SeekersModule,
            topics_module_1.TopicsModule
        ]
    })
], VideosModule);
//# sourceMappingURL=videos.module.js.map