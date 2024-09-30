import InfoModal from "../../components/features/Calendar/InfoModal";
import { useState } from "react";

export default {
  title: "Features/InfoModal",
  component: InfoModal
};

export const Default = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Modal</button>
      <InfoModal
        title="점심시간"
        date="9월 30일 13:00 ~ 9월 30일 14:00"
        visible={visible}
        setVisible={setVisible}
      ></InfoModal>
    </div>
  );
};

