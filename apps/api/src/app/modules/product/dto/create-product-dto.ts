import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested } from 'class-validator';



class category {
  @IsNotEmpty()
  @IsString()
 categoryName: string;
}

class brand{
  @IsString()
  name:string
}
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
  readonly price:number

  // @ApiProperty()
  // @Type(()=>category)
  // @ValidateNested()
  // category:category

  // @ApiProperty()
  // @Type(()=>brand)
  // @ValidateNested()
  // brand:brand
  
  @ApiProperty()
  ProductImgs:string[]

  @ApiProperty()
  @IsNotEmpty()
  readonly stock:number

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly size:string
}
