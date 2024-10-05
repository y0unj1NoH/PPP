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

const TimeSelect = ({ type, label, ...props }) => {
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);

  console.log(timeRange);

  return (
    <Wrapper>
      <Label>{labeType[type] || label}</Label>
      <SelectContainer>
        <Select
          value={{
            label: timeRange[type].hour,
            value: timeRange[type].hour
          }}
          isSearchable={true}
          styles={colorStyles}
          name="hour"
          options={createOptions(24)}
          onChange={(selected) => {
            const newTimeRange = {
              hour: selected.value,
              minute: timeRange[type].minute
            };

            setTimeRange({ ...timeRange, [type]: { ...newTimeRange } });
          }}
        />
        <Select
          value={{
            label: timeRange[type].minute,
            value: timeRange[type].minute
          }}
          isSearchable={true}
          styles={colorStyles}
          name="minute"
          options={createOptions(12, 5)}
          onChange={(selected) => {
            const newTimeRange = {
              hour: timeRange[type].hour,
              minute: selected.value
            };

            console.log({ ...timeRange, [type]: { ...newTimeRange } });

            setTimeRange({ ...timeRange, [type]: { ...newTimeRange } });
          }}
        />
      </SelectContainer>
    </Wrapper>
  );
};

export default TimeSelect;

