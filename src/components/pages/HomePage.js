import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { homepageConfig } from "../../contentConfigs/homepageConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const homepageContent = getContentFromConfig(homepageConfig);

const HomePage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={homepageContent}
  />
);

export default HomePage;
