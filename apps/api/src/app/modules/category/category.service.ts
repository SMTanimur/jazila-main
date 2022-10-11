import {
  HttpException,
  HttpStatus,
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './entities';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    try {
      return await this.categoryModel.create(createCategoryDto);
    } catch (error) {
      throw new NotAcceptableException('please ');
    }
  }

  async update(
    categoryId: string,
    update: UpdateCategoryDto
  ): Promise<Category> {
    try {
      const category = await this.categoryModel.findById(categoryId)
      if(category){
        category.categoryName= update.categoryName
        category.slug=update.slug
      }
      const updateCategory = await category.save()
      return updateCategory
    } catch (error) {
      throw new Error(error);
    }
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new HttpException('category not found', HttpStatus.NO_CONTENT);
    }
    return category;
  }

  async findOneSlug (slug:string):Promise<CategoryDocument>{
    const brand = await this.categoryModel.findOne({slug})
    if(!brand){
      throw new NotFoundException(`Category ${slug} not found`)
    }
    return brand
   }

  async deleteCategory(slug: string):Promise<boolean> {
    const category = await this.categoryModel.findOneAndDelete({slug})
     if(!category){
      throw new NotFoundException(`Category ${slug} not found`)
     }
     return true
}
}
