import { useRecoilState } from "recoil";
import { timeRangeAtom } from "../recoil/timeRangeAtom";
const useTimeSelect = type => {
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);

  const handleHourChange = selected => {
    const newTimeRange = {
      hour: selected.value,
      minute: timeRange[type].minute
    };
    setTimeRange({ ...timeRange, [type]: { ...newTimeRange } });
  };

  const handleMinuteChange = selected => {
    const newTimeRange = {
      hour: timeRange[type].hour,
      minute: selected.value
    };
    setTimeRange({ ...timeRange, [type]: { ...newTimeRange } });
  };

  return {
    timeRange: timeRange[type],
    handleHourChange,
    handleMinuteChange
  };
};

export default useTimeSelect;
