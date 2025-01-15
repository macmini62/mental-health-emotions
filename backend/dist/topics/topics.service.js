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
exports.TopicsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const topic_schema_1 = require("./schema/topic.schema");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let TopicsService = class TopicsService {
    constructor(TopicModel = (mongoose_2.Model)) {
        this.TopicModel = TopicModel;
    }
    async createTopic(data) {
        try {
            const topicId = (0, uuid_1.v4)();
            const exTopic = await this.TopicModel.exists({ name: data.name });
            if (exTopic === null) {
                const topic = await new this.TopicModel({ _id: topicId, ...data }).save();
                return topic;
            }
            else {
                throw new Error("Topic already exits!!");
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async fetchTopics() {
        try {
            const topics = [];
            for await (const p of this.TopicModel.find()) {
                topics.push(p);
            }
            console.log(topics);
            return topics;
        }
        catch (err) {
            console.log(err);
        }
    }
};
exports.TopicsService = TopicsService;
exports.TopicsService = TopicsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(topic_schema_1.Topic.name)),
    __metadata("design:paramtypes", [Object])
], TopicsService);
//# sourceMappingURL=topics.service.js.map