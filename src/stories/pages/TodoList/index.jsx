import { createMemoryRouter } from "react-router-dom";
import TodoList from "../../../pages/TodoList";

const router = createMemoryRouter([
  {
    path: "/",
    element: <TodoList />
  }
]);

export default {
  title: "pages/TodoList",
  component: TodoList,
  decorators: [() => <RouterPrivider router={router} />]
};

export const Default = () => {
  return <TodoList />;
};

