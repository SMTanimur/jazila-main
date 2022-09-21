import { ProductService } from './product.service';
import { ProductController } from './product.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { CloudinaryService } from '../cloudinary';
import { ProductModel } from './entities';

@Module({
  imports: [ProductModel],
  controllers: [ProductController],
  providers: [ProductService,CloudinaryService],
})
export class ProductModule {}
