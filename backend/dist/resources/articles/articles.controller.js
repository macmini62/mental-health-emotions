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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const articles_service_1 = require("./articles.service");
const auth_decorator_1 = require("../../decorators/auth.decorator");
let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    create(article) {
        return this.articlesService.create(article);
    }
    findCreators(id, res) {
        const response = this.articlesService.findCreators(id);
        if (response) {
            return res.status(400).send(response);
        }
        return res.status(404).send({ message: "Creator has not created an article!!" });
    }
    findAll(res) {
        const response = this.articlesService.findAll();
        console.log(response);
        if (typeof (response) === "string") {
            return res.status(200).json(response);
        }
    }
    findOne(id, res) {
        const result = this.articlesService.findOne(id);
        if (!result) {
            return res.status(500).send({ message: "Error in the server!" });
        }
        return res.status(200).json(result);
    }
    update(id, article) {
        return this.articlesService.update(id, article);
    }
    remove(id) {
        return this.articlesService.deleteOne(id);
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/:id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findCreators", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ArticlesController.prototype, "remove", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, common_1.Controller)("articles"),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map