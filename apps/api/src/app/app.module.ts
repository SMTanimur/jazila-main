
import { CoreModule } from './modules/core/core.module';

import { Module } from '@nestjs/common';
import { UsersModule } from './modules/user';
import { authModule } from './modules/auth';


@Module({
  imports: [authModule, CoreModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
