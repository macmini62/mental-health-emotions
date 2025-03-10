"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcesModule = void 0;
const common_1 = require("@nestjs/common");
const resources_controller_1 = require("./resources.controller");
const articles_module_1 = require("./articles/articles.module");
const videos_module_1 = require("./videos/videos.module");
const professionals_module_1 = require("../users/professionals/professionals.module");
const seekers_module_1 = require("../users/seekers/seekers.module");
let ResourcesModule = class ResourcesModule {
};
exports.ResourcesModule = ResourcesModule;
exports.ResourcesModule = ResourcesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            articles_module_1.ArticlesModule,
            videos_module_1.VideosModule,
            professionals_module_1.ProfessionalsModule,
            seekers_module_1.SeekersModule
        ],
        controllers: [resources_controller_1.ResourcesController],
        providers: [],
    })
], ResourcesModule);
//# sourceMappingURL=resources.module.js.map