import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon";
    }
}
