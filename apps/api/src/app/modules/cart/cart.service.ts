/* eslint-disable @typescript-eslint/no-explicit-any */


/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartDTO } from './dto/create.cart.dto';
import { Cart, CartDocument } from './entities';
import { Product, ProductDocument } from '../product/entities';
import { IPayloadProductCart } from './cartType';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,

    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async createCart(payload:IPayloadProductCart) {
    const {userId, product, quantity } = payload;
    const newCart = { user: userId, product: { _id: product }, quantity };
    const savedCart = await this.cartModel.create(newCart);
    return savedCart;
  }

  async updateQuantityProductInCart(payload:IPayloadProductCart) {
    const { userId, product, quantity } = payload;
    const updatedCart = await this.cartModel.findOneAndUpdate(
      { user: userId, product: { _id: product } },
      { quantity }
    );

    return updatedCart;
  }

  async addToCart(userId: string, cartDto: CartDTO) {
    const { product, quantity } = cartDto;
  const Product = await this.productModel.findById(product);
  if (!product) throw new HttpException(
    `Not found ${Product} of product`,
    HttpStatus.NOT_FOUND
  );
  if (Product.stocks <= 0) throw new HttpException(
    `Not found `,
    HttpStatus.NO_CONTENT
  );;
  if (quantity > Product.stocks) {
    throw new HttpException(
      `The number of products available is ${Product.stocks} `,
      HttpStatus.NOT_FOUND
    )
  }
  let savedCart;
  const cartInDb = await this.cartModel.findOne({ user: userId, product: { _id: product } });
  const payload = { userId, product, quantity };
  if (cartInDb) {
    savedCart = await this.updateQuantityProductInCart(payload);
  } else {
    savedCart = await this.createCart(payload);
  }
  savedCart ? (savedCart.product = product)   : savedCart
  const response = { message: `Added to cart`, data: savedCart };
  return response
  }


  async getAllCart (userId:string){
    const cartsDB = await this.cartModel.find({userId})
      .populate({ path: "product", populate: { path: "category" } })
      .sort({ createdAt: -1 });
    const carts = cartsDB.filter((cart: any) => cart.product.stocks > 0);
    const cartsOutOfStock = cartsDB.filter((cart: any) => cart.product.stocks <= 0);
    const response = { message: "Get the cart successfully", data: { carts, cartsOutOfStock } };
    return response;
  };
  
  async deleteSingleCartById (cartID:string){
    const deletedData = await this.cartModel.deleteMany({_id:cartID})
    if (!deletedData) throw new HttpException(
      `Not found ${deletedData} of product`,
      HttpStatus.NOT_FOUND
    )
  const response = {
    message: `Delete ${deletedData.deletedCount} Product successfully!`,
    data: { deleted_count: deletedData.deletedCount },
  };
  return response;
  }

  async deleteCarts (userId:string){
    const deleteData = await this.cartModel.deleteMany({user:userId})
    if (!deleteData) throw new HttpException(
      `Not found ${deleteData}`,
      HttpStatus.NOT_FOUND
    )
    return{
      message:`Delete ${deleteData.deletedCount} Product successfully`,
      data:deleteData
    }
  }

}
