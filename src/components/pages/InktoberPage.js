import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { inktoberConfig } from "../../contentConfigs/inktoberConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const inktoberContent = getContentFromConfig(inktoberConfig);

const InktoberPage = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={inktoberContent}
  />
);

export default InktoberPage;
