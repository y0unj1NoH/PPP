import styled from "@emotion/styled";
import Input from "../../../common/Input";
import Icon from "../../../common/Icon";
import Button from "../../../common/Button";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { dateTimeRangeAtom } from "../../../../recoil/dateTimeRangeAtom";

const TaskInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  width: 100%;
  height: 42px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  height: 100%;
  right: 12px;
  top: 50%;
  transform: translateY(-41%);

  cursor: pointer;

  &:hover {
    color: #907ad6;
  }
`;

const TaskInput = ({ setVisible, setModalContent, onChange, onAdd }) => {
  const { dateTimeRange, setDateTimeRange } = useRecoilState(dateTimeRangeAtom);

  const handleIconClick = useCallback(() => {
    setModalContent({ type: "deadline", width: 500 });
    setVisible(true);
  });

  return (
    <TaskInputContainer>
      <InputContainer>
        <Input
          block
          //   invalid={invalid}
          type="text"
          onChange={onChange}
          placeholder="할 일을 입력하세요"
          style={{
            width: "100%",
            padding: "14px 12px",
            borderRadius: "12px",
            fontSize: "1.6rem"
          }}
        />
        {/* TODO: 타임 태그 추가하기 */}
        <StyledIcon>
          <Icon.Clock onClick={handleIconClick} />
        </StyledIcon>
      </InputContainer>
      <Button
        id="button--plus"
        primary
        label={<Icon.Plus size={24} color="white" onClick={onAdd} />}
      />
    </TaskInputContainer>
  );
};

export default TaskInput;

