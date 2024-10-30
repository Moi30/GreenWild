import { Controller, Get, Post, Body, Param, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Walks } from './entities/walk.entity';
import { WalksService } from './walks.service';
import { WalkState } from './enum/walk-state.enum';

@Controller('walks')
export class WalksController {
    constructor(
        @Inject(WalksService)
        private readonly walksService: WalksService,
    ) { }

    @Get()
    GetAll(): Walks[] {
        let walks: Walks[] = [];

        this.walksService.findAll().then(response => {
            walks = response;
        });
        return walks;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Post()
    async create(@Body() walk: Walks): Promise<Walks> {
        let returnedWalk: Walks = undefined;

        try {
            returnedWalk = await this.walksService.create(walk);
        }
        catch (error) {
            console.error(error);
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: 'This is a custom message',
            }, HttpStatus.BAD_REQUEST, {
                cause: error
            });
        }

        return walk;
    }
}
