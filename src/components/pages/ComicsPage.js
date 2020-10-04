import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { comicsConfig } from "../../contentConfigs/comicsConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const comicsContent = getContentFromConfig(comicsConfig);

const ComicsPage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={comicsContent}
  />
);

export default ComicsPage;
