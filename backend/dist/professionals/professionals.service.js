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
exports.ProfessionalsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const professional_schema_1 = require("./schema/professional.schema");
const mongoose_2 = require("mongoose");
let ProfessionalsService = class ProfessionalsService {
    constructor(ProfessionalModel) {
        this.ProfessionalModel = ProfessionalModel;
    }
    async addProf(data) {
        console.log("data", data);
        return new this.ProfessionalModel(data).save();
    }
    async getProf(profId) {
        console.log("profId:", profId);
        const prof = await this.ProfessionalModel.findById({ _id: profId });
        console.log("prof:", prof);
        return prof;
    }
    async getAllProfs() {
        const profs = [];
        for await (const p of this.ProfessionalModel.find()) {
            profs.push(p);
        }
        console.log(profs);
        return profs;
    }
    async deleteProf(profId) {
        const profs = await this.ProfessionalModel.deleteOne({ _id: profId });
        console.log(profs);
        return profs;
    }
    async updateProf(profId, data) {
        return await this.ProfessionalModel.updateOne({ _id: profId }, { ...data });
    }
};
exports.ProfessionalsService = ProfessionalsService;
exports.ProfessionalsService = ProfessionalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(professional_schema_1.Professional.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProfessionalsService);
//# sourceMappingURL=professionals.service.js.map