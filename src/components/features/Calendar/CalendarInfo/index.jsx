import styled from "@emotion/styled";
import Text from "../../../common/Text";
import Button from "../../../common/Button";
import Icon from "../../../common/Icon";
import dateToStr from "../../../../utils/dateToStr";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CalendarInfo = ({ setVisible, event, setModalContent }) => {
  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent"
  };

  // TODO: 함수 최적화
  const title = event.title;
  const date = dateToStr(event);

  const onEdit = () => {
    setModalContent({ type: "edit", width: 500 });
  };

  const onDelete = () => {
    setModalContent({ type: "confirm", width: 400 });
  };

  return (
    <ContentContainer>
      <InfoHeader>
        <Text size={18} strong>
          {title}
        </Text>
        <ButtonContainer>
          <Button
            onClick={onEdit}
            label={<Icon.Default name="edit-2" size={24} color="#79747E" />}
            style={{ ...buttonStyle }}
          />
          <Button
            onClick={onDelete}
            label={<Icon.Default name="trash-2" size={24} color="#79747E" />}
            style={{ ...buttonStyle }}
          />
          <Button
            onClick={() => setVisible(false)}
            label={<Icon.Default name="x" size={24} color="#79747E" />}
            style={{ ...buttonStyle }}
          />
        </ButtonContainer>
      </InfoHeader>
      <Text size={12}>{date}</Text>
    </ContentContainer>
  );
};

export default CalendarInfo;