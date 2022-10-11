
import AdminSidebar from '@components/Admin/Admin_Sidebar/AdminSidebar';
import DashboardNavbar from '@components/Admin/DashboardNavbar';
import { useUser } from '@Hooks/useUser';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {
  navbar?: React.ReactChild;
  children?: React.ReactChild;
  title:string
};

const AdminLayout: React.FC<Props> = ({ children,title}) => {
   const {data}=useUser()
     const {push}=useRouter()
   useEffect(()=>{
     if(data && data.role !=='admin'){
      push('/')
     }
   },[data, push])
  return (
    <>
      <Head>
        {
          title? (
            <title>
              Jazila || ${title}
            </title>
          ): ''
        }
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <div className='flex min-h-screen w-full bg-gray-800'>
          <AdminSidebar/>
          <div className=' w-full max-w-full'>
          <DashboardNavbar/>
          <div className='container'>
          <main>{children}</main>
          </div>
          </div>
        </div>
      
    </>
  );
};
export default AdminLayout;
