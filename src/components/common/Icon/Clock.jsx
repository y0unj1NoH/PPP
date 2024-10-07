const Clock = ({ size = 32, color = "#C5B4FB" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M16 2.66675C14.249 2.66675 12.5152 3.01162 10.8975 3.68169C9.27984 4.35175 7.80998 5.33388 6.57187 6.57199C4.07138 9.07248 2.66663 12.4639 2.66663 16.0001C2.66663 19.5363 4.07138 22.9277 6.57187 25.4282C7.80998 26.6663 9.27984 27.6484 10.8975 28.3185C12.5152 28.9885 14.249 29.3334 16 29.3334C19.5362 29.3334 22.9276 27.9287 25.4281 25.4282C27.9285 22.9277 29.3333 19.5363 29.3333 16.0001C29.3333 14.2491 28.9884 12.5153 28.3184 10.8976C27.6483 9.27996 26.6662 7.81011 25.4281 6.57199C24.1899 5.33388 22.7201 4.35175 21.1024 3.68169C19.4847 3.01162 17.7509 2.66675 16 2.66675ZM21.6 21.6001L14.6666 17.3334V9.33342H16.6666V16.2667L22.6666 19.8667L21.6 21.6001Z"
      fill={color}
    />
  </svg>
);

export default Clock;

