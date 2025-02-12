import {
  IsUrl,
  Length,
  IsString,
  IsNumber,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateWishDto {
  @IsString()
  @Length(1, 250)
  name: string;

  @IsString()
  @IsUrl()
  link: string;

  @IsString()
  @IsUrl()
  image: string;

  @IsNumber()
  @Min(1)
  price: number;

  @IsString()
  @Length(1, 1024)
  @IsOptional()
  description: string;
}
