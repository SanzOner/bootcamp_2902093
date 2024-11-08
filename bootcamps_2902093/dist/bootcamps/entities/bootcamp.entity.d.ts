import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
export declare class Bootcamp {
    id: number;
    phone: number;
    name: string;
    address: string;
    topics: string;
    averageRating: number;
    createdAt: Date;
    courses: Course[];
    reviews: Review[];
}
