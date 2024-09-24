// 2. 컴포넌트가 로딩 된 후 바로 실행되는 방법
import { useEffect } from 'react'
import useTimeoutFn from './useTimeoutFn'

const useTimeout = (fn, ms = 0) => {
  const [run, clear] = useTimeoutFn(fn, ms)

  useEffect(() => {
    run()
    return clear
  }, [run, clear])

  return clear
}

export default useTimeout
