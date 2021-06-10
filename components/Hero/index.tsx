import styles from '@styles/components/Hero.module.scss';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  children: any;
  className?: string;
  height?: number;
};

const Hero = ({ imageUrl, children, className, height }: Props) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(containerRef.current, { opacity: 0, autoAlpha: 0, duration: 0.5 }).from(
      contentRef.current,
      { opacity: 0, y: -10, duration: 0.8 },
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${className}`}
      style={{ height: `${height}px` }}
    >
      <Image
        src={imageUrl}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        className={styles.bwImg}
      />
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default Hero;
