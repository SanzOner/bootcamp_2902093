import { IsNotEmpty, IsPositive, IsDate, Min, Max } from "class-validator";

export class CreateBootcampDto {
    @IsNotEmpty({ message: "no puede ir vacio" })
    readonly name: string;

    readonly phone: number;
    readonly address: string;
    readonly topics: string;

    @IsNotEmpty()
    @IsPositive()
    @Min(1, { message: "La calificación promedio debe ser al menos 1" })
    @Max(10, { message: "La calificación promedio no puede ser mayor que 10" })
    readonly averageRating: number;

    @IsDate({ message: "la fecha no puede ir vacía" })
    readonly createdAt: Date;
}
