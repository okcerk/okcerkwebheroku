import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { digitalConfig } from "../../contentConfigs/digitalConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const digitalContent = getContentFromConfig(digitalConfig);

const DigitalPage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={digitalContent}
  />
);

export default DigitalPage;
