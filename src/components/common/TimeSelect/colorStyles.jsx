// 나를 빡치게 한건 보더컬러가 아니라 박스 섀도우였다.
const colorStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: "8px",
    borderColor: isFocused ? "#907ad6" : "#C5C5C5",
    boxShadow: isFocused ? "0 0 0 1px #907ad6" : "none",
    backgroundColor: "white",
    color: "#222222",
    "&:hover": {
      borderColor: "#907ad6"
    }
  }),

  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    borderColor: isFocused ? "#907ad6" : styles.borderColor,
    backgroundColor: isSelected ? "#c5b4fb" : styles.backgroundColor,
    color: isSelected ? "#ffffff" : styles.color,
    "&:hover": {
      backgroundColor: isSelected ? "#c5b4fb" : "#c5b4fb4d",
      color: isSelected ? "#ffffff" : "#222222"
    }
  }),
  dropdownIndicator: (styles, { isFocused }) => ({
    ...styles,
    color: isFocused ? "#907ad6" : styles.color,
    "&:hover": {
      color: isFocused ? "#907ad6" : "#907ad69d"
    }
  })
};

// TODO: 일단 파일 분리했는데, 좀더 깔끔한 방법이 있는지 찾아보자
export default colorStyles;

