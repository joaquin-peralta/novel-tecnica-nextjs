import styles from '@styles/components/FeatureCard.module.scss';
import React from 'react';

type Props = {
  color?: string;
  children: any;
  className?: string;
};

const FeatureCard = React.forwardRef<HTMLDivElement, Props>(
  ({ color = 'gray', children, className }, ref) => {
    return (
      <div ref={ref} className={`${styles[color]} ${className}`}>
        {children}
      </div>
    );
  },
);

export default FeatureCard;
