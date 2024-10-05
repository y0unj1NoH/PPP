import styled from "@emotion/styled";
import TimeSelect from "../../common/TimeSelect";

const DateComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 16px;
  width: 100%;

  // border: 1px solid #c5c5c5;
`;

const TimeRangeSelect = () => {
  return (
    <DateComponentContainer>
      <TimeSelect type="start" />
      <TimeSelect type="end" />
    </DateComponentContainer>
  );
};

export default TimeRangeSelect;

