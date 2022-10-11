import AdminLayout from '@components/Layout/AdminLayout'
import { withAuth } from '@HOC/withAuth'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'


function Admin() {
  return (
    <React.Fragment>
      <Head>
        <title>Admin</title>
      </Head>

      <h1>ghdgh</h1>
    </React.Fragment>
  )
}
Admin.layout = AdminLayout
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default Admin