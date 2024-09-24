import Toast from "../../components/common/Toast";

export default {
  title: "Component/Toast",
  component: Toast
};

export const Default = () => {
  return (
    <button
      onClick={() => {
        Toast.show("안녕하세요!"), 3000;
      }}
    >
      Show Toast
    </button>
  );
};

