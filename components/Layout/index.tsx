import { useState } from 'react';
import { SidebarContext } from '@context/SidebarContext';
import Navbar from '@components/Navbar';
import Sidebar from '@components/Sidebar';
import Footer from '@components/Footer/Footer';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <>
      <SidebarContext.Provider value={{ show, toggle }}>
        <Navbar />
        <Sidebar />
        {children}
        <Footer />
      </SidebarContext.Provider>
    </>
  );
};

export default Layout;
