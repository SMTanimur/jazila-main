import { SessionSerializer } from './session.serializer';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema, UserService } from '../user';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({ session: true }),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService, LocalStrategy, SessionSerializer],
  exports: [AuthService],
})
export class authModule {}
