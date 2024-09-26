import { useState } from "react";
import styled from "@emotion/styled";
import Icon from "../Icon";
import Text from "../Text";
import useTimeout from "../../../hooks/useTimeout";

const Container = styled.div`
  font-weight: 500;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 300px;
  height: 50px;
  padding: 0 10px;
  border-radius: 16px;
  border: none;
  background: rgba(218, 218, 218, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  opacity: 1;
  transition: opacity 0.4s ease-out;

  &:first-of-type {
    animation: move 0.4s ease-out forwards;
  }

  &:not(:first-of-type) {
    margin-top: 8px;
  }

  @keyframes move {
    0% {
      margin-top: 80px;
    }
    100% {
      margin-top: 0;
    }
  }
`;

const Success = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #31d555;
`;

const ToastItem = ({ success, message, duration, onDone }) => {
  // 딱 한번만 쓰는 useState true -> false 되고 언마운트됨?
  const [show, setShow] = useState(true);

  // setTimeout을 통해 DOM이 바로 사라지지 않고, 투명해지도록 유예시간을 줌
  useTimeout(() => {
    setShow(false);
    setTimeout(onDone, 400);
  }, duration);

  return (
    <Container style={{ opacity: show ? 1 : 0 }}>
      {success ? (
        <Success>
          <Icon.Check color="white" />
        </Success>
      ) : (
        <Icon.Warning />
      )}
      <Text>{message}</Text>
    </Container>
  );
};

export default ToastItem;

