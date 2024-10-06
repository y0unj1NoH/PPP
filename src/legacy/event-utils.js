let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    // allDay: true, end: null
    id: createEventId(),
    title: "All-day event",
    start: todayStr
    // className: "holiday"
    // classNames: ["holiday", "holi"]
  },
  {
    // TODO: start만 하면 배경색이 없음
    // allDay: false, end: null
    id: createEventId(),
    title: "시간 O, 하루, End X",
    start: todayStr + "T14:30:00"
  },
  // 하루동안 하는 거면 end를 추가해도 event에서는 사라짐
  {
    // allDay: true, end: null
    id: createEventId(),
    title: "시간 X, 하루 (end 필요없지만 추가하기)",
    start: "2024-10-06",
    end: "2024-10-06"
  },

  {
    // allDay: false, end: null
    id: createEventId(),
    title: "같은 시간 O, 하루 (end 필요없지만 추가하기)",
    start: "2024-10-06" + "T15:30:00",
    end: "2024-10-06" + "T15:30:00"
  },
  {
    // allDay: false, end: O
    id: createEventId(),
    title: "시간 O, 하루",
    start: "2024-10-07" + "T09:30:00",
    end: "2024-10-07" + "T12:00:00"
  },
  {
    // allDay: false, end: 다음날로 넘어감
    id: createEventId(),
    title: "시간 O, 하루 (자정 포함)",
    start: "2024-10-07" + "T10:30:00",
    end: "2024-10-07" + "T24:00:00" // end: 다음날로 00시로 바뀜
  },
  {
    // allDay: true, end: 12일 00시까지 (10~11만 색칠))
    id: createEventId(),
    title: "시간 X, 기간",
    start: new Date("2024-10-10"),
    end: new Date("2024-10-12")
  },
  {
    // allDay: false, end: 적은 날짜 고대로 나옴
    id: createEventId(),
    title: "시간 O, 기간",
    start: new Date("2024-10-09" + "T09:30:00"),
    end: "2024-10-10" + "T12:00:00"
  },
  {
    // allDay: false, end: O
    id: createEventId(),
    title: "시간 O, 하루",
    start: "2024-10-13" + "T00:00:00",
    end: "2024-10-14" + "T00:00:00"
  },
  {
    // allDay: false, end: O
    id: createEventId(),
    title: "시간 O, 하루",
    start: "2024-10-14",
    end: "2024-10-15" + "T00:00:00"
  },

  {
    // allDay: false, end: O
    id: createEventId(),
    title: "D1",
    start: new Date("2024-10-20"),
    end: new Date("2024-10-21")
  },
  {
    // allDay: false, end: O
    id: createEventId(),
    title: "D1",
    start: "2024-10-21",
    end: "2024-10-25"
  },

  {
    // allDay: false, end: O
    id: createEventId(),
    title: "D2",
    start: "2024-10-22",
    end: "2024-10-22"
  },
  {
    // allDay: false, end: O
    id: createEventId(),
    title: "D3",
    start: "2024-10-21T23:00:00",
    end: "2024-10-25T23:00:00"
  }
];

// 데이터 추가 시에는 하루가 하루종일이 되려면 end가 없어야 함

// 시간 명시를 안하면 그날 00시까지만 설정됨

// 지금 나는 데이트 피커에서 날짜 하루 받아오면
// 2024-10-05 00:00:00 / 2024-10-06 00:00:00

// 15일부터 16일 선택하면
// 2024-10-15 00:00:00 / 2024-10-17 00:00:00로 가져와 짐

// 따라서 데이터를 가져올 때는 시간이 명시되어 있으면 왜곡이 없고, 시간이 없으면 하루 일때는 end가 없고, 기간일때는 마지막 날짜 + 1로 되어 있음
// 따라서 시간이 있는 경우

// 애초에 Date() 객체를 넣으면 됐다

// 그러면 이벤트를 추가할 때는 date 객체로만 접근하고, 데이트 피커에 보여줄 때랑, info로 보여줄때만 다르게 하면 됨.

// 데이터 형식 처리
// 데이트 피커로 Date()를 받아온다 => Date() 그대로 recoil에 넣는다. (이때는 end가 무조건 있다.)
// 캘린더에서 받아올 때도 동일하다.

// 이벤트를 클릭했을 때도 Date()로 받아서 recoil에 넣는다. (이떄는 end가 없을 수 있다.)

// 캘린더에서 add, edit 모달로 가거나(selectInfo) DateInput이 데이트 피커에서 날짜 가져올 때는 selectInfo에서 Date() 객체를 받아서 recoil에 넣는다.

// DateInput이 초기값을 가지고 올때는 recoil에서 Date()를 받아와 YY.MM.DD로 바꿔서 DateInput value로 넣어준다.
// DateInput에서 DatePicker로 날짜를 가져올 때는 useState로 selectInfo의 Date() 객체로 받아와서 나한테 반영하고, recoil에도 넣어준다.
// DateInput에서 키보드로 받아올 때는 YY.MM.DD 가 유효할 때만, Date() 객체로 변환하고 recoil에 넣어준다.

// event 클릭 후 info 모달로 갈 때는 end가 하루종일이면 end가 없을 건데 그거 상관하지 말고 없으면 없는데로 그냥 보여준다.
// infoModal은 딱히 수정할 것 없음

// 1) 데이트피커로 시간 설정 안하기
// 1-1) 하루만 선택하기

// Date로 하면 시간이 잡혀서 안됨 그냥 문자열로 하는 게 맞다.

// 데이터 추가할 때는 문자열로 하고, 당일이면, end 없애고, 시간 있으면 시간 그대로 하면 됨.
// allDay가 있고, 시간 없으면,
export function createEventId() {
  return String(eventGuid++);
}
