import { createMemoryRouter } from "react-router-dom";
import Calendar from "../../../pages/Calendar";

const router = createMemoryRouter([
  {
    path: "/",
    element: <Calendar />
  }
]);

export default {
  title: "pages/Calendar",
  component: Calendar,
  decorators: [() => <RouterPrivider router={router} />]
};

export const Default = () => {
  return <Calendar />;
};

