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
Tag 컴포넌트에서 Text가 문제였다. 코드 상은 문제가 없는데, 다시 새로운 코드로 교체하니까 해결됐다.

````jsx
      <Text size="medium" color="#fff">
        {tag}
      </Text>
  ```
    이게 문제의 코드인데, 전혀 문제될 게 없어 보인다. 방금 에러 상태로 다시 테스트 해봤는데, 잘된다. 뭐지?
    가끔씩 이상한 에러 나면 복붙하지말고, 다 지우고 다시 타이핑 쳐야겠다.

- 카드 컴포넌트 너무 구구절절하고 지저분하게 만들어놔서 리팩토링 해야겠다...


12. 스와이퍼 적용
-
[Error] Cannot destructure property 'id' of 'r' as it is undefined.
왜 뜨는 걸까........?

[Error] Failed to fetch dynamically imported module:
이런 형식에 에러가 뜨면
스토리북에 다른 컴포넌트 들어가면 에러 상세하게 알려주니까 이걸 보자
저 에러로는 문제를 해결할 수 없다.
이번 에러는 styles.css로 파일명을 지정하지 않아서 에러가 떴다.
````

- 카드가 전반적으로 사이즈 조절이 안되어서 그런지 슬라이드끼리 겹친다.
- 블로그랑 깃허브는 고정값 크기가 있어서 겹쳐지는 것 같다.
- 나중에 반응형으로 줄어들도록 세 카드 모두 개선하자.
  // TODO: 카드 컴포넌트 모두 반응형으로

  - 그건 그렇고 슬라이드가 삐져나가는 데 왜 크기 조절이 알아서 안되고 삐져나가지..?
  - 왜 width:100%를 안주면 무한 스크롤처럼 슬라이드가 길어질까..?

  - 반응형 브레이크 포인트는 아래의 글을 참고하였다.
    https://mu08.tistory.com/32

- 스와이퍼 내비게이션 버튼 밖으로 빼는 거 쉬울 줄 알았는데 왜이렇게 고달프냐
  자꾸 스와이퍼 컴포넌트 안에서 맴도네
  swiper에 relative가 있어서 안되는 거였어. 이 포지션을 지워서 해결했다
  position: static;로 기준을 지우니 조부모를 기준으로 버튼의 위치를 잡을 수 있다.

- prev에 이미 left: var(--swiper-navigation-sides-offset, 10px); 가 있어서 위치가 조정이 안됐는데, auto로 두어 기본 설정으로 무효화했다.

어떻게 커밋을 할지 고민된다.

1. 사람인 슬라이드를 common으로 빼서, 피쳐 슬라이드에 세개를 넣자
   근데 이것도 card와 마찬기지로 다시 리팩토링해야한다. 이렇게 하는 건 엄청 마음에 들지 않음

슬라이더 다 모아놓은거랑 화면 크기랑 오지게 안맞네. 높이 다 줄여야 함... 하...

사람인 컴포넌트 단어마다 안짤려서 수정함
`word-break: break-word;`
overflow-wrap: break-word;
이걸로 바꼈단다
근데 적용안됨 나주엥 다시 보기

1920x1080 크기에서는 괜찮은데, 화면이 작아지면 4개를 넣는게 어색하다
컴포넌트 크기를 유동적으로 조절하자
이미지는 원래 부모가 width가 없으면 오버플로우되나?

너비에 해당하는 값을 찾아서 그값만큼 높이를 줄 수 있을까?
=> 해결
width: 50%;
padding-top: 50%;

깃허브 로고 크기가 배경 블록 크기에 맞춰지지 않아서 골머리를 앓았는데, 보니까 크기 상속하려면 width:100% 등으로 계속 width를 명시해야지만 되는 것이었다. 나는 부모에 명시되어 있지 않아도, 조부모에 너비값이 있으면 괜찮은 줄..^^;

전체적으로 새로운 뉴스 부분은 높이 조정

