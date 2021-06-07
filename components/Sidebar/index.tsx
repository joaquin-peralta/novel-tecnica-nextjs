import { useContext } from 'react';
import { SidebarContext } from '@context/SidebarContext';
import styles from '@styles/components/Sidebar.module.scss';
import NavData from '@components/Navbar/NavData.json';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

const Sidebar = () => {
  const { show, toggle } = useContext(SidebarContext);

  return (
    <aside className={show ? styles.sidebarOpen : styles.sidebar}>
      <div className={styles.buttonContainer}>
        <button className={styles.closeButton} onClick={toggle} type="button">
          <AiOutlineClose style={{ fontSize: '24px', color: '#525353' }} />
        </button>
      </div>
      <nav className="text-right">
        <ul className={styles.navList}>
          {NavData.map((item) => (
            <Link key={item.title} href={item.path} passHref>
              <li className={styles.item}>
                <a className={styles.navAnchor}>{item.title}</a>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
