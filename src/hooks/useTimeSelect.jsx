import { useRef } from "react";

const useTimeSelect = () => {
  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const getSelectedTime = () => {
    const selectedHour = hourRef.current ? hourRef.current.value : "";
    const selectedMinute = minuteRef.current ? minuteRef.current.value : "";
    return { hour: selectedHour, minute: selectedMinute };
  };

  return { hourRef, minuteRef, getSelectedTime };
};

export default useTimeSelect;

