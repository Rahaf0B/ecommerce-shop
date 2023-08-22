import logo from "../assest/icons/cherryblackwhitelogo.png";
import { footerContext } from "../App";
const Footer = () => {
  return (
    <div className="div-footer">
      <div className="div-footer-container">
        <div className="footer-layout-grid footer">
          <a href="/">
            <img className="img-logo-footer" src={logo}></img>
          </a>
          <footerContext.Consumer>
            {(FooterProps) =>
              FooterProps["footerCategories"].map((value, index) => (
                <div className="div-footer-category">
                  <div key={index} className="div-label-category">
                    {value["label"]}
                  </div>
                  <div className="div-sub-category">
                    {value["category"].map((catValue, catIndex) => (
                      <a href={catValue["href"]} key={catIndex}>
                        <div key={catIndex} className="div-sub-category-label">
                          {catValue["label"]}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))
            }
          </footerContext.Consumer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
