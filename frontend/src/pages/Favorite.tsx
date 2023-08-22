import { useEffect, useState } from "react";
import ProductComponent from "../components/productComponent";
import Button from "../components/Button";
import {
  getCookie,
  getFavorite,
  removeFromFavorite,
} from "../components/utils";

const Favorite = () => {
  const [productToShow, setProductToShow] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFavorite = (id) => {
    const token = localStorage.getItem("token");
    const csrftoken = getCookie("csrftoken");
    var FavoriteProduct = [];
    const storedList = localStorage.getItem("FavoriteProduct");
    if (storedList) {
      FavoriteProduct = JSON.parse(storedList);
    }

    const itemIndex = FavoriteProduct.indexOf(id);
    if (itemIndex !== -1) {
      const updatedList = [...FavoriteProduct];
      updatedList.splice(itemIndex, 1);
      FavoriteProduct = updatedList;
    }

    removeFromFavorite(id, token, csrftoken);
    localStorage.setItem("FavoriteProduct", JSON.stringify(FavoriteProduct));
    getData();
  };

  const getData = () => {
    const csrftoken = getCookie("csrftoken");

    getFavorite(localStorage.getItem("token"), csrftoken)
      .then((res) => {
        setProductToShow(res);
        setDataLoading(true);
        setError(false);
      })
      .catch((error) => {
        console.error("Error setting product:", error);
        setDataLoading(false);
        setError(true);
      });
  };
  useEffect(() => {
    if(localStorage.getItem("token")!=null) {
    getData();}else{
        setError(true);
    }
  }, []);
  return (
    <div>
      {error ? (
        <div className="div-text-error-not-found">
          No Favorite Product Found
        </div>
      ) : dataLoading ? (
        <ProductComponent
          product={productToShow["product"]}
          componentToRender={(product_id) => (
            <Button
              className="btn-add-to-favorite"
              id="btn-add-favorite"
              backgroundColor="#1a1b1f"
              label="REMOVE FROM Favorite"
              size="lg"
              color="#fff"
              borderRadius={0}
              handleClick={() => handleFavorite(product_id)}
            />
          )}
          class="category-product"
        />
      ) : null}
    </div>
  );
};

export default Favorite;
