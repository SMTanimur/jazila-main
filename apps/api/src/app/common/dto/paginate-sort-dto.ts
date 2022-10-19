import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginateDto {
  @IsNotEmpty()
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  skip?: number;

  @IsNotEmpty()
  @ApiPropertyOptional()
  @IsOptional()
  limit?: string

  @ApiPropertyOptional()
  @IsOptional()
  page?: number;


  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  keyword?: string;
}
