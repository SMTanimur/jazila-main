/* eslint-disable @typescript-eslint/no-explicit-any */
/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginateDto } from '../../common/dto/paginate-sort-dto';
import { Roles, RolesGuard, ROLE_ENUM } from '../../common/roles';
import { AuthenticatedGuard } from '../auth';
import { CreateProductDto, UpdateProductDto } from './dto/create-product-dto';
import { ProductService } from './product.service';
@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @HttpCode(201)
  @ApiOperation({ summary: 'New Products Create' })
  @ApiResponse({
    status: 201,
    description: 'Product  created successfully',
  })
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('/create')
  async create(
    @Body() createProductDto: CreateProductDto
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const response = await this.productService.createProduct(createProductDto);
    return {
      message: 'Product Create Successfully',
      data: {
        id: response.id,
      },
    };
  }

  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto
  ): Promise<any> {
    const response = await this.productService.updateProduct(
      updateProductDto,
      id
    );

    return {
      message: 'Product Create Successfully',
      response,
    };
  }

  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Get()
  async findAll(): Promise<any> {
    return this.productService.findAll();
  }

  @Get('all-product')
  async findAllProduct(
    @Req() req,
    @Query() paginateSortDto: PaginateDto
  ): Promise<any> {
    
    return await this.productService.findAllProduct(paginateSortDto);
  }

  @Get(':slug')
  async findBySlug(@Param('slug') slug: string) {
    return this.productService.findOneBySlug(slug);
  }

  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Delete(':slug')
  async findProductAndDeleteByID(@Param('slug') slug: string) {
    return await this.productService.deleteProductById(slug);
  }
}
