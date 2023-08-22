import React from "react";
import Button from "./Button";
import HeaderLoginCartSide from "./HeaderLoginCartSide";

const HeaderDesktop = () => {
  return (
    <div>
      <div className="div-header-buttons">
        <a href="/products">
          <Button
            className="options-button"
            id="btn-Product"
            backgroundColor="transparent"
            label="PRODUCTS"
            size="md"
            color="#e8ecf6"
            borderRadius={0}
            handleClick={() => {}}
          />
        </a>
        <a href="/about">
          <Button
            className="options-button"
            id="btn-about"
            backgroundColor="transparent"
            label="ABOUT"
            size="md"
            color="#e8ecf6"
            borderRadius={0}
            handleClick={() => {}}
          />
        </a>
        <a href="/contact">
          <Button
            className="options-button"
            id="btn-contact"
            backgroundColor="transparent"
            label="CONTACT"
            size="md"
            color="#e8ecf6"
            borderRadius={0}
            handleClick={() => {}}
          />
        </a>

        <HeaderLoginCartSide></HeaderLoginCartSide>
      </div>
    </div>
  );
};

export default HeaderDesktop;
