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
exports.VideosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const video_schema_1 = require("./schema/video.schema");
const mongoose_2 = require("mongoose");
const professionals_service_1 = require("../../users/professionals/professionals.service");
const seekers_service_1 = require("../../users/seekers/seekers.service");
const users_service_1 = require("../../users/users.service");
const topics_service_1 = require("../../topics/topics.service");
let VideosService = class VideosService {
    constructor(videoModel, professionalService, seekerService, userService, topicService) {
        this.videoModel = videoModel;
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
                    comments: 0
                }
            };
            console.log(d);
            return await new this.videoModel(d).save();
        }
        catch (e) {
            console.log(e);
        }
    }
    async findAll(p) {
        try {
            const total = p * 5;
            const videos = new Array();
            for await (const v of this.videoModel.find()) {
                videos.push(v);
            }
            return videos.slice(0, total);
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(id) {
        try {
            let a = await this.videoModel.findOne({ _id: id });
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
                throw new Error("No video found with the id!!");
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
            let videos = Array();
            for (let i = 0; i < creators.length; i++) {
                if (await this.professionalService.userExists(creators[i])) {
                    const video = await this.videoModel.find({ creatorId: creators[i] });
                    videos = [...video];
                }
            }
            return videos.slice(0, total);
        }
        catch (e) {
            console.log(e);
        }
    }
    async findVideoTags(tagId, p) {
        try {
            const videos = new Array();
            for (let i = 0; i < p; i++) {
                for await (const a of this.videoModel.find({ tags: tagId })) {
                    videos.push(a);
                }
            }
            return videos;
        }
        catch (e) {
            console.log(e);
        }
    }
    async update(id, video) {
        try {
            const a = this.videoModel.findById({ id: id });
            if (a) {
                const results = this.videoModel.findByIdAndUpdate({ _id: id }, video);
                if (results !== null) {
                    return results;
                }
                else {
                    throw new Error("Video was not updated");
                }
            }
            else {
                throw new Error("No video found with the id!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteOne(id) {
        try {
            const results = this.videoModel.deleteOne({ id: id });
            if (results !== null) {
                return true;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.VideosService = VideosService;
exports.VideosService = VideosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(video_schema_1.Video.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        professionals_service_1.ProfessionalService,
        seekers_service_1.SeekerService,
        users_service_1.UsersService,
        topics_service_1.TopicsService])
], VideosService);
//# sourceMappingURL=videos.service.js.map