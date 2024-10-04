import DateInput from "../../components/features/DateInput";

export default {
  title: "Features/DateInput",
  component: DateInput
};

export const Default = () => <DateInput label="시작일" />;

export const Today = () => {
  const today = new Date();
  const year = today.getFullYear().toString().slice(2);
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");

  return <DateInput value={`${year}.${month}.${day}`} />;
};

