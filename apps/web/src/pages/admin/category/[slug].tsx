/* eslint-disable @next/next/no-img-element */
import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { useGetCategory } from '@Hooks/useGetAllCategory';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';

function CategoryDetails() {
  const { query } = useRouter();
  const { slug } = query;
  const { data } = useGetCategory(slug);
  console.log(data);
  return (
    <React.Fragment>
      <div className="container flex justify-center items-center">
        <form
          action=" "
          className="bg-white w-full py-6 px-8 mt-10 rounded-md shadow-md"
        >
          <h4 className="md:text-xl text-lg font-semibold text-gray-700">
            Category Information
          </h4>

            <h1>{data?.categoryName}</h1>
             <img src={data?.image} alt="" className='w-[400px]' />
        </form>
      </div>
    </React.Fragment>
  );
}

CategoryDetails.layout = AdminLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default CategoryDetails;
