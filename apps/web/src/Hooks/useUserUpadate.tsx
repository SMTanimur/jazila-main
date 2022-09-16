import { userUpdate } from '@api/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useAvatarUpload } from './useAvatarUpload';



interface UserUpdateParams {
  name: string;
  password: string;
  avatar: string;
}

export const useUserUpdate = () => {
  const queryClient = useQueryClient();
  const { mutateAsync,isLoading } = useMutation(userUpdate, {
    retry: 0,
  });
  const { uploadImage, fileLink,image,setImage } = useAvatarUpload();
  console.log(fileLink,"f")
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<UserUpdateParams>();
  const onSubmit = handleSubmit(async (payload) => {
    try {
     await uploadImage()
      await mutateAsync(
        {
          name: payload.name,
          password: payload.password,
          avatar:fileLink
        },
        {
          onSuccess: async (data) => {
            console.log(data)
            toast.success('user successfully updated');
            await queryClient.invalidateQueries(['me']);
          },
        }
      );
    } catch (error) {
      toast.error(error);
    }
  });

  return {
    onSubmit,
    register,
    errors,
    setImage,
    image,
    isLoading
  };
};
