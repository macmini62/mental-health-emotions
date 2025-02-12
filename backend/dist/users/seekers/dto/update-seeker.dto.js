"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeekerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_seeker_dto_1 = require("./create-seeker.dto");
class UpdateSeekerDto extends (0, mapped_types_1.PartialType)(create_seeker_dto_1.CreateSeekerDto) {
}
exports.UpdateSeekerDto = UpdateSeekerDto;
//# sourceMappingURL=update-seeker.dto.js.map