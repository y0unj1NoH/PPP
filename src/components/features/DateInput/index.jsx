import React, { useEffect, useState } from "react";
import Input from "../../common/Input";
import { parse, isValid } from "date-fns";
import Icon from "../../common/Icon";
import styled from "@emotion/styled";
import DatePicker from "../../common/DatePicker";

const InputContainer = styled.div`
  position: relative;
  width: 200px;
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
    color: red;
    // color: #907ad6;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
`;

const DateInput = ({ label = "", value = "", onChange }) => {
  const [date, setDate] = useState(value);
  const [invalid, setInvalid] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (selectedDate) {
      const startDate = selectedDate.start;

      const start = `${startDate.getFullYear().toString().slice(2)}.${(
        startDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}.${startDate.getDate().toString().padStart(2, "0")}`;

      setDate(`${start}`);
    }
  }, [selectedDate]);

  const handleInputChange = (e) => {
    if (e.target.value.length > 8) {
      return;
    }

    e.target.value = e.target.value
      .replace(/\D/g, "")
      .replace(/^(\d{0,2})(\d{0,2})(\d{0,2})$/, "$1.$2.$3")
      .replace(/(\.{1,2})$/g, "");

    const value = e.target.value;
    setInvalid(value.length === 8 && !validateDate(value));
    setDate(value);

    onChange && onChange(value);
  };

  const validateDate = (date) => {
    const parsedDate = parse(date, "yy.MM.dd", new Date());
    return isValid(parsedDate);
  };

  const handleIconClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const datePickerStyle = {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1
  };
  return (
    <>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          block
          invalid={invalid}
          type="text"
          value={date}
          onChange={handleInputChange}
          placeholder="시작일 설정"
          style={{ width: "100%", height: "100%" }}
        />
        <StyledIcon onClick={handleIconClick}>
          <Icon.Default name="calendar" size={20} color={"#907ad6"} />
        </StyledIcon>
      </InputContainer>
      <DatePicker
        visible={showDatePicker}
        setVisible={setShowDatePicker}
        setSelectedDate={setSelectedDate}
        style={{ ...datePickerStyle }}
      />
    </>
  );
};

export default DateInput;

// TODO: 데이트 피커를 쓰는 곳마다 계속 가져올거니까 간단하게 훅으로 만들자
// TODO: 달력 아이콘 색깔 언제 어떤 색으로 변경할지

