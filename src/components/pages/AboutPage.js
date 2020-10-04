import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { aboutPageConfig } from "../../contentConfigs/aboutPageConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const aboutContent = getContentFromConfig(aboutPageConfig);

const AboutPage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={aboutContent}
  />
);

export default AboutPage;
