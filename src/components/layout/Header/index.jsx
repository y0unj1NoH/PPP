import { Link as LinkDOM } from "react-router-dom";
import styled from "@emotion/styled";
import Icon from "../../common/Icon";
import PPP from "../../../assets/logo.svg";

// TODO: img 말고 컴포넌트로 만들기
// import PPP from "../../../assets/logo.svg?react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px;

  background-color: #f9fbfc;
  box-sizing: border-box;

  &.top {
    padding: 32px;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.2);
  }
`;

const Link = styled(LinkDOM)`
  text-decoration: none;
  display: inline-flex;
`;

// TODO: 데스크탑 헤더부터 만들자
// TODO: 모바일 헤더 만들자

const HamburgerButton = ({ onClick, ...props }) => {
  return (
    <Icon.Default
      name="menu"
      size={42}
      color="#8F8F8F"
      onClick={onClick}
      style={{ ...props.style }}
    />
  );
};

const Header = ({ type = "desktop", onClick, ...props }) => {
  const Logo = () => {
    return <img src={PPP} alt="logo" />;
  };

  return (
    <HeaderContainer className={type === "mobileTop" ? "top" : ""}>
      {type === "mobileTop" && <HamburgerButton style={{ opacity: 0 }} />}

      <Link to={"/"}>
        <Logo />
      </Link>
      {type !== "desktop" && (
        <HamburgerButton onClick={onClick} style={{ cursor: "pointer" }} />
      )}
    </HeaderContainer>
  );
};

export default Header;

