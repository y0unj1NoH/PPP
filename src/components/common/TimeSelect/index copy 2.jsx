import Select from "react-select";
import styled from "@emotion/styled";
import createOptions from "../../../utils/createOptions";
import colorStyles from "./colorStyles";
import { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { timeRangeAtom } from "../../../recoil/timeRangeAtom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  width: 100%;
`;

const Label = styled.label`
  display: block;
  width: 100%;

  font-size: 14px;
  color: #7e7e7e;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;

  width: 100%;
  & > * {
    width: 50%;
    font-weight: 300;
  }
`;
// TODO: select 높이 줄이기, 여백이 많아 보임
// const DEFAULT_TIME = { hour: "00", minute: "00" };

const labeType = {
  start: "시작 시간",
  end: "종료 시간"
};

const defaultAtom = {
  start: { hour: "99", minute: "99" },
  end: { hour: "99", minute: "99" }
};

const TimeSelect = ({ type, label, ...props }) => {
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);
  const isInitialMount = useRef(true);

  const [time, setTime] = useState(defaultAtom[type]);

  useEffect(() => {
    if (isInitialMount.current) {
      if (JSON.stringify(timeRange[type]) !== JSON.stringify(defaultAtom)) {
        isInitialMount.current = false;
        setTime(timeRange[type]);
      }
    }
  }, [timeRange, type]);

  useEffect(() => {
    console.log({ ...timeRange });
    const newTimeRange = {
      ...timeRange,
      [type]: { ...time }
    };

    if (JSON.stringify(newTimeRange) !== JSON.stringify(timeRange)) {
      setTimeRange(newTimeRange);
    }
  }, [type, time, timeRange, setTimeRange]);

  const defaultHour = {
    label: time.hour,
    value: time.hour
  };

  const defaultMinute = {
    label: time.minute,
    value: time.minute
  };

  return (
    <Wrapper>
      <Label>{labeType[type] || label}</Label>
      <SelectContainer>
        <Select
          defaultValue={defaultHour}
          isSearchable={true}
          styles={colorStyles}
          name="hour"
          options={createOptions(24)}
          onChange={(selected) => {
            setTime({ ...time, hour: selected.value });
          }}
        />
        <Select
          defaultValue={defaultMinute}
          isSearchable={true}
          styles={colorStyles}
          name="minute"
          options={createOptions(12, 5)}
          onChange={(selected) => {
            setTime({ ...time, minute: selected.value });
          }}
        />
      </SelectContainer>
    </Wrapper>
  );
};

export default TimeSelect;

