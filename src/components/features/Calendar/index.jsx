import React, { useState } from "react";
import { BrowserRouter as router } from "react-router-dom";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 달력
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간 달력, 일간 달력
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import "./Calendar.css";
import InfoModal from "./InfoModal";
import ConfirmModal from "./ConfirmModal";
import Modal from "../../common/Modal";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [event, setEvent] = useState({});
  const [modalContent, setModalContent] = useState({
    type: "info",
    width: 300
  });

  // 데이터 추가 함수
  function handleDateSelect(selectInfo) {
    // TODO: 일정 추가 모달창 열기
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  function handleEventClick(clickInfo) {
    // 새로운 이벤트 모달이 열리면 기존 모달 info 초기화
    const event = clickInfo.event;
    setEvent(event);
    setModalContent({ type: "info", width: 300 });
    setVisible(true);
  }

  // 이건 뭐지
  // 이벤트 변경 시 이벤트 데이터 갱신하는 함수
  function handleEvents(events) {
    setCurrentEvents(events);
  }

  // // 이건
  const separateHeaderTitle = (arg) => {
    console.log("viewClassNames called", arg);
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
    <>
      {/* <Sidebar currentEvents={currentEvents} /> */}
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
          <InfoModal
            event={event}
            setVisible={setVisible}
            setModalType={setModalContent}
          />
        ) : modalContent.type === "confirm" && visible ? (
          <ConfirmModal
            event={event}
            setVisible={setVisible}
            setModalType={setModalContent}
          />
        ) : null}
      </Modal>
    </>
  );
};
export default Calendar;

// TODO: 커스텀 뷰 나중에 다시 보고 테스트 해보기
