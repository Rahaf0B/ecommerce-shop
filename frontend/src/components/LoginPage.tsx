import  {  useState } from "react";
import TextField from "./TextField";
import Button from "./Button";
import CheckBox from "./Checkbox";
import { useNavigate } from "react-router-dom";
import { logInUser } from "./utils";
const LoginForm = ({}) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Email: null,
    password: null,
  });
  const [isError, setIsError] = useState(false);
  const handleChange = (event) => {
    const key = event.target.className.split("-")[1];

    setUser({ ...user, [key]: event.target.value });
  };

 

  const handelSignClick = (e) => {
    if (
      Object.values(user).includes("") ||
      Object.values(user).includes(null)
    ) {
      e.preventDefault();
      alert("You must fill all the fields");
      setIsError((isError) => false);
    } else {
      logInUser(user.Email, user.password)
        .then((res) => {
          setIsError((isError) => false);
          localStorage.setItem("token", res["token"]);
          localStorage.setItem("login", "true");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error setting product:", error);
          setIsError((isError) => true);
        });
    }
  };

  return (
    <div className="div-form-login">
      <div>
        <div></div>
        <TextField
          id="Email-login"
          name="Email"
          label="Email"
          labelClassName="label-login label-email-Login"
          className="TextField-Email-login"
          placeholder="Email"
          size="lg"
          type="email"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          value={user.Email}
          border="1px solid #E1E8F1"
        />
        <TextField
          id="password"
          name="password"
          className="TextField-password-login"
          placeholder="password"
          label="Password"
          labelClassName="label-login label-password-Login"
          size="lg"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          type="password"
          value={user.password}
          border="1px solid #E1E8F1"
        />
      </div>
      {isError && (
        <div className="div-error">Email or the Password is wrong</div>
      )}
      <div>
        <div className="Checkbox-button-login">
          <CheckBox />
          <Button
            className="button-forget-password"
            backgroundColor="transparent"
            label="Forget Password?"
            size="md"
            color="black"
            borderRadius={5}
            handleClick={() => {}}
          ></Button>
        </div>
        <Button
          className="button-signin"
          backgroundColor="#ac5854"
          label="SignIn"
          size="lg"
          color="white"
          borderRadius={5}
          type="submit"
          boxShadow=" 0px 3px 6px #1B23464D"
          handleClick={(e) => handelSignClick(e)}
        ></Button>
      </div>
    </div>
  );
};

export default LoginForm;
