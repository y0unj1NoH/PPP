import useCalendarForm from "../../../hooks/useCalendarForm";
import CalendarForm from "./CalendarForm";

const CalendarEdit = ({ setVisible, event, setModalContent }) => {
  const {
    title,
    setTitle,
    isCheck,
    setIsCheck,
    setTimeRange,
    errors,
    isLoading,
    handleSubmit
  } = useCalendarForm({ setVisible, event, isEditMode: true, setModalContent });

  return (
    <CalendarForm
      setVisible={setVisible}
      isEditMode={true}
      title={title}
      setTitle={setTitle}
      isCheck={isCheck}
      setIsCheck={setIsCheck}
      setTimeRange={setTimeRange}
      errors={errors}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
    />
  );
};

export default CalendarEdit;

