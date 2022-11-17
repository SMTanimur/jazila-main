/* eslint-disable @typescript-eslint/no-explicit-any */
/*
https://docs.nestjs.com/providers#services
*/

import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginateDto } from '../../common/dto/paginate-sort-dto';
import { CreateProductDto, UpdateProductDto } from './dto/create-product-dto';
import { Product, ProductDocument } from './entities';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async createProduct(createProductDto: CreateProductDto) {
    try {
      const product = await this.productModel.create(createProductDto);
      return product.save();
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(updateProductDto: UpdateProductDto, productId: string) {
    try {
      const product = await this.productModel.findById(productId).exec();
      if (!product) {
        throw new HttpException(
          `Not found ${productId} of product`,
          HttpStatus.NO_CONTENT
        );
      }
      if (updateProductDto) {
        product.name = updateProductDto.name || product.name;
        product.brand = updateProductDto.brand || product.brand;
        product.descriptions =
          updateProductDto.descriptions || product.descriptions;
        product.category = updateProductDto.category || product.category;
        product.price = updateProductDto.price || product.price;
        product.size = updateProductDto.size || product.size;
        product.productImgs =
          product.productImgs && updateProductDto.productImgs;
      }

      return product;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get All Product by sort

  async findAll(): Promise<any> {
    // const count: number = await this.productModel.countDocuments().exec();
    const docs: Product[] = await this.productModel.find().exec();

    return docs;
  }

  async findAllProduct(paginateDto: PaginateDto): Promise<any> {
    const keyword = paginateDto.keyword
      ? {
          name: { $regex: paginateDto.keyword, $options: 'i' },
        }
      : {}
    const total: number = await this.productModel.countDocuments({...keyword}).exec();
    const pages = Math.ceil(total / Number(paginateDto.limit));
    console.log(paginateDto.limit)
    const docs: Product[] = await this.productModel
      .find({...keyword})
      .skip(Number(paginateDto.limit )* (paginateDto.page - 1))
      .limit(Number(paginateDto.limit))
      .exec();
    return { total, docs ,pages,page:paginateDto.page};
  }

  async findOneBySlug(slug: string) {
    console.log({ slug });
    return await this.productModel.findOne({ slug }).exec();
  }

  async deleteProductById(slug: string) {
    const product = await this.productModel.findOneAndDelete({ slug });
    if (!product) {
      throw new NotFoundException(`product ${slug} not found`);
    }
    return true;
  }
}
