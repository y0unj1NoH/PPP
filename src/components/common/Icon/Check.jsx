const Check = ({ size = 13, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13 9"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 6L11 0L12.5 1.5L6.5 7.5L5 6ZM3.5 7.5L5 6L2 3L0.5 4.5L3.5 7.5Z"
      fill={color}
    />
    <path d="M3.5 7.5L5 9L6.5 7.5L5 6L3.5 7.5Z" fill={color} />
  </svg>
);

export default Check;

