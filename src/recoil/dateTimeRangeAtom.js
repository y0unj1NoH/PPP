import { atom } from "recoil";

export const dateTimeRangeAtom = atom({
  key: "dateTimeRangeAtom",
  default: {
    date: "00.00.00",
    time: {
      hour: "00",
      minute: "00"
    }
  }
});
