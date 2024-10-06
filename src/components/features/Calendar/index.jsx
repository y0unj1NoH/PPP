import styled from "@emotion/styled";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "../../common/Modal";
import CalendarAdd from "./CalendarAdd";
import CalendarInfo from "./CalendarInfo";
import CalendarConfirm from "./CalendarConfirm";
import CalendarEdit from "./CalendarEdit";
import useCalendar from "../../../hooks/useCalendar";

const FullCalendarWrapper = styled.div`
  &.fullCalendar {
    .fc {
      height: 95vh;
      margin: 20px;
      /* max-width: 1100px; */
      width: 100%;
      /* padding: 0 16px; */
      margin: 0 auto;
    }

    .fc-daygrid-event {
      border: none;
    }

    /* 요일 행 높이지정 */
    .fc .fc-scrollgrid-section table {
      height: 50px;
    }

    /* 요일 행 TEXT 중간 정렬 */
    .fc td,
    .fc th {
      vertical-align: middle;
    }

    /* 타임 그리드(주별 & 일별)에서의 이벤트 */
    .fc-v-event {
      border-radius: 10px;
      padding: 5px;
      color: black;
    }

    /* 타임 그리드 하루종일 일정 */
    .fc-scrollgrid-shrink {
      height: 70px;
    }

    /* 타임 그리드 30분당 일정 */
    .fc .fc-timegrid-slot-label {
      height: 50px;
    }

    /* 타임 그리드(주별 & 일별)에서 시간 TEXT */
    .fc-timegrid-event .fc-event-time {
      font-size: 1.6rem;
      color: #727272;
    }

    /* 데이 그리드(월별)에서 시간 TEXT */
    .fc-direction-ltr .fc-daygrid-event .fc-event-time {
      font-size: 1.6rem;
      color: #727272;
    }

    /* 타임 그리드(주별 & 일별)에서 내용 TEXT */
    .fc-timegrid-event .fc-event-title {
      font-size: 1.9rem;
      color: black;
    }

    /* 데이 그리드(월별)에서 내용 TEXT */
    .fc-daygrid-block-event .fc-event-title {
      font-size: 1.6rem;
      color: black;
    }

    .fc-event-main-frame {
      border-radius: 20px;
    }

    .fc-day {
      // border: 3px solid red;
    }

    .fc-day .fc-daygrid-day-frame {
      padding: 8px;

      & .fc-daygrid-day-top {
        padding-bottom: 2px;

        & .fc-daygrid-day-number {
          margin: 0 auto;
          font-size: 1.6rem;
          color: #252525;
        }
      }

      & .fc-daygrid-day-events .fc-daygrid-event-harness {
        padding-top: 2px;
      }
    }

    .fc-daygrid-event .fc-event-title,
    .fc-direction-ltr .fc-daygrid-event .fc-event-time {
      font-size: 1.2rem;
      font-weight: 500;
    }

    .fc-day.fc-day-sat .fc-daygrid-day-top {
      color: blue;
    }
    .fc-day.fc-day-sun .fc-daygrid-day-top,
    .fc-day:has(.holiday) .fc-daygrid-day-top {
      color: red;
    }

    /* TODO: 텍스트가 동그라미 한가운데 있는 것 같지 않은건 기분탓인가 */
    .fc-day.fc-day-today .fc-daygrid-day-top > .fc-daygrid-day-number {
      background-color: #907ad6;
      padding: 4px 8px;
      border-radius: 50%;
      color: #fff;
    }

    /* 헤더 툴바 */
    .fc-header-toolbar .fc-toolbar-chunk:nth-of-type(1) > button {
      border-radius: 8px;

      &:not(:disabled):hover {
        color: #fff;
      }
    }

    .fc-header-toolbar .fc-toolbar-chunk:nth-of-type(2) {
      display: flex;
      align-items: center;

      & > button {
        border: none;
        background-color: transparent;
      }

      & > button:hover {
        color: #907ad6;
      }
    }

    .fc-header-toolbar .fc-toolbar-chunk:nth-of-type(3) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;

      & > button {
        border-radius: 8px;
      }

      & > button:hover,
      & .fc-button-active {
        color: #fff;
      }
    }

    /* TODO: 테이블 높이, 보더 정리하기 */
    .fc .fc-col-header-cell {
      /* border: 1px solid red; */
    }

    .fc-col-header-cell-cushion {
      text-align: center;
      font-size: 1.2rem;
      opacity: 0.5;
      color: #252525;
    }

    .fc-toolbar-title {
      text-align: center;

      & > .fc-toolbar-title-month {
        font-weight: 700;
        color: #907ad6;
      }

      & > .fc-toolbar-title-year {
        font-weight: 300;
      }
    }

    .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
      margin-left: 0;
    }
    .fc .fc-timegrid-event .fc-event-time,
    .fc-timegrid-event .fc-event-title.fc-sticky {
      font-size: 1.4rem;
    }
  }
`;
const Calendar = () => {
  const {
    currentEvents,
    visible,
    event,
    selectInfo,
    modalContent,
    handleDateSelect,
    handleEventClick,
    handleEvents,
    separateHeaderTitle,
    setVisible,
    setModalContent
  } = useCalendar();

  return (
    <FullCalendarWrapper className="fullCalendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "today",
          center: "prev title next",
          right: "dayGridMonth timeGridWeek"
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        events={currentEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventsSet={handleEvents}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }}
        dayMaxEventRows={3}
        viewClassNames={separateHeaderTitle}
        fixedWeekCount={false}
      />
      <Modal
        width={modalContent.width}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        {modalContent.type === "info" && visible ? (
          <CalendarInfo
            event={event}
            setVisible={setVisible}
            setModalContent={setModalContent}
          />
        ) : modalContent.type === "confirm" && visible ? (
          <CalendarConfirm
            event={event}
            setVisible={setVisible}
            setModalContent={setModalContent}
          />
        ) : modalContent.type === "add" && visible ? (
          <CalendarAdd selectInfo={selectInfo} setVisible={setVisible} />
        ) : modalContent.type === "edit" && visible ? (
          <CalendarEdit
            event={event}
            setVisible={setVisible}
            setModalContent={setModalContent}
          />
        ) : null}
      </Modal>
    </FullCalendarWrapper>
  );
};
export default Calendar;
