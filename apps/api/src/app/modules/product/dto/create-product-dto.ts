/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiProperty, PartialType } from '@nestjs/swagger';
import {  IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(10)
  readonly descriptions: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ type: 'string' })
  category: any;

  @ApiProperty({ type: 'string' })
  brand: any;

  @ApiProperty({ type: 'string', format: 'binary' })
  productImgs: string[];

  @ApiProperty()
  @IsNotEmpty()
  readonly stocks: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly size: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto){}