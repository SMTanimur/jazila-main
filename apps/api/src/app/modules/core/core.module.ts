/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from '../../configs/server.config';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TimeoutInterceptor } from './interceptors/timeout.interceptor';
@Module({
  imports: [
    MongooseModule.forRoot(ServerConfig.NX_MONGODB_URI),
   
  ],
  controllers: [],
  providers: [
    // { provide: APP_INTERCEPTOR, useClass: TransformInterceptor},
    // { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class CoreModule {}
