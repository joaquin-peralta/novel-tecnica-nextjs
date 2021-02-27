function FeatureCard({ color, children }) {
  return <div className={`FeatureCard--${color}`}>{children}</div>;
}

export default FeatureCard;
