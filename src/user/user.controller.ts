import { Body, Controller, Get, Param, Delete } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
