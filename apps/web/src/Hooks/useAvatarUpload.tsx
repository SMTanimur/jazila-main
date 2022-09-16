import dynamicAPI from "@api/axios";
import { useState } from "react";

export const useAvatarUpload = () => {
  const uploadUrl = '/api/upload/avatar';
  const [image, setImage] = useState(null);
  const [fileLink, setFileLink] = useState('');
  const uploadImage = async () => {
    try {
      const data = new FormData();
      data.append('avatar', image);
      await dynamicAPI('post', uploadUrl, data)
        .then((data) => {
          console.log(data);
          setFileLink(data.secure_url);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    image,
    setImage,
    fileLink,
    uploadImage,
  };
};