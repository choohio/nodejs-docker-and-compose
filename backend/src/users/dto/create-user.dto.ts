import { Length, IsUrl, IsEmail, IsOptional } from 'class-validator';

export class CreateUserDto {
  @Length(2, 30)
  username: string;

  @IsOptional()
  @Length(2, 200)
  about?: string;

  @IsOptional()
  @IsUrl()
  avatar?: string;

  @IsEmail()
  email: string;

  @Length(4)
  password: string;
}