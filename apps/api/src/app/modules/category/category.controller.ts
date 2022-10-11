/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
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
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, CategoryDocument } from './entities';

@ApiTags('Category')
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly cloudinary: CloudinaryService
  ) {}

  @UseInterceptors(FileInterceptor('image'))
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('/create')
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @ApiOperation({ summary: 'New Category create' })
  @ApiResponse({
    status: 201,
    description: 'Category has been created successfully',
  })
  async create(
    @UploadedFile() image: Express.Multer.File,
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<CategoryDocument> {
    console.log(image)
    console.log(createCategoryDto)
    const imageUrl = await this.cloudinary.uploadImage(
      image,
      'category'
    );
    createCategoryDto.image = imageUrl.toString();
    return await this.categoryService.create(createCategoryDto);
  }

  @UseInterceptors(FileInterceptor('image'))
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Put(':id')
  @ApiConsumes('multipart/form-data')
  @HttpCode(200)
  @ApiOperation({ summary: 'Update Category by id' })
  @ApiResponse({
    status: 200,
    description: 'Category has been updated successfully',
  })
  async update(
    @Param('id') id: string,
    @UploadedFile() categoryAvatar: Express.Multer.File,
    @Body() updateCategory: UpdateCategoryDto
  ): Promise<Category> {
    if (!updateCategory.image) {
      const ImageUrl = await this.cloudinary.uploadImage(
        categoryAvatar,
        'category'
      );
      updateCategory.image = ImageUrl.toString();
    }
    return await this.categoryService.update(id, updateCategory);
  }

  @Get('/')
  async findAll() {
    return await this.categoryService.findAll();
  }

  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Get(':slug')
  async getCategory(@Param('slug') slug: string) {
    return await this.categoryService.findOneSlug(slug);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return await this.categoryService.findOne(id);
  }

  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @HttpCode(200)
  @ApiOperation({ summary: 'Category Delete' })
  @ApiResponse({
    status: 200,
    description: 'Category has been deleted successfully',
  })
  @Delete(':slug')
  async deleteCategory(@Param('slug') slug: string) {
    return await this.categoryService.deleteCategory(slug);
  }
}
