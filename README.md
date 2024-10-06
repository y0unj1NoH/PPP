# PPP

## 진행 상황

- 캘린더 일정 추가, 수정 모달 구현 필요

---

# 아래는 아직 정리 안된 개인 공부 기록입니다. (추후에 파일 따로 분리할 예정)

## 프로젝트 설치

npm create vite@latest

npm i '@emotion/styled'
npm i fullcalendar
npx storybook@latest init
npm i feather-icons
npm i @fullcalendar/daygrid @fullcalendar/interaction @fullcalendar/react @fullcalendar/timegrid @fullcalendar/core

---

## PPP

### 0. 커밋 메시지 항상 고민되는데, 대충 외우자

https://jane-aeiou.tistory.com/93#google_vignette
스토리북도 익스텐션이 있는지 찾아보자

### 1. 버튼 컴포넌트 수정

- 피그마 버튼에 패딩을 안넣으니까 dev 모드에 패딩이 없어서 구현하는 데 불편했다.
- 다음 디자인때는 패딩을 넣어야 겠다. 패딩 넣는 방법을 찾아보자.
- 데브모드하고 익스텐션으로 같이 보고 있는데 진짜 편하다... 다음부터 이렇게 해야겠다. 근데 기능을 잘몰라서 유투브 강의를 들어야 할 것 같다.

### 2. 로컬 폰트 적용

- woff를 사용하여 최적화하라고 해서 최적화했다.
- 굵기마다 이름 하나하나 만들었는데, 보니까 굵기를 폰트 페이스마다 지정하면 되었다.
- 폰트 굵기가 5개 였는데, 아래와 같이 설정해 주었다.
  Bold: 700
  Light: 300
  Medium: 500
  Regular: 400
  Thin: 100

  https://velog.io/@yoonyounghoon/%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%ED%8F%B0%ED%8A%B8-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

### 3. 토스트 컴포넌트 수정

- success 파라미터만 추가

### 4. 체크박스 컴포넌트 구현

- 기존 토글 컴포넌트를 수정해 구현

### 5. 사이드바 컴포넌트 구현

- svg는 img에 src로 넘겨주거나, 자체 컴포넌트로 사용할 수 있는데,
  컴포넌트로 만들려니까 아래와 같은 방법이 필요했다.
  https://velog.io/@juno7803/React-React%EC%97%90%EC%84%9C-SVG-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0

  [create react-app 방식]

  1. import {reactComponent as PPP} from "../../../assets/logo.svg"

  [vite 방식]를 구성해서 create react-app로 구현할 때와 방법이 달랐다.

  1. npm i vite-plugin-svgr 설치
  2. import PPP from "../../../assets/logo.svg?react"; 으로 사용(4이상의 버전, 이하 버전은 create react-app처럼 사용된다.)
     https://velog.io/@yoonth95/SVG-%ED%8C%8C%EC%9D%BC-React-Component%EB%A1%9C-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0-Vite-TypeScript

  [Error] Failed to execute 'createElement' on 'Document': The tag name provided ('/src/assets/logo.svg?react') is not a valid name.
  하지만 vite와 storybook이 충돌이 일어나 또 처리를 해주어야 한다. 그래서 새로운 방법이 필요하다.
  새로운 방법을 찾아야 했지만, 아직 찾지 못했다. 추후에 정리할 예정.

  [vite & storybook 방식]

  - svg webpack를 사용하고, 또 다시 스토리북 충돌을 고쳐야 하는데 골치 아프다...

    https://velog.io/@ckstn0777/nextjs13-storybook-svgr
    https://blog.naver.com/dlaxodud2388/223148899868

- 사이드바 구성을 Tab 컴포넌트를 재활용하여 구현하려 했지만, Router가 들어가게 되면서 골치 아팠다.
  그래서 구글링을 통해 아래와 같은 방식을 사용하였다.
  https://gaemi606.tistory.com/entry/React-react-router-dom%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-sidebar (리액트가 옛날버전이라 최신 코드로 수정이 필요했다.)

  - vite 개발 모드에서 라우트를 했는데 화면 전환이 안돼서 보니까 v6 버전이 아니라 그랬다... 라우트 포스팅 볼때는 버전에 유의하자. 그냥 내가 공부한 거 까먹어서 뭐가 틀린지도 몰랐던 것이다...

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

### 6. 헤더 컴포넌트 구현

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

### 7. Icon들 컴포넌트로 정리 후 반영

- 모든 아이콘은 indx.js에서 객체로 모아서 export
- `viewmode`로 아이콘의 비율을 정하고, width, height로 사이즈를 동적 설정하게 구현
- 다른 아이콘들은 괜찮은데, RoundCheck 아이콘이 storybook에서 사이즈 반영이 안되는데, 버튼에서 테스트 해보니 이건 된다. 뭐가 문제일까..?

  [Error] Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
  자꾸 기본 Default 속성 안넣어서 에러뜬다. 유의하자.

### 8. Footer 컴포넌트 추가 및 사이드바에 반영

- Footer에 `width: 100%` 하니까 오버플로우 됐는데 보니까 부모값이 fix라서 그런 것이었다.
  calc로 패딩값을 빼줘서 해결
  `width: calc(100% - 32px);`

### 9. 컴포넌트 작업 잠깐 쉬고, fullcalendar 찍먹하기

- 공식 문서가 불친절해서 좀 골치 아팠는데, 예시 깃허브가 아주 괜찮다
  https://github.com/fullcalendar/fullcalendar-examples/tree/main/react
- 캘린더는 정보가 많아서 따로 calendar.md에 저장하기로 하였다.

### 10. 새로운 뉴스 카드 컴포넌트 구현

- 날짜 앞에 0 넣는거 삼항 연산자로 했는데, padStart 메서드를 사용해서 개선하였다. 굿~

  [Error] Cannot convert a Symbol value to a string
  블로그 카드 스토리북 만들다가 에러가 발생하였다. Tag 컴포넌트의 Text가 문제였다. 코드 상은 문제가 없는데, 다시 새로운 코드로 교체하니까 해결됐다.

  ```jsx
  <Text size="medium" color="#fff">
    {tag}
  </Text>
  ```

  ~~(이게 문제의 코드인데, 전혀 문제될 게 없어 보인다. 방금 에러 상태로 다시 테스트 해보았는데, 잘된다. 뭐지?
  가끔씩 이상한 에러 나면 복붙하지말고, 다 지우고 다시 타이핑 쳐야겠다.)~~

### 11. 스와이퍼 적용

    [Error] Cannot destructure property 'id' of 'r' as it is undefined.
    왜 뜨는 걸까........?

    [Error] Failed to fetch dynamically imported module:
    이런 에러가 뜰 때는 저 에러로써는 문제를 해결할 수 없다. 스토리북에 다른 컴포넌트 들어가면 에러 상세하게 알려주니까 이걸 보자. ~~(이번 에러는 styles.css로 파일명을 지정하지 않아서 에러가 떴다.)~~

- `NewsPage`에 슬라이더를 적용했을 때, 슬라이더가 정상적으로 너비를 가지지 않고, 무한 스크롤되는 문제가 발생하였다. flex: 1을 주어서 사이드바를 제외한 남은 공간을 차지하기를 바랐는데, 이또한 고쳐지지 않았다.
  결국은 width를 명시하지 않은 것이 화근이었다. width와 max-width를 추가함으로써 해결하였다.

  ```css
  width: 100%;
  max-width: calc(100vw - 300px);
  ```

  ~~(이것을 고치니까 `overflow: auto`를 쓰지 않아도 괜찮아서 이는 삭제하였다.)~~

  _왜 width:100%를 안주면 무한 스크롤처럼 슬라이드가 길어질까..? 이유 찾기_

- 전반적으로 에러가 떴던 이유는 반응형을 고려하지 않아서 생긴 문제였다. 초반에 블로그와 깃허브 카드의 이미지 등의 내부 요소들에 고정값을 주어서 슬라이드끼리 겹쳐지는 문제가 발생하였다.

  **[블로그 카드]**

  이미지가 비율은 맞되 오버플로우 되거나, 오버플로우를 고치면 이미지 비율이 맞지 않은 문제가 발생했다. (이미 이미지 컴포넌트에서 cover를 준 상태)

  1. 다행히 api에서 이미지 크기를 수정할 수 있어서, 이를 통해 크기를 정하였다. 고화질을 위해 width는 1000px로 주고, 높이는 auto로 주어 기존 비율을 유지하였다.

  ```jsx
  const image = data.cover_image.replace(
    "width=1000,height=420",
    `width=${1000},height="auto"`
  );
  ```

  2. 대신 이미지의 width가 1000px이기 때문에 오버플로우가 발생할 수 있는데, 이는 max-width를 100%로 설정하여 해결하였다.

  **[깃허브 카드]**

  깃허브는 2가지 문제가 있었다.

  1. 깃허브 로고 배경 div에 화면 크기에 따른 동적 크기 설정
     정사각형 비율을 정하는 게 중요했는데, `width: 50%`을 했을 때의 너비와 같은 높이를 주고 싶었다.
     이때는 height을 쓸 수 없고, `padding-top: 50%;`으로 div의 높이를 설정할 수 있었다.

  2. 배경 div에 걸맞는 깃허브 이미지 크기 변경
     위처럼 div가 퍼센트 값이라 svg의 size를 설정하는 것이 어려웠다.
     그래서 GithubIcon에서 size를 string으로 %도 받아올 수 있게 수정하여, 부모 크기를 받아와서 해결하였다.

  ```jsx
  <div style={{ ...githubImageStyle }}>
    <Icon.Github size="100%" color="#fff" />
  </div>
  ```

  기존에는 배경 div의 크기를 받아오려 했었다. 부모의 크기가 명시되지 않아도, 조부모의 width가 명시되어 있기에 상속받을 수 있을 줄 알았는데 착각이었다. 상속은 건너서 받을 수 있는게 아니라, 하나하나 받아와야 했었다. 그래서 부모 div에도 width를 추가하여 올바르게 크기를 받아올 수 있었다.

  ```jsx
  const githubImageStyle = {
    ...
    width: "90%"
  };
  ```

  ~~(이번을 계기로 width를 잘 명시하는게 중요하다는 것을 깨달았다... 그리고 이미지는 반응형으로 만들려면 부모에 무조건 width를 넣고, 처리해야 오버플로우 되지 않는다!)~~

- 화면 크기마다 슬라이드들을 고정 개수로 보여주니, 어색하여 브레이크 포인트를 설정하였다. 브레이크 포인트 값은 아래의 글을 참고하여 설정하였다.
  https://mu08.tistory.com/32

  _나중에 카드마다 깨지지 않는 크기를 찾다보니 조금 수정되었는데, 이는 다시 수정해야 한다._

- 스와이퍼 내비게이션 버튼을 밖으로 옮기기 위해 `swiper` 컴포넌트 위의 `SliderContainer`에 `position: relative`를 내비게이션 버튼에 `absolute`를 주었지만, swiper 컴포넌트 밖으로 옮겨지지 않았다.

swiper에 relative가 기본적으로 설정되어 있어서 문제가 발생하였고, `position: static`을 하여 position을 초기화하여 해결하였다.

- 또한 내비게이션 prev 버튼에 이미 `left: var(--swiper-navigation-sides-offset, 10px);`가 있어서 위치 조정이 안되었는데, left를 `auto`로 두어 기본 설정으로 초기화하였다.

### 12. NewsPage 관련 컴포넌트 리팩토링

- Slider에 index.jsx를 따로 만들어, Card 디렉터리와 유사하게 리팩토링하였다.
  그리고 기존 Slider는 `common/LabelSlider`으로 구성하였다. 뿌듯^^

- New 컴포넌트가 높이가 오버플로우 되는 건, 내 작업환경이 노트북이라 125% 배율이 되어서, 깨져보이는 것이었다. 화면을 줄일때는 레이아웃이 망가지지 않지만 화면을 키우면 망가지기 때문에, 작은 화면을 기준으로 작업을 하는 게 좋다고 한다. 그리고 브라우저 상단의 북마크와 url 부분을 뺀 부분은 뷰포트로 잡아 디자인 작업을 하는 게 좋다고 한다.

  https://lionbum.tistory.com/182

  https://velog.io/@c-jeongyyun/%ED%94%84%EB%A1%A0%ED%8A%B8-%EA%B5%AC%ED%98%84-%EC%8B%9C-%EA%B8%B0%EC%A4%80-%ED%95%B4%EC%83%81%EB%8F%84-%EC%84%A4%EC%A0%95%EC%9D%98-%EC%A4%91%EC%9A%94%EC%84%B1

  https://www.zigae.com/a11y-use-rem/

  나는 해상도가 1920X1080이지만 배율이 125%로 되어있어서, 확대되면서 레이아웃이 깨진다. 현재는 크롭에서 배율을 75%로 하여 개발중이지만, 이 웹사이트는 내 노트북에서는 화면이 깨진다.

  - 피그마에 있는 사이즈로 하면 내 노트북 모니터에서는 깨지는 문제는 어떻게 해결할 수 있는가? 어쩃든 내용을 더 찾아봐서 생각을 정리해야 할 것 같고, 이제 개발할때는 개발자도구 켜서 작업해야할 것 같다. 그냥 rem을 안써서 그럼;
    https://yozm.wishket.com/magazine/detail/1410/

  다른 루트 폰트를 16px로 하고 rem으로 했을텐데 피그마에는 rem 단위가 없어서 사이즈 선택하는게 어려웠을텐데, 어떻게 텍스트마다 어떤 값을 줬는지 궁금하다. 폰트는 rem으로 하고, 간격은 px로 했는지..?

  데이터와 UI 코드를 어떻게 분리하였는지?

---

## 이미 푸시된 커밋 메시지 수정하기

- 최근 세개의 커밋 메시지에 Design을 해야 하는데 Style로 커밋하여 메시지를 수정하였다.

1. `git stash`
2. `git rebase -i HEAD~N` (N에 원하는 개수를 적으면 된다.)
3. i를 눌러 편집 모드로 들어가 `pick` 키워드를 `reword`로 고친후 esc -> :wq로 저장한다.
4. 그럼 수정할 커밋 메시지들을 하나씩 보여주는데, 아까처럼 고친 후 저장한다.
5. `git push --force`로 강제 푸쉬한다.
   https://kkj6670.github.io/board/git/rebase-commit
