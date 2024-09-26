// TODO: 사이즈 파라미터로 사이즈 조절하기
// Button에서는 조절되는데, Icon에서는 안되는 듯
// 정사각형 버튼은 괜찮은데 이건 직사각형이라서 크기 비율을 정해줘야 버튼 모양이 직사각형이 됨
const RoundCheck = ({ size = 32, color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 24) / 32}
      viewBox="0 0 32 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.2698 16.2727L25.4414 3.10113C27.0035 1.53903 29.5362 1.53903 31.0983 3.10113L32.2698 4.2727L16.2698 20.2727L12.2698 16.2727ZM8.26984 20.2727L12.2698 16.2727L7.09826 11.1011C5.53617 9.53903 3.00351 9.53903 1.44141 11.1011L0.269836 12.2727L8.26984 20.2727Z"
        fill={color}
      />
      <path
        d="M8.26984 20.2727L12.2698 24.2727L16.2698 20.2727L12.2698 16.2727L8.26984 20.2727Z"
        fill={color}
      />
    </svg>
  );
};

export default RoundCheck;

