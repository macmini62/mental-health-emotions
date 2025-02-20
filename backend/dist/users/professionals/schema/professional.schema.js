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
exports.ProfessionalSchema = exports.Professional = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const uuid_1 = require("uuid");
let Professional = class Professional {
};
exports.Professional = Professional;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true, default: uuid_1.v4 }),
    __metadata("design:type", String)
], Professional.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ unique: true }),
    __metadata("design:type", String)
], Professional.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Professional.prototype, "profession", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Professional.prototype, "institution", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: String, default: uuid_1.v4 },
            profileURL: { type: String },
            imageURL: { type: String }
        }
    }),
    __metadata("design:type", Object)
], Professional.prototype, "profile", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            _id: { type: String, default: uuid_1.v4 },
            topics: { type: (Array) },
            authored: {
                articles: { type: (Array) },
                videos: { type: (Array) },
                liveSessions: { type: (Array) }
            },
        }
    }),
    __metadata("design:type", Object)
], Professional.prototype, "contents", void 0);
exports.Professional = Professional = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Professional);
exports.ProfessionalSchema = mongoose_1.SchemaFactory.createForClass(Professional);
//# sourceMappingURL=professional.schema.js.map