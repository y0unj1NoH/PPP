import { useState } from "react";
import ConfirmModal from "../../components/features/Calendar/ConfirmModal";

export default {
  title: "Features/ConfirmModal",
  component: ConfirmModal
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <ConfirmModal
        visible={visible}
        setVisible={setVisible}
        onConfirm={() => alert("삭제되었습니다.")}
        onCancel={() => setVisible(false)}
      ></ConfirmModal>
    </div>
  );
};

