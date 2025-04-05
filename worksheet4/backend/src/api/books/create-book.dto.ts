import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  isbn: string;

  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  published_date?: string;

  @IsOptional()
  @IsString()
  publisher?: string;
}
