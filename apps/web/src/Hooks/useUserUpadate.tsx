

import { userUpdate } from '@api/user';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useAvatarUpload } from './useAvatarUpload';

interface UserUpdateParams {
  name: string;
  password: string;
  avatar:string
}

export const useUserUpdate = () => {
  
  const {image,setImage,uploadImage,url}= useAvatarUpload()
  console.log(url)
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(userUpdate);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdateParams>();
  const onSubmit = handleSubmit(async (payload) => {

    
    try {
      if (!image && url) {
       await mutateAsync(
          {
            name: payload.name,
            password: payload.password,
          },
          {
            onSuccess: async () => {
              toast.success('user update Successfully');
              await queryClient.invalidateQueries(['me'])
            },
          }
        );
      } else {
      await uploadImage()
      await  mutateAsync(
          {
            name: payload.name,
            password: payload.password,
            avatar: url,
          },
          {
            onSuccess: async () => {
              toast.success('user successfully updated');
              await queryClient.invalidateQueries(['me'])
            },
          }
        );
      }
    } catch (error) {
      toast.error(error);
    }
  });

  return {
    onSubmit,
    register,
    errors,
    setImage,
    image
  };
};
