import { UserService } from './user.service';
import { Body, Controller, Delete, Get, HttpCode, Param, Post} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('user')

export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiTags('User')
  @Post('register')
  @HttpCode(201)
  @ApiOperation({ summary: 'Register a new account' })
  @ApiResponse({
    status: 201,
    description: 'User has been created successfully',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }


  @Get()
  findAll() {
    return this.userService.findAll()
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findByUsername(username)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }

}
