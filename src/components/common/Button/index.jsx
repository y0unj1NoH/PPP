import styled from "@emotion/styled";
import Text from "../Text";

const buttonSize = {
  small: { padding: 4, fontSize: 1.2 },
  medium: { padding: 8, fontSize: 1.4 },
  large: { padding: 16, fontSize: 1.6 }
};

// TODO: 더 좋은 변수 이름 찾기
const $Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &#button--plus {
    padding: 20px 28px;
    border-radius: 20px;
  }

  &#button--check {
    padding: 16px;
    border-radius: 16px;
  }
`;

const Button = ({
  label,
  primary = false,
  size = "medium",
  onClick,
  ...props
}) => {
  const buttonStyle = {
    fontSize: `${buttonSize[size].fontSize}rem`,
    padding: buttonSize[size].padding,
    backgroundColor: primary ? "#907ad6" : "white",
    color: primary ? "white" : "#181a2a",
    boxShadow: primary ? "none" : "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"
  };

  return (
    <$Button
      type="button"
      primary={primary}
      size={size}
      onClick={onClick}
      style={{ ...buttonStyle, ...props.style }}
      {...props}
    >
      <Text>{label}</Text>
    </$Button>
  );
};

export default Button;

