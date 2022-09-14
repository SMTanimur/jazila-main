
import { Module } from '@nestjs/common';
import { CloudinaryModule } from '../cloudinary';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [CloudinaryModule],
  controllers: [UploadController],
  providers: [UploadService],
  exports:[UploadService]
})
export class UploadModule {}
