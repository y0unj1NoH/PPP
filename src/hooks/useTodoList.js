import { useState } from "react";

const useTodoList = () => {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    type: "deadline",
    width: 500
  });

  // 
  return { visible, setVisible, modalContent, setModalContent };
};

export default useTodoList;
