import { useState } from "react";
import Input from "../../common/Input";

const DateInput = ({ value, onChange }) => {
  const [date, setDate] = useState(value);

  return (
    <Input
      type="date"
      value={date}
      onChange={(e) => {
        onChange && onChange();
        setDate(e.target.value);
      }}
    />
  );
};

export default DateInput;

