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
let ProfessionalService = class ProfessionalService {
    constructor(ProfessionalModel) {
        this.ProfessionalModel = ProfessionalModel;
    }
    async addUser(data) {
        try {
            const results = await new this.ProfessionalModel(data).save();
            if (!results) {
                throw new Error("Error creating professional!");
            }
            return results;
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
        try {
            console.log(userId);
            console.log(data);
            return await this.ProfessionalModel.findOneAndUpdate({ userId: userId }, { $set: { ...data } }, { runValidators: true, new: false });
        }
        catch (e) {
            console.log(e);
        }
    }
    async userExists(id) {
        try {
            const results = await this.ProfessionalModel.exists({ _id: id });
            console.log(results);
            if (results) {
                return false;
            }
            else {
                return true;
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