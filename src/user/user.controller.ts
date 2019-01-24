import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

    
  @Get(':id')
  async getUser(@Param('id') id: string, @Body() dto: Partial<User>) {
    return this.userService.getUserPartial(id, dto);
  }
}
