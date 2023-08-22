import React from "react";
import { websiteDescriptionsContext } from "../App";

const WebSiteDescription = () => {
  return (
    <div className="div-text-mid-page">
      <websiteDescriptionsContext.Consumer>
        {(HomePageContent) => (
          <div className="div-container-home-text-description-space">
            <div className="div-text-space">{HomePageContent["Title"]}</div>
            <div className="div-text-space-description">
              {HomePageContent["Title_paragraph"]}
            </div>
          </div>
        )}
      </websiteDescriptionsContext.Consumer>

      <div className="div-bottom-text-line"></div>

      <websiteDescriptionsContext.Consumer>
        {(HomePageContent) => (
          <div className="div-two-paragraph-description">
            {HomePageContent["body"]?.map((value, key) => (
              <div key={key} className="div-single-paragraph-description">
                {value?.paragraph}
              </div>
            ))}
          </div>
        )}
      </websiteDescriptionsContext.Consumer>
    </div>
  );
};

export default WebSiteDescription;
