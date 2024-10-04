import Select from "react-select";
import styled from "@emotion/styled";
import createOptions from "../../../utils/createOptions";
import colorStyles from "./colorStyles";

const DEFAULT_TIME = { hour: "00", minute: "00" };

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

const TimeSelect = ({
  defaultValue = DEFAULT_TIME,
  label,
  hourRef,
  minuteRef,
  ...props
}) => {
  const defaultHour = { label: defaultValue.hour, value: defaultValue.hour };

  const defaultMinute = {
    label: defaultValue.minute,
    value: defaultValue.minute
  };

  return (
    <Wrapper>
      <Label>{label}</Label>
      <SelectContainer>
        <Select
          ref={hourRef}
          defaultValue={defaultHour}
          isSearchable={true}
          styles={colorStyles}
          name="hour"
          options={createOptions(24)}
        />
        <Select
          ref={minuteRef}
          defaultValue={defaultMinute}
          isSearchable={true}
          styles={colorStyles}
          name="minute"
          options={createOptions(12, 5)}
        />
      </SelectContainer>
    </Wrapper>
  );
};

export default TimeSelect;

