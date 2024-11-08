import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

// Definición del Enum para los niveles de habilidad
export enum MinimumSkill {
    Beginner = 'Beginner',
    Intermediate = 'Intermediate',
    Advance = 'Advance',
}

@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 100 })
    title: string;

    @Column('varchar', { length: 60 })
    description: string;

    @Column({
        type: 'tinyint',
        nullable: true,
        default: 4
    })
    weeks: number;

    @Column({
        type: 'decimal',
        nullable: true
    })
    tuition: number;

    @Column({
        type: 'enum',
        enum: MinimumSkill, // Uso del enum de skill mínimo
        default: MinimumSkill.Beginner
    })
    minimum_skill: MinimumSkill;

    @Column({
        type: 'timestamp',
        name: 'createAt',
        default: () => 'CURRENT_TIMESTAMP'
    })
    createAt: Date;

        // relacion con Bootcamp
    @ManyToOne(() => Bootcamp, (bootcamp) => bootcamp.courses)
    bootcamp: Bootcamp;
    

}

