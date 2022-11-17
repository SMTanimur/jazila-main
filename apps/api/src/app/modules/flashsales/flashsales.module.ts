import { FlashsalesService } from './flashsales.service';
import { FlashsalesController } from './flashsales.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [FlashsalesController],
  providers: [FlashsalesService],
})
export class FlashsalesModule {}
