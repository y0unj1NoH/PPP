import { Link as LinkDOM, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Header from "../../Layout/Header";
import SideBarItem from "./SideBarItem";

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 300px;
  height: 100vh;
  padding: 32px 16px;

  background-color: #f9fbfc;
  border: 2px solid red;
  box-sizing: border-box;
`;

const Link = styled(LinkDOM)`
  text-decoration: none;
  width: 100%;
  // border: 1px solid blue;
`;

const SideBar = () => {
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
      <Header />
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
    </SideBarContainer>
  );
};

export default SideBar;

