import React from 'react';

function Card(props) {
  const { children } = props;

  return <div className="Card">{children}</div>;
}

export default Card;
