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

  @ApiBody({
    required: true,
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        categoryName: { type: 'string' },
        categoryIcon: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('categoryIcon'))
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('/')
  @ApiConsumes('multipart/form-data')
  @HttpCode(201)
  @ApiOperation({ summary: 'New Category create' })
  @ApiResponse({
    status: 201,
    description: 'Category has been created successfully',
  })
  async create(
    @UploadedFile() categoryIcon: Express.Multer.File,
    @Body() createCategoryDto: CreateCategoryDto
  ): Promise<CategoryDocument> {
    const imageUrl = await this.cloudinary.uploadImage(categoryIcon);
    createCategoryDto.image = imageUrl.toString();
    return await this.categoryService.create(createCategoryDto);
  }
}
