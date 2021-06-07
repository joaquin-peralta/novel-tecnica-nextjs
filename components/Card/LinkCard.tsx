import React from 'react';
import styles from '@styles/components/LinkCard.module.scss';
import { IconContext } from 'react-icons';

interface Props {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  icon: any;
  iconColor?: string;
  children: any;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, Props>(
  ({ href, onClick, className, icon, iconColor = '#000', children }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`${styles.card} ${className}`}
        style={{ borderRight: `3px solid ${iconColor}`, borderBottom: `3px solid ${iconColor}` }}
      >
        <div>
          <IconContext.Provider value={{ size: '38px', color: iconColor }}>
            {icon}
          </IconContext.Provider>
          <p className="mb-0">{children}</p>
        </div>
      </a>
    );
  },
);

export default LinkCard;
