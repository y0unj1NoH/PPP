import Input from "../../../common/Input";

const CalendarFormTitleInput = ({ title, setTitle }) => (
  <Input
    type="text"
    value={title}
    block
    placeholder="일정 제목"
    onChange={(e) => setTitle(e.target.value)}
    style={{
      width: "100%",
      padding: "12px 8px",
      borderRadius: "8px"
    }}
  />
);

export default CalendarFormTitleInput;

