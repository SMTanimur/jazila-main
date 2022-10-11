import { deleteCategory } from '@api/category';
import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { useGetAllCategory } from '@Hooks/useGetAllCategory';
import ActionCol from '@services/ActionCol';
import TableCol from '@services/TableCol';
import TableColImage from '@services/TableColImage';
import TableRow from '@services/TableRow';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { useQueryClient } from 'react-query';
import { toast } from 'react-toastify';

function Category() {
  interface ICategory {
    slug: string;
    categoryName: string;
    image: string;
  }
  const queryClient = useQueryClient();
  const handleDeleteCategory = async (slug: string) => {
    try {
      await deleteCategory(slug);
      await queryClient.resetQueries(['category']);
      toast.success('Category Delete successfully');
    } catch (error) {
      toast.error('could not delete Category');
    }
  };
  const { data: category } = useGetAllCategory();
  
  return (
    <React.Fragment>
      <div className="w-full py-5 px-4 md:px-10 mt-6 flex flex-col">
        <Link href="/admin/category/create" className="place-self-end">
          <a className="text-end focus:outline-none self-end  p-3 px-7 bg-sky-500 text-white rounded-full hover:bg-opacity-75 hover:shadow-md transition duration-200 ">
            Add New Category
          </a>
        </Link>

        {/* Category lending */}

        <div className="bg-white w-full rounded-md my-8  pb-14">
          <div className="flex justify-between items-center text-xl p-10 border-b-2 border-sky-400">
            <h6 className="text-gray-500">Categories</h6>
            <input
              type="text"
              placeholder="Type name & Enter"
              className="focus:outline-none p-1 placeholder:text-sm focus:border focus:border-gray-800 border border-gray-400"
            />
          </div>

          <div className="mt-6 flex justify-between item-center">
            {category && (
              <div className="w-full">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <TableRow title="Name" />
                      <TableRow title="Icon" />
                      <TableRow title="action" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sky-700/25">
                    {category?.map((item: ICategory) => (
                      <tr
                        key={item.slug}
                        className="  hover:bg-sky-900/10  bg-gray-800/40 odd:bg-gray-800 transition duration-200"
                      >
                        <TableCol title={item.categoryName} />
                        <TableColImage image={item.image} />
                        <ActionCol
                          slug={item.slug}
                          path="category"
                          handleDelete={async () =>
                            await handleDeleteCategory(item.slug)
                          }
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Category.layout = AdminLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default Category;
