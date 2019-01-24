import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { User } from './entity/user.entity';
import { UserService } from './user.service';

// POST = creation donnee
// PUT = modif donnee
// save creer et update = Si trouve pas en base il creer

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @Put(':id')
  async modifyById(@Param('id') id: string, @Body() dto: Partial<User>) {
    return this.userService.setUser(id, dto);
  }
  @Post('add')
  async addById(@Param('id') id: string, @Body() dto: Partial<User>) {
    return this.userService.addUser(id, dto);
  }
 

}

