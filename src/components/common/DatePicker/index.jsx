import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 달력
import interactionPlugin from "@fullcalendar/interaction";
import { isSameDay, subDays } from "date-fns";
import "./DatePicker.css";

const DatePicker = ({ visible, setVisible, setSelectedDate, ...props }) => {
  const handleDateSelect = (selectInfo) => {
    console.log(selectInfo);
    const startDate = selectInfo.start;
    const endDate = subDays(selectInfo.end, 1);

    setSelectedDate({
      start: startDate,
      end: isSameDay(startDate, endDate) ? "" : endDate
    });

    setVisible(false);
  };

  return (
    <>
      {visible && (
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev next"
          }}
          initialView="dayGridMonth" // 월간 달력으로 디폴트 화면
          selectable={true} // 달력 드래그해서 날짜 및 시간 선택 가능
          select={handleDateSelect} // 날짜 선택했을 때 실행되는 함수(우리는 추가 모달 뜨게 해야함)
          fixedWeekCount={false}
          style={{ ...props.style }}
        />
      )}
    </>
  );
};

export default DatePicker;

// TODO: 날짜 인포 객체 보기
// TODO: 선택한 날짜 set에 담기
// TODO: 담은 날짜 동그라미 표시하기
// TODO: css 정리하기

