import { subDays, format } from "date-fns";

const getDateRangeObject = (selectInfo, subDayNum = 1) => {
  const startDate = selectInfo.start;
  const endDate =
    selectInfo.end === null
      ? selectInfo.start
      : subDays(selectInfo.end, subDayNum);

  return {
    start: format(startDate, "yy.MM.dd"),
    end: format(endDate, "yy.MM.dd")
  };
};

export default getDateRangeObject;
