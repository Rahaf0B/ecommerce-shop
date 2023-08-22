import React, { useEffect, useRef, useState } from "react";
import ColorThief from "colorthief";

const HomeImagesWithShadow = (props) => {
  const [showShadow, setShowShadow] = useState(false);

  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    const applyImageShadow = () => {
      setShowShadow(true);
    };

    const removeImageShadow = () => {
      setShowShadow(false);
    };

    image.addEventListener("mouseenter", applyImageShadow);
    image.addEventListener("mouseleave", removeImageShadow);

    return () => {
      image.removeEventListener("mouseenter", applyImageShadow);
      image.removeEventListener("mouseleave", removeImageShadow);
    };
  }, []);

  return (
    <div
      key={props["index"]}
      className={"div-img-with-title-home-page div-image-" + props["id"]}
    >
      {showShadow ? (
        <img
          className="home-img-category-shadow shadow-img"
          id={"img-category-shadow-" + props["id"]}
          src={props["Image"]}
        ></img>
      ) : null}

      <div
        className="div-home-title-img-with-shadow-category"
        id={"title-category-" + props["id"]}
        style={props["text_style"]}
      >
        {props["title"]}
      </div>

      <div className="div-home-img-category">
        <img
          className="home-img-category"
          id={"img-category-" + props["id"]}
          ref={imageRef}
          src={props["Image"]}
        ></img>
      </div>
    </div>
  );
};

export default HomeImagesWithShadow;
