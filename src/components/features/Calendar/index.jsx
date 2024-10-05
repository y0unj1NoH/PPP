import { useState } from "react";
import styled from "@emotion/styled";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 달력
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간 달력, 일간 달력
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "./event-utils";
import Modal from "../../common/Modal";
import CalendarAdd from "./CalendarAdd";
import CalendarInfo from "./CalendarInfo";
import CalendarConfirm from "./CalendarConfirm";
import CalendarEdit from "./CalendarEdit";

const FullCalendarWrapper = styled.div`
  .fc {
    height: 90vh;
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
    font-size: 1rem;
    color: #727272;
  }

  /* 데이 그리드(월별)에서 시간 TEXT */
  .fc-direction-ltr .fc-daygrid-event .fc-event-time {
    font-size: 1rem;
    color: #727272;
  }

  /* 타임 그리드(주별 & 일별)에서 내용 TEXT */
  .fc-timegrid-event .fc-event-title {
    font-size: 1.2rem;
    color: black;
  }

  /* 데이 그리드(월별)에서 내용 TEXT */
  .fc-daygrid-block-event .fc-event-title {
    font-size: 1rem;
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
        font-size: 10px;
        color: #252525;
      }
    }

    & .fc-daygrid-day-events .fc-daygrid-event-harness {
      padding-top: 2px;
    }
  }

  .fc-daygrid-event .fc-event-title,
  .fc-direction-ltr .fc-daygrid-event .fc-event-time {
    font-size: 10px;
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
    font-size: 12px;
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
`;

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [event, setEvent] = useState({});
  const [selectInfo, setSelectInfo] = useState({});
  const [modalContent, setModalContent] = useState({
    type: "info",
    width: 300
  });

  // 데이터 추가 함수
  function handleDateSelect(selectInfo) {
    console.log("selectInfo", selectInfo);
    setSelectInfo(selectInfo);
    setModalContent({ type: "add", width: 500 });
    setVisible(true);
  }

  function handleEventClick(clickInfo) {
    const event = clickInfo.event;
    console.log("event", event);
    setEvent(event);
    setModalContent({ type: "info", width: 300 });
    setVisible(true);
  }

  // 이건 뭐지
  // 이벤트 변경 시 이벤트 데이터 갱신하는 함수
  function handleEvents(events) {
    setCurrentEvents(events);
  }

  const separateHeaderTitle = (arg) => {
    // console.log("viewClassNames called", arg);
    const toolbarTitle = document.querySelector(".fc-toolbar-title");

    const title = arg.view.title;
    const date = title && title.split(" ");

    if (arg.view.type === "dayGridMonth") {
      toolbarTitle.innerHTML = `<span class="fc-toolbar-title-month">${
        date[0]
      }</span> <span class="fc-toolbar-title-year">${
        date[date.length - 1]
      }</span> `;
    }

    if (arg.view.type === "timeGridWeek") {
      toolbarTitle.innerHTML = `<span class="fc-toolbar-title-month">${
        date[0] +
        " " +
        date[1] +
        " " +
        date[2] +
        " " +
        date[3] +
        (date.length > 5 ? " " + date[4] : "")
      }</span> <span class="fc-toolbar-title-year">${
        date[date.length - 1]
      }</span> `;
    }

    // type : "timeGridWeek", title: "Dec 29, 2024 – Jan 4, 2025"
    // type : "dayGridMonth", title: "October 2024" or "Sep 29 – Oct 5, 2024"
  };

  return (
    <FullCalendarWrapper>
      <FullCalendar
        // 사용할 플러그인
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        // 헤더 바
        headerToolbar={{
          left: "today",
          center: "prev title next",
          right: "dayGridMonth timeGridWeek"
        }}
        // viewDidMount={handleViewDidMount}
        initialView="dayGridMonth" // 월간 달력으로 디폴트 화면
        editable={true} // 이벤트를 드래그 앤 드롭으로 편집 가능
        selectable={true} // 달력 드래그해서 날짜 및 시간 선택 가능
        selectMirror={true}
        dayMaxEvents={true}
        events={INITIAL_EVENTS} // 캘린더에 표시할 이벤트 데이터
        select={handleDateSelect} // 날짜 선택했을 때 실행되는 함수(우리는 추가 모달 뜨게 해야함)
        eventClick={handleEventClick} // 이벤트 클릭 시 함수
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
              eventAdd={function(){}}
              eventChange={function(){}}
              eventRemove={function(){}}
              */
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          hour12: false
        }}
        dayMaxEventRows={3} // 최대 이벤트 표시 수
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
          <CalendarAdd
            selectInfo={selectInfo}
            setVisible={setVisible}
            // setModalContent={setModalContent}
          />
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

// TODO: 커스텀 뷰 나중에 다시 보고 테스트 해보기
