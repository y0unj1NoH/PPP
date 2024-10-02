const textSize = {
  small: 12,
  normal: 14,
  large: 18
};

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
    fontSize: typeof size === "number" ? size : textSize[size],
    color: color
    // overflowWrap: "break-word"
  };

  return (
    <Tag style={{ ...props.style, ...fontStyle }} {...props}>
      {children}
    </Tag>
  );
};

export default Text;

