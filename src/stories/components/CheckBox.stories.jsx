import CheckBox from "../../components/common/CheckBox";

export default {
  title: "Component/CheckBox",
  component: CheckBox,
  argTypes: {
    name: { control: "text" },
    on: { control: "boolean" }
  }
};

export const Default = (args) => {
  return <CheckBox {...args} />;
};

export const Complete = () => {
  return <CheckBox name="완료된 내역 포함" />;
};

