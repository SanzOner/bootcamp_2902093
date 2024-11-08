import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Bootcamp } from './entities/bootcamp.entity';
import { Repository } from 'typeorm';
export declare class BootcampsService {
    private bootcampRepository;
    constructor(bootcampRepository: Repository<Bootcamp>);
    create(body: CreateBootcampDto): Promise<Bootcamp>;
    findAll(): Promise<Bootcamp[]>;
    findOne(id: number): Promise<Bootcamp>;
    update(id: number, body: UpdateBootcampDto): Promise<Bootcamp>;
    remove(id: number): Promise<Bootcamp>;
}
