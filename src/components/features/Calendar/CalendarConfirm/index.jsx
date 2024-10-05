import styled from "@emotion/styled";
import Text from "../../../common/Text";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const CalendarConfirm = ({ setVisible, event, setModalContent }) => {
  // TODO: 함수 최적화
  const onDelete = () => {
    event && event.remove();
    setVisible(false);
  };

  const onCancel = () => {
    setModalContent({ type: "info", width: 300 });
  };

  return (
    <ContentContainer>
      <HeaderContainer>
        <Icon.Warning size={26} />
        <Text size={18} strong>
          {"삭제하시겠습니까?"}
        </Text>
      </HeaderContainer>
      <ButtonContainer>
        <Button size="medium" label="아니요" onClick={onCancel} />
        <Button primary size="medium" label="네" onClick={onDelete} />
      </ButtonContainer>
    </ContentContainer>
  );
};

export default CalendarConfirm;
