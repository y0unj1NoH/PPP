import { useCallback } from "react";
import Toast from "../../common/Toast";
import Confirm from "../Confirm";

const CalendarConfirm = ({ setVisible, event, setModalContent }) => {
  const onDelete = useCallback(() => {
    event && event.remove();
    setVisible(false);
    Toast.show(true, "일정이 삭제되었어요"), 3000;
  }, [event, setVisible]);

  const onCancel = useCallback(() => {
    setModalContent({ type: "info", width: 300 });
  }, [setModalContent]);

  return <Confirm onCancel={onCancel} onDelete={onDelete} />;
};

export default CalendarConfirm;
