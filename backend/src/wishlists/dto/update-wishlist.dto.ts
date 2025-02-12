import { IsArray, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class UpdateWishlistDto {
  @IsString()
  @Length(0, 250)
  @IsOptional()
  name: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  image: string;

  @IsArray()
  @IsOptional()
  itemsId: number[];

  @Length(1, 1500)
  @IsOptional()
  description: string;
}
