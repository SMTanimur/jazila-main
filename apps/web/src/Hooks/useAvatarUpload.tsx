import dynamicAPI from '@api/axios';
import { useState } from 'react';

export const useAvatarUpload = () => {
  const uploadUrl = '/api/upload/avatar';
  const [uploadingImage, setUploadingImage] = useState(false);
  const [fileLink, setFileLink] = useState('');

  const uploadImage = async (file?: File) => {
    try {
      const data = new FormData();
      data.append('avatar', file);
      setUploadingImage(true);
      await dynamicAPI('post', uploadUrl, data)
        .then((data) => {
          setFileLink(data.secure_url);
        })
        .catch((e) => {
          console.log(e);
        });
      setUploadingImage(false);
    } catch (error) {
      setUploadingImage(false);
      console.log(error);
    }
  };
  return {
    fileLink,
    setFileLink,
    uploadImage,
    uploadingImage,
  };
};
