import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { useCreateBrand } from '@Hooks/useCreateBrand';
import { GetServerSideProps } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

function BrandCreate() {
  type IBand={
    name:string
  }

  const queryClient = useQueryClient()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBand>();
   
  const {mutateAsync,isLoading}=useCreateBrand()
   const onSubmit = handleSubmit(async(data)=>{
    try {
      toast.promise(mutateAsync(data,{onSuccess:async()=>queryClient.invalidateQueries(['brand'])}),{
        pending: 'loading...',
        success: 'success',
        error: 'could not save'
      })
    } catch (error) {
      console.log(error)
    }
   })
     
  

  return (
    <div className="pt-10 pl-5 grid place-items-center">
      <form
        action=""
        className="bg-white shadow-md p-5 flex flex-col items-center w-[350px]"
        onSubmit={onSubmit}
      >
        <h6 className="text-base text-gray-500">Brand Information</h6>
        <div className="flex mt-6 gap-3 justify-center items-center">
          <label htmlFor="" className="text-pink-400">
            Name
          </label>
          <input
            type="text"
            placeholder="name"
            className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
              errors.name
                ? 'border-red-800 focus:border-red-800'
                : 'border-gray-300 focus:border-sky-400 '
            }`}
            {...register('name', {
              required: true,
            })}
          />
          {errors.name && (
            <span className=" flex text-red-500 ">
              {errors.name ? 'name is required' : ''}
            </span>
          )}
        </div>

        <button className={`self-end px-10 py-2 mt-3 bg-orange-600 text-base text-white hover:bg-opacity-75 transition-all rounded-md ${
            isLoading  ? 'cursor-not-allowed' : ''
          }`}>
        {isLoading ? 'Loading...' : 'Save Brand'}
        </button>
      </form>
    </div>
  );
}

BrandCreate.layout = AdminLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default BrandCreate;
