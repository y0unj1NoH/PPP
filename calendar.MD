[props 볼 때]
https://velog.io/@vlck1111/React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90%EC%84%9C-FullCalendar%EC%9D%98-Props-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0

[모달창 만들 때]
https://velog.io/@hwakyoung/React-fullcalendar-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0

### 캘린더 모달 구현

- 캘린더에 필요한 모달 컨텐츠는 3개

1. 일정 상세
2. 삭제 확인
3. 일정 추가

모달 컴포넌트를 놔두고, 3개를 돌아가며 컨텐츠를 갈아끼움

모달 내용이 전역으로 쓸 것까지는 아닌 것 같아서 내부 props으로 처리함

일단 지저분한 날짜 처리는 유틸 함수로 빼자

TODO: 머리 정리가 잘 안됐었는데, 구현 과정 정리하기

