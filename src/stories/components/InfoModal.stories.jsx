import { useState } from "react";
import Modal from "../../components/common/Modal";
import InfoModal from "../../components/features/Calendar/InfoModal";

export default {
  title: "Features/InfoModal",
  component: InfoModal
};

export const Default = () => {
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState({ type: "info", width: 300 });

  const event = {
    title: "점심시간",
    start: new Date("2021-09-30T13:00:00"),
    end: new Date("2021-09-30T14:00:00")
  };

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <Modal
        width={modalType.width}
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <InfoModal
          event={event}
          setVisible={setVisible}
          setModalType={setModalType}
        />
      </Modal>
    </div>
  );
};

