import PPP from "../../../assets/logo.svg";
// TODO: img 말고 컴포넌트로 만들기
// import PPP from "../../../assets/logo.svg?react";

const Logo = ({ onClick }) => {
  return <img src={PPP} onClick={onClick} alt="logo" />;
};

export default Logo;

