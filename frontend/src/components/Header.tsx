import React, { useEffect, useState } from "react";
import cherryIcon from "../assest/icons/cherryIcon.svg";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
export const Header = () => {
  const [isMobile, setIsMobile] = useState({
    mobileView: true,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = isMobile;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth <= 760
        ? setIsMobile((prevState) => ({ ...prevState, mobileView: true }))
        : setIsMobile((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  return (
    <div className="Header-component">
      <div className="div-header-component">
        <div className="div-img-cherry-icon">
          <a href="/">
            <img className="img-cherry-icon" src={cherryIcon}></img>
          </a>
        </div>

        {mobileView ? <HeaderMobile /> : <HeaderDesktop />}
      </div>
    </div>
  );
};
