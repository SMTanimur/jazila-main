import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString,  MinLength } from 'class-validator';
export class CreateCategoryDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4, { message: 'The ming length of category name is 4 characters' })
 
  readonly categoryName: string;
  
  slug:string
  
  @ApiProperty({type:'string',format:'binary'})
  image: string
}

