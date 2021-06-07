import React from 'react';
import '../styles/main.scss';
import 'leaflet/dist/leaflet.css';
import '@styles/globals.scss';

import Layout from '@components/Layout';

type Props = {
  Component: React.ElementType;
  pageProps: React.ElementType;
};

function MyApp({ Component, pageProps }: Props) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
