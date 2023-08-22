import React from "react";
import { headerMobileContext } from "../App";
import { useNavigate } from "react-router-dom";
import { logOutUser } from "./utils";

export const HeaderMenu = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.setItem("login", "false");
    logOutUser(localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.setItem("FavoriteProduct", null);
    navigate("/");
  };

  return (
    <div className="nav-menu-header">
      <nav
        role="navigation"
        className="navigation-items-header-menu"
        data-nav-menu-open=""
      >
        <headerMobileContext.Consumer>
          {(headerMobileProps) =>
            headerMobileProps["options"].map((value, index) => {
              if (value["label"] == "login") {
                return localStorage.getItem("login") == "true"  ? (
                  <a
                  onClick={handleLogOut}
                  key={index}
                    aria-current="page"
                    className="navigation-single-item-menu-header"
                  >
                    {"logout"}
                  </a>
                ) : (
                  <a
                    href={value["herf"]}
                    aria-current="page"
                    className="navigation-single-item-menu-header"
                  >
                    {value["label"]}
                  </a>
                );
              } else
                return (
                  <a
                    href={value["herf"]}
                    aria-current="page"
                    className="navigation-single-item-menu-header"
                  >
                    {value["label"]}
                  </a>
                );
            })
          }
        </headerMobileContext.Consumer>
      </nav>
    </div>
  );
};
