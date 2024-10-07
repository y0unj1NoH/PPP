import { icons } from "feather-icons";
import { Buffer } from "buffer";
import styled from "@emotion/styled";
import Telescope from "./Telescope";
import CheckList from "./CheckList";
import RoundCheck from "./RoundCheck";
import Plus from "./Plus";
import Check from "./Check";
import Warning from "./Warning";
import Saramin from "./Saramin";
import Github from "./Github";
import Clock from "./Clock";

const IconWrapper = styled.i`
  display: inline-flex;
  align-items: "center";
`;

const Default = ({
  name,
  size = 16,
  strokeWidth = 2,
  rotate,
  color = "#222",
  ...props
}) => {
  const shapeStyle = {
    width: size,
    height: size,
    transform: rotate ? `rotate(${rotate}deg)` : undefined
  };

  const iconStyle = {
    "stroke-width": strokeWidth,
    stroke: color,
    width: size,
    height: size
  };

  const icon = icons[name];
  const svg = icon ? icon.toSvg(iconStyle) : "";
  // svg를 image에 쓸려면 base64로 인코딩 필요
  const base64 = Buffer.from(svg, "utf8").toString("base64");
  return (
    <IconWrapper style={shapeStyle} {...props}>
      <img src={`data:image/svg+xml;base64,${base64}`} alt={name} />
    </IconWrapper>
  );
};

const Icon = {
  Default,
  CheckList,
  Telescope,
  Clock,
  Plus,
  RoundCheck,
  Check,
  Warning,
  Saramin,
  Github
};

export default Icon;

