import { useEffect, useState } from "react";
import { getNewestProducts } from "./utils";
import ProductComponent from "./productComponent";

const NewProduct = (props) => {
  const [product, setProduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    getNewestProducts()
      .then((res) => {
        setProduct(res);
        setDataLoading(true);
      })
      .catch((error) => {
        console.error("Error setting product:", error);
        setDataLoading(false);
      });
  }, []);

  return (
    <div className="div-bottom-home-page-textToDisplay-new-product-image">
      <div className="div-bottom-home-page-textToDisplay">
        <div className="div-bottom-home-page-textToDisplay-title">
          {props["textToDisplay"]["title"]}
        </div>
        <div className="div-bottom-home-page-textToDisplay-description">
          {props["textToDisplay"]["description"]}
        </div>
      </div>
      {dataLoading ? (
        <ProductComponent product={product} class="new-product" />
      ) : null}
    </div>
  );
};

export default NewProduct;
