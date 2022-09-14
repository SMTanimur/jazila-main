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
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <div className='flex  overflow-hidden container'>
      <ClientSidebar_Dashboard/>
      <main className=' h-full overflow-y-auto '>
        {children}
      </main>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
