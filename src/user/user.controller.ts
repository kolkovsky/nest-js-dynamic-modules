import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.service';
import { ManagerService } from '../common/manager.service';

@Controller('users')
export class UserController {
  constructor(private readonly managerService: ManagerService) {}

  @Get('/:id')
  public async getUserInfo(@Param('id') userId: string) {
    console.log(userId);
  }

  @Post('/new')
  public async createNewUser(@Body() data: Omit<User, 'id'>) {
    console.log(data);
  }
}
