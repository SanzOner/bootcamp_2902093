import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity"; // Importa Bootcamp para la relación

@Entity('reviews')
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    title: string;

    @Column({ type: 'text', nullable: false })
    comment: string;

    @Column({ type: 'tinyint', nullable: false })
    rating: number;

    @ManyToOne(() => Bootcamp, (bootcamp) => bootcamp.reviews)
    bootcamp: Bootcamp; 
}
