import { BrowserRouter as Router } from "react-router-dom";
import Header from "../../components/Layout/Header";

export default {
  title: "Component/Header",
  component: Header,
  argTypes: {
    type: { control: "text" }
  }
};
export const Desktop = (args) => {
  return (
    <Router>
      <Header type="desktop" {...args} />
    </Router>
  );
};

export const Mobile = (args) => {
  return (
    <Router>
      <Header type="mobile" {...args} />
    </Router>
  );
};

export const MobileTop = (args) => {
  return (
    <Router>
      <Header type="mobileTop" {...args} />
    </Router>
  );
};

