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
exports.SeekerSchema = exports.Seeker = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
let Seeker = class Seeker {
};
exports.Seeker = Seeker;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, default: uuid_1.v4 }),
    __metadata("design:type", String)
], Seeker.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Seeker.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: String, default: uuid_1.v4 },
            profileURL: { type: String },
            nickname: { type: String },
            imageURL: { type: String }
        }
    }),
    __metadata("design:type", Object)
], Seeker.prototype, "profile", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Seeker.prototype, "topics", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Seeker.prototype, "following", void 0);
exports.Seeker = Seeker = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Seeker);
exports.SeekerSchema = mongoose_1.SchemaFactory.createForClass(Seeker);
//# sourceMappingURL=seeker.schema.js.map