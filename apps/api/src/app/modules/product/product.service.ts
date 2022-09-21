/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product-dto';
import { Product, ProductDocument } from './entities';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>){}

  async createProduct (createProductDto:CreateProductDto){
    try {
      const product = await this.productModel.create(createProductDto)
      return product.save()
    } catch (error) {
      throw new Error(error)
    }
  }
}
