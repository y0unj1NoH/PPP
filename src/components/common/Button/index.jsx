import PropTypes from "prop-types";
import Text from "../Text";
import "./button.css";

const Button = ({ label, primary = false, size = "medium", ...props }) => {
  const mode = primary ? "button--primary" : "button--secondary";
  return (
    <button
      type="button"
      className={["button", `button--${size}`, mode].join(" ")}
      {...props}
    >
      <Text>{label}</Text>
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  onClick: undefined
};

export default Button;

