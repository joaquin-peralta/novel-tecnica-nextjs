import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-awesome-slider/dist/styles.css';

// eslint-disable-next-line import/no-unresolved
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
