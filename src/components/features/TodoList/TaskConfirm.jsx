import { useCallback } from "react";
import Toast from "../../common/Toast";
import Confirm from "../Confirm";

const TaskConfirm = ({ setVisible }) => {
  const onDelete = useCallback(() => {
    setVisible(false);
    Toast.show(true, "할 일이 삭제되었어요"), 3000;
  }, [setVisible]);

  const onCancel = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  return <Confirm onCancel={onCancel} onDelete={onDelete} />;
};

export default TaskConfirm;

