import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Waste } from './entities/waste.entity';
import { WastesService } from './wastes.service';
import { WastesController } from './wastes.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Waste])],
    controllers: [WastesController],
    providers: [WastesService],
})
export class WastesModule { };