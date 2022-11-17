import { CartService } from './cart.service';
import { CartController } from './cart.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CartModel } from './entities';
import { ProductModel } from '../product/entities';

@Module({
  imports: [CartModel,ProductModel],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
