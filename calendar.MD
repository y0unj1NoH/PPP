## 참고 사이트

### fullCalendar Docs

https://fullcalendar.io/docs#toc

### props 볼 때

https://velog.io/@vlck1111/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-FullCalendar%EC%9D%98-Props-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0
https://velog.io/@youjunho613/FullCalendar-library

### 모달창 만들 때

https://velog.io/@hwakyoung/React-fullcalendar-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
https://leego.tistory.com/entry/React-%ED%9A%A8%EC%9C%A8%EC%A0%81%EC%9C%BC%EB%A1%9C-%EB%AA%A8%EB%8B%AC-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0

### Date 객체 다룰 때

https://ko.javascript.info/date#ref-44

### React Select Docs

https://react-select.com/home#custom-styles

## 캘린더 스타일 수정

- 헤더 툴바 `viewDidMount`로는 마운트 끝난 후에 실행되는 함수라서 그런지 innerHTML로 수정해도 자꾸 기존 엘리먼트가 남아있는 문제가 있었다.
  반면, `viewClassNames` 속성은 마운트 되기 전에 엘리먼트를 수정하기 때문에 중복 문제를 해결할 수 있었다.

  ~~(이름이 이상해서 긴가민가 했는데, 편견을 갖지 말자. 기존에 viewRender가 viewClassNames로 바뀐 듯 하다.)~~

- querySelector로 엘리먼트의 textContent를 사용하여 title을 변경하려 했는데, 계속 맨처음 마운트될 때의 title로만 값이 고정되었다.

  당연하게도 `textContent`로 가지오면 내가 이미 innerHTML로 내용을 변경하였던 고정된 텍스트만 받아올 수 밖에 없었고, viewClassNames에 사용하는 arg 인수의 title 값을 이용하여 title을 동적으로 고쳤다.

- 기존 헤더 툴바에는 각 `fc-toolbar-chunk`마다 첫 번째 엘리먼트가 아니면 margin-left이 0.75rem이 붙게 되어있었다. 이 떄문에 center 엘리먼트들의 배치가 이상해서 아래와 같이 마진을 제거하였다.

  ```css
  .fc-direction-ltr .fc-toolbar > * > :not(:first-child) {
    margin-left: 0;
  }
  ```

  emotion으로 css를 국한시키면 그 컴포넌트만 적용되는 줄알았는데, 전역으로 되어서, 데이트피커만의 className을 넣어주었다.

---

## 캘린더 모달 구현

- 캘린더에 필요한 모달 컨텐츠는 3개

1. 일정 상세
2. 삭제 확인
3. 일정 추가

- 모달 컴포넌트를 놔두고, 3개를 돌아가며 컨텐츠를 갈아끼우도록 구현하였다. 모달 content가 전역으로 쓸 것까지는 아닌 것 같아서 내부 props으로 처리하였다.

---

## 일정 추가 모달

- 날짜 input을 구현할 때 날짜 유효성은 라이브러리를 사용하였다.
  npm install date-fns
- 기존 라이브러리를 가지고 스타일을 변경하니까 시간이 더 걸리는 것 같다.... 후....
  캘린더, 리액트 셀렉트 둘다 힘들었다...
  데이트피커 캘린더 테이블 크기 조정 안된다...
- 데이트 인풋도 대략적으로 만들었다. svg 아이콘 색깔 통일 안해서 수정해야 한다.
- 셀렉트는 포커스 했을 때 보더 색깔이 안바껴서 고생했는데, 보니까 박스섀도우에 색깔이 있었다...
  안되면 다음부터는 바로바로 css에서 찾자. 컬러스타일을 다른 파일로 뺐는데, 이런거는 각 폴더마다 파일 이름을 통일시키는 게 좋을 듯하다.

// TODO: 달력 아이콘 색깔 언제 어떤 색으로 변경할지
// TODO: 달력 왜 안 옮겨지고 시작일 위에만 있지..? => ref로 안하고 쿼리 셀렉터로 받으면 맨처음 클래스명이 같은 컨포넌트만 나오기 때문임

코드를 너무 거렁뱅이로 짜서 답이 없다

DateInput => YYMMDD 사용
달력에서 가져오는 값 -> Date()
calendarApi add 에서 쓰는 값 => YYYYMMDD
DatePicker에서 설정해주는 값 => Date()

캘린더 Event => 하루면 end 없음(근데 하루 안에 시간이 바뀌면..?)
데이트피커에서 가져오는 값 selectInfo=> 하루여도 end 나옴
내가 end를 추가할 때 시간 없이 같은 날을 입력하면 나중에 자동으로 end는 null로 반영됨

1. Date()(초기데이터) => YYYYMMDD(이벤트 데이터 추가용)
2. Date()(초기데이터) => YYMMDD(input 보여주기용)
3. YYMMDD() -> YYYYMMDD (이벤트 데이터 추가용)

결국 YYMMDD로 처리하니까 Date()로 받아온 값을 YYMMDD로 바꿔서 보여주고
YYMMDD로 받아온 값을 YYYYMMDD로 바꿔서 이벤트 데이터 추가할 때만 사용

## 몇번 프롭스로 들어가면 전역으로 뺼까? 2번 부터..?

[Error]component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.
초기값을 null을 쓰면 안된다.

```js
export const dateRangeAtom = atom({
  key: "dateRangeAtom",
  default: {
    start: "", // 이것도 안돼서 그냥 "00:00" 줬음
    end: ""
  }
});
```

[Error]
Uncaught Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
무한 루프 도는거 상태 업데이트하면 recoil이랑 useState가 무한루프 도는 것으로 보인다.
데이트 피커를 선택하면 selectedDate가 바껴 그럼 useEffect가 실행되겠지? 그럼 setDateRange를 통해 dateRange가 바껴 그러면 useEffect가 실행되지? 그러면 이미 저장된 값을 다시 넣어서 만드는 건데 이게 객체니까 내용이 같아도 새로운 것을 추가했다고 받아들여서 계속 dateRange가 갱신되니까 무한 루프에 빠지는 거야?
=> 네, 맞습니다. selectedDate가 변경되면 useEffect가 실행되고, setDateRange를 통해 dateRange가 업데이트됩니다. 이때 dateRange가 객체이기 때문에, 내용이 같더라도 새로운 객체로 인식되어 useEffect가 다시 실행됩니다. 이렇게 되면 무한 루프에 빠질 수 있습니다.

이를 방지하기 위해, useEffect 내부에서 상태를 업데이트하기 전에 실제로 변경된 내용이 있는지 확인해야 합니다. 객체의 내용을 비교하여 변경 사항이 있을 때만 상태를 업데이트하면 무한 루프를 방지할 수 있습니다.

```jsx
useEffect(() => {
  if (selectedDate) {
    if (selectedDate.start === selectedDate.end) {
      setDateRange({ ...dateRange, [type]: selectedDate.start });
    } else {
      setDateRange({ ...selectedDate });
    }
  }
}, [selectedDate, type, dateRange, setDateRange]);
```

```jsx
useEffect(() => {
  if (selectedDate) {
    const newDateRange =
      selectedDate.start === selectedDate.end
        ? { ...dateRange, [type]: selectedDate.start }
        : { ...selectedDate };

    // Only update state if there is an actual change
    if (JSON.stringify(newDateRange) !== JSON.stringify(dateRange)) {
      setDateRange(newDateRange);
    }
  }
}, [selectedDate, type, dateRange, setDateRange]);
```

[Error]The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
[Error]TypeError: Cannot read properties of null (reading 'style')

돌아가는 데는 문제없다. 근데 이거 캘린더 css를 이모션으로 끌고오면서 문제가 생겼는데 고쳐야함

시간설정하면 값이 안나와서 보니까
start 2024-10-28TT03:00:00
T 중복 오타..^^

[Error] Uncaught ReferenceError: Cannot access 'defaultTime' before initialization
const defaultTime = createDefaultValue(defaultValue) || DEFAULT_TIME;
const [time, setTime] = useState(defaultTime);
초기화 문제

[Error]console.js:288 Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info:

[Error] TypeError: Cannot read properties of undefined (reading 'view')

시간이 반영이 안되는게 보니까 유즈스테이트랑 리코일이랑 같이 써서 엉켜서 그런 듯. 그래서 다 빼고 리코일로만 사용해서 해결함.

### 모달을 구현하기까지의 과정

1. 처음에는 calendar 컴포넌트에 모달 세개를 마구 넣고, 각각 setVisible로 관리하려고 했다. 근데 그러니까 너무 지저분하고, 복잡하였다.

2. 그래서 구글링해서 몇개 찾아봤는데, 모달 상태관리라고 전역으로 상태 관리를 할 수 있다길래 Redux, Recoil, ContextAPI에 대해서 공부를 하였다. 최종적으로 언젠가 쓰일 전역 상태 관리는 사용법이 간단한 `Recoil`로 하기로 했다.

   ~~(리덕스는 공부를 좀 더 해야할 듯.)~~

3. 따라서 모달 껍데기를 두고, 컨텐츠를 갈아 끼우는 방식으로 구현해 보았다. 하기 전에는 어려울 줄 알았는데 웬걸 생각보다 이지했다.

4. 모달 안의 content들은 `useState`로 상태를 관리하였다. 또한 content 컴포넌트마다 상세한 prop을 주었는데, 지저분해 보였다. (title, date 등등 구체적으로 넘겼었다.) 이는 굳이 각각의 prop으로 받지말고 event 객체 덩어리고 받아옴으로써 간단하게 바꾸었다.

   (~~앞으로도 객체가 있으면 그걸 쓰고, 굳이 따로 넘기지 말자.)~~

   ~~(근데 event 데이터를 전역 상태로 뺄지, 아니면 지금 상태로 둘지는 고민해봐야 할 듯. 진짜 렌더링되는 이벤트는 전역으로 빼도 괜찮겠고, 나머지는 잘 모르겠다. 더 생각해 봐야할 것 같다.)~~
