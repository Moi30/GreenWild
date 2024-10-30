
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Wastes } from './entities/waste.entity';

@Injectable()
export class WastesService {
    constructor(
        @InjectRepository(Wastes)
        private wastesRepository: Repository<Wastes>,
    ) { }

    findAll(): Promise<Wastes[]> {
        return this.wastesRepository.find();
    }

    findOne(id: number): Promise<Wastes | null> {
        return this.wastesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.wastesRepository.delete(id);
    }
}