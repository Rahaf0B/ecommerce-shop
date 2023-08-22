import { useRef, useState } from "react";
import LoginPage from "../components/LoginPage";
import Button from "../components/Button";
import SignRegisterComponent from "../components/SignRegisterComponent";
import logo from "../assest/icons/cherryiconlight.png";
import RegisterPage from "../components/RegisterPage";

const LoginorRegisterPage = () => {
  const signInRef = useRef(null);
  const registerRef = useRef(null);
  const [statusPage, setStatusPage] = useState("signIn");
  const handleButtonClick = (value) => {
    if (value === "SignIn") {
      signInRef.current.style.backgroundColor = "#ac5854";
      signInRef.current.style.color = "#f0f3f7";
      registerRef.current.style.backgroundColor = "#f0f3f7";
      registerRef.current.style.color = "#ac5854";
      setStatusPage("signIn");
      window.history.pushState(null, "", "/login");
    } else if (value === "Register") {
      signInRef.current.style.backgroundColor = "#f0f3f7";
      signInRef.current.style.color = "#ac5854";
      registerRef.current.style.backgroundColor = "#ac5854";
      registerRef.current.style.color = "#f0f3f7";
      setStatusPage("SignUp");
      window.history.pushState(null, "", "/register");
    }
  };

  return (
    <div>
      <div className="isShowLogin show">
        <div className={"login-box solid " + "div-" + statusPage}>
          <div className="logo-img-login">
            <img className="img-login-logo-box" src={logo}></img>
          </div>
          <div className="form-box-login solid">
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
                label="Register now"
                size="lg"
                color="#ac5854"
                borderRadius={8}
                handleClick={() => handleButtonClick("Register")}
                boxShadow="0px 3px 6px #1B23464D"
                ref={registerRef}
              />
            </div>
            {statusPage == "signIn" ? <LoginPage /> : <RegisterPage />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginorRegisterPage;
