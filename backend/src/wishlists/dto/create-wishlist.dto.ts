import { IsArray, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateWishlistDto {
  @IsString()
  @Length(0, 250)
  name: string;

  @IsString()
  @IsUrl()
  image: string;

  @IsArray()
  itemsId: number[];

  @Length(1, 1500)
  @IsOptional()
  description: string;
}
