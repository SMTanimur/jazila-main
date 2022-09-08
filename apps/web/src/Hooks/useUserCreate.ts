import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

import { userSingUp } from 'src/api/user';
interface ISingUpParams {
  name:string
  email: string;
  password: string;
}
export const useUserSingUp = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(userSingUp);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISingUpParams>();
  const onSubmit = handleSubmit(async (data) => {
    try {
     await mutateAsync(data, {
        onSuccess: async () => {
          toast.success('user has been created')
          await queryClient.invalidateQueries(['me']);
          push('/login');
        },
      })
    } catch (error) {
      toast.error(error)
    }
  });
  return {
    onSubmit,
    register,
    errors,
  };
};
