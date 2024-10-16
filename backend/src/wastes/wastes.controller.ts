import { Controller, Get } from '@nestjs/common';

@Controller('waste')
export class WastesController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon";
    }
}
