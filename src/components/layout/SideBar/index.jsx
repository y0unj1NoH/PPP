import { Link as LinkDOM, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import SideBarItem from "./SideBarItem";
import Header from "../Header";
import Divider from "../../common/Divider";
import Footer from "../Footer";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 300px;
  height: 100vh;
  padding: 32px 16px;

  background-color: #f9fbfc;
  box-sizing: border-box;

  line-height: 1.5;
  border-right: 1px solid #d3e2e8;
`;

const Link = styled(LinkDOM)`
  text-decoration: none;
  width: 100%;
`;

const SideBar = ({ headerType = "desktop" }) => {
  const pathName = useLocation().pathname;

  const menus = [
    { name: "Calendar", path: "/" },
    { name: "TodoList", path: "/todoList" },
    { name: "News", path: "/news" }
  ];

  const onClick = (path) => {
    console.log(path);
  };

  return (
    <SideBarContainer>
      <Header type={headerType} />
      <div style={{ flex: 1, width: "100%" }}>
        {menus.map((menu, index) => {
          return (
            <Link to={menu.path} key={index}>
              <SideBarItem
                key={index}
                name={menu.name}
                active={pathName === menu.path}
                index={index}
                onClick={() => onClick(menu.path)}
              />
            </Link>
          );
        })}
      </div>
      <Divider type="horizontal" />
      <Footer />
    </SideBarContainer>
  );
};

export default SideBar;

