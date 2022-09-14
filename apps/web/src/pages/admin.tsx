
import AdminLayout from '@components/Layout/AdminLayout';
import { withAuth } from '@HOC/withAuth';
import { GetServerSideProps } from 'next';
import React from 'react';

const admin = () => {
  return <div>admin</div>;
};
admin.layout = AdminLayout
export default admin;
export const getServerSideProps: GetServerSideProps = withAuth(async () => {
  return {
    props: {},
  }
})