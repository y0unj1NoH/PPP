import styled from '@emotion/styled'
import { useFlux } from './FluxProvider'
import { useMemo } from 'react'

const StyledCol = styled.div`
  max-width: 100%fit-content;
  box-sizing: border-box;

  width: ${({ span }) => span && `${(span / 12) * 100}%`};
  margin-left: ${({ offset }) => offset && `${(offset / 12) * 100}%`};
`

const Col = ({ children, span, offset, ...props }) => {
  const { gutter } = useFlux()
  // 한번만 하면 되기 때문에 useMemo 사용
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0]
      const verticalGutter = gutter[1]
      return {
        paddingTop: `${verticalGutter / 2}px`,
        paddingBottom: `${verticalGutter / 2}px`,
        paddingLeft: `${horizontalGutter / 2}px`,
        paddingRight: `${horizontalGutter / 2}px`,
      }
    } else {
      return {
        paddingLeft: `${gutter / 2}px`,
        paddingRight: `${gutter / 2}px`,
      }
    }
  })

  return (
    <StyledCol
      {...props}
      span={span}
      offset={offset}
      style={{ ...props.style, ...gutterStyle }}
    >
      {children}
    </StyledCol>
  )
}

export default Col
