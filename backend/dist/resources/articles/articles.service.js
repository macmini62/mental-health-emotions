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
const seekers_service_1 = require("../../users/seekers/seekers.service");
const users_service_1 = require("../../users/users.service");
const topics_service_1 = require("../../topics/topics.service");
let ArticlesService = class ArticlesService {
    constructor(articleModel, professionalService, seekerService, userService, topicService) {
        this.articleModel = articleModel;
        this.professionalService = professionalService;
        this.seekerService = seekerService;
        this.userService = userService;
        this.topicService = topicService;
    }
    async create(data) {
        try {
            const d = {
                ...data,
                stats: {
                    likes: new Array,
                    comments: new Array
                }
            };
            return await new this.articleModel(d).save();
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll(p) {
        try {
            const total = p * 5;
            const articles = new Array();
            for await (const a of this.articleModel.find()) {
                articles.push(a);
            }
            return articles.slice(0, total);
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        try {
            let a = await this.articleModel.findOne({ _id: id });
            if (a !== null) {
                const creator = await this.userService.findName(a.creatorId);
                const tags = await this.topicService.fetchArticleTopics(a.tags);
                if (creator !== null && tags.length > 0) {
                    a.creatorId = creator;
                    a.tags = tags;
                    return a;
                }
                throw new common_1.InternalServerErrorException;
            }
            else {
                throw new Error("No article found with the id!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async findCreators(id, p) {
        try {
            const creators = await this.seekerService.findFollowing(id);
            const total = p * 5;
            let articles = new Array();
            for (let i = 0; i < creators.length; i++) {
                if (await this.professionalService.userExists(creators[i])) {
                    const article = await this.articleModel.find({ creatorId: creators[i] });
                    articles = [...article];
                }
            }
            return articles.slice(0, total);
        }
        catch (e) {
            console.log(e);
        }
    }
    async findArticleTags(tagId, p) {
        try {
            const articles = Array();
            for (let i = 0; i < p; i++) {
                for await (const a of this.articleModel.find({ tags: tagId })) {
                    articles.push(a);
                }
            }
            return articles;
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, article) {
        try {
            const a = this.articleModel.findById({ _id: id });
            if (a) {
                const results = this.articleModel.findByIdAndUpdate({ _id: id }, article);
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
            const results = this.articleModel.deleteOne({ _id: id });
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
        professionals_service_1.ProfessionalService,
        seekers_service_1.SeekerService,
        users_service_1.UsersService,
        topics_service_1.TopicsService])
], ArticlesService);
//# sourceMappingURL=articles.service.js.map