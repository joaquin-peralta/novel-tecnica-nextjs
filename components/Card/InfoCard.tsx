import styles from '@styles/components/InfoCard.module.scss';
import { IconType } from 'react-icons';
import { IconContext } from 'react-icons';

type Props = {
  className?: string;
  icon: any;
  iconColor?: string;
  children: any;
};

const InfoCard = ({ icon, iconColor = '#000', children, className }: Props) => {
  return (
    <div className={`${className} ${styles.cardContainer}`}>
      <IconContext.Provider value={{ color: iconColor }}>
        <div className={styles.iconContainer}>{icon}</div>
      </IconContext.Provider>
      <hr className="mx-5" />
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;
