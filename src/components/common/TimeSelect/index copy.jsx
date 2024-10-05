import Select from "react-select";
import styled from "@emotion/styled";
import createOptions from "../../../utils/createOptions";
import colorStyles from "./colorStyles";
import { useState, useEffect } from "react";

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

const createDefaultValue = (value) => ({
  hour: { label: value.hour, value: value.hour },
  minute: { label: value.minute, value: value.minute }
});

const TimeSelect = ({ label, defaultValue, onChange, ...props }) => {
  // console.log("Select", defaultValue);
  const [time, setTime] = useState(defaultValue);

  const defaultTime = createDefaultValue(defaultValue);

  useEffect(() => {
    onChange && onChange(time);
  }, [time, onChange]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectContainer>
        <Select
          defaultValue={defaultTime.hour}
          isSearchable={true}
          styles={colorStyles}
          name="hour"
          options={createOptions(24)}
          onChange={(selected) => {
            setTime({ ...time, hour: selected.value });
          }}
        />
        <Select
          defaultValue={defaultTime.minute}
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

