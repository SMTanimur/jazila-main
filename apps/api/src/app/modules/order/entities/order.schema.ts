/* eslint-disable @typescript-eslint/no-var-requires */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from '../../users';
import { ORDER_STATUS_ENUM } from '../orders.constain';


export type ProductDocument = Order & mongoose.Document;


// Item Schema
@Schema({ _id: false })
class Product {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId })
  ProductId: mongoose.Schema.Types.ObjectId;
  @Prop({ required: true })
  name: string;
  @Prop()
  quantity:number
  @Prop()
  productImg:string
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  totalPrice: number;

}
const ProductSchema = SchemaFactory.createForClass(Product);


@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true })
  totalPrice: number;

  @Prop({ required: true })
  originPrice: number;

  @Prop({ required: true, type: [ProductSchema] })
  items: Product[];
  
  @Prop()
  shippingAddress?: {
    fullName: { type: string, required: true },
    address: { type: string, required: true },
    city: { type: string, required: true },
    postalCode: { type: string, required: true },
    country: { type: string, required: true },
  }
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  })
  user: User;

  @Prop({ required: true, default: ORDER_STATUS_ENUM.CONFIRM })
  status: ORDER_STATUS_ENUM;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

