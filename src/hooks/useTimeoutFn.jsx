// 3초 뒤에 리다이렉트 됩니다 같은 상황에 쓰임

import { useCallback, useEffect, useRef } from 'react'

// 1. 함수 호출을 통한 방법
// 2. 컴포넌트가 로딩 된 후 바로 실행되는 방법

const useTimeoutFn = (fn, ms = 0) => {
  const timeoutId = useRef()
  const callback = useRef(fn)

  useEffect(() => {
    callback.current = fn
  }, [fn])

  // 타임아웃이 끝나면 fn을 실행하는 함수
  const run = useCallback(() => {
    // 타임아웃이 있다면 기존 타임아웃 제거
    timeoutId.current && clearTimeout(timeoutId.current)

    timeoutId.current = setTimeout(() => {
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current)
  }, [])

  // 리턴값으로 clear를 넣음으로써 언마운트될 때(훅이 사라질 때) 클리어되도록 함
  // 이걸 안하면 페이지 이동 했을 때와 컴포넌트가 사라졌을 때 타임아웃이 남아서 실행되는 버그가 생길 수 있음
  useEffect(() => clear, [clear])

  return [run, clear]
}

export default useTimeoutFn
