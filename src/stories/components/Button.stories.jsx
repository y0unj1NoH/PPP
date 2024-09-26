import { fn } from "@storybook/test";
import Button from "../../components/common/Button";
import Icon from "../../components/common/Icon";

export default {
  title: "Component/Button",
  component: Button,
  parameters: {},
  // tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" }
  },
  args: { onClick: fn() }
};

export const Primary = () => {
  return <Button primary label="Button" />;
};

export const Secondary = () => {
  return <Button label="Button" />;
};

export const PlusIconPrimarySmall = () => {
  return (
    <Button
      primary
      size="small"
      label={<Icon.Default name="plus" strokeWidth={2.5} color="white" />}
    />
  );
};

export const PlusIconSecondarySmall = () => {
  return (
    <Button
      size="small"
      label={<Icon.Default name="plus" strokeWidth={2.5} />}
    />
  );
};

export const PlusIconPrimary = () => {
  return (
    <Button
      id="button--plus"
      primary
      size="large"
      label={<Icon.Plus color="white" />}
    />
  );
};

export const CheckIconPrimary = () => {
  return (
    <Button
      id="button--check"
      primary
      size="large"
      label={<Icon.RoundCheck color="white" />}
    />
  );
};

