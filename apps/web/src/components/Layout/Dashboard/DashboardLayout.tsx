import { useUser } from '@Hooks/useUser';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ClientSidebar_Dashboard from './user/ClientSidebar_Dashboard';

type Props = {
  title?: string;
  children?: React.ReactChild;
};
const DashboardLayout: React.FC<Props> = ({ children, title }) => {
  const { data } = useUser();
  const { push } = useRouter();
  useEffect(() => {
    if (data && data.role !== 'user') {
      push('/');
    }
  }, [data, push]);
  return (
    <>
      <Navbar />
      <div className=' bg-gray-100 w-full h-full'>
      <div className="flex  overflow-hidden container">
        <div className="hidden xl:block w-[30%] py-3">
          <ClientSidebar_Dashboard />
        </div>
        <main className=" h-full overflow-y-auto w-full ">{children}</main>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
