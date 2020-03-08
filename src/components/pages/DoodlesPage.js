import React, { Component } from 'react';
import MainPage from './MainPage';
import { getContentFromConfig } from '../../helpers/ContentHelper';
import { doodlesConfig } from '../../contentConfigs/doodlesConfig';
import { mainNavLinks, secondaryNavLinks } from '../navLinks';

const doodlesContent = getContentFromConfig(doodlesConfig);

class DoodlesPage extends Component {
  render() {
      return (<MainPage pageLinks={mainNavLinks} secondaryPageLinks={secondaryNavLinks} pageContentListLeft={doodlesContent} />);
  }
}

export default DoodlesPage;