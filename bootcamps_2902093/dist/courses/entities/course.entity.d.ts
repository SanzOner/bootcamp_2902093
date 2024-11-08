import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
export declare enum MinimumSkill {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advance = "Advance"
}
export declare class Course {
    id: number;
    title: string;
    description: string;
    weeks: number;
    tuition: number;
    minimum_skill: MinimumSkill;
    createAt: Date;
    bootcamp: Bootcamp;
}
