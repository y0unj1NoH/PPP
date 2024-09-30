import { useState } from "react";
import styled from "@emotion/styled";
import Text from "../../common/Text";
import Icon from "../../common/Icon";
import Input from "../../common/Input";
import Select from "../../common/Select";
import CheckBox from "../../common/CheckBox";
import Button from "../../common/Button";
import dateToStr from "../../../utils/dateToStr";
import Check from "../../common/Icon/Check";

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
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

// const AddModal = ({ setVisible, event, setModalType }) => {
const AddModal = ({ setVisible, event }) => {
  const [isCheck, setIsCheck] = useState(false);

  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent"
  };

  const title = event.title;
  const date = dateToStr(event);

  // const onCancel = () => {
  //   setModalType({ type: "info", width: 300 });
  // };

  // const onSave = () => {
  //   setModalType({ type: "info", width: 300 });
  // };

  return (
    <ContentContainer>
      <InfoHeader>
        <Text size="large" color="#907AD6" strong>
          일정 수정
        </Text>
        <Button
          onClick={() => setVisible(false)}
          label={<Icon.Default name="x" size={24} color="#79747E" />}
          style={{ ...buttonStyle }}
        />
      </InfoHeader>
      {/* TODO: input 비어 놓으면 invalid 표시하기 */}
      <Input value={title} block />
      <div>
        <Text block>{date}</Text>
        {isCheck ? <Text block>시간 설정 부분</Text> : null}
        {/* 컴포넌트에 훅을 써도 이 훅은 또 다른거니까 또 이렇게 훅 만들어서 해야할까? */}
        <CheckBox
          name="시간 설정"
          on={isCheck}
          onChange={() => setIsCheck(!isCheck)}
        />
      </div>
      <ButtonContainer>
        <Button size="medium" label="Cancel" />
        <Button primary size="medium" label="Save" />
        {/* <Button size="medium" label="Cancel" onClick={onCancel} />
        <Button primary size="medium" label="Save" onClick={onSave} /> */}
      </ButtonContainer>
    </ContentContainer>
  );
};

export default AddModal;

