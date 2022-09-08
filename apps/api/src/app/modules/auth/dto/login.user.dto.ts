import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty } from 'class-validator'

export class LoginRequestDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  password: string
}
