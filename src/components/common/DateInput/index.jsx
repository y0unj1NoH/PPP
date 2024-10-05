import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";

import styled from "@emotion/styled";

import Input from "../Input";
import Icon from "../Icon";
import DatePicker from "../DatePicker";

import validateYYMMDD from "../../../utils/validateYYMMDD";
import useDatePicker from "../../../hooks/useDatePicker";
import { dateRangeAtom } from "../../../recoil/dateRangeAtom";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  height: 100%;
  right: 8px;
  bottom: 0;

  cursor: pointer;

  &:hover {
    color: #907ad6;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #7e7e7e;
`;

const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  width: 100%;
`;

const labelType = {
  start: "시작일",
  end: "종료일"
};

const placeholderType = {
  start: "시작일 설정",
  end: "종료일 설정"
};

const DateInput = ({ type, label = "", ...props }) => {
  const [dateRange, setDateRange] = useRecoilState(dateRangeAtom);

  const [invalid, setInvalid] = useState(false);
  const [
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
    datePickerAnchorRef
  ] = useDatePicker();

  useEffect(() => {
    if (selectedDate) {
      const newDateRange =
        selectedDate.start === selectedDate.end
          ? { ...dateRange, [type]: selectedDate.start }
          : { ...selectedDate };

      // Only update state if there is an actual change
      if (JSON.stringify(newDateRange) !== JSON.stringify(dateRange)) {
        setDateRange(newDateRange);
      }
    }
  }, [selectedDate, type, dateRange, setDateRange]);

  const handleInputChange = (e) => {
    const { value } = e.target;

    if (value.length > 8) {
      return;
    }

    const formattedValue = value
      .replace(/\D/g, "")
      .replace(/^(\d{0,2})(\d{0,2})(\d{0,2})$/, "$1.$2.$3")
      .replace(/(\.{1,2})$/g, "");

    e.target.value = formattedValue;

    setInvalid(value.length === 8 && !validateYYMMDD(value));
    setDateRange({ ...dateRange, [type]: formattedValue });
  };

  const handleIconClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  // TODO: css도 정리하기 일단 기능 코드만 정리함
  const datePickerStyle = {
    position: "absolute",
    top: "36px",
    width: "300px",
    zIndex: 10000
  };

  return (
    <DateInputContainer style={{ ...props.style }}>
      <Label>{labelType[type] || label}</Label>
      <InputContainer ref={datePickerAnchorRef}>
        <Input
          block
          invalid={invalid}
          type="text"
          value={dateRange[type]}
          onChange={handleInputChange}
          placeholder={placeholderType[type]}
          style={{
            width: "100%",
            height: "32px",
            borderRadius: "6px"
          }}
        />
        <StyledIcon onClick={handleIconClick}>
          <Icon.Default name="calendar" size={20} color={"#907ad6"} />
        </StyledIcon>
      </InputContainer>
      {showDatePicker &&
        datePickerAnchorRef.current &&
        ReactDOM.createPortal(
          <DatePicker
            setVisible={setShowDatePicker}
            setSelectedDate={setSelectedDate}
            style={{ ...datePickerStyle }}
          />,
          datePickerAnchorRef.current
        )}
    </DateInputContainer>
  );
};

export default DateInput;

