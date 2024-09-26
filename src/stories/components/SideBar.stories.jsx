import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../../components/features/SideBar";

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

