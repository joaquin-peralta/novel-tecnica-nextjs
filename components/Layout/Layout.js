/* eslint-disable import/no-unresolved */
import Navbar from '@components/Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <footer>I'm de footer</footer>
    </>
  );
};

export default Layout;
