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

---

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

s

---

### 모달을 구현하기까지의 과정

1. 처음에는 calendar 컴포넌트에 모달 세개를 마구 넣고, 각각 setVisible로 관리하려고 했다. 근데 그러니까 너무 지저분하고, 복잡하였다.

2. 그래서 구글링해서 몇개 찾아봤는데, 모달 상태관리라고 전역으로 상태 관리를 할 수 있다길래 Redux, Recoil, ContextAPI에 대해서 공부를 하였다. 최종적으로 언젠가 쓰일 전역 상태 관리는 사용법이 간단한 `Recoil`로 하기로 했다.

   ~~(리덕스는 공부를 좀 더 해야할 듯.)~~

3. 따라서 모달 껍데기를 두고, 컨텐츠를 갈아 끼우는 방식으로 구현해 보았다. 하기 전에는 어려울 줄 알았는데 웬걸 생각보다 이지했다.

4. 모달 안의 content들은 `useState`로 상태를 관리하였다. 또한 content 컴포넌트마다 상세한 prop을 주었는데, 지저분해 보였다. (title, date 등등 구체적으로 넘겼었다.) 이는 굳이 각각의 prop으로 받지말고 event 객체 덩어리고 받아옴으로써 간단하게 바꾸었다.

   (~~앞으로도 객체가 있으면 그걸 쓰고, 굳이 따로 넘기지 말자.)~~

   ~~(근데 event 데이터를 전역 상태로 뺄지, 아니면 지금 상태로 둘지는 고민해봐야 할 듯. 진짜 렌더링되는 이벤트는 전역으로 빼도 괜찮겠고, 나머지는 잘 모르겠다. 더 생각해 봐야할 것 같다.)~~
