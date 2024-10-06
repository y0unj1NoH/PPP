import { subDays, format } from "date-fns";

const formatEventDateToString = event => {
  if (!event) return "";

  const startDate = event.start;
  if (event.end === null) return `${format(startDate, "MM월 dd일")}`;

  const allDay = event.allDay;
  const endDate = allDay ? subDays(event.end, 1) : event.end;

  return `${format(startDate, "MM월 dd일")} ${!allDay &&
    format(event.start, "HH:mm")}  ~ ${format(endDate, "MM월 dd일")} ${!allDay &&
    format(event.end, "HH:mm")}`;
};

export default formatEventDateToString;
