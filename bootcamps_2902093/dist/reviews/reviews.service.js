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
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const review_entity_1 = require("./entities/review.entity");
let ReviewsService = class ReviewsService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    create(payload) {
        const newReview = this.reviewRepository.create(payload);
        return this.reviewRepository.save(newReview);
    }
    findAll() {
        return this.reviewRepository.find();
    }
    findOne(id) {
        return this.reviewRepository.findOneBy({ id });
    }
    async update(id, payload) {
        const updReview = await this.reviewRepository.findOneBy({ id });
        return this.reviewRepository.merge(updReview, payload);
    }
    async remove(id) {
        const delReview = await this.reviewRepository.findOneBy({ id });
        this.reviewRepository.delete(delReview);
        return delReview;
    }
};
exports.ReviewsService = ReviewsService;
exports.ReviewsService = ReviewsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ReviewsService);
//# sourceMappingURL=reviews.service.js.map