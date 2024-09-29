import React, { useState } from "react";
import { BrowserRouter as router } from "react-router-dom";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // 월간 달력
import timeGridPlugin from "@fullcalendar/timegrid"; // 주간 달력, 일간 달력
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import "./Calendar.css";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  // 데이터 추가 함수
  function handleDateSelect(selectInfo) {
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

  // 이벤트 클릭 함수
  // 지금은 지우는 걸로 되어 있음
  function handleEventClick(clickInfo) {
    console.log("클릭 인포:", clickInfo);

    const startDate = clickInfo.event.start;
    // alert()
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.start}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
    // TODO: info 객체 속성 정리하기
    // 1. event.title, event.start, event.end
    // 2.
  }

  // 이건 뭐지
  // 이벤트 변경 시 이벤트 데이터 갱신하는 함수
  function handleEvents(events) {
    setCurrentEvents(events);
  }

  const handleViewDidMount = (arg) => {
    const toolbarTitle = arg.el.querySelector(".fc-toolbar-title");
    if (toolbarTitle) {
      const [month, year] = toolbarTitle.textContent.split(" ");
      toolbarTitle.innerHTML = `<span class="fc-toolbar-title-month">${month}</span> <span class="fc-toolbar-title-year">${year}</span>`;
    }
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
        viewDidMount={handleViewDidMount}
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
      />
    </>
  );
};
export default Calendar;

// TODO: 커스텀 뷰 나중에 다시 보고 테스트 해보기

