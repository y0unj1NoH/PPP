import styled from "@emotion/styled";
import Icon from "../../common/Icon";
import Text from "../../common/Text";

const SideBarItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  // 왜 이거하면 오버플로우 되는지 모르겠다
  // width: 100%;
  padding: 16px;

  // border: 1px solid red;
  border: none;
  border-radius: 8px;
  color: #202020;
  background-color: ${({ active }) =>
    active ? "rgba(197, 180, 251, 0.30)" : "transparent"};

  cursor: pointer;
`;

const icon = {
  Calendar: (
    <Icon.Default name="calendar" size={24} strokeWidth="1.3" color="#1E1E1E" />
  ),
  TodoList: <Icon.CheckList />,
  News: <Icon.Telescope />
};

const text = {
  Calendar: "일정 관리",
  TodoList: "할 일",
  News: "새로운 뉴스"
};

const SideBarItem = ({ name, index, active, onClick, ...props }) => {
  return (
    <SideBarItemContainer active={active} onClick={onClick} {...props}>
      {icon[name]}
      <Text strong={active}>{text[name]}</Text>
    </SideBarItemContainer>
  );
};

export default SideBarItem;

