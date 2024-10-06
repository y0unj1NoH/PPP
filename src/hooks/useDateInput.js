import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import validateYYMMDD from "../utils/validateYYMMDD";
import useDatePicker from "./useDatePicker";
import { dateRangeAtom } from "../recoil/dateRangeAtom";

const useDateInput = type => {
  const [dateRange, setDateRange] = useRecoilState(dateRangeAtom);
  const [invalid, setInvalid] = useState(false);
  const [
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
    datePickerAnchorRef
  ] = useDatePicker();

  useEffect(
    () => {
      if (selectedDate) {
        const newDateRange =
          selectedDate.start === selectedDate.end
            ? { ...dateRange, [type]: selectedDate.start }
            : { ...selectedDate };

        if (JSON.stringify(newDateRange) !== JSON.stringify(dateRange)) {
          setDateRange(newDateRange);
        }
      }
    },
    [selectedDate, type, dateRange, setDateRange]
  );

  const handleInputChange = e => {
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

  return {
    dateRange,
    invalid,
    showDatePicker,
    datePickerAnchorRef,
    handleInputChange,
    handleIconClick,
    setShowDatePicker,
    setSelectedDate
  };
};

export default useDateInput;
