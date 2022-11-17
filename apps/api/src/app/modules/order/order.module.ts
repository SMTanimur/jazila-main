import { OrderService } from './order.service';
import { OrderController } from './order.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
