import { Course } from "src/courses/entities/course.entity";
import { Review } from "src/reviews/entities/review.entity";
import {Entity,
     OneToMany,
     PrimaryGeneratedColumn } from "typeorm";

import { Column } from "typeorm";

@Entity('bootcamps')
export class Bootcamp {
    @PrimaryGeneratedColumn()
    id: number

    @Column('int')
    phone:number

    @Column('varchar', {length: 20})
    name: string

    @Column('varchar', {length: 100})
    address: string
    
    @Column('text')
    topics: string

    @Column('double')
    averageRating: number

    @Column({type: 'timestamp',
        name: 'createdAt',
        default: () => 'CURRENT_TIMESTAMP'
    })


    createdAt:Date;
    @OneToMany(()=> Course,(course)=>course.bootcamp)
    courses: Course[]

    @OneToMany(() => Review, (review) => review.bootcamp)
    reviews: Review[]; 
}

