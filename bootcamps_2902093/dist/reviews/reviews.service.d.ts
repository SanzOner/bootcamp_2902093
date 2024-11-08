import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
export declare class ReviewsService {
    private reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    create(payload: any): Promise<Review[]>;
    findAll(): Promise<Review[]>;
    findOne(id: number): Promise<Review>;
    update(id: number, payload: any): Promise<Review>;
    remove(id: number): Promise<Review>;
}
