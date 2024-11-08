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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const course_entity_1 = require("./entities/course.entity");
let CoursesService = class CoursesService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    create(payload) {
        const newCourse = this.courseRepository.create(payload);
        return this.courseRepository.save(newCourse);
    }
    findAll() {
        return this.courseRepository.find();
    }
    findOne(id) {
        return this.courseRepository.findOneBy({ id });
    }
    async update(id, payload) {
        const updCourses = await this.courseRepository.findOneBy({ id });
        return this.courseRepository.merge(updCourses, payload);
    }
    async remove(id) {
        const delCourse = await this.courseRepository.findOneBy({ id });
        this.courseRepository.delete(delCourse);
        return delCourse;
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(course_entity_1.Course)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CoursesService);
//# sourceMappingURL=courses.service.js.map