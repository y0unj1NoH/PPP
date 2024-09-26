import { Link as LinkDOM } from "react-router-dom";
import styled from "@emotion/styled";

import PPP from "../../../assets/logo.svg";
// TODO: img 말고 컴포넌트로 만들기
// import PPP from "../../../assets/logo.svg?react";

const HeaderContainer = styled.div`
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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="37"
      viewBox="0 0 42 37"
      fill="none"
      style={{ ...props.style }}
      onClick={onClick}
    >
      <path
        d="M0 3.54547C0 1.8861 1.34062 0.545471 3 0.545471H39C40.6594 0.545471 42 1.8861 42 3.54547C42 5.20485 40.6594 6.54547 39 6.54547H3C1.34062 6.54547 0 5.20485 0 3.54547ZM0 18.5455C0 16.8861 1.34062 15.5455 3 15.5455H39C40.6594 15.5455 42 16.8861 42 18.5455C42 20.2048 40.6594 21.5455 39 21.5455H3C1.34062 21.5455 0 20.2048 0 18.5455ZM42 33.5455C42 35.2048 40.6594 36.5455 39 36.5455H3C1.34062 36.5455 0 35.2048 0 33.5455C0 31.8861 1.34062 30.5455 3 30.5455H39C40.6594 30.5455 42 31.8861 42 33.5455Z"
        fill="#8F8F8F"
      />
    </svg>
  );
};

const Header = ({ type = "desktop", onClick, ...props }) => {
  const Logo = ({ onClick }) => {
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

