const dateToStr = (event) => {
  if (!event) return "";

  let startDate = `${event.start.getMonth() + 1}월 ${event.start.getDate()}일`;
  let endDate = event.end
    ? `${event.end.getMonth() + 1}월 ${event.end.getDate()}일`
    : "";

  const convertZero = (num) => (num === 0 ? "00" : num < 10 ? `0${num}` : num);
  const allDay = event.allDay;

  if (!allDay) {
    startDate += ` ${convertZero(event.start.getHours())}:${convertZero(
      event.start.getMinutes()
    )}`;

    endDate += endDate
      ? ` ${convertZero(event.end.getHours())}:${convertZero(
          event.end.getMinutes()
        )}`
      : "";
  }

  const date = endDate ? `${startDate} ~ ${endDate}` : startDate;

  return date;
};

export default dateToStr;

