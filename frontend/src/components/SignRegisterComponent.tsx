import React, { useRef } from "react";
import Button from "./Button";

const SignRegisterComponent = () => {
  const signInRef = useRef(null);
  const registerRef = useRef(null);

  const handleButtonClick = (value) => {
    if (value === "SignIn") {
      signInRef.current.style.backgroundColor = "#ac5854";
      signInRef.current.style.color = "#f0f3f7";

      registerRef.current.style.backgroundColor = "#f0f3f7";
      registerRef.current.style.color = "#ac5854";
    } else if (value === "Register") {
      signInRef.current.style.backgroundColor = "#f0f3f7";
      signInRef.current.style.color = "#ac5854";

      registerRef.current.style.backgroundColor = "#ac5854";
      registerRef.current.style.color = "#f0f3f7";
    }
  };

  return (
    <div className="div-sign-Register">
      <Button
        className="login-text-btn"
        backgroundColor={"#ac5854"}
        label="SignIn"
        size="lg"
        color="white"
        borderRadius={8}
        ref={signInRef}
        handleClick={() => handleButtonClick("SignIn")}
        boxShadow="0px 3px 6px #1B23464D"
      />

      <Button
        className="Register-text-btn"
        backgroundColor="#f0f3f7"
        label="Register now!"
        size="lg"
        color="#ac5854"
        borderRadius={8}
        handleClick={() => handleButtonClick("Register")}
        boxShadow="0px 3px 6px #1B23464D"
        ref={registerRef}
      />
    </div>
  );
};

export default SignRegisterComponent;
