import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Walks } from './entities/walk.entity';
import { WalksService } from './walks.service';
import { WalksController } from './walks.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Walks])],
    controllers: [WalksController],
    providers: [WalksService],
})
export class WalksModule { };