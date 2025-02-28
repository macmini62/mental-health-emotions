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
exports.ResourcesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles/articles.service");
const videos_service_1 = require("./videos/videos.service");
const auth_decorator_1 = require("../decorators/auth.decorator");
let ResourcesController = class ResourcesController {
    constructor(articlesService, videosService) {
        this.articlesService = articlesService;
        this.videosService = videosService;
    }
    async createArticle(article, res) {
        const results = await this.articlesService.create(article);
        if (results) {
            res.status(201).send(results);
        }
        res.status(500).send();
    }
    async findCreatorsArticles(id, p, res) {
        const results = await this.articlesService.findCreators(id, p);
        if (!results) {
            res.status(404).send();
        }
        else if (results.length < p * 5 && p > 2) {
            res.status(204).send();
        }
        else {
            res.status(200).send(results);
        }
    }
    async findAllArticles(res, p) {
        const results = await this.articlesService.findAll(p);
        if (!results) {
            res.status(404).send();
        }
        else if (results.length < p * 5 && p > 2) {
            res.status(204).send();
        }
        else {
            res.status(200).send(results);
        }
    }
    async findOneArticle(id, res) {
        const result = await this.articlesService.findOne(id);
        if (!result) {
            res.status(500).send();
        }
        res.status(200).json(result);
    }
    async fetchArticlesTag(res, t, p) {
        const results = await this.articlesService.findArticleTags(t, p);
        if (!results) {
            res.status(404).send();
        }
        res.status(200).send(results);
    }
    async updateArticle(id, article) {
        return await this.articlesService.update(id, article);
    }
    async removeArticle(id) {
        return await this.articlesService.deleteOne(id);
    }
};
exports.ResourcesController = ResourcesController;
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("articles/create"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "createArticle", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)("articles/c/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Query)("p")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Object]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "findCreatorsArticles", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)("articles"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("p")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "findAllArticles", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "findOneArticle", null);
__decorate([
    (0, common_1.Get)("articles/tag"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("t")),
    __param(2, (0, common_1.Query)("p")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "fetchArticlesTag", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Put)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ResourcesController.prototype, "removeArticle", null);
exports.ResourcesController = ResourcesController = __decorate([
    (0, common_1.Controller)("resources"),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService,
        videos_service_1.VideosService])
], ResourcesController);
//# sourceMappingURL=resources.controller.js.map