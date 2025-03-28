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
exports.TopicsController = void 0;
const common_1 = require("@nestjs/common");
const topics_service_1 = require("./topics.service");
const auth_decorator_1 = require("../decorators/auth.decorator");
let TopicsController = class TopicsController {
    constructor(topicService) {
        this.topicService = topicService;
    }
    async add(data, res) {
        const topic = await this.topicService.createTopic(data);
        if (topic !== undefined) {
            res.status(201).send(topic);
        }
        else {
            res.status(500).send({ message: "Failed to add the topic!!" });
        }
    }
    async fetch(s, res) {
        const topics = await this.topicService.fetchTopics(s);
        if (topics) {
            res.send(topics);
        }
        else {
            res.status(500);
        }
    }
    async fetchTopics(data, userId, res) {
        const topics = await this.topicService.fetchUserTopics(data, userId);
        if (topics) {
            res.status(200).send(topics);
        }
        else {
            res.status(500);
        }
    }
};
exports.TopicsController = TopicsController;
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)(""),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], TopicsController.prototype, "add", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Get)(""),
    __param(0, (0, common_1.Query)("s")),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TopicsController.prototype, "fetch", null);
__decorate([
    (0, auth_decorator_1.SkipAuth)(),
    (0, common_1.Post)("/:id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)("id")),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, String, Object]),
    __metadata("design:returntype", Promise)
], TopicsController.prototype, "fetchTopics", null);
exports.TopicsController = TopicsController = __decorate([
    (0, common_1.Controller)("topics"),
    __metadata("design:paramtypes", [topics_service_1.TopicsService])
], TopicsController);
//# sourceMappingURL=topics.controller.js.map