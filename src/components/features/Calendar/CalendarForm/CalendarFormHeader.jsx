import styled from "@emotion/styled";
import Text from "../../../common/Text";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CalendarFormHeader = ({ setVisible, isEditMode }) => (
  <HeaderContainer>
    <Text size="large" color="#907AD6" strong>
      {isEditMode ? "일정 편집" : "일정 추가"}
    </Text>
    <Button
      onClick={() => setVisible(false)}
      label={<Icon.Default name="x" size={24} color="#79747E" />}
      style={{ background: "none", border: "none" }}
    />
  </HeaderContainer>
);

export default CalendarFormHeader;

