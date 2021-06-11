import dynamic from 'next/dynamic';
import React from 'react';
import 'leaflet/dist/leaflet.css';
import '@styles/globals.scss';
import 'nprogress/nprogress.css';
import Layout from '@components/Layout';

const TopProgressBar = dynamic(
  () => {
    return import('@components/TopProgressBar');
  },
  { ssr: false },
);

type Props = {
  Component: React.ElementType;
  pageProps: React.ElementType;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <TopProgressBar />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
