import styled from '@emotion/styled'
import FluxProvider from './FluxProvider'
import { useMemo } from 'react'

const AlignToCssValue = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
}

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;

  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => AlignToCssValue[align]};
`

const Row = ({ children, justify, align, gutter, ...props }) => {
  // 왼쪽과 오른쪽이 쫙펴짐
  const gutterStyle = useMemo(() => {
    if (Array.isArray(gutter)) {
      const horizontalGutter = gutter[0]
      const verticalGutter = gutter[1]
      return {
        marginTop: `-${verticalGutter / 2}px`,
        marginBottom: `-${verticalGutter / 2}px`,
        marginLeft: `-${horizontalGutter / 2}px`,
        marginRight: `-${horizontalGutter / 2}px`,
      }
    } else {
      return {
        marginLeft: `-${gutter / 2}px`,
        marginRight: `-${gutter / 2}px`,
      }
    }
  })
  return (
    <FluxProvider gutter={gutter}>
      <StyledRow
        {...props}
        justify={justify}
        align={align}
        style={{ ...props.style, ...gutterStyle }}
      >
        {children}
      </StyledRow>
    </FluxProvider>
  )
}

export default Row
