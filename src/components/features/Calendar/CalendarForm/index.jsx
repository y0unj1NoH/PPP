import styled from "@emotion/styled";
import CalendarFormHeader from "./CalendarFormHeader";
import CalendarFormTitleInput from "./CalendarFormTitleInput";
import CalendarFormDateTimeSection from "./CalendarFormDateTimeSection";
import FormButtons from "../../FormButtons";
import ErrorText from "../../Error/ErrorText";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

const CalendarForm = ({
  setVisible,
  isEditMode,
  title,
  setTitle,
  isCheck,
  setIsCheck,
  setTimeRange,
  errors,
  isLoading,
  handleSubmit
}) => {
  return (
    <FormContainer>
      <CalendarFormHeader setVisible={setVisible} isEditMode={isEditMode} />
      <CalendarFormTitleInput title={title} setTitle={setTitle} />
      {errors.title && <ErrorText error={errors.title} />}
      <CalendarFormDateTimeSection
        errors={errors}
        isCheck={isCheck}
        setIsCheck={setIsCheck}
        setTimeRange={setTimeRange}
      />
      <FormButtons
        setVisible={setVisible}
        handleSubmit={handleSubmit}
        disabled={isLoading}
      />
    </FormContainer>
  );
};

export default CalendarForm;

