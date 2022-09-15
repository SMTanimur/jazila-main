/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from '@components/Layout/Dashboard/DashboardLayout';
import { withAuth } from '@HOC/withAuth';

import { GetServerSideProps } from 'next';
import Head from 'next/head';

import React from 'react';
function dashboard() {
  // const { data: user } = useUser();
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="pt-10 container">
        <h1 className="text-2xl">lorem1000</h1>
      </div>
    </div>
  );
}
dashboard.layout = DashboardLayout;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  };
});
export default dashboard;
