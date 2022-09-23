import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { createSlugify } from '../../../utils/slug';

export type BrandDocument = Brand & Document;

@Schema({ timestamps: true })
export class Brand {
  type: string;

  @Prop({ required: true })
  name: string;

  @Prop({ unique: true })
  slug: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);

BrandSchema.pre('save', function (next) {
  this.slug = createSlugify(this.name);
  next();
});
