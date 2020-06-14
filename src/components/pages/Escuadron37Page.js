import React, { Component } from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { escuadron37PageConfig } from "../../contentConfigs/escuadron37Config";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const escuadron37PageContent = getContentFromConfig(escuadron37PageConfig);

class Escuadron37Page extends Component {
  render() {
    return (
      <MainPage
        pageLinks={mainNavLinks}
        secondaryPageLinks={secondaryNavLinks}
        pageContentList={escuadron37PageContent}
      />
    );
  }
}

export default Escuadron37Page;
