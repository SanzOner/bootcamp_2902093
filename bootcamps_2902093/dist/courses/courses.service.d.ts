import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
export declare class CoursesService {
    private courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(payload: any): Promise<Course[]>;
    findAll(): Promise<Course[]>;
    findOne(id: number): Promise<Course>;
    update(id: number, payload: any): Promise<Course>;
    remove(id: number): Promise<Course>;
}
