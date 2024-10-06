import Select from "react-select";
import styled from "@emotion/styled";
import createOptions from "../../../utils/createOptions";
import colorStyles from "./colorStyles";
import useTimeSelect from "../../../hooks/useTimeSelect";

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

const labeType = {
  start: "시작 시간",
  end: "종료 시간"
};

const TimeSelect = ({ type, label, ...props }) => {
  const { timeRange, handleHourChange, handleMinuteChange } =
    useTimeSelect(type);

  return (
    <Wrapper>
      <Label>{labeType[type] || label}</Label>
      <SelectContainer>
        <Select
          value={{
            label: timeRange.hour,
            value: timeRange.hour
          }}
          isSearchable={true}
          styles={colorStyles}
          name="hour"
          options={createOptions(24)}
          onChange={handleHourChange}
        />
        <Select
          value={{
            label: timeRange.minute,
            value: timeRange.minute
          }}
          isSearchable={true}
          styles={colorStyles}
          name="minute"
          options={createOptions(12, 5)}
          onChange={handleMinuteChange}
        />
      </SelectContainer>
    </Wrapper>
  );
};

export default TimeSelect;

