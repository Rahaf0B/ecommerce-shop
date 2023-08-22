import  { FC } from "react";
import { Checkbox } from "pretty-checkbox-react";
import {  useRef } from "react";

type CheckBoxProps = {
  className?: string;
};

const CheckBox: FC<CheckBoxProps> = ({ className = "" }) => {
  const ref = useRef(null);
  return (
    <div className="div-Checkbox">
      <Checkbox ref={ref}></Checkbox>
      <div>Remember Me</div>
    </div>
  );
};

export default CheckBox;
