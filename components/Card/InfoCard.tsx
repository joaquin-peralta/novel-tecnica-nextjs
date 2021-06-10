import styles from '@styles/components/InfoCard.module.scss';
import { forwardRef } from 'react';
import { IconContext } from 'react-icons';

type Props = {
  icon: any;
  children: any;
  className?: string;
  iconColor?: string;
};

const InfoCard = forwardRef<HTMLDivElement, Props>(
  ({ icon, iconColor = '#000', children, className }, ref) => {
    return (
      <div ref={ref} className={`${className} ${styles.cardContainer}`}>
        <IconContext.Provider value={{ color: iconColor }}>
          <div className={styles.iconContainer}>{icon}</div>
        </IconContext.Provider>
        <hr className="mx-5" />
        <div>{children}</div>
      </div>
    );
  },
);

export default InfoCard;
