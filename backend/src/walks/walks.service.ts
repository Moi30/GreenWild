
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Walk } from './entities/walk.entity';

@Injectable()
export class WalksService {
    constructor(
        @InjectRepository(Walk)
        private walksRepository: Repository<Walk>,
    ) { }

    findAll(): Promise<Walk[]> {
        return this.walksRepository.find();
    }

    findOne(id: number): Promise<Walk | null> {
        return this.walksRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.walksRepository.delete(id);
    }
}