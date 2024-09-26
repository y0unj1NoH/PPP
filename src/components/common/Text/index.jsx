import "./Text.css";

const Text = ({
  children,
  block,
  paragraph,
  size,
  strong,
  color,
  ...props
}) => {
  const Tag = block ? "div" : paragraph ? "p" : "span";

  const fontStyle = {
    fontWeight: strong ? "bold" : undefined,
    fontSize: typeof size === "number" ? size : undefined,
    color: color
  };

  return (
    <Tag
      className={typeof size === "string" ? `Text--${size}` : undefined}
      style={{ ...props.style, ...fontStyle }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Text;

