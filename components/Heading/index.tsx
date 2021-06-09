import styles from '@styles/components/Heading.module.scss';

type Props = {
  color?: string;
  children: any;
  className?: string;
};

const Heading = ({ color = 'gray', children, className }: Props) => {
  return <h2 className={`${styles[color]} ${className}`}>{children}</h2>;
};

export default Heading;
