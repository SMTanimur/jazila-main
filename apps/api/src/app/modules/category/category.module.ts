import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

import { Module } from '@nestjs/common';
import { CategoryModel } from './entities';
import { CloudinaryService } from '../cloudinary';

@Module({
  imports: [CategoryModel],
  controllers: [CategoryController],
  providers: [CategoryService,CloudinaryService],
})
export class CategoryModule {}
