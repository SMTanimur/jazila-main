import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
import { CloudinaryService } from '../cloudinary';

@Injectable()
export class UploadService {
  constructor(private readonly cloudinary: CloudinaryService) {}

  async uploadAvatar(
    file: Express.Multer.File
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return await this.cloudinary.uploadAvatar(file).catch(() => {
      throw new UnprocessableEntityException('Invalid file type.');
    });
  }
  // async upload(files: Express.Multer.File) {
  //   const image = files['image'][0];
  //   const imageDetails = files['imageDetails'];

  //   let linkFromCloudinary = {};

  //   if (image) {
  //     const imageLink = await this.cloudinary.uploadImage(image);
  //     linkFromCloudinary = imageLink.secure_url;
  //   }

  //   if (imageDetails) {
  //     const linkImageDetails = [];
  //     for (const singleImage of imageDetails) {
  //       const imageUrl = await this.cloudinary.uploadImage(singleImage);
  //       linkImageDetails.push(imageUrl);
  //     }
  //     linkFromCloudinary = linkImageDetails;
  //   }

  //   return linkFromCloudinary;
  // }
}
