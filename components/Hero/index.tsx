import styles from '@styles/components/Hero.module.scss';
import Image from 'next/image';

type Props = {
  imageUrl: string;
  children: any;
  className?: string;
  height?: number;
};

const Hero = ({ imageUrl, children, className, height }: Props) => {
  return (
    <div className={`${styles.container} ${className}`} style={{ height: `${height}px` }}>
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
};

export default Hero;
