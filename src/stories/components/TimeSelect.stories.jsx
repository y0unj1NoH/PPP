import TimeSelect from "../../components/common/TimeSelect";

export default {
  title: "Component/TimeSelect",
  component: TimeSelect,
  argTypes: {
    label: {
      defaultValue: "Label",
      control: "text"
    }
  }
};

export const Default = (args) => <TimeSelect label="시작시간" {...args} />;

