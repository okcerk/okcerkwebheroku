import React, { Component } from 'react';
import MainPage from './MainPage';
import { getContentFromConfig } from '../../helpers/ContentHelper';
import { aboutPageConfig } from '../../contentConfigs/aboutPageConfig';
import { mainNavLinks, secondaryNavLinks } from '../navLinks';

const aboutContent = getContentFromConfig(aboutPageConfig);

class AboutPage extends Component {
  render() {
      return (<MainPage pageLinks={mainNavLinks} secondaryPageLinks={secondaryNavLinks} pageContentListLeft={aboutContent} />);
  }
}

export default AboutPage;