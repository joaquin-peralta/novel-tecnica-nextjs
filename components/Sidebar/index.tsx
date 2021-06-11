import { useContext, useRef, useEffect } from 'react';
import { SidebarContext } from '@context/SidebarContext';
import styles from '@styles/components/Sidebar.module.scss';
import NavData from '@components/Navbar/NavData.json';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { gsap } from 'gsap';

const Sidebar = () => {
  const { show, toggle } = useContext(SidebarContext);
  const sidebarRef = useRef(null);
  const backLayerRef = useRef(null);
  const t1 = gsap.timeline({ paused: true });

  useEffect(() => {
    if (show) {
      t1.to(sidebarRef.current, { x: 0 })
        .to(backLayerRef.current, { xPercent: -100, opacity: 1, autoAlpha: 1 }, '-=0.5')
        .play();
    } else {
      t1.to(sidebarRef.current, { x: 280 })
        .to(backLayerRef.current, { xPercent: 100, opacity: 0, autoAlpha: 0 }, '-=0.3')
        .play();
    }
  }, [show]);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (show === true && !ref.current.contains(event.target)) {
          toggle();
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [show]);
  };

  useOutsideAlerter(sidebarRef);

  return (
    <>
      <aside ref={sidebarRef} className={styles.sidebar}>
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
                  <a className={styles.navAnchor} onClick={toggle}>
                    {item.title}
                  </a>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </aside>
      <div ref={backLayerRef} className={styles.backLayer} />
    </>
  );
};

export default Sidebar;
