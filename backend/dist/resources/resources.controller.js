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
    createArticle(article, res) {
        const results = this.articlesService.create(article);
        if (results) {
            res.status(400);
        }
        return res.status(500);
    }
    findCreatorsArticles(id, res) {
        const results = this.articlesService.findCreators(id);
        if (results) {
            return res.status(400).send(results);
        }
        return res.status(404).send({ message: "Creator has not created an article!!" });
    }
    findAllArticles(res) {
        const results = this.articlesService.findAll();
        console.log(results);
        if (typeof (results) === "string") {
            return res.status(200).json(results);
        }
    }
    findOneArticle(id, res) {
        const result = this.articlesService.findOne(id);
        if (!result) {
            return res.status(500).send({ message: "Error in the server!" });
        }
        return res.status(200).json(result);
    }
    updateArticle(id, article) {
        return this.articlesService.update(id, article);
    }
    removeArticle(id) {
        return this.articlesService.deleteOne(id);
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
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Post)("articles/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "findCreatorsArticles", null);
__decorate([
    (0, common_1.Get)("articles"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "findAllArticles", null);
__decorate([
    (0, common_1.Get)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "findOneArticle", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Put)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "updateArticle", null);
__decorate([
    (0, common_1.Delete)("/articles/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResourcesController.prototype, "removeArticle", null);
exports.ResourcesController = ResourcesController = __decorate([
    (0, common_1.Controller)("resources"),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService,
        videos_service_1.VideosService])
], ResourcesController);
//# sourceMappingURL=resources.controller.js.map