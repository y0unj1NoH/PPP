let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr
    // className: "holiday"
    // classNames: ["holiday", "holi"]
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00"
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T18:30:00",
    end: "2024-09-30" + "T24:00:00"
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: "2024-10-30",
    end: "2024-11-30"
  }
];

export function createEventId() {
  return String(eventGuid++);
}
