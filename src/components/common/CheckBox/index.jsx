import styled from "@emotion/styled";
import useCheckBox from "../../../hooks/useCheckBox";
import Icon from "../Icon";
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
      <Check>{checked ? <Icon.Check /> : null}</Check>
      <Text>{name}</Text>
    </CheckBoxContainer>
  );
};

export default CheckBox;

