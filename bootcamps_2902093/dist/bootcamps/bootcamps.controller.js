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
exports.BootcampsController = void 0;
const common_1 = require("@nestjs/common");
const bootcamps_service_1 = require("./bootcamps.service");
const create_bootcamp_dto_1 = require("./dto/create-bootcamp.dto");
let BootcampsController = class BootcampsController {
    constructor(bootcampsService) {
        this.bootcampsService = bootcampsService;
    }
    create(body) {
        return this.bootcampsService.create(body);
    }
    findAll() {
        return this.bootcampsService.findAll();
    }
    findOne(id) {
        return this.bootcampsService.findOne(+id);
    }
    update(id, payload) {
        return this.bootcampsService.update(+id, payload);
    }
    remove(id) {
        return this.bootcampsService.remove(+id);
    }
};
exports.BootcampsController = BootcampsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bootcamp_dto_1.CreateBootcampDto]),
    __metadata("design:returntype", void 0)
], BootcampsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BootcampsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BootcampsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BootcampsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BootcampsController.prototype, "remove", null);
exports.BootcampsController = BootcampsController = __decorate([
    (0, common_1.Controller)('bootcamps'),
    __metadata("design:paramtypes", [bootcamps_service_1.BootcampsService])
], BootcampsController);
//# sourceMappingURL=bootcamps.controller.js.map