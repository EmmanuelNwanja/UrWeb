import { IsNotEmpty, IsString, IsOptional, IsEnum, IsArray } from 'class-validator';

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsNotEmpty()
  @IsEnum(['article', 'tutorial', 'video', 'program', 'analysis'])
  type: string;

  @IsNotEmpty()
  @IsString()
  pathway: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  topics?: string[];
}
