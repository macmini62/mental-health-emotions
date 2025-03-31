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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSchema = exports.Video = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
class Video {
}
exports.Video = Video;
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: uuid_1.v4, unique: true }),
    __metadata("design:type", String)
], Video.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "creatorId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Video.prototype, "tags", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], Video.prototype, "duration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Video.prototype, "languages", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "thumbnail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "license", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "fileFormat", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "resolution", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Video.prototype, "bitrate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {}
    }),
    __metadata("design:type", Object)
], Video.prototype, "technicalMetadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {}
    }),
    __metadata("design:type", Object)
], Video.prototype, "administrativeMetadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            feedback: {
                likes: Number,
                comments: Number
            }
        },
        required: true
    }),
    __metadata("design:type", Object)
], Video.prototype, "feedback", void 0);
exports.VideoSchema = mongoose_1.SchemaFactory.createForClass(Video);
//# sourceMappingURL=video.schema.js.map