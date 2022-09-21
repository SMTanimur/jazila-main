/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  BadRequestException,
  Body,
  Controller,
  HttpCode,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
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
import { CreateProductDto } from './dto/create-product-dto';
import { ProductService } from './product.service';
@ApiTags('Product')
@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly coudinaryService: CloudinaryService
  ) {}

  @HttpCode(201)
  @ApiOperation({ summary: 'New Products Create' })
  @ApiResponse({
    status: 201,
    description: 'Product  created successfully',
  })

  @ApiBody({
    required: true,
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {

        name:{
         type:'string'
        },
        descriptions:{
         type:'string'
        },
        price:{
         type:'number'
        },
        // category:{
        //   type:'string'
        //  },
        //  brand:{
        //   type:'string'
        //  },
         stock:{
          type:'number'
         },
         size:{
          type:'string'
         },
        ProductImgs: {
          type:'string' ,
          format: 'binary',
        },

      },
    },
  })
  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('/')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('ProductImgs', 4))
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFiles() ProductImgs: Express.Multer.File[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> {
    const imageUrls = [];
    if (!ProductImgs?.length)
      throw new BadRequestException('Minimum 1 product image is required!');
    for (const file of ProductImgs) {
      const FileUrl = await this.coudinaryService.uploadImage(file);
      imageUrls.push(FileUrl);
    }
    createProductDto.ProductImgs = imageUrls;
     const response = await this.productService.createProduct(createProductDto)

     return{
      message:"Product Create Successfully",
      data:{
        id:response.id
      }
     }
  }
}
