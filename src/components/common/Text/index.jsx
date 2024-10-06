const textSize = {
  small: 1.2,
  medium: 1.4,
  large: 1.8
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
    fontSize: typeof size === "number" ? `${size}rem` : `${textSize[size]}rem`,
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
