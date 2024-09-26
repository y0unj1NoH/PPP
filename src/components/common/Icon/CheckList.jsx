const CheckList = ({ size = 22, color = "#292D32", strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 20"
    fill="none"
  >
    <path
      d="M1 3.5L2.214 5L6.5 1M1 10.5L2.214 12L6.5 8M1 17.5L2.214 19L6.5 15"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 17H11M21 10H11M21 3H11"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default CheckList;

