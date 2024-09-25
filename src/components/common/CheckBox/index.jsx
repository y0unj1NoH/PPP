import styled from "@emotion/styled";
import useCheckBox from "../../../hooks/useCheckBox";
import Text from "../Text";

const CheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  cursor: pointer;
`;

const Check = styled.div`
  display: inline-flex;
  width: 19px;
  height: 19px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #31d555;
  background: rgba(255, 255, 255, 0.8);
`;

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="9"
    viewBox="0 0 13 9"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6L11 0L12.5 1.5L6.5 7.5L5 6ZM3.5 7.5L5 6L2 3L0.5 4.5L3.5 7.5Z"
      fill="white"
    />
    <path d="M3.5 7.5L5 9L6.5 7.5L5 6L3.5 7.5Z" fill="white" />
  </svg>
);

const CheckBoxInput = styled.input`
  display: none;

  &:checked + div {
    background-color: #31d555;
  }
`;

const CheckBox = ({ name, on = false, onChange, ...props }) => {
  const [checked, checkBox] = useCheckBox(on);

  const handleChange = () => {
    checkBox();
    onChange && onChange();
  };

  return (
    <CheckBoxContainer {...props}>
      <CheckBoxInput
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <Check>{checked ? <CheckIcon /> : null}</Check>
      <Text>{name}</Text>
    </CheckBoxContainer>
  );
};

export default CheckBox;

