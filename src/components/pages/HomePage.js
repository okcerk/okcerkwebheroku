import React, { Component } from 'react';
import MainPage from './MainPage';
import { getContentFromConfig } from '../../helpers/ContentHelper';
import { homepageConfig } from '../../contentConfigs/homepageConfig';
import { mainNavLinks, secondaryNavLinks } from '../navLinks';

const homepageContent = getContentFromConfig(homepageConfig);

class HomePage extends Component {
  render() {
      return (<MainPage pageLinks={mainNavLinks} secondaryPageLinks={secondaryNavLinks} pageContentListLeft={homepageContent} />);
  }
}

export default HomePage;