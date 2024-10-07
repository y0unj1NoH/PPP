import styled from "@emotion/styled";
import Button from "../../common/Button";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const FormButtons = ({ setVisible, handleSubmit, disabled }) => (
  <ButtonContainer>
    <Button
      size="medium"
      label="Cancel"
      onClick={() => setVisible(false)}
      disabled={disabled}
    />
    <Button
      primary
      size="medium"
      label="Save"
      onClick={handleSubmit}
      disabled={disabled}
    />
  </ButtonContainer>
);

export default FormButtons;

