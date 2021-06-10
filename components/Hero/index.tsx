import styles from '@styles/components/Hero.module.scss';
import React from 'react';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  children: any;
  className?: string;
  height?: number;
};

const Hero = React.forwardRef<HTMLDivElement, Props>(
  ({ imageUrl, children, className, height }, ref) => {
    return (
      <div
        ref={ref}
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
        <div className={styles.content}>{children}</div>
      </div>
    );
  },
);

export default Hero;
