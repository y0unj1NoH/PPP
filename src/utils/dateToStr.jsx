const dateToStr = (event) => {
  if (!event) return "";

  let startDate = `${event.start.getMonth() + 1}월 ${event.start.getDate()}일`;
  let endDate = event.end
    ? `${event.end.getMonth() + 1}월 ${event.end.getDate()}일`
    : "";

  const allDay = event.allDay;

  if (!allDay) {
    startDate += ` ${event.start
      .getHours()
      .toString()
      .padStart(2, "0")}:${event.start
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    endDate += endDate
      ? ` ${event.end.getHours().toString().padStart(2, "0")}:${event.end
          .getMinutes()
          .toString()
          .padStart(2, "0")}`
      : "";
  }

  const date = endDate ? `${startDate} ~ ${endDate}` : startDate;

  return date;
};

export default dateToStr;

