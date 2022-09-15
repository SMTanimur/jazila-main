import { ApiProperty} from '@nestjs/swagger';
import {   IsOptional, IsString, MinLength } from 'class-validator';


export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @ApiProperty() 
  avatar: string;

  @IsOptional()
  @IsString()
  @ApiProperty({required:true})
  readonly name: string;

  @IsOptional()
  @IsString()
  @MinLength(8,{message:'password should be min 8 character'})
  @ApiProperty({required:true})
  password: string;
}
