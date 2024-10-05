import { useEffect, useRef } from 'react'

const events = ['mousedown', 'touchstart']

// 특정 영역 외의 부분을 클릭하면 이벤트 발생시키는 훅
const useClickAway = (handler) => {
  const ref = useRef(null)
  const saveHandler = useRef(handler)

  // handler가 변하면 이벤트 remove, add가 다시 되는데 이를 방지
  // 다시 렌더링 되지않고, ref 값만 바뀌게 됨
  useEffect(() => {
    saveHandler.current = handler
  }, [handler])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleEvent = (e) => {
      // 해당 엘리먼트가 아닌 다른 곳을 클릭했을 때만 이벤트 발생
      !element.contains(e.target) && saveHandler.current(e)
    }

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent)
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent)
      }
    }
  }, [ref])

  return ref
}

export default useClickAway
