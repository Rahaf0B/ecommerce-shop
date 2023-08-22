
const ProductComponent = (props) => {
  return (
    <div className={"div-data-images-group-products" + " " + props["class"]}>
      {props["product"].map((value, index) => {
        return (
          <div key={index}>
            <div className="div-single-info-product" key={index}>
              <img
                className="div-single-img-product"
                src={"http://localhost:8000" + value["product_pic"]}
              ></img>
              <div className="div-single-img-title-name-price-product">
                <a
                  href={
                    `/productInfo/${value?.id}` +
                    `/${value["product_category"]}`
                  }
                >
                  <div className="div-single-img-title-name-product">
                    {value["productName"]}
                  </div>
                </a>
                <div className="div-single-img-title-price-product">
                  {"$" + value["price"] + " USD"}
                </div>
              </div>
            </div>
            {props?.componentToRender
              ? props?.componentToRender(value["id"])
              : null}
          </div>
        );
      })}
    </div>
  );
};

export default ProductComponent;
