import React, { FC } from "react";

type TextFieldProps = {
  id?: string;
  name: string;
  className: string;
  placeholder: string;
  size: "sm" | "md" | "lg" | "sq";
  borderRadius: number;
  labelClassName?: string;
  label?: string;
  type: string;
  border?: string;
  color?: string;
  value?: string | number;
  maxLength?: number;
  ref?: any;
  handleChange?: (any) => void;
};

const TextField: FC<TextFieldProps> = ({
  id = "",
  name = "",
  className = "",
  placeholder = "",
  labelClassName = "",
  size,
  color = "black",
  handleChange,
  borderRadius = 0,
  label = "",
  type = "text",
  border = "",
  value = null,
  maxLength,
  ref,
}) => {
  let scale = 4;
  if (size === "sm") {
    scale = 3;
  } else if (size === "lg") {
    scale = 5;
  }
  const style = {
    border,
    borderRadius,
    width: `${scale * 4.2}rem`,
    height: `${scale * 0.5}rem`,
    color,
  };
  return (
    <div>
      <label className={labelClassName}>{label}</label>
      <div className={labelClassName}></div>
      <input
        id={id}
        name={name}
        ref={ref}
        maxLength={maxLength}
        value={value}
        className={className}
        type={type}
        onChange={handleChange}
        style={style}
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default TextField;
