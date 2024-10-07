import Button from "../../../common/Button";

const DateTimeTag = ({ dateTime }) => {
  const buttonStyle = {
    fontSize: "2.4rem",
    padding: "8px"
  };

  return <Button primary label={dateTime} style={{ ...buttonStyle }} />;
};

export default DateTimeTag;

