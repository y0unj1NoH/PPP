import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "@emotion/styled";
import getDateRangeObject from "../../../utils/getDateRangeObject";

// TODO: 묘하게 날짜 가운데 정렬이 안된다.
const DatePickerWrapper = styled.div`
  &.datePicker {
    --fc-border-color: #fff;
    .fc .fc-media-screen .fc-direction-ltr .fc-theme-standard {
      width: 300px;
    }

    .fc {
      padding: 16px;
      max-width: 300px;
      border: 1px solid rgba(144, 122, 214, 0.33);
      border-radius: 8px;
      box-shadow: 0px 2px 23px 0px #ededed;
      background-color: #fff;
      height: auto;
    }

    .fc-dayGridMonth-view {
      height: 200px;
    }

    /* 요일 행 높이지정 */
    .fc .fc-scrollgrid-section table {
      height: 24px;
    }

    /* 요일 행 TEXT 중간 정렬 */
    .fc td,
    .fc th {
      vertical-align: middle;
    }

    .fc-day .fc-daygrid-day-number {
      width: 28px;
      margin: 0 auto;
      text-align: center;
      font-size: 1.6rem;
      line-height: 26px;
      color: #252525;
      // border: 1px solid red;
      padding: 0;
    }

    .fc-day.fc-day-today .fc-daygrid-day-number {
      border-radius: 50%;
      background-color: #907ad6;
      color: #fff;
    }

    .fc .fc-daygrid-day.fc-day-today,
    .fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
      background-color: #fff;
    }

    .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events,
    .fc .fc-daygrid-day-frame {
      min-height: auto;
    }

    .fc-col-header-cell-cushion {
      text-align: center;
      font-size: 1.2rem;
      opacity: 0.5;
      color: #252525;
    }

    .fc .fc-toolbar-title {
      font-weight: 500;
      font-size: 1.4rem;
      text-align: center;
    }

    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
      margin-left: 0;
    }

    .fc .fc-toolbar.fc-header-toolbar {
      margin-bottom: 0;
    }

    .fc-header-toolbar .fc-toolbar-chunk:nth-of-type(3) {
      display: flex;
      align-items: center;

      & > button {
        border: none;
        background-color: transparent;
        padding: 4px 6px;
      }

      & span::before {
        font-size: 1.8rem;
      }

      & > button:hover {
        color: #907ad6;
      }
    }

    /* TODO: 각 테이블 그리드마다 정사각형 만들기 여백이 생기는데 어디서 생기는지 모르겠다. */

    .fc-col-header-cell.fc-day.fc-day-sun,
    .fc-day.fc-day-sun.fc-daygrid-day {
      /* border: 1px solid red; */
    }

    /* TODO: 테이블 그리드를 없애니까 title이랑 달력이 일렬로 안맞춰짐 고쳐야함 */
  }
`;
const DatePicker = ({ setVisible, setSelectedDate, ...props }) => {
  const handleDateSelect = (selectInfo) => {
    const dateRangeObject = getDateRangeObject(selectInfo);
    setSelectedDate({ ...dateRangeObject });
    setVisible(false);
  };

  return (
    <DatePickerWrapper className="datePicker" style={{ ...props.style }}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "title",
          center: "",
          right: "prev next"
        }}
        initialView="dayGridMonth"
        selectable={true}
        select={handleDateSelect}
        fixedWeekCount={false}
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;

// TODO: 담은 날짜 동그라미 표시하기
// TODO: css 정리하기

