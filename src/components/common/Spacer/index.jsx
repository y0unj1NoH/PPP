// 하위 컴포넌트, 요소를 조작하여 자동으로 간격 생기게 하는 컴포넌트
// 요소가 간격을 벌려졌던 것을 컴포넌트로 만들어서 사용하는 것임
// 회사에서 많이 쓰임
import React from 'react'

// type: 좌우, 상하 뭐로 간격 만들어줄 건지
// size: 간격의 사이즈
const Spacer = ({ children, type = 'horizontal', size = 8, ...props }) => {
  const spacerStyle = {
    ...props.style,
    display: type === 'vertical' ? 'block' : 'inline-block',
    // 좌우 정렬
    verticalAlign: type === 'horizontal' ? 'middle' : undefined,
  }

  // 자식 컴포넌트에 접근
  // 엘리먼트가 아닌거 필터링 후 속성 추가
  const nodes = React.Children.toArray(children)
    .filter((element) => React.isValidElement(element))
    .map((element, index, elements) => {
      // 콜론 엘리먼트를 통해 속성 넣어주기
      return React.cloneElement(element, {
        ...element.props,
        style: {
          ...element.props.style,
          marginRight:
            type === 'horizontal' && index !== elements.length - 1
              ? size
              : undefined,
          marginBottom:
            type === 'vertical' && index !== elements.length - 1
              ? size
              : undefined,
        },
      })
    })

  return (
    <div {...props} style={spacerStyle}>
      {nodes}
    </div>
  )
}

export default Spacer
