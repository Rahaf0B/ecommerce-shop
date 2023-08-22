import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "./utils";

function HeaderLoginCartSide() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("login", "false");

    logOutUser(localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.setItem("FavoriteProduct", null);
    navigate("/");
  };
  return (
    <div className="div-header-login-cart-btn">
      {localStorage.getItem("login") == "true" ? (
        <Button
          className="options-button"
          id="btn-logout"
          backgroundColor="#8f5c4c"
          label="LOGOUT"
          size="md"
          color="#e8ecf6"
          borderRadius={4}
          handleClick={() => handleLogOut()}
        />
      ) : (
        <a href="/login">
          <Button
            className="options-button"
            id="btn-login"
            backgroundColor="#8f5c4c"
            label="LOGIN"
            size="md"
            color="#e8ecf6"
            borderRadius={4}
            handleClick={() => {}}
          />
        </a>
      )}

      <a href="/favorite">
        <Button
          className="options-button"
          id="btn-favorite"
          backgroundColor="#8f5c4c"
          label="FAVORITE"
          size="md"
          color="#e8ecf6"
          borderRadius={4}
          handleClick={() => {}}
        />
      </a>
    </div>
  );
}

export default HeaderLoginCartSide;
