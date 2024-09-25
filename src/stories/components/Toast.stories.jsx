import Toast from "../../components/common/Toast";

export default {
  title: "Component/Toast",
  component: Toast
};

export const Success = () => {
  return (
    <button
      onClick={() => {
        Toast.show(true, "할 일이 등록되었어요"), 3000;
      }}
    >
      Show Toast
    </button>
  );
};

export const Fail = () => {
  return (
    <button
      onClick={() => {
        Toast.show(false, "내용을 입력해 주세요"), 3000;
      }}
    >
      Show Toast
    </button>
  );
};

