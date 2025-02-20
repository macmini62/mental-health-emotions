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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const article_schema_1 = require("./schema/article.schema");
const mongoose_2 = require("mongoose");
const professionals_service_1 = require("../../users/professionals/professionals.service");
let ArticlesService = class ArticlesService {
    constructor(articleModel, professionalService) {
        this.articleModel = articleModel;
        this.professionalService = professionalService;
    }
    async create(data) {
        try {
            return await new this.articleModel(data).save();
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll() {
        try {
            const a = this.articleModel.find();
            if (a !== null) {
                return a;
            }
            else {
                throw new Error("No articles found!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        try {
            const a = this.articleModel.findOne({ id: id });
            if (a !== null) {
                return a;
            }
            else {
                throw new Error("No article found with the id!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async findCreators(creatorId) {
        try {
            if (await this.professionalService.userExists(creatorId)) {
                const articles = Array();
                for await (const a of this.articleModel.find({ creatorId: creatorId })) {
                    articles.push(a);
                }
                return articles;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, article) {
        try {
            const a = this.articleModel.findById({ id: id });
            if (a) {
                const results = this.articleModel.findByIdAndUpdate({ id: id }, article);
                if (results !== null) {
                    return results;
                }
                else {
                    throw new Error("Article was not updated");
                }
            }
            else {
                throw new Error("No article found with the id!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteOne(id) {
        try {
            const results = this.articleModel.deleteOne({ id: id });
            if (results !== null) {
                return true;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.ArticlesService = ArticlesService;
exports.ArticlesService = ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(article_schema_1.Article.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        professionals_service_1.ProfessionalService])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map