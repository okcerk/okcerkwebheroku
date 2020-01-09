import React, { Component } from 'react';
import MainPage from './MainPage';
import { getContentFromConfig } from '../../helpers/ContentHelper';
import { sketchesConfig } from '../../contentConfigs/sketchesConfig';
import { mainNavLinks, secondaryNavLinks } from '../navLinks';

const sketchesContent = getContentFromConfig(sketchesConfig);

class SketchesPage extends Component {
  render() {
      return (<MainPage pageLinks={mainNavLinks} secondaryPageLinks={secondaryNavLinks} pageContentListLeft={sketchesContent} />);
  }
}

export default SketchesPage;