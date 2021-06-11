import React, { useState, useContext } from 'react';
import { SidebarContext } from '@context/SidebarContext';
import styles from '@styles/components/Navbar.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { RiMenu3Line } from 'react-icons/ri';
import NavData from '@components/Navbar/NavData.json';

const Navbar = () => {
  const router = useRouter();
  const { toggle } = useContext(SidebarContext);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.brandButton}>
            <div className={styles.imgContainer}>
              <Image
                src="/logo.png"
                alt="Novel Técnica logo"
                width={85}
                height={64}
                layout="responsive"
              />
            </div>
          </a>
        </Link>
        <button className={styles.menuButton} onClick={toggle} type="button">
          <RiMenu3Line style={{ fontSize: '24px', color: '#525353' }} />
        </button>
        <ul className={styles.navbarList}>
          {NavData.map((item, index, { length }) => (
            <Link key={item.title} href={item.path}>
              <a className={item.path === router.asPath ? styles.currentAnchor : styles.listAnchor}>
                <li className={index + 1 === length ? styles.lastListItem : styles.listItem}>
                  {item.title}
                </li>
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
