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
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor(UserModel) {
        this.UserModel = UserModel;
    }
    async create(user) {
        try {
            const id = (0, uuid_1.v4)();
            const results = await new this.UserModel({ _id: id, ...user }).save();
            console.log(results);
            if (!results) {
                throw new Error("User not added!!");
            }
            return results;
        }
        catch (e) {
            console.log(e);
        }
    }
    async findOne(email) {
        try {
            const user = await this.UserModel.findOne({ email: email });
            return user;
        }
        catch (e) {
            console.log(e);
        }
    }
    async userExists(userId) {
        try {
            const exists = await this.UserModel.exists({ _id: userId });
            console.log(exists);
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
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map