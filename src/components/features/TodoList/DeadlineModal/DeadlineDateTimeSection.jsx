import styled from "@emotion/styled";
import DatePicker from "../../../common/DatePicker";
import TimeSelect from "../../../common/TimeSelect";
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

const DeadlineDateTimeSection = ({ errors, isCheck, setIsCheck }) => {
  // TODO: DatePicker로부터 date를 받아와야 함
  // TODO: TimeSelect로부터 timeRange를 받아와야 함
  return (
    <SectionContainer>
      <DatePicker />
      {/* 이미 지난 날짜면 에러 */}
      {errors.date && <ErrorText error={errors.date} />}
      {isCheck && <TimeSelect />}
      <CheckBox
        name="시간 설정"
        on={isCheck}
        onChange={() => setIsCheck(!isCheck)}
        style={{ height: "14px", fontSize: "12px" }}
      />
    </SectionContainer>
  );
};

export default DeadlineDateTimeSection;

