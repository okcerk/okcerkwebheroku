import React, { Component } from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { comicsConfig } from "../../contentConfigs/comicsConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const comicsContent = getContentFromConfig(comicsConfig);

class ComicsPage extends Component {
  render() {
    return (
      <MainPage
        pageLinks={mainNavLinks}
        secondaryPageLinks={secondaryNavLinks}
        pageContentList={comicsContent}
      />
    );
  }
}

export default ComicsPage;
