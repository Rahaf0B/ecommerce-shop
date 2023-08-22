import { useState } from "react";
import menuIcon from "../assest/icons/menu-svgrepo-com.svg";
import { HeaderMenu } from "./HeaderMenu";
import HeaderLoginCartSide from "./HeaderLoginCartSide";
const HeaderMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <img
        src={menuIcon}
        className="menu-icon-haeder"
        onClick={() => menuClick()}
      ></img>

      {menuOpen ? <HeaderMenu /> : null}
    </div>
  );
};

export default HeaderMobile;
