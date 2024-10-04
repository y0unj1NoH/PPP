import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../../components/layout/SideBar";

export default {
  title: "Features/SideBar",
  component: SideBar
};

export const Default = () => {
  return (
    <Router>
      <SideBar />
    </Router>
  );
};

export const Mobile = () => {
  return (
    <Router>
      <SideBar headerType="mobile" />
    </Router>
  );
};
