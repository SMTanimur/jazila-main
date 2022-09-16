import axios from 'axios';
import { useState } from 'react';
import { useMutation } from 'react-query';

const useAvatarUpload = () => {
  const [fileLink, setFileLink] = useState('');
  const cloudinary_url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;

  const { isLoading: uploading, mutateAsync: uploadImage } = useMutation(
    async (data: any) => {
      const formData = new FormData();
      formData.append('file', data);
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET);
      formData.append(
        'cloud_name',
        process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      );

      return await axios.post(cloudinary_url, formData);
    },
    {
      onSuccess: ({ data }) => {
        console.log('Image uploaded successfully');
        console.log(data);
        setFileLink(data.secure_url);
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return { fileLink, uploadImage, uploading };
};

export default useAvatarUpload;
