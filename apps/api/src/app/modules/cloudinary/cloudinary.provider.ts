import { ConfigOptions, v2 } from 'cloudinary';
import { ServerConfig } from '../../configs/server.config';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: (): ConfigOptions => {
    return v2.config({
      cloud_name:ServerConfig.NX_CLOUDINARY_CLOUD_NAME ,
      api_key: ServerConfig.NX_CLOUDINARY_API_KEY,
      api_secret: ServerConfig.NX_CLOUDINARY_API_SECRET,
      
    });
  },
};
