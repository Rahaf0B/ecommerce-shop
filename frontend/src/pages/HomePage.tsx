import perfumeImg from "../assest/images/prefumebackground.jpg";
import Button from "../components/Button";
import WebSiteDescription from "../components/WebSiteDescription";
import { websiteDescriptionsContext } from "../App";
import HomeImagesWithShadow from "../components/HomeImagesShadow";
import NewProduct from "../components/NewProduct";
import NewsletterComponent from "../components/NewsletterComponent";
import { getCookie, getFavorite } from "../components/utils";
import { useEffect } from "react";

function HomePage() {
  const getData = () => {
    const csrftoken = getCookie("csrftoken");
    if (localStorage.getItem("token") != null) {
      getFavorite(localStorage.getItem("token"), csrftoken)
        .then((res) => {
          localStorage.setItem(
            "FavoriteProduct",
            JSON.stringify(res["product"])
          );
        })
        .catch((error) => {
          console.error("Error setting product:", error);
        });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="HomePage-component">
      <div className="div-HomePage-component-img-text">
        <div className="div-text-img-perfume">
          <div className="div-text-cherry">SHESHE CHERRY</div>
          <div className="div-text-description-img">Vintage & Modern</div>
          <a href="/">
            <Button
              className="options-button"
              id="btn-cart"
              backgroundColor="#8f5c4c"
              label="EXPLORE"
              size="lg"
              color="#202020"
              borderRadius={4}
              handleClick={() => {}}
            />
          </a>
        </div>
        <div className="div-img-background-perfume">
          <img className="img-background-perfume" src={perfumeImg}></img>
        </div>
      </div>
      <div className="bottom-home-page">
        <WebSiteDescription />

        <websiteDescriptionsContext.Consumer>
          {(HomePageContent) => (
            <div className="div-imges-homepage">
              {HomePageContent["productCategoryImages"]?.map((value, index) => (
                <HomeImagesWithShadow
                  key={index}
                  index={index}
                  Image={value["Image"]}
                  title={value["title"]}
                  id={value["id"]}
                  text_style={value["text_style"]}
                />
              ))}
            </div>
          )}
        </websiteDescriptionsContext.Consumer>
      </div>

      <websiteDescriptionsContext.Consumer>
        {(HomePageContent) => (
          <NewProduct textToDisplay={HomePageContent["bottomHomePageProps"]} />
        )}
      </websiteDescriptionsContext.Consumer>
      <NewsletterComponent></NewsletterComponent>
    </div>
  );
}

export default HomePage;
