import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { inktober2019Config } from "../../contentConfigs/inktober2019Config";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const inktober2019Content = getContentFromConfig(inktober2019Config);

const Inktober2019Page = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={inktober2019Content}
  />
);

export default Inktober2019Page;
