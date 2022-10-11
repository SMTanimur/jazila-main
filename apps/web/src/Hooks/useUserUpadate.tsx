import { userUpdate } from '@api/user';
import { isEmpty } from 'lodash';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { useAvatarUpload } from './useAvatarUpload';
import { useUser } from './useUser';

interface UserUpdateParams {
  name: string;
  password: string;
  avatar: string;
}

export const useUserUpdate = (avatar?: string) => {
  const queryClient = useQueryClient();
  const { data } = useUser();
  const { setFileLink } = useAvatarUpload();

  const { mutateAsync, isLoading } = useMutation(userUpdate, {
    retry: 0,
  });
  // console.log({ fileLink });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserUpdateParams>();

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
      });
    }
  }, [data, reset]);

  const onSubmit = handleSubmit(async (payload) => {
    if (isEmpty(payload.password)) {
      delete payload.password;
    }

    if (!isEmpty(avatar)) {
      payload.avatar = avatar;
    }

    try {
      await mutateAsync(payload, {
        onSuccess: async (data) => {
          setFileLink('');
          toast.success('user successfully updated');
          await queryClient.invalidateQueries(['me']);
        },
      });
    } catch (error) {
      toast.error(error);
    }
  });

  return {
    onSubmit,
    register,
    errors,
    isLoading,
  };
};
