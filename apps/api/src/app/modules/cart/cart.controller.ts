/* eslint-disable @typescript-eslint/no-explicit-any */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpCode,  Param, Post, Request,  UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles, RolesGuard, ROLE_ENUM } from '../../common/roles';
import { AuthenticatedGuard} from '../auth';
import { CartService } from './cart.service';
import { CartDTO } from './dto/create.cart.dto';
@ApiTags('Carts')
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) { }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles(ROLE_ENUM.USER)
  @Get('all-cart')
  async getAllCart (@Request()req:any):Promise<any>{
    const userId = req.user._id
    const carts=await this.cartService.getAllCart(userId)
    return carts
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @HttpCode(201)
  @ApiOperation({ summary: 'New cart Create' })
  @ApiResponse({
    status: 201,
    description: 'Product  created successfully',
  })
  @Roles(ROLE_ENUM.USER)
  @Post('add-to-cart')
  async addItemToCart(@Request() req, @Body() cartDTO: CartDTO):Promise<any> {
    const userId = req.user.userId;
    const cart = await this.cartService.addToCart(userId, cartDTO);
    return cart;
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles(ROLE_ENUM.USER)
  @Delete(':id')
  async deleteSingleCart (@Param('id') id:string):Promise<any>{
    const cart = await this.cartService.deleteSingleCartById(id)
    return cart
  }

  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles(ROLE_ENUM.USER)
  @Delete('/')
  async deleteCart (@Request() req):Promise<any>{
    const cart = await this.cartService.deleteCarts(req._id)
    return cart
  }
}
