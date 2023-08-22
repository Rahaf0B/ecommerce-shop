import  { useEffect, useState } from "react";
import {
  addToFavorite,
  getCookie,
  getFavorite,
  getProductInfo,
  removeFromFavorite,
} from "../components/utils";
import Button from "../components/Button";

const ProductInfo = () => {
  const [productToShow, setProductToShow] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Select Color"); // Set initial selected value here
  const [addFavorite, setAddFavorite] = useState(false);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleFavorite = () => {
    const csrftoken = getCookie("csrftoken");
    const token = localStorage.getItem("token");
    var FavoriteProduct = [];
    const storedList = localStorage.getItem("FavoriteProduct");
    if (storedList) {
      FavoriteProduct = JSON.parse(storedList);
    }
    if (addFavorite) {
      const itemIndex = FavoriteProduct.indexOf(productToShow["product"]["id"]);
      if (itemIndex !== -1) {
        const updatedList = [...FavoriteProduct];
        updatedList.splice(itemIndex, 1);
        FavoriteProduct = updatedList;
      }

      removeFromFavorite(productToShow["product"]["id"], token, csrftoken);
      localStorage.setItem("FavoriteProduct", JSON.stringify(FavoriteProduct));

      setAddFavorite(false);
    } else {
      FavoriteProduct.push(productToShow["product"]["id"]);
      addToFavorite(productToShow["product"]["id"], token, csrftoken);
      localStorage.setItem("FavoriteProduct", JSON.stringify(FavoriteProduct));

      setAddFavorite(true);
    }
  };

  
  useEffect(() => {
    const linkId = window?.location?.href.split("/");
    getProductInfo(linkId.slice(-2)[0], linkId.slice(-2)[1])
      .then((res) => {
        setProductToShow(res);
        setDataLoading(true);
        const storedList = localStorage.getItem("FavoriteProduct");
        if(storedList.length!=0){
        setAddFavorite(JSON.parse(storedList).includes(res["product"]["id"]));
    
    }  })
      .catch((error) => {
        console.error("Error setting product:", error);
        setDataLoading(false);
      });
  }, []);
  return (
    <div className="div-page-product-Info">
      {dataLoading ? (
        <div className="div-product-info-component">
          <img
            className="img-product-info"
            src={
              "http://localhost:8000" + productToShow["product"]["product_pic"]
            }
          ></img>

          <div className="div-text-component-product-info">
            <div className="div-text-product-info-name">
              {productToShow["product"]["productName"]}
            </div>
            <div className="div-text-product-info-price">
              {" "}
              {"$ " + productToShow["product"]["price"] + " USD"}
            </div>
            <div className="div-text-product-info-description">
              {productToShow["product"]["description"]}
            </div>
            <div></div>
            {productToShow["product"]["product_category"] ==
            "Perfume" ? null : (
              <div>
                <div className="selector-label">COLOR</div>
                <select
                  id="color-selector"
                  className="select-choices select-color-choice"
                  name="color-choice"
                  value={selectedValue}
                  onChange={handleSelectChange}
                >
                  <option
                    className="option-color-choice"
                    key={"Select Color"}
                    value={"Select Color"}
                  >
                    {"Select Color"}
                  </option>
                  {productToShow["product_color"]?.map((option) => (
                    <option
                      className="option-color-choice"
                      key={option["color_name"]}
                      value={option["color_name"]}
                    >
                      {option["color_name"]}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="div-input-label-color-choice">
              <div className="selector-label">QUANTITY</div>
              <div className="div-input-color-choice-btn-cart">
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  className="select-choices input-quantity-choice"
                  max={productToShow["product"]["quantity"]}
                  defaultValue="1"
                />
                <Button
                  className="btn-add-to-favorite"
                  id="btn-add-favorite"
                  backgroundColor="#1a1b1f"
                  label={
                    addFavorite ? "REMOVE FROM Favorite" : "ADD TO Favorite"
                  }
                  size="lg"
                  color="#fff"
                  borderRadius={0}
                  handleClick={handleFavorite}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductInfo;
