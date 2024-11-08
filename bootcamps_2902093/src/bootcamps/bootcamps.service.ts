import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BootcampsService {
  constructor(
    @InjectRepository(Bootcamp)
    private bootcampRepository: Repository<Bootcamp>,
  ) {}

  // Crear un nuevo bootcamp
  async create(body: CreateBootcampDto) {
    const newBootcamp = this.bootcampRepository.create(body);
    return this.bootcampRepository.save(newBootcamp);
  }

  // Obtener todos los bootcamps
  findAll() {
    return this.bootcampRepository.find();
  }

  // Obtener un bootcamp por su ID
  async findOne(id: number) {
    const bootcamp = await this.bootcampRepository.findOneBy({ id });
    if (!bootcamp) {
      throw new NotFoundException(`No existe el bootcamp con ID ${id}`);
    }
    return bootcamp;
  }

  // Actualizar un bootcamp por su ID
  async update(id: number, body: UpdateBootcampDto) {
    // Buscar el bootcamp por ID
    const bootcamp = await this.bootcampRepository.findOneBy({ id });
    if (!bootcamp) {
      throw new NotFoundException(`No existe el bootcamp con ID ${id}`);
    }

    // Hacer la actualización
    this.bootcampRepository.merge(bootcamp, body);
    return this.bootcampRepository.save(bootcamp);
  }

  // Eliminar un bootcamp por su ID
  async remove(id: number) {
    const bootcamp = await this.bootcampRepository.findOneBy({ id });
    if (!bootcamp) {
      throw new NotFoundException(`No existe el bootcamp con ID ${id}`);
    }

    // Eliminar el bootcamp
    await this.bootcampRepository.delete(id);
    return bootcamp;
  }
}
