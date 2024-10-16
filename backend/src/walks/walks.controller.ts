import { Controller, Get } from '@nestjs/common';

@Controller('walk')
export class WalksController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon walk";
    }
}
