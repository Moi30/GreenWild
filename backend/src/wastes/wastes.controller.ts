import { Controller, Get } from '@nestjs/common';

@Controller('wastes')
export class WastesController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon";
    }
}
