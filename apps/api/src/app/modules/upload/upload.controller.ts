import {
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { AuthenticatedGuard } from '../auth';
import { UploadService } from './upload.service';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

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
    return await this.uploadService.uploadImage(file);
  }
}
