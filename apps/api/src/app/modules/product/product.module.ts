import { ProductService } from './product.service';
import { ProductController } from './product.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ProductModel } from './entities';

@Module({
  imports: [ProductModel],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
