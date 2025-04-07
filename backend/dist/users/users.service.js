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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./schema/users.schema");
const professionals_service_1 = require("./professionals/professionals.service");
const seekers_service_1 = require("./seekers/seekers.service");
let UsersService = class UsersService {
    constructor(UserModel, professionalService, seekerService) {
        this.UserModel = UserModel;
        this.professionalService = professionalService;
        this.seekerService = seekerService;
    }
    async create(user) {
        try {
            const results = await new this.UserModel(user).save();
            if (results) {
                return results;
            }
            throw new Error("User not added!!");
        }
        catch (e) {
            console.log(e);
        }
    }
    async addUserProfessional(userId, userData) {
        try {
            const exists = await this.userExists(userId);
            if (exists) {
                const results = await this.UserModel.findOneAndUpdate({ _id: userId }, { $set: {
                        "role": userData?.role
                    } }, { new: true, runValidators: true });
                if (results) {
                    return await this.professionalService.addUser(userId, userData);
                }
                else {
                    throw new Error("Failed to update the user!!");
                }
            }
            throw new common_1.NotFoundException;
        }
        catch (e) {
            console.log(e);
        }
    }
    async addUserSeeker(userId, userData) {
        try {
            const exists = await this.userExists(userId);
            if (exists) {
                const results = await this.UserModel.findOneAndUpdate({ _id: userId }, { $set: {
                        "role": userData?.role
                    } }, { new: true, runValidators: true });
                if (results) {
                    return await this.seekerService.addUser(userId, userData);
                }
                else {
                    throw new Error("Failed to update the user!!");
                }
            }
            throw new common_1.NotFoundException;
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(email) {
        try {
            return await this.UserModel.findOne({ email: email });
        }
        catch (e) {
            console.log(e);
        }
    }
    async findName(id) {
        try {
            console.log(id);
            const user = await this.UserModel.findOne({ _id: "c246be5e-31c9-4e55-8677-b48f976d06f0" });
            console.log(user);
            if (user) {
                return user.name;
            }
            throw new common_1.NotFoundException;
        }
        catch (e) {
            console.log(e);
        }
    }
    async userExists(userId) {
        try {
            const exists = await this.UserModel.exists({ _id: userId });
            if (exists) {
                return true;
            }
            throw new common_1.NotFoundException;
        }
        catch (e) {
            console.log(e);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        professionals_service_1.ProfessionalService,
        seekers_service_1.SeekerService])
], UsersService);
//# sourceMappingURL=users.service.js.map