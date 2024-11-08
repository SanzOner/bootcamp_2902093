import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(payload: any): Promise<User[]>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, payload: any): Promise<User>;
    remove(id: number): Promise<User>;
}
