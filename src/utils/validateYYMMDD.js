import { parse, isValid } from "date-fns";

const validateYYMMDD = (dateStr) => {
  const parsedDate = parse(dateStr, "yy.MM.dd", new Date());
  return isValid(parsedDate);
};

export default validateYYMMDD;

