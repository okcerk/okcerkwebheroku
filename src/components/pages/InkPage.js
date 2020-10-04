import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { inkConfig } from "../../contentConfigs/inkConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const inkContent = getContentFromConfig(inkConfig);

const InkPage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={inkContent}
  />
);

export default InkPage;
