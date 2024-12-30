import Button from "../../../common/Button";

const DateTimeTag = ({ dateTime, onClick }) => {
  const buttonStyle = {
    fontSize: "2.4rem",
    padding: "8px",
  };

  // TODO: 타임 태그 클릭 시 태그 삭제? or 태그 수정? 일단은 태그 삭제

  return (
    <Button
      primary
      label={dateTime}
      style={{ ...buttonStyle }}
      onClick={onClick}
    />
  );
};

export default DateTimeTag;
