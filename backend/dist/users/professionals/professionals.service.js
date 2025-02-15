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
exports.ProfessionalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const professional_schema_1 = require("./schema/professional.schema");
const mongoose_2 = require("mongoose");
const uuid_1 = require("uuid");
let ProfessionalService = class ProfessionalService {
    constructor(ProfessionalModel) {
        this.ProfessionalModel = ProfessionalModel;
    }
    async addUser(data) {
        try {
            const userId = (0, uuid_1.v4)();
            const exUserEmail = await this.ProfessionalModel.exists({ email: data.email });
            console.log(exUserEmail);
            if (!exUserEmail) {
                const professional = await new this.ProfessionalModel({ _id: userId, ...data }).save();
                if (!professional) {
                    throw new Error("Error creating professional!");
                }
                return userId;
            }
            else {
                throw new Error("Professional with the email exists!!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUser(email) {
        console.log("email:", email);
        const professional = await this.ProfessionalModel.findById({ email: email });
        console.log("professional:", professional);
        return professional;
    }
    async getAllUsers() {
        const users = [];
        for await (const p of this.ProfessionalModel.find()) {
            users.push(p);
        }
        console.log(users);
        return users;
    }
    async deleteUser(userId) {
        const users = await this.ProfessionalModel.deleteOne({ _id: userId });
        console.log(users);
        return users;
    }
    async updateUser(userId, data) {
        console.log(userId);
        console.log(data);
        return await this.ProfessionalModel.updateOne({ _id: userId }, { ...data });
    }
    async verifyUser(data) {
        try {
            console.log(data);
            const userId = await this.ProfessionalModel.exists({ ...data });
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
exports.ProfessionalService = ProfessionalService;
exports.ProfessionalService = ProfessionalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(professional_schema_1.Professional.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfessionalService);
//# sourceMappingURL=professionals.service.js.map