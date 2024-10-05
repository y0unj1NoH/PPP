import styled from "@emotion/styled";
import DateRangeInput from "../../DateRangeInput";
import TimeRangeSelect from "../../TimeRangeSelect";
import CheckBox from "../../../common/CheckBox";
import ErrorText from "../../Error/ErrorText";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: space-between;
  justify-content: center;
  padding: 16px;
  gap: 14px;

  border: 0.5px solid #c5c5c5;
  border-radius: 12px;
`;

const CalendarFormDateTimeSection = ({ errors, isCheck, setIsCheck }) => (
  <SectionContainer>
    <DateRangeInput />
    {errors.date && <ErrorText error={errors.date} />}
    {isCheck && <TimeRangeSelect />}
    <CheckBox
      name="시간 설정"
      on={isCheck}
      onChange={() => setIsCheck(!isCheck)}
      style={{ height: "14px", fontSize: "12px" }}
    />
  </SectionContainer>
);

export default CalendarFormDateTimeSection;

