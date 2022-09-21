/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand-dto';
import { Brand, BrandDocument } from './entities';

@Injectable()
export class BrandService {
  constructor(@InjectModel(Brand.name) private brandModel:Model<BrandDocument>){}

 async create(createBrandDto:CreateBrandDto){
  try {
    return await this.brandModel.create(createBrandDto)
  } catch (error) {
    throw new NotAcceptableException()
  }
 }

 async findAll (){
  return await this.brandModel.find({})
 }
 async findOne (slug:string):Promise<BrandDocument>{
  const brand = await this.brandModel.findOne({slug})
  if(!brand){
    throw new NotFoundException(`Brand ${slug} not found`)
  }
  return brand
 }

 async deleteBrand (slug:string):Promise<boolean>{
     const brand = await this.brandModel.findOneAndDelete({slug})
     if(!brand){
      throw new NotFoundException(`Brand ${slug} not found`)
     }
     return true
 }
}
