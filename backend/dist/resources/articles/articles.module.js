"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const article_schema_1 = require("./schema/article.schema");
const professionals_module_1 = require("../../users/professionals/professionals.module");
const articles_service_1 = require("./articles.service");
const seekers_module_1 = require("../../users/seekers/seekers.module");
const users_module_1 = require("../../users/users.module");
const topics_module_1 = require("../../topics/topics.module");
let ArticlesModule = class ArticlesModule {
};
exports.ArticlesModule = ArticlesModule;
exports.ArticlesModule = ArticlesModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [articles_service_1.ArticlesService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: article_schema_1.Article.name, schema: article_schema_1.ArticleSchema }]),
            users_module_1.UsersModule,
            professionals_module_1.ProfessionalsModule,
            seekers_module_1.SeekersModule,
            topics_module_1.TopicsModule
        ],
        exports: [articles_service_1.ArticlesService]
    })
], ArticlesModule);
//# sourceMappingURL=articles.module.js.map