import { useCallback } from "react";
import styled from "@emotion/styled";
import Text from "../../common/Text";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import formatEventDateToString from "../../../utils/formatEventDateToString";

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

  const date = formatEventDateToString(event);

  const onEdit = useCallback(() => {
    setModalContent({ type: "edit", width: 500 });
  }, [setModalContent]);

  const onDelete = useCallback(() => {
    setModalContent({ type: "confirm", width: 400 });
  }, [setModalContent]);

  const onClose = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return (
    <ContentContainer>
      <InfoHeader>
        <Text size={18} strong>
          {event.title}
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
            onClick={onClose}
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
