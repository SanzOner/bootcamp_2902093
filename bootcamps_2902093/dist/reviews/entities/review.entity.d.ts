import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
export declare class Review {
    id: number;
    title: string;
    comment: string;
    rating: number;
    bootcamp: Bootcamp;
}
