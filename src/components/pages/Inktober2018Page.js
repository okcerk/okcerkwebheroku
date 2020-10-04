import React from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { inktober2018Config } from "../../contentConfigs/inktober2018Config";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const inktober2018Content = getContentFromConfig(inktober2018Config);

const Inktober2018Page = () => (
  <MainPage
    pageLinks={mainNavLinks}
    secondaryPageLinks={secondaryNavLinks}
    pageContentList={inktober2018Content}
  />
);

export default Inktober2018Page;
