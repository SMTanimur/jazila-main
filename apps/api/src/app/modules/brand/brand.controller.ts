/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles, RolesGuard, ROLE_ENUM } from '../../common/roles';
import { AuthenticatedGuard } from '../auth';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand-dto';
@ApiTags('Brand')
@UseGuards(RolesGuard, AuthenticatedGuard)
@Roles(ROLE_ENUM.ADMIN)
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @Post('create')
  @HttpCode(201)
  @ApiOperation({ summary: 'New Category create' })
  @ApiResponse({
    status: 201,
    description: 'Category has been created successfully',
  })
  async create(@Body() createBrandDto: CreateBrandDto) {
    return await this.brandService.create(createBrandDto);
  }

  @Get()
  async findAll(){
    return await  this.brandService.findAll()
  }

  @Get(':slug')
  async getBrand(@Param('slug') slug:string){
   return await this.brandService.findOne(slug)
  }

  @Delete(':slug')
  async deleteBrand(@Param('slug') slug:string){
     return await this.brandService.deleteBrand(slug)
  }
}
