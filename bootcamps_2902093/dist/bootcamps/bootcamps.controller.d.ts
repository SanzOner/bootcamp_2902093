import { BootcampsService } from './bootcamps.service';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
export declare class BootcampsController {
    private readonly bootcampsService;
    constructor(bootcampsService: BootcampsService);
    create(body: CreateBootcampDto): Promise<import("./entities/bootcamp.entity").Bootcamp>;
    findAll(): Promise<import("./entities/bootcamp.entity").Bootcamp[]>;
    findOne(id: string): Promise<import("./entities/bootcamp.entity").Bootcamp>;
    update(id: string, payload: any): Promise<import("./entities/bootcamp.entity").Bootcamp>;
    remove(id: string): Promise<import("./entities/bootcamp.entity").Bootcamp>;
}
