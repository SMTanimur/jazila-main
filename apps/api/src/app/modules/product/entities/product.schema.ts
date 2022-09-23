/* eslint-disable @typescript-eslint/no-var-requires */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { createSlugify } from '../../../utils/slug';
import { Category } from '../../category/entities';
export type ProductDocument = Product & mongoose.Document;
@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  // @Prop({ unique: true })
  // slug: string;

  @Prop({ required: true })
  price: number;

  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Brand',
    
  // })
  // brand: Brand;

  @Prop({ default: [] })
  ProductImgs: string[];

  @Prop({ required: true })
  descriptions: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    autopopulate: true
  })
  category: Category;

  @Prop({ default: 0 })
  stocks: number;
  @Prop({ required: true, default: Date.now })
  discountTargetDate: Date;

  @Prop({ required: true, default: 0 })
  discount: number;

  @Prop()
  size?: string;

  @Prop({ default: 0 })
  numOfReviews?: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
  
ProductSchema.plugin(require('mongoose-autopopulate'))
// ProductSchema.pre('save', function (next) {
//   this.slug = createSlugify(this.name);
//   next();
// });
