
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Waste } from './entities/waste.entity';

@Injectable()
export class WastesService {
    constructor(
        @InjectRepository(Waste)
        private wastesRepository: Repository<Waste>,
    ) { }

    findAll(): Promise<Waste[]> {
        return this.wastesRepository.find();
    }

    findOne(id: number): Promise<Waste | null> {
        return this.wastesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.wastesRepository.delete(id);
    }
}