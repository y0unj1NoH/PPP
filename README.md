# PPP

## 진행 상황

- 캘린더 일정 상세, 삭제 모달 컴포넌트 및 기능 구현 완료
- 캘린더 일정 추가, 수정 모달 구현 필요

---

# 아래는 아직 정리 안된 개인 공부 기록입니다. (추후에 파일 따로 분리할 예정)

### 프로젝트 설치

npm create vite@latest

npm i '@emotion/styled'
npm i fullcalendar
npx storybook@latest init
npm i feather-icons

npm i @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/react @fullcalendar/timegrid @fullcalendar/core

### PPP

0. 커밋 메시지 항상 고민되는데, 대충 외우자
   https://jane-aeiou.tistory.com/93#google_vignette
   스토리북도 익스텐션이 있는지 찾아보자

1. 버튼 컴포넌트 수정

- 피그마 버튼에 패딩을 안넣으니까 dev 모드에 패딩이 없어서 구현하는 데 불편했다.
- 다음 디자인때는 패딩을 넣어야 겠다. 패딩 넣는 방법을 찾아보자.
- 데브모드하고 익스텐션으로 같이 보고 있는데 진짜 편하다... 다음부터 이렇게 해야겠다. 근데 기능을 잘몰라서 유투브 강의를 들어야 할 것 같다.

2. 로컬 폰트 적용

- woff를 사용하여 최적화하라고 해서 최적화했다.
- 굵기마다 이름 하나하나 만들었는데, 보니까 굵기를 폰트 페이스마다 지정하면 되었다.
- 폰트 굵기가 5개 였는데, 아래와 같이 설정해 주었다.
  Bold: 700
  Light: 300
  Medium: 500
  Regular: 400
  Thin: 100

  https://velog.io/@yoonyounghoon/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%ED%8F%B0%ED%8A%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

3. 토스트 컴포넌트 수정

- success 파라미터만 추가

4. 체크박스 컴포넌트 구현

- 기존 토글 컴포넌트를 수정해 구현

5. 사이드바 컴포넌트 구현

- svg는 img에 src로 넘겨주거나, 자체 컴포넌트로 사용할 수 있는데,
  컴포넌트로 만들려니까 아래와 같은 방법이 필요했다.
  https://velog.io/@juno7803/React-React%EC%97%90%EC%84%9C-SVG-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0
  [create react-app 방식]

  1. import {reactComponent as PPP} from "../../../assets/logo.svg"

  [vite 방식]를 구성해서 create react-app로 구현할 때와 방법이 달랐다.

  1.  npm i vite-plugin-svgr 설치
  2.  import PPP from "../../../assets/logo.svg?react"; 으로 사용(4이상의 버전, 이하 버전은 create react-app처럼 사용된다.)
      https://velog.io/@yoonth95/SVG-%ED%8C%8C%EC%9D%BC-React-Component%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-Vite-TypeScript

  [Error] Failed to execute 'createElement' on 'Document': The tag name provided ('/src/assets/logo.svg?react') is not a valid name.
  하지만 vite와 storybook이 충돌이 일어나 또 처리를 해주어야 한다. 그래서 새로운 방법이 필요하다.
  새로운 방법을 찾아야 했지만, 아직 찾지 못했다. 추후에 정리할 예정.

  [vite & storybook 방식]

  - svg webpack를 사용하고, 또 다시 스토리북 충돌을 고쳐야 하는데 골치 아프다...

    https://velog.io/@ckstn0777/nextjs13-storybook-svgr
    https://blog.naver.com/dlaxodud2388/223148899868

- 사이드바 구성을 Tab 컴포넌트를 재활용해서 구현하려했지만, Router가 들어가게 되면서 골치가 아팠다.
  그래서 구글링을 통해 아래와 같은 방식을 사용하였다.
  https://gaemi606.tistory.com/entry/React-react-router-dom%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-sidebar (리액트가 옛날버전이라 최신 코드로 수정이 필요했다.)

  - vite 개발 모드에서 라우트를 했는데 화면 전환이 안돼서 보니까 v6 버전이 아니라 그랬다... 라우트 포스팅 볼때는 버전에 유의하자. 그냥 내가 공부한 거 까먹어서 뭐가 틀린지도 몰랐던 것임...

  [Error] useNavigate() may be used only in the context of a <Router> component.
  storybook에서 Router를 사용하려면 React-Router 연결이 따로 필요했다.
  구글링을 통해 아래와 같은 방식으로 해결하였다.
  https://white-blank.tistory.com/180

  [Error] Cannot destructure property 'basename' of 'react~~.useContext(...)' as it is null.
  이런 에러도 있었는데, 이는 storybook 파일에 따로 router를 감싸주면 해결이 가능했다.

  ```jsx
  import { BrowserRouter as Router } from "react-router-dom";

  export const Default = () => {
    return (
      <Router>
        <SideBar />
      </Router>
    );
  };
  ```

  - Link를 하면 밑줄이 생기는데, 이는 링크 컴포넌트에 `style={{ textDecoration: "none"}}`하면 사라진다.

  6. 헤더 컴포넌트 구현

  - 맨 처음에는 로고 컴포넌트를 만들었으나, 바로 헤더 컴포넌트에 넣는 것으로 변경

  - 헤더는 3종류가 있다.

    1. desktop: 사이드바 헤더 (햄버거 버튼 X)
    2. mobile: 사이드바 헤더 (햄버거 버튼 O)
    3. mobileTop: 모바일 전체 화면 헤더 (햄버거 버튼 O)

  - 1,2번은 햄버거 버튼 유무 빼고는 다른게 없기 때문에, {&&} 처리로 간단하게 구현하였다.

  - 반면 3번은 패딩 값과 그림자가 추가로 생기기 때문에, 새로운 클래스이름을 주어 따로 CSS를 주었다.
    기억 상으로는 Checked 처럼 컴포넌트에 속성을 주면 styled에서 처리가 가능했던 것 같은데, 의사 클래스만 되는 것이어서 안됐다. 사용자 속성도 되는줄...
    그래서 className을 주어 top의 유무로 2,3번을 구분하였다.
  - 그리고 스토리북은 App.css가 안먹혀서 box-sizing 일일히 다 해줘야 한다.

  7. Icon들 컴포넌트로 정리 후 반영

  - 모든 아이콘은 indx.js에서 객체로 모아서 export
  - viewmode로 아이콘의 비율을 정하고, width, height로 사이즈를 동적 설정하게 구현
  - 다른 아이콘들은 괜찮은데, RoundCheck 아이콘이 storybook에서 사이즈 반영이 안되는데, 버튼에서 테스트 해보니 이건 된다. 뭐가 문제일까..?

  [Error] Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

  - 자꾸 기본 Default 속성 안넣어서 에러뜬다. 유의하자.

  8. Footer 컴포넌트 추가 및 사이드바에 반영

  - Footer에 `width: 100%` 하니까 오버플로우 됐는데 보니까 부모값이 fix라서 그런 것이었다.
    calc로 패딩값을 빼줘서 해결
    `width: calc(100% - 32px);`

9. 컴포넌트 작업 잠깐 쉬고, fullcalendar 찍먹하기

- 공식 문서가 불친절해서 좀 골치 아팠는데, 예시 깃허브가 아주 괜찮다
  https://github.com/fullcalendar/fullcalendar-examples/tree/main/react
- 캘린더는 정보가 많아서 따로 calendar.md에 저장하기로 했다.

10. 많은 일을 뒤로 하고

TODO: 컬러 스타일 따로 정리하기
TODO: spacer 적용하기
TODO: 모달 컴포넌트 리팩토링 및 최적화
TODO: 일정 추가, 수정 모달 컨텐츠 컴포넌트 구현(작은 달력: 풀캘린더로 기능 거의다 지우고 간단한 작은 달력 만들기)

11. 새로운 뉴스 파기...^^

- 날짜 앞에 0 넣는거 삼항 연산자로 했는데, padStart 메서드를 사용해서 개선했다. 굿~

블로그 카드 스토리북 만들다가 에러 발생
[Error] Cannot convert a Symbol value to a string
Tag 컴포넌트 문제였다.

