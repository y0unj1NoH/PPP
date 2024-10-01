import Spacer from "../../components/common/Spacer";

export default {
  title: "Component/Spacer",
  component: Spacer,
  argTypes: {
    size: {
      defaultValue: 8,
      control: { type: "range", min: 8, max: 64 }
    }
  }
};

const Box = ({ block, style }) => {
  return (
    <div
      style={{
        display: block ? "block" : "inline-block",
        width: 100,
        height: 100,
        backgroundColor: "blue",
        ...style
      }}
    />
  );
};

export const Default = (args) => {
  return (
    <Spacer {...args} type="horizontal">
      {/* 버티컬은 블록일때 적용됨 */}
      <Box />
      <Box />
      <Box />
    </Spacer>
  );
};

export const Vertical = (args) => {
  return (
    <Spacer {...args} type="vertical">
      {/* 버티컬은 블록일때 적용됨 */}
      <Box block />
      <Box block />
      <Box block />
    </Spacer>
  );
};

