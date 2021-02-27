function SquareCard(props) {
  const { color, children } = props;

  return <div className={`SquareCard--${color}`}>{children}</div>;
}

export default SquareCard;
