import Head from 'next/head';
import '../styles/styles.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import React, { useEffect, useState } from 'react';
import { Router } from 'next/router';
import Preloader from '../shared/Preloader';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CustomApp({ Component, pageProps }: any) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  const Layout = Component.layout || React.Fragment;
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
            />
          </Head>
          {loading ? <Preloader /> : <Component {...pageProps} />}
          {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
          <ToastContainer />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default CustomApp;
