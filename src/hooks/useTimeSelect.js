import { useState } from "react";

const useTimeSelect = () => {
  const [startTime, setStartTime] = useState({ hour: "00", minute: "00" });
  const [endTime, setEndTime] = useState({ hour: "00", minute: "00" });

  return { startTime, endTime, setStartTime, setEndTime };
};

export default useTimeSelect;
