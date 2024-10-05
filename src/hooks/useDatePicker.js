import { useState, useRef } from "react";

const useDatePicker = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerAnchorRef = useRef(null);

  return [
    showDatePicker,
    setShowDatePicker,
    selectedDate,
    setSelectedDate,
    datePickerAnchorRef
  ];
};

export default useDatePicker;

