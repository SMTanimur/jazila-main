/* eslint-disable react/jsx-no-undef */
import { deleteBrand } from '@api/brand';
import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { useGetAllBrand } from '@Hooks/useBrand';
import ActionCol from '@services/ActionCol';
import TableCol from '@services/TableCol';
import TableRow from '@services/TableRow';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

function Brand() {
  const queryClient = useQueryClient();
  const  handleDeleteBrand =async(slug:string)=>{
     try {
      await deleteBrand(slug)
       await queryClient.resetQueries(['brand'])
      toast.success('Brand Delete successfully')
     } catch (error) {
      toast.error('could not delete brand')
     }
  }
  const { data: brand } = useGetAllBrand();
  return (
    <div className="py-8 flex flex-col space-y-6">
      <Link href="/admin/brand/create">
        <a className="text-end focus:outline-none self-end  p-3 px-7 bg-sky-500 text-white rounded-full hover:bg-opacity-75 hover:shadow-md transition duration-200 ">
          Add New Brand{' '}
        </a>
      </Link>

      <div className="bg-pink-200 w-full rounded-md">
        <div className="flex justify-between items-center text-xl p-10 border-b border-sky-400">
          <h6 className="text-gray-500">Brands</h6>
          <input
            type="text"
            placeholder="Type name & Enter"
            className="focus:outline-none p-1 placeholder:text-sm focus:border focus:border-gray-800 border border-gray-400"
          />
        </div>
        <div className="w-full mt-9 flex justify-center items-center ">
        { brand && (
          <div className=" border-2 border-sky-700 rounded-lg  w-full overflow-hidden">
            <div className=" overflow-auto w-full">
              <table className="table-auto bg-gray-900 w-full">
                <thead className="bg-gray-900">
                  <tr>
                    <TableRow title="#" />
                    <TableRow title="Name" />
                    <TableRow title="action" />
                  </tr>
                </thead>
                <tbody className="  bg-gray-900 divide-y divide-sky-900/30">
                  {brand.slice(0, 10).map((pro) => (
                    <tr
                      key={pro.slug}
                      className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200"
                    >
                      <TableCol title={pro.length} />
                      <TableCol title={pro.name} />
                      <ActionCol slug={pro.slug} path="brand" handleDelete={()=>handleDeleteBrand(pro.slug)}/>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-4 bg-gray-900"></div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
Brand.layout = AdminLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default Brand;
