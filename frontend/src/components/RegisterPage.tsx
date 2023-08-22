import React, { createRef, useState } from "react";
import Button from "./Button";
import CheckBox from "./Checkbox";
import TextField from "./TextField";
import { useNavigate } from "react-router-dom";
// import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DayPickerProvider } from "react-day-picker";
import { RegisterUser } from "./utils";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    username: null,
    Email: null,
    dob: null,
    gender: null,
    password: null,
  });


  const [isError, setIsError] = React.useState(false);

  const handelDate = (newDate) => {
    const month = (Number(newDate["$M"]) + 1).toString();
    setUser({
      ...user,
      dob: newDate["$y"] + "-" + month + "-" + newDate["$D"],
    });
  };

  const handleChange = (event) => {
    const key = event.target.className.split("-")[1];

    setUser({ ...user, [key]: event.target.value });
  };

  const handelForgetSubmit = (e) => {
    setUser({ ...user, Email: "", password: "" });

    navigate("/forget-password");
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
      RegisterUser(
        user.username,
        user.Email,
        user.dob,
        user.gender,
        user.password
      )
        .then((res) => {
          setIsError((isError) => false);
          localStorage.setItem("token", res["token"]);
          const token = localStorage.getItem("token");
          localStorage.setItem("login", "true");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error setting product:", error);
          setIsError((isError) => true);
        });
    }
  };

  const [selectedDate, setSelectedDate] = useState(null);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedGender, setSelectedGender] = useState("");
  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
    setUser({ ...user, gender: event.target.value });
  };

  return (
    <div className="div-form-signup">
      <div>
        <div></div>

        <TextField
          id="userName-login"
          name="userName"
          label="Name"
          labelClassName="label-login label-username-Login"
          className="TextField-username-login"
          placeholder="Name"
          size="lg"
          type="text"
          handleChange={(e) => handleChange(e)}
          borderRadius={10}
          value={user.username}
          border="1px solid #E1E8F1"
        />
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

        <div className="label-login">Date Of Birth</div>
        <div className="date-of-birth-piker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className="custom-datepicker"
              value={user.dob}
              onChange={handelDate}
            />
          </LocalizationProvider>
        </div>

        <div>
          <div className="label-login ">Gender</div>
          <div className="div-label-input-radio-gender">
            <label className="label-radio-gender">
              <input
                type="radio"
                value="female"
                checked={selectedGender === "female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
            <label className="label-radio-gender">
              <input
                type="radio"
                value="male"
                checked={selectedGender === "male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
          </div>
        </div>
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
        <div className="div-error">Check The Field That You Fill</div>
      )}
      <div>
        <Button
          className="button-signin"
          backgroundColor="#ac5854"
          label="Create an Account"
          size="lg"
          color="white"
          borderRadius={5}
          type="submit"
          boxShadow=" 0px 3px 6px #1B23464D"
          handleClick={handelSignClick}
        ></Button>
      </div>
    </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RegisterPage;
