import { useState } from "react";

const useCalendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [event, setEvent] = useState({});
  const [selectInfo, setSelectInfo] = useState({});
  const [modalContent, setModalContent] = useState({
    type: "info",
    width: 300
  });

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

  function handleEvents(events) {
    setCurrentEvents(events);
  }

  const separateHeaderTitle = arg => {
    const toolbarTitle = document.querySelector(".fc-toolbar-title");
    const title = arg.view.title;
    const date = title && title.split(" ");

    if (arg.view.type === "dayGridMonth") {
      toolbarTitle.innerHTML = `<span class="fc-toolbar-title-month">${date[0]}</span> <span class="fc-toolbar-title-year">${date[
        date.length - 1
      ]}</span> `;
    }

    if (arg.view.type === "timeGridWeek") {
      toolbarTitle.innerHTML = `<span class="fc-toolbar-title-month">${date[0] +
        " " +
        date[1] +
        " " +
        date[2] +
        " " +
        date[3] +
        (date.length > 5
          ? " " + date[4]
          : "")}</span> <span class="fc-toolbar-title-year">${date[
        date.length - 1
      ]}</span> `;
    }
  };

  return {
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
  };
};

export default useCalendar;
//
