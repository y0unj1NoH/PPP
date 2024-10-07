const Plus = ({ size = 40, color = "white" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      d="M37.1429 17.1333H24.2857V5.8833C24.2857 4.50283 23.0063 3.3833 21.4286 3.3833H18.5714C16.9938 3.3833 15.7143 4.50283 15.7143 5.8833V17.1333H2.85714C1.27946 17.1333 0 18.2528 0 19.6333V22.1333C0 23.5138 1.27946 24.6333 2.85714 24.6333H15.7143V35.8833C15.7143 37.2638 16.9938 38.3833 18.5714 38.3833H21.4286C23.0063 38.3833 24.2857 37.2638 24.2857 35.8833V24.6333H37.1429C38.7205 24.6333 40 23.5138 40 22.1333V19.6333C40 18.2528 38.7205 17.1333 37.1429 17.1333Z"
      fill={color}
    />
  </svg>
);

export default Plus;

