import useCalendarForm from "../../../hooks/useCalendarForm";
import CalendarForm from "./CalendarForm";

const CalendarAdd = ({ setVisible, selectInfo }) => {
  const {
    title,
    setTitle,
    isCheck,
    setIsCheck,
    setTimeRange,
    errors,
    isLoading,
    handleSubmit
  } = useCalendarForm({ setVisible, selectInfo, isEditMode: false });

  return (
    <CalendarForm
      setVisible={setVisible}
      isEditMode={false}
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

export default CalendarAdd;

