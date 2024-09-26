const Telescope = ({ size = 22, color = "#292D32", strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22 24"
    fill="none"
  >
    <path
      d="M10.5426 6.03674L7.03622 8.41272C6.24534 8.94923 5.84939 9.21752 5.77382 9.62882C5.69825 10.0401 5.9722 10.4316 6.52012 11.2146L7.19385 12.1791C7.72805 12.9411 7.99416 13.3222 8.39733 13.3964C8.80049 13.4706 9.18495 13.2092 9.95594 12.6873L13.5108 10.2774M5.65305 9.97651L2.19621 12.3195C1.38051 12.872 0.973245 13.1492 0.89432 13.5688C0.815395 13.9884 1.09505 14.3884 1.65436 15.1886C2.21359 15.9877 2.49325 16.3877 2.92074 16.465C3.34823 16.5423 3.7555 16.2651 4.57019 15.7126L8.02796 13.3686M19.5355 4.31809L18.348 2.62105C17.7887 1.82194 17.5091 1.42188 17.0826 1.34451C16.6552 1.26821 16.2478 1.54444 15.4321 2.09697L11.9268 4.47287C11.1349 5.00946 10.7399 5.27767 10.6644 5.68897C10.5879 6.10135 10.8618 6.49283 11.4097 7.27479L12.6777 9.08781C13.2109 9.84987 13.478 10.2309 13.8811 10.3051C14.2843 10.3793 14.6688 10.1179 15.4388 9.59613L18.9936 7.18619C19.8093 6.63367 20.2166 6.35744 20.2956 5.93785C20.3745 5.51825 20.0948 5.1182 19.5355 4.31809Z"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinejoin="round"
    />
    <path
      d="M15 22.5909L11 13.0909L7 22.5909"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);

export default Telescope;

