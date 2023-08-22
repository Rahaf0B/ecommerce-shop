import React, { FC, forwardRef, ButtonHTMLAttributes } from "react";

type ButtonFieldProps = {
  className?: string;
  id?: string;
  label: string;
  backgroundColor: string;
  size: "sm" | "md" | "lg";
  color: string;
  border?: string;
  borderRadius: number;
  boxShadow?: string;
  type?: "submit" | "button" | "reset";
  handleClick?: (any) => void;
  ref?: React.Ref<HTMLButtonElement>;
};

const Button: FC<ButtonFieldProps> = forwardRef(
  (
    {
      className = "Button",
      id = "btn",
      label,
      backgroundColor = "white",
      size = "md",
      color,
      border = "none",
      borderRadius = 0,
      boxShadow = "",
      type = "button",
      handleClick,
      ...restProps
    },
    ref
  ) => {
    let scale = 1;
    if (size === "sm") {
      scale = 0.75;
    } else if (size === "lg") {
      scale = 1.5;
    }
    const style = {
      color,
      backgroundColor,
      padding: `${scale * 0.7}rem ${scale * 1}rem`,
      border,
      borderRadius,
      boxShadow,
    };

    return (
      <button
        className={className}
        id={id}
        onClick={handleClick}
        type={type}
        style={style}
        ref={ref}
        {...restProps}
      >
        {label}
      </button>
    );
  }
);

export default Button;
