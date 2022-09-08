
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserDocument } from '../user/entities/user.schema';
import { LoginRequestDto } from './dto';


@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService) {}

  async validateUser(loginDto: LoginRequestDto): Promise<UserDocument> {
    const user = await this.usersService.findOne({ email: loginDto.email })

    if (user && (await user.comparePassword(loginDto.password))) {
      return user
    }

    return null
  }


}
