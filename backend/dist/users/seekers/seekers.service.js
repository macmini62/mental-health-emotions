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
exports.SeekerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const seeker_schema_1 = require("./schema/seeker.schema");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let SeekerService = class SeekerService {
    constructor(SeekerModel) {
        this.SeekerModel = SeekerModel;
    }
    async addUser(data) {
        try {
            const userId = (0, uuid_1.v4)();
            const exUserId = await this.SeekerModel.exists({ _id: data.id });
            if (!exUserId) {
                const seeker = await new this.SeekerModel({
                    _id: userId,
                    userId: data.id,
                    ...data
                }).save();
                if (!seeker) {
                    throw new Error("Error creating seeker!");
                }
                return userId;
            }
            else {
                throw new Error("Seeker profile exists!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUser(userId) {
        console.log("userId:", userId);
        const seeker = await this.SeekerModel.findOne({ userId: userId });
        console.log("seeker:", seeker);
        return seeker;
    }
    async getAllUsers() {
        const users = [];
        for await (const p of this.SeekerModel.find()) {
            users.push(p);
        }
        console.log(users);
        return users;
    }
    async deleteUser(userId) {
        const users = await this.SeekerModel.deleteOne({ _id: userId });
        console.log(users);
        return users;
    }
    async updateUser(userId, data) {
        console.log(userId);
        console.log(data);
        return await this.SeekerModel.updateOne({ userId: userId }, { ...data });
    }
    async verifyUser(data) {
        try {
            console.log(data);
            const userId = await this.SeekerModel.exists({ ...data });
            console.log(userId);
            if (!userId) {
                throw new Error();
            }
            else {
                return userId;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.SeekerService = SeekerService;
exports.SeekerService = SeekerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(seeker_schema_1.Seeker.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SeekerService);
//# sourceMappingURL=seekers.service.js.map