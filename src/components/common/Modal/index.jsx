import { useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import useClickAway from "../../../hooks/useClickAway";

// 모달 배경 어두워지는 부분
const BackgroundDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 12px;
`;

const Modal = ({
  children,
  width = 500,
  height,
  visible = false,
  onClose,
  ...props
}) => {
  // 모달의 바깥 부분을 클릭하면 onClose 함수 실행
  const ref = useClickAway(() => {
    onClose && onClose();
  });

  const containerStyle = useMemo(
    () => ({
      width,
      height
    }),
    [width, height]
  );

  const el = useMemo(() => document.createElement("div"), []);
  useEffect(() => {
    // 바디 안쪽으로 모달을 추가
    document.body.appendChild(el);
    return () => {
      document.body.removeChild(el);
    };
  });

  // 모달을 불러온 컴포넌트 안에 있는 게 아니라 body=가장 바깥쪽으로 빼서 추가
  return ReactDOM.createPortal(
    <BackgroundDim style={{ display: visible ? "block" : "none" }}>
      <ModalContainer
        ref={ref}
        {...props}
        style={{ ...props.style, ...containerStyle }}
      >
        {children}
      </ModalContainer>
    </BackgroundDim>,
    el
  );
};

export default Modal;

