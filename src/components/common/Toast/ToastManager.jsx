import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";
import styled from "@emotion/styled";
import ToastItem from "./ToastItem";

const Container = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: 1500;
`;

// bind를 통해 createToast 넘겨줌
const ToastManager = ({ bind }) => {
  const [toasts, setToasts] = useState([]);

  const createToast = useCallback((success, message, duration) => {
    const newToast = {
      id: v4(),
      success,
      message,
      duration
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <Container>
      {toasts.map(({ id, success, message, duration }) => (
        <ToastItem
          success={success}
          message={message}
          duration={duration}
          key={id}
          onDone={() => removeToast(id)} // 토스트가 끝났다면 토스트 제거
        />
      ))}
    </Container>
  );
};

export default ToastManager;

