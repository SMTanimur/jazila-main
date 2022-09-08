/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Req,
  Request,
  Res,
  Response,
  UseGuards,
} from '@nestjs/common';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { LocalAuthGuard } from './guards/local.auth.guard';
import { AuthService } from './auth.service';
import { LoginRequestDto } from './dto/login.user.dto';
import { UserService } from '../user/user.service';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ServerConfig } from '../../configs/server.config';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) {}

  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: 200,
    description: 'Logged in successfully.',
  })
  @Post('login')
  @HttpCode(200)
  async login(@Request() req: any, @Body() _loginRequestDto: LoginRequestDto) {
    return req.user;
  }

  @Get('me')
  @UseGuards(AuthenticatedGuard)
  userProfile(@Req() req: any) {
    return req.user
  }

  @ApiOperation({ summary: 'user' })
  @ApiOkResponse({
    description: 'Logout successfully.',
  })
  @Delete('logout')
  async logout(@Req() req, @Res() res) {
    await req.session.destroy(() => null);
    await res.clearCookie('jazila_sid');
    await req.logout(() => null);
    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
