/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto';
import { Category, CategoryDocument } from './entities';

@Injectable()
export class CategoryService {
  
  constructor(@InjectModel(Category.name) private categoryModel:Model<CategoryDocument>){}
   
  async create (createCategoryDto:CreateCategoryDto){
    return await this.categoryModel.create(createCategoryDto)
  }
}
