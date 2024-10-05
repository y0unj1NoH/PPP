import styled from "@emotion/styled";
import DateInput from "../../common/DateInput";

const DateComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 16px;
  width: 100%;

  // border: 1px solid #c5c5c5;
`;

const DateRangeInput = () => {
  return (
    <DateComponentContainer>
      <DateInput type="start" label="시작일" />
      <DateInput type="end" label="종료일" />
    </DateComponentContainer>
  );
};

export default DateRangeInput;

// TODO: 데이트 피커를 쓰는 곳마다 계속 가져올거니까 간단하게 훅으로 만들자
// TODO: 달력 아이콘 색깔 언제 어떤 색으로 변경할지
// TODO: 달력 왜 안 옮겨지고 시작일 위에만 있지..? createPortal 안해서 그럼

