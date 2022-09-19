import { createSlugify } from './../../../utils/slug';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {

  @Prop({ required: true})
  categoryName: string;
  
  @Prop()
  image: string;

  @Prop({unique:true})
  slug:string


  createdAt: Date;

  updatedAt: Date;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

  
CategorySchema.pre('save', function(next){
  this.slug= createSlugify(this.categoryName)
  next()
})