import { ApiModelProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { UserCategory } from '../../user/titre/user-category.enum';

export class RegisterDto {
  @IsBoolean()
  @IsDefined()
  @ApiModelProperty()
  readonly admin: boolean;

  @IsDefined()
  @ApiModelProperty()
  readonly avatar: ArrayBuffer;

  @IsEmail()
  @IsDefined()
  @ApiModelProperty()
  readonly email: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  readonly firstName: string;

  
  @IsString()
  @IsDefined()
  @ApiModelProperty()
  readonly lastName: string;

  @IsString()
  @IsDefined()
  @ApiModelProperty()
  readonly mobilePhone: string;

  @IsBoolean()
  @IsDefined()
  @ApiModelProperty()
  readonly isAuthor: boolean;
 
  @IsDefined()
  @ApiModelProperty()
  readonly category: UserCategory;

  @IsNotEmpty()
  @IsDefined()
  @ApiModelProperty()
  readonly password: string;
}
