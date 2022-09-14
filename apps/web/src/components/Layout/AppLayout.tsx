
import Head from 'next/head';

import React from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

type Props = {
  title?: string;
  navbar?: React.ReactChild;
  children?: React.ReactChild;
};

const AppLayout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppLayout;
