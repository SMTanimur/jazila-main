import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');
import { ServerConfig } from '../../configs/server.config';

@Injectable()
export class CloudinaryService {
  async uploadAvatar(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: Express.Multer.File,
    folder = ''
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: ServerConfig.NX_CLOUDINARY_FOLDER + '/' + folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      console.log(upload);
      toStream(file.buffer).pipe(upload);
    });
  }
  async uploadImage(
    file: Express.Multer.File,
    folder = ''
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Promise((resolve: any, reject) => {
      const upload = v2.uploader.upload_stream(
        { folder: ServerConfig.NX_CLOUDINARY_FOLDER + '/' + folder },
        (error, result) => {
          if (error) return reject(error);
          resolve(result.secure_url);
        }
      )
      toStream(file.buffer).pipe(upload)
    });
  }
}
