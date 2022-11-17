/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiProperty } from '@nestjs/swagger';

export class CartDTO {
  @ApiProperty({ type: 'string' })
  product:any;
  @ApiProperty({ type: 'number' })
  quantity: number;
}
