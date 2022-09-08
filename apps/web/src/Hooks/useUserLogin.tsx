import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { postLogin } from 'src/api/auth';
interface ILoginParams {
  email: string;
  password: string;
}
export const useUserLogin = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(postLogin);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginParams>();
  const onSubmit = handleSubmit(async (data) => {
    try {
        await mutateAsync(data, {
        onSuccess: async () => {
          toast.success('user has login successfully')
          await queryClient.invalidateQueries(['me']);
          push('/');
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
