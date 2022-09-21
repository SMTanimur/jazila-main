import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { createSlugify } from '../../../utils/slug';
import { Brand, BrandSchema } from '../../brand/entities';
import { Category, CategorySchema } from '../../category/entities';

export type ProductDocument= Product & mongoose.Document
@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ unique: true })
  slug: string;

  @Prop({ required: true })
  price: number;

  // @Prop({ type:BrandSchema,required: true })
  // brand:Brand

  @Prop({ default: [] })
  ProductImgs:string[];

  @Prop({ required: true })
  descriptions: string;

  // @Prop({ type:CategorySchema, required: true })
  // category: Category


  @Prop({ default: 0 })
  stocks: number;

  @Prop({required:true,default:Date.now})
  discountTargetDate:Date
  
  @Prop({ required: true, default: 0 })
  discount: number;
  
  @Prop()
  size?:string
   
  @Prop({default:0})
  numOfReviews?:number
}

export const ProductSchema = SchemaFactory.createForClass(Product)

ProductSchema.pre('save',function(next){
  this.slug = createSlugify(this.name)
  next()
})