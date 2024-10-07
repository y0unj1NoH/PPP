import styled from "@emotion/styled";
import DeadlineHeader from "./DeadlineHeader";
import DeadlineDateTimeSection from "./DeadlineDateTimeSection.jsx";
import FormButtons from "../../FormButtons";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const DeadlineModal = ({
  setVisible,
  isCheck,
  setIsCheck,
  errors,
  handleSubmit
}) => {
  return (
    <FormContainer>
      <DeadlineHeader setVisible={setVisible} />
      <DeadlineDateTimeSection
        errors={errors}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
      />
      <FormButtons setVisible={setVisible} handleSubmit={handleSubmit} />
    </FormContainer>
  );
};

export default DeadlineModal;

