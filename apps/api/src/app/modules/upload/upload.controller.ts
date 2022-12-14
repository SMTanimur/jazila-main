/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { Roles, RolesGuard, ROLE_ENUM } from '../../common/roles';
import { AuthenticatedGuard } from '../auth';
import { CloudinaryService } from '../cloudinary';
import { UploadService } from './upload.service';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  @Post('avatar')
  @UseGuards(AuthenticatedGuard)
  @ApiBody({
    required: true,
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  async uploadImage(
    @UploadedFile() file: Express.Multer.File
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return await this.uploadService.uploadAvatar(file);
  }


  @UseGuards(RolesGuard, AuthenticatedGuard)
  @Roles(ROLE_ENUM.ADMIN)
  @Post('product-images')
  @ApiBody({
    required: true,
    type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        productImage: {
          type:'string' ,
          format: 'binary',
          multipleOf:4
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor("productImage"))
  @ApiConsumes('multipart/form-data')
  async uploadProduct(@UploadedFile() file: Express.Multer.File) {
    // const imageUrls = [];

    // if (!files?.length) throw new BadRequestException("Minimum 1 product image is required!");

    // for (const image of files) {
    //   const imageUrl = await this.cloudinaryService.uploadImage(image,'product')
    //   imageUrls.push(imageUrl);
    // }
    //  console.log(imageUrls)
    // return imageUrls
    return await this.cloudinaryService.uploadImage(file,'product')
  }
}
