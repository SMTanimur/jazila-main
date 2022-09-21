import { ProductModule } from './modules/product/product.module';
import { BrandModule } from './modules/brand/brand.module';
import { CategoryModule } from './modules/category/category.module';

import { CoreModule } from './modules/core/core.module';
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users';
import { authModule } from './modules/auth';
import { UploadModule } from './modules/upload/upload.module';

import { memoryStorage } from 'multer';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    ProductModule,
    BrandModule,
    CategoryModule,
    MulterModule.register({
      storage: memoryStorage(), // use memory storage for having the buffer
    }),
    authModule,
    CoreModule,
    UsersModule,
    UploadModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
