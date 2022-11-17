/* eslint-disable @typescript-eslint/no-var-requires */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, SchemaTypes } from 'mongoose';
import { Product } from '../../product/entities';

export type CartDocument = Cart & Document;

@Schema({timestamps:true})
export class Cart {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
  user: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    autopopulate: true,
  })
  product:Product

  @Prop({type:"number",default:0})
  quantity: number; 
}

export const CartSchema = SchemaFactory.createForClass(Cart);
CartSchema.plugin(require('mongoose-autopopulate'))