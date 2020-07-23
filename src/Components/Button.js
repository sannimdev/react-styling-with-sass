import React from "react";
import classNames from "classnames";
import "./Button.scss";

// size: large, medium, small
// color: blue(default), pink, gray
function Button({ children, size, color, outline, fullWidth, className, ...rest }) {
  return (
    <button
      className={classNames("Button", size, color, { outline, fullWidth }, className)}
      {...rest}
    >
      {children}
    </button>
  );
}

// 가장 정석적인 방법
Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
