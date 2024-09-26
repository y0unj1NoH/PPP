import Icon from "../../components/common/Icon";

export default {
  title: "Component/Icon",
  component: Icon
  // argTypes: {
  //   name: { defaultValue: "box", control: "text" },
  //   size: { defaultValue: 16, control: { type: "range", min: 16, max: 80 } },
  //   strokeWidth: {
  //     defaultValue: 2,
  //     control: { type: "range", min: 2, max: 6 }
  //   },
  //   rotate: { defaultValue: 0, control: { type: "range", min: 0, max: 360 } },
  //   color: { defaultValue: "#222", control: "color" }
  // }
};

export const Default = (args) => {
  return <Icon.Default {...args} />;
};

export const Telescope = () => {
  return <Icon.Telescope />;
};

export const CheckList = () => {
  return <Icon.CheckList />;
};

export const Plus = () => {
  return <Icon.Plus color="black" />;
};

export const RoundCheck = () => {
  return <Icon.RoundCheck color="black" size={100} />;
};

export const Check = () => {
  return <Icon.Check color="black" />;
};

export const Warning = () => {
  return <Icon.Warning />;
};

export const Github = () => {
  return <Icon.Github />;
};
