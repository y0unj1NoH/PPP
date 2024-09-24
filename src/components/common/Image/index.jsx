import { useState, useRef, useEffect } from 'react'

// 컴포넌트가 생성되더라도 옵저버를 다시 생성하지 않기위해 모듈 내에서 전역으로 사용
let observer = null
const LOAD_IMG_EVENT_TYPE = 'loadImage'

// 화면 안으로 들어왔을 때 이벤트가 실행되도록 할 커스텀 이벤트
const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    // 내부로 들어온다면
    if (entry.isIntersecting) {
      // 관찰을 더이상 하지 않고, 커스텀 이벤트 호출
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE))
    }
  })
}

// lazy 로딩을 적용할거냐
// threshold 화면애 얼만큼 들어와야 로딩할 것인지
const Image = ({
  lazy,
  src,
  threshold = 0.5,
  placeholder,
  block,
  width,
  height,
  alt,
  mode,
  ...props
}) => {
  // 이미지가 로딩되었는지 여부
  const [loaded, setLoaded] = useState(false)
  // 이미지 태그에 접근하기 위해 사용
  const imgRef = useRef()

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode, // cover, fill, contain
  }

  useEffect(() => {
    if (!lazy) {
      // 바로 로딩이 완료되었다고 설정
      setLoaded(true)
      return
    }

    // LOAD_IMG_EVENT_TYPE 이벤트
    const handleLoadImage = () => setLoaded(true)

    const imgElement = imgRef.current
    // 화면에 이미지 들어왔을 때 실행될 이벤트 등록
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)

    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    }
  }, [lazy])

  // 옵저버 생성
  useEffect(() => {
    if (!lazy) return

    if (!observer) {
      observer = new IntersectionObserver(onIntersection, { threshold })
    }

    // 이미지 관찰 시작
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  )
}

export default Image
