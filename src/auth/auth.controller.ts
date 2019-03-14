import { Body, Controller, Post, UsePipes, HttpStatus } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUseTags,ApiNotFoundResponse, ApiResponse,
} from '@nestjs/swagger';
import { User } from '../user/entity/user.entity';
import { FormatEmail } from '../user/pipes/validate-email.pipe';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { SignInDto } from './dto/sign-in.dto';

@ApiUseTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User trouvé et retourné',
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User non trouvé :/',
  })
  login(@Body() payload: SignInDto): Promise<string> {
    return this.authService.signIn(payload.email, payload.password);
  }

  @Post('register')
  @ApiCreatedResponse({
    description: 'Utilisateur inséré en base.',
  })
  @ApiBadRequestResponse({
    description: 'Requête mal formée.',
  })
  @UsePipes(FormatEmail)
  async register(@Body() registerDto: RegisterDto) {
    // à faire
  }
}
