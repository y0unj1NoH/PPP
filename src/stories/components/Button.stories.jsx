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
      label={<Icon name="plus" strokeWidth={2.5} color="white" />}
    />
  );
};

export const PlusIconSecondarySmall = () => {
  return <Button size="small" label={<Icon name="plus" strokeWidth={2.5} />} />;
};

export const PlusIconPrimary = () => {
  return (
    <Button
      id="button--plus"
      primary
      size="large"
      label={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 41"
          fill="none"
        >
          <path
            d="M37.1429 17.1333H24.2857V5.8833C24.2857 4.50283 23.0063 3.3833 21.4286 3.3833H18.5714C16.9938 3.3833 15.7143 4.50283 15.7143 5.8833V17.1333H2.85714C1.27946 17.1333 0 18.2528 0 19.6333V22.1333C0 23.5138 1.27946 24.6333 2.85714 24.6333H15.7143V35.8833C15.7143 37.2638 16.9938 38.3833 18.5714 38.3833H21.4286C23.0063 38.3833 24.2857 37.2638 24.2857 35.8833V24.6333H37.1429C38.7205 24.6333 40 23.5138 40 22.1333V19.6333C40 18.2528 38.7205 17.1333 37.1429 17.1333Z"
            fill="white"
          />
        </svg>
      }
    />
  );
};

export const CheckIconPrimary = () => {
  return (
    <Button
      id="button--check"
      primary
      size="large"
      label={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="24"
          viewBox="0 0 33 25"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.2698 16.2727L25.4414 3.10113C27.0035 1.53903 29.5362 1.53903 31.0983 3.10113L32.2698 4.2727L16.2698 20.2727L12.2698 16.2727ZM8.26984 20.2727L12.2698 16.2727L7.09826 11.1011C5.53617 9.53903 3.00351 9.53903 1.44141 11.1011L0.269836 12.2727L8.26984 20.2727Z"
            fill="white"
          />
          <path
            d="M8.26984 20.2727L12.2698 24.2727L16.2698 20.2727L12.2698 16.2727L8.26984 20.2727Z"
            fill="white"
          />
        </svg>
      }
    />
  );
};

