import { Module } from '@nestjs/common';
import { CloudinaryModule} from '../cloudinary';

import { UsersModel } from './entities';
import { UsersController } from './user.controller';
import { UserService } from './user.service';


@Module({
  imports: [UsersModel,CloudinaryModule],
  controllers: [UsersController],
  providers: [UserService],
  exports:[UserService]
})
export class UsersModule {}
