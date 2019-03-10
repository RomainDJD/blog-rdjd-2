import { Body, Controller, Get, Param, Post, Put, HttpStatus, Delete } from '@nestjs/common';
import { ApiResponse, ApiUseTags, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';
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
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User trouvé et retourné',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User non trouvé :/',
  })
  async getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Utilisateur mis à jour et retourné,
  })
  async modifyById(@Param('id') id: string, @Body() dto: Partial<User>) {
    return this.userService.setUser(id, dto);
  }
  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  @Post('add')
  async addById(@Param('id') id: string, @Body() dto: Partial<User>) {
    return this.userService.addUser(id, dto);
  }
}
