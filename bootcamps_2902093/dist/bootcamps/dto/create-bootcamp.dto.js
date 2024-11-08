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
exports.CreateBootcampDto = void 0;
const class_validator_1 = require("class-validator");
class CreateBootcampDto {
}
exports.CreateBootcampDto = CreateBootcampDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "no puede ir vacio" }),
    __metadata("design:type", String)
], CreateBootcampDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.Min)(1, { message: "La calificación promedio debe ser al menos 1" }),
    (0, class_validator_1.Max)(10, { message: "La calificación promedio no puede ser mayor que 10" }),
    __metadata("design:type", Number)
], CreateBootcampDto.prototype, "averageRating", void 0);
__decorate([
    (0, class_validator_1.IsDate)({ message: "la fecha no puede ir vacía" }),
    __metadata("design:type", Date)
], CreateBootcampDto.prototype, "createdAt", void 0);
//# sourceMappingURL=create-bootcamp.dto.js.map