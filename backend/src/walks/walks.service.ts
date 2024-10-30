
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Walks } from './entities/walk.entity';
import { WalkState } from './enum/walk-state.enum';

@Injectable()
export class WalksService {
    constructor(
        @InjectRepository(Walks)
        private walksRepository: Repository<Walks>,
    ) { }

    create(walk: Walks): Promise<Walks> {
        return this.walksRepository.save(walk);
    }

    update(walk: Walks): Promise<Walks> {
        return this.walksRepository.save(walk);
    }

    findAll(): Promise<Walks[]> {
        return this.walksRepository.find();
    }

    findOne(id: number): Promise<Walks | null> {
        return this.walksRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.walksRepository.delete(id);
    }
}