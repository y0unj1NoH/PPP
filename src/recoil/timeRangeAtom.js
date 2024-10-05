import { atom } from "recoil";

export const timeRangeAtom = atom({
  key: "timeRangeAtom",
  default: {
    start: {
      hour: "00",
      minute: "00"
    },
    end: {
      hour: "00",
      minute: "00"
    }
  }
});
