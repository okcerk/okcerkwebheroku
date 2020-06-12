import React, { Component } from "react";
import MainPage from "./MainPage";
import { getContentFromConfig } from "../../helpers/ContentHelper";
import { digitalConfig } from "../../contentConfigs/digitalConfig";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";

const digitalContent = getContentFromConfig(digitalConfig);

class DigitalPage extends Component {
  render() {
    return (
      <MainPage
        pageLinks={mainNavLinks}
        secondaryPageLinks={secondaryNavLinks}
        pageContentListLeft={digitalContent}
      />
    );
  }
}

export default DigitalPage;
