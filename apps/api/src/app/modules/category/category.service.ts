
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto';
import { Category, CategoryDocument } from './entities';

@Injectable()
export class CategoryService {
  
  constructor(@InjectModel(Category.name) private categoryModel:Model<CategoryDocument>){}
   
  async create (createCategoryDto:CreateCategoryDto){
      try {
        return await this.categoryModel.create(createCategoryDto)
      } catch (error) {
        console.log(error)
      }
  }
}
