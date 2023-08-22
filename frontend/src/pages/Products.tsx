import { useEffect, useRef, useState } from "react";
import { productContext } from "../App";
import { getAllProducts, separateProductCategory } from "../components/utils";
import ProductComponent from "../components/productComponent";

const Products = () => {
  const [productToShow, setProductToShow] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [firstTypeCategoryProduct, setFirstTypeCategoryProduct] = useState([]);
  const [secTypeCategoryProduct, setSecTypeCategoryProduct] = useState([]);
  const categoryRef = useRef([]);
  const [error, setError] = useState(false);

  const categoryClick = (value, index) => {
    categoryRef.current.map((div, key) => {
      if (key == index) {
        div.style.color = "#fff";
      } else {
        div.style.color = value["style"]["color"];
      }
    });
    switch (value["title"]) {
      case "All Products":
        setProductToShow(allProduct);
        break;
      case "Accessories":
        setProductToShow(firstTypeCategoryProduct);
        break;

      case "Perfume":
        setProductToShow(secTypeCategoryProduct);
        break;
      default:
        setProductToShow(allProduct);
    }
  };

  useEffect(() => {
    getAllProducts()
      .then((res) => {
        setAllProduct(res);
        setDataLoading(true);
        setProductToShow(res);
        separateProductCategory(
          res,
          setFirstTypeCategoryProduct,
          setSecTypeCategoryProduct
        );
        setError(false);
      })
      .catch((error) => {
        console.error("Error setting product:", error);
        setDataLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div>
      <div className="div-title-product-page">Our Products</div>
      <productContext.Consumer>
        {(ProductPageProps) => (
          <div className="div-category-product">
            {ProductPageProps["category"]?.map((value, index) => (
              <div
                key={index}
                ref={(element) => (categoryRef.current[index] = element)}
                style={value.style}
                className="div-text-title-category"
                onClick={() => categoryClick(value, index)}
              >
                {value["title"]}
              </div>
            ))}
          </div>
        )}
      </productContext.Consumer>
      {error ? (
        <div className="div-text-error-not-found">No Product Found</div>
      ) : dataLoading ? (
        <ProductComponent product={productToShow} class="category-product" />
      ) : null}
    </div>
  );
};

export default Products;
