import { IsNotEmpty, IsString, IsOptional, IsEnum } from 'class-validator';

export class CreatePathwayDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsNotEmpty()
  @IsEnum(['Technical', 'Non-Technical'])
  category: string;
}
