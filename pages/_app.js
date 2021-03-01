import { motion } from 'framer-motion';
import '../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';
// eslint-disable-next-line import/no-unresolved
import Loader from '@components/Loader/Loader';

// eslint-disable-next-line import/no-unresolved
import Layout from '@components/Layout/Layout';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Loader />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </>
  );
}

export default MyApp;
