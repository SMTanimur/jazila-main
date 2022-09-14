
import { useUser } from '@Hooks/useUser';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
  children?: React.ReactChild;
};

const AdminLayout: React.FC<Props> = ({ children, title }) => {
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
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{children}</main>
    </>
  );
};
export default AdminLayout;

