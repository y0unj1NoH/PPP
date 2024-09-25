import { useState } from "react";
import styled from "@emotion/styled";
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

const SuccessIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="11"
    viewBox="0 0 17 13"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.01453 8.42554L14.0145 0.425537L16.0145 2.42554L8.01453 10.4255L6.01453 8.42554ZM4.01453 10.4255L6.01453 8.42554L2.01453 4.42554L0.0145264 6.42554L4.01453 10.4255Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.01453 8.42554L14.0145 0.425537L16.0145 2.42554L8.01453 10.4255L6.01453 8.42554ZM4.01453 10.4255L6.01453 8.42554L2.01453 4.42554L0.0145264 6.42554L4.01453 10.4255Z"
      fill="#00CD2D"
      fillOpacity="0.1"
    />
    <path
      d="M4.01453 10.4255L6.01453 12.4255L8.01453 10.4255L6.01453 8.42554L4.01453 10.4255Z"
      fill="white"
    />
    <path
      d="M4.01453 10.4255L6.01453 12.4255L8.01453 10.4255L6.01453 8.42554L4.01453 10.4255Z"
      fill="#00CD2D"
      fillOpacity="0.1"
    />
  </svg>
);

const Fail = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 27 22"
    fill="none"
  >
    <path
      d="M26.7399 19.3057L15.7946 1.84382C15.0188 0.605768 12.9522 0.605768 12.1757 1.84382L1.23108 19.3057C1.06263 19.5744 0.97818 19.8761 0.985967 20.1813C0.993754 20.4865 1.09351 20.7847 1.27551 21.0469C1.4575 21.3091 1.71551 21.5262 2.02435 21.6772C2.33319 21.8281 2.68231 21.9077 3.03763 21.9081H24.9301C25.2857 21.9081 25.6352 21.8289 25.9445 21.6782C26.2538 21.5274 26.5123 21.3103 26.6946 21.0481C26.877 20.7858 26.977 20.4874 26.985 20.182C26.9929 19.8766 26.9084 19.5746 26.7399 19.3057ZM13.9855 19.2047C13.7314 19.2047 13.4831 19.14 13.2719 19.0187C13.0607 18.8975 12.896 18.7251 12.7988 18.5235C12.7016 18.3219 12.6762 18.1 12.7257 17.886C12.7753 17.6719 12.8976 17.4753 13.0772 17.321C13.2569 17.1667 13.4857 17.0616 13.7349 17.019C13.984 16.9764 14.2423 16.9983 14.477 17.0818C14.7117 17.1653 14.9123 17.3068 15.0534 17.4882C15.1946 17.6697 15.2699 17.883 15.2699 18.1013C15.2699 18.3939 15.1346 18.6746 14.8937 18.8815C14.6528 19.0884 14.3261 19.2047 13.9855 19.2047ZM15.3804 8.10691L15.0117 14.8379C15.0117 15.072 14.9035 15.2965 14.7108 15.462C14.5181 15.6276 14.2567 15.7206 13.9842 15.7206C13.7117 15.7206 13.4503 15.6276 13.2576 15.462C13.0649 15.2965 12.9566 15.072 12.9566 14.8379L12.588 8.10967C12.5797 7.94889 12.6092 7.78833 12.6747 7.63755C12.7402 7.48677 12.8403 7.34886 12.9692 7.23204C13.098 7.11522 13.2529 7.02188 13.4247 6.95759C13.5964 6.8933 13.7815 6.85937 13.9688 6.85782H13.9823C14.1709 6.85774 14.3575 6.89048 14.531 6.95408C14.7045 7.01767 14.8611 7.1108 14.9915 7.22784C15.122 7.34488 15.2234 7.48341 15.2898 7.63506C15.3562 7.78672 15.3861 7.94835 15.3778 8.11022L15.3804 8.10691Z"
      fill="#F52222"
    />
  </svg>
);

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
          <SuccessIcon />
        </Success>
      ) : (
        <Fail />
      )}
      <Text>{message}</Text>
    </Container>
  );
};

export default ToastItem;

