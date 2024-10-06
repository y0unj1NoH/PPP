import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: ${({ block }) => (block ? "block" : "inline-block")};
`;

const Label = styled.label`
  display: block;
  font-size: 1.2rem;
`;

const defaultColors = {
  true: "red",
  false: "#C5C5C5"
  // false: "#7E7E7E"
};
const defaultFontColors = {
  true: "red",
  false: "#7E7E7E"
};
const focusColors = {
  true: "red",
  false: "#907ad6"
};

const StyledInput = styled.input`
  width: 100%;
  padding: 4px 8px;
  outline: none;
  border: 0.5px solid ${({ invalid }) => defaultColors[invalid]};
  color: ${({ invalid }) => defaultFontColors[invalid]};
  border-radius: 4px;

  box-sizing: border-box;

  &:focus {
    border: 1px solid ${({ invalid }) => focusColors[invalid]};
    color: ${({ invalid }) => focusColors[invalid]};
  }

  &::selection {
    background-color: #907ad6;
    color: white;
  }
`;

const Input = ({
  label,
  block = false,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  wrapperProps,
  ...props
}) => {
  return (
    <Wrapper block={block} {...wrapperProps}>
      <Label>{label}</Label>
      <StyledInput
        invalid={invalid}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        {...props}
        style={{ ...props.style }}
      />
    </Wrapper>
  );
};

export default Input;

