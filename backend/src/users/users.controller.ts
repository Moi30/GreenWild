import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UsersController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon";
    }
}
