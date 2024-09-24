import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`
const Label = styled.label`
  display: block;
  font-size: 12px;
`

const StyledSelect = styled.select`
  width: 100%;
  padding: 4px 8px;
  border: 1px solid ${({ invalid }) => (invalid ? 'red' : 'gray')};
  border-radius: 4px;
  box-sizing: border-box;
`

const Select = ({
  data,
  label,
  placeholder,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  wrapperProps,
  ...props
}) => {
  // 1. String
  // 2. Object {label: 'string', value: 'string'}
  const formattedData = data.map((item) =>
    typeof item === 'string' ? { label: item, value: item } : item,
  )

  const options = formattedData.map((item) => (
    <option key={item.value} value={item.value}>
      {item.label}
    </option>
  ))

  if (placeholder) {
    options.unshift(
      // 셀렉트를 클릭했을 때 옵션이 보이지는 않지만, 제일 처음에 보이는 것은 가능함
      <option key="placeholder" value="" hidden>
        {placeholder}
      </option>,
    )
  }
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledSelect
        required={required}
        disabled={disabled}
        invalid={invalid}
        {...props}
      >
        {options}
      </StyledSelect>
    </Wrapper>
  )
}

export default Select
