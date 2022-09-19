/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  HttpCode,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Roles, RolesGuard, ROLE_ENUM } from '../../common/roles';
import { AuthenticatedGuard } from '../auth';
import { CloudinaryService } from '../cloudinary';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto';
import { CategoryDocument } from './entities';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly cloudinary: CloudinaryService
  ) {}

  @UseInterceptors(FileInterceptor('Icon'))
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('/')
  @HttpCode(201)
  // @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'New Category create' })
  @ApiResponse({
    status: 201,
    description: 'Category has been created successfully',
  })
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<CategoryDocument> {
     const  {secure_url}  = await this.cloudinary.uploadImage(file);
    
    createCategoryDto.image = secure_url
    console.log(createCategoryDto.image)
    
   const result = await this.categoryService.create(createCategoryDto);
   return result
  }
}
