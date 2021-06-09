import styles from '@styles/components/FeatureCard.module.scss';

type Props = {
  color?: string;
  children: any;
  className?: string;
};

const FeatureCard = ({ color = 'gray', children, className }: Props) => {
  return <div className={`${styles[color]} ${className}`}>{children}</div>;
};

export default FeatureCard;
