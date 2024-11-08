import {IsNotEmpty, IsAlpha, IsInt, IsPositive, IsString, Min, Max, IsDate, Length } from "class-validator";

export class CreateCourseDto {
    


    @IsNotEmpty()
    @Length(3, 100)
    readonly title: string;

    @IsNotEmpty()
    @Length(10, 500)
    readonly description: string;

    @IsNotEmpty()
    @IsInt()
    readonly weeks: number;

    @IsNotEmpty()
    @IsPositive()
    readonly tuition: number;


    readonly minimumSkill: string;

    @IsNotEmpty()
    readonly createdAt: Date;

}
