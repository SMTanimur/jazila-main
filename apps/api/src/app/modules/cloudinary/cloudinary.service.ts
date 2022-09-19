import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import toStream = require('buffer-to-stream');

@Injectable()
export class CloudinaryService {
  async uploadAvatar(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: any
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result);
      });
      console.log(upload);
      toStream(file.buffer).pipe(upload);
    });
  }
  async uploadImage(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    file: any
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return new Promise((resolve:any, reject) => {
      const upload = v2.uploader.upload_stream((error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      });
      toStream(file.buffer).pipe(upload);
    });
  }
}
