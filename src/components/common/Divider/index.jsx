import styled from "@emotion/styled";

const Line = styled.hr`
  border: none;
  background-color: #aaa;

  // 선이 수직이라는 말인듯?
  // 정렬하는건 좌우임
  &.vertical {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 1px;
    height: 13px;
    vertical-align: middle;
  }

  &.horizontal {
    display: block;
    width: 100%;
    height: 1px;
  }
`;

const Divider = ({
  type = "horizontal", // horizontal, vertical
  size = 8,
  ...props
}) => {
  const dividerStyle = {
    margin: type === "vertical" ? `0 ${size}px` : `${size}px 0`
  };
  return (
    <Line
      {...props}
      className={type}
      style={{ ...dividerStyle, ...props.style }}
    />
  );
};

export default Divider;

