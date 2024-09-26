import { createMemoryRouter } from "react-router-dom";
import News from "../../../pages/News";

const router = createMemoryRouter([
  {
    path: "/",
    element: <News />
  }
]);

export default {
  title: "pages/News",
  component: News,
  decorators: [() => <RouterPrivider router={router} />]
};

export const Default = () => {
  return <News />;
};

