import { createSlugify } from './../../../utils/slug';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import  { Document } from 'mongoose';



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
export type CategoryDocument = Category & Document;
  
CategorySchema.pre('save', function(next){
  this.slug= createSlugify(this.categoryName)
  next()
})