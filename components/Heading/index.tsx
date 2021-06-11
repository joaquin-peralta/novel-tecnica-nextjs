import styles from '@styles/components/Heading.module.scss';
import React from 'react';

type Props = {
  color?: string;
  children: any;
  className?: string;
};

const Heading = React.forwardRef<HTMLHeadingElement, Props>(
  ({ color = 'gray', children, className }, ref) => {
    return (
      <h2 ref={ref} className={`${styles[color]} ${className}`}>
        {children}
      </h2>
    );
  },
);

export default Heading;
