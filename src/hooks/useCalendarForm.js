import { useState, useEffect, useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { dateRangeAtom } from "../recoil/dateRangeAtom";
import { timeRangeAtom } from "../recoil/timeRangeAtom";
import formatTimeToHHMMSS from "../utils/formatTimeToHHMMSS";
import getDateRangeObject from "../utils/getDateRangeObject";
import formatDateRangeToYYYYMMDD from "../utils/formatDateRangeToYYYYMMDD";
import { format, addDays, parse, isAfter } from "date-fns";
import { v4 } from "uuid";
import validateYYMMDD from "../utils/validateYYMMDD";

const addOneDay = yyyymmdd => {
  const date = new Date(yyyymmdd);
  const newDate = addDays(date, 1);
  return format(newDate, "yyyy-MM-dd");
};
const isDateAfter = (start, end) => {
  const parsedDate1 = parse(start, "yy.MM.dd", new Date());
  const parsedDate2 = parse(end, "yy.MM.dd", new Date());
  return isAfter(parsedDate1, parsedDate2);
};

const extractTimeRange = event => {
  return {
    start: {
      hour: event.startStr.split("T")[1].split(":")[0],
      minute: event.startStr.split("T")[1].split(":")[1]
    },
    end: {
      hour: event.endStr.split("T")[1].split(":")[0],
      minute: event.endStr.split("T")[1].split(":")[1]
    }
  };
};

const defaultTimeRange = {
  start: { hour: "00", minute: "00" },
  end: { hour: "00", minute: "00" }
};

const useCalendarForm = ({
  setVisible,
  selectInfo,
  event,
  isEditMode,
  setModalContent
}) => {
  const [title, setTitle] = useState("");
  const [dateRange, setDateRange] = useRecoilState(dateRangeAtom);
  const [timeRange, setTimeRange] = useRecoilState(timeRangeAtom);
  const [isCheck, setIsCheck] = useState(event && event.startStr.includes("T"));

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const initializeEvent = useCallback(
    event => {
      event.startStr.includes("T")
        ? setTimeRange(extractTimeRange(event))
        : setTimeRange(defaultTimeRange);

      setTitle(event.title);
      event.allday
        ? setDateRange(getDateRangeObject(event))
        : setDateRange(getDateRangeObject(event, 0));
    },
    [setDateRange, setTimeRange]
  );

  useEffect(
    () => {
      selectInfo && setDateRange(getDateRangeObject(selectInfo));
      event && initializeEvent(event);
    },
    [selectInfo, event, setDateRange, initializeEvent]
  );

  const validate = useCallback(
    () => {
      const newErrors = {};

      if (!title) {
        newErrors.title = "일정 제목을 입력해주세요";
      }

      if (isDateAfter(dateRange.start, dateRange.end)) {
        newErrors.date = "시작 날짜가 끝 날짜보다 늦습니다";
      }

      if (!validateYYMMDD(dateRange.start) || !validateYYMMDD(dateRange.end)) {
        newErrors.date = "올바른 날짜를 입력해주세요";
      }

      return newErrors;
    },
    [title, dateRange]
  );

  const onSubmit = useCallback(
    async () => {
      let { start, end } = formatDateRangeToYYYYMMDD(dateRange);

      if (isCheck) {
        start = `${start}${formatTimeToHHMMSS(timeRange.start)}`;
        end = `${end}${formatTimeToHHMMSS(timeRange.end)}`;
      }

      if (start !== end && !isCheck) {
        console.log("before end", end);
        end = addOneDay(end);
        console.log("after end", end);
      }

      if (isEditMode) {
        event.setProp("title", title);
        event.setAllDay(!isCheck);
        event.setDates(start, end);
      } else {
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        calendarApi.addEvent({
          id: v4(),
          title,
          start,
          end
        });
      }
    },
    [selectInfo, dateRange, isCheck, timeRange, title]
  );

  const handleSubmit = useCallback(
    async e => {
      setIsLoading(true);
      e.preventDefault();
      const newErrors = validate();
      if (Object.keys(newErrors).length === 0) {
        await onSubmit();
        isEditMode
          ? setModalContent({ type: "info", width: 300 })
          : setVisible(false);
      }
      setErrors(newErrors);
      setIsLoading(false);
    },
    [validate, onSubmit, isEditMode, setModalContent, setVisible]
  );

  return useMemo(
    () => ({
      setVisible,
      isEditMode,
      title,
      setTitle,
      isCheck,
      setIsCheck,
      setTimeRange,
      errors,
      isLoading,
      handleSubmit
    }),
    [
      setVisible,
      isEditMode,
      title,
      isCheck,
      setTimeRange,
      errors,
      isLoading,
      handleSubmit
    ]
  );
};

export default useCalendarForm;
