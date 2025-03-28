"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppMiddleware = void 0;
const common_1 = require("@nestjs/common");
let AppMiddleware = class AppMiddleware {
    use(req, res, next) {
        if (req.originalUrl === "/users/create") {
            if (req.body.user === "professionals") {
                res.send(req.body);
                res.redirect("/professionals/create");
            }
            else if (req.body.user === "seekers") {
                res.redirect("/seekers");
            }
            else {
                res.status(400).send({ message: "Invalid user role!!" });
            }
        }
        else {
            next();
        }
    }
};
exports.AppMiddleware = AppMiddleware;
exports.AppMiddleware = AppMiddleware = __decorate([
    (0, common_1.Injectable)()
], AppMiddleware);
//# sourceMappingURL=app.middleware.js.map