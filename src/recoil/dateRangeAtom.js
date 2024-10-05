import { atom } from "recoil";

export const dateRangeAtom = atom({
  key: "dateRangeAtom",
  default: {
    start: "00.00.00",
    end: "00.00.00"
  }
});

