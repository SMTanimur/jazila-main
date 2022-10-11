import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { useCategoryCreate } from '@Hooks/useCategoryCreate';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

interface ICategoryParams {
  categoryName: string;
  image: any;
}
function CategoryCreate() {
  const queryClient = useQueryClient();
  const [categoryImage, setCategoryImage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryParams>();
  const { mutateAsync, isLoading } = useCategoryCreate();

  const handleImageUpload = (e: any) => {
    setCategoryImage(e.target.files[0]);
  };

  const onSubmit = handleSubmit(async ({ categoryName }) => {
    if (!categoryImage) {
      return;
    }
    const myForm = new FormData();
    myForm.set('categoryName', categoryName);
    myForm.append('image', categoryImage);
    try {
      await mutateAsync(myForm, {
        onSuccess: async () => {
          toast.success('Category has been successfully create!');
          await queryClient.invalidateQueries(['category']);
        },
      });
    } catch (error) {
      toast.error('could not create category');
    }
  });
  return (
    <React.Fragment>
      <div className="my-6  w-full">
        <div className="flex flex-col items-center py-6 bg-white container  rounded-md">
          <h1 className="text-lg md:text-xl font-semibold self-start ">
            Category Information
          </h1>
          <form
            action=""
            className="pt-10 flex flex-col space-y-4 w-full"
            onSubmit={onSubmit}
          >
            <div className="flex items-center mx-auto text-base text-gray-700 w-full">
              <label className="w-[25%]">Your Name</label>
              <input
                type="text"
                className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300   ${
                  errors.categoryName
                    ? 'border-red-800 focus:border-red-800'
                    : 'border-gray-300 focus:border-sky-400 '
                }`}
                {...register('categoryName')}
              />
              {errors.categoryName && (
                <span className="flex text-red-500 ">{'Name is required'}</span>
              )}
            </div>

            <div className="flex items-center mx-auto text-base text-gray-700 w-full">
              <label htmlFor="" className="w-[25%]">
                Icon
              </label>
              <input
                type="file"
                accept=".jpg, .png, .jpeg"
                className={` border-2 rounded-md w-full py-2 text-lg pl-10 text-gray-800 focus:outline-none placeholder-gray-400 transition duration-300`}
                onChange={handleImageUpload}
              />
            </div>

            <button className="self-end px-7 py-2 bg-sky-600 rounded-lg hover:bg-opacity-80 text-white transition duration-300"
            disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Save'}
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
CategoryCreate.layout = AdminLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default CategoryCreate;
