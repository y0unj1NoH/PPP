import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

import TimeSelect from "../../common/TimeSelect";
import useTimeSelect from "../../../hooks/useTimeSelect";
import { timeRangeAtom } from "../../../recoil/timeRangeAtom";

const DateComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 16px;
  width: 100%;

  // border: 1px solid #c5c5c5;
`;

// TODO: 토글 껏다키면 00:00으로 초기화되는 버그 해결해야 함
const TimeRangeSelect = () => {
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);

  const { startTime, endTime, setStartTime, setEndTime } = useTimeSelect();

  useEffect(() => {
    // console.log("TimeRangeSelect", timeRange);
    const newTimeRange = { start: { ...startTime }, end: { ...endTime } };

    if (JSON.stringify(newTimeRange) !== JSON.stringify(timeRange)) {
      setTimeRange(newTimeRange);
    }
  }, [startTime, endTime, timeRange, setTimeRange]);

  return (
    <DateComponentContainer>
      <TimeSelect
        label="시작 시간"
        defaultValue={timeRange.start}
        onChange={setStartTime}
      />
      <TimeSelect
        label="종료 시간"
        defaultValue={timeRange.end}
        onChange={setEndTime}
      />
    </DateComponentContainer>
  );
};

export default TimeRangeSelect;

