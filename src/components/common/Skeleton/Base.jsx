import styled from '@emotion/styled'

const Base = styled.div`
  display: inline-block;
  border-radius: 4px;
  background-image: linear-gradient(
    90deg,
    #dfe3e8 0px,
    #efefef 40px,
    #dfe3e8 80px
  );

  background-size: 200% 100%;
  background-position: 0 center;
  animation:
    skeleton--zoom-in 0.2s ease-out,
    skeleton--loading 2s infinite linear;

  // 스켈레톤 처음에 등장할 때 애니메이션
  @keyframes skeleton--zoom-in {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  // 로딩이 진행되는 동안 움직이는 애니메이션
  @keyframes skeleton--loading {
    0% {
      background-position-x: 100%;
    }
    50% {
      background-position-x: -100%;
    }
    100% {
      background-position-x: -100%;
    }
  }
`

export default Base
