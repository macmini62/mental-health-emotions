"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRegisteredUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_registered_user_dto_1 = require("./create-registered-user.dto");
class UpdateRegisteredUserDto extends (0, mapped_types_1.PartialType)(create_registered_user_dto_1.CreateRegisteredUserDto) {
}
exports.UpdateRegisteredUserDto = UpdateRegisteredUserDto;
//# sourceMappingURL=update-registered-user.dto.js.map