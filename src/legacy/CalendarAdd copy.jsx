import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "@emotion/styled";
import Text from "../components/common/Text";
import Icon from "../components/common/Icon";
import Input from "../components/common/Input";
import CheckBox from "../components/common/CheckBox";
import Button from "../components/common/Button";
import TimeRangeSelect from "../components/features/TimeRangeSelect";
import DateRangeInput from "../components/features/DateRangeInput";
import formatTimeToHHMMSS from "../utils/formatTimeToHHMMSS";
import getDateRangeObject from "../utils/getDateRangeObject";
import formatDateRangeToYYYYMMDD from "../utils/formatDateRangeToYYYYMMDD";
import { dateRangeAtom } from "../recoil/dateRangeAtom";

import { format, subDays } from "date-fns";

import { v4 } from "uuid";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  line-height: 28px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: space-between;
  justify-content: center;
  padding: 16px;
  gap: 14px;

  border: 0.5px solid #c5c5c5;
  border-radius: 12px;
`;

const subtractOneDay = (yyyymmdd) => {
  const date = new Date(yyyymmdd);
  const newDate = subDays(date, 1);
  return format(newDate, "yy.MM.dd");
};

// const AddModal = ({ setVisible, event, setModalType }) => {
const CalendarAdd = ({ setVisible, selectInfo }) => {
  const [title, setTitle] = useState("");
  const [dateRange, setDateRange] = useRecoilState(dateRangeAtom);
  const [timeRange, setTimeRange] = useState({});
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    setDateRange(getDateRangeObject(selectInfo));
  }, []);

  const buttonStyle = {
    border: "none",
    backgroundColor: "transparent"
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    let { start, end } = formatDateRangeToYYYYMMDD(dateRange);

    if (isCheck) {
      start = `${start}T${formatTimeToHHMMSS(timeRange.start)}`;
      end = `${end}T${formatTimeToHHMMSS(timeRange.end)}`;
    }

    if (start !== end && !isCheck) end = subtractOneDay(end);

    if (title) {
      calendarApi.addEvent({
        id: v4(),
        title,
        start,
        end
      });
    }

    setVisible(false);
  };
  // InfoHeader → CalendarAddHeader
  // TitleInput → CalendarTitleInput
  // DateAndTimeSection → CalendarDateTimeSection
  // ActionButtons → CalendarActionButtons

  return (
    <ContentContainer className="calendarAdd">
      <InfoHeader>
        <Text size="large" color="#907AD6" strong>
          일정 추가
        </Text>
        <Button
          onClick={() => setVisible(false)}
          label={<Icon.Default name="x" size={24} color="#79747E" />}
          style={{ ...buttonStyle }}
        />
      </InfoHeader>
      {/* TODO: input 비어 놓으면 invalid 표시하기 */}
      <Input
        type="text"
        value={title}
        block
        placeholder="일정 제목"
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 8px",
          borderRadius: "8px"
        }}
      />
      <DateContainer>
        <DateRangeInput />
        {isCheck && <TimeRangeSelect setTimeRange={setTimeRange} />}
        <CheckBox
          name="시간 설정"
          on={isCheck}
          onChange={() => setIsCheck(!isCheck)}
          style={{ height: "14px", fontSize: "12px" }}
        />
      </DateContainer>
      <ButtonContainer>
        <Button
          size="medium"
          label="Cancel"
          onClick={() => setVisible(false)}
        />
        <Button primary size="medium" label="Save" />
        {/* <Button size="medium" label="Cancel" onClick={onCancel} />
        <Button primary size="medium" label="Save" onClick={onSave} /> */}
      </ButtonContainer>
    </ContentContainer>
  );
};

export default CalendarAdd;

