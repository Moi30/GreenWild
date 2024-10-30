import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor() { }

    @Get()
    GetAll(): string {
        return "bon garçon";
    }
}
