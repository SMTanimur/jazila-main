import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { BrandModel } from './entities';

@Module({
  imports: [BrandModel],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
