import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import NewProductForm from '@shared/NewProductForm';

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

function ProductCreate() {
  return(
    <React.Fragment>
    <Head>
    <title>product</title>
    </Head>
    <div className='container py-6 px-3'>
 <div className="border border-sky-800 bg-gray-900 rounded-lg py-10 px-12 text-gray-500">
     <NewProductForm/>
  </div>
    </div >
    </React.Fragment>
  )
}
ProductCreate.layout = AdminLayout
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default ProductCreate;
