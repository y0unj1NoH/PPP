import { atom } from "recoil";

export const todoTasksAtom = atom({
  key: "todoTasksAtom",
  default: [],
});

// {
//   task: "",
//   deadline: undefined,
// };
