import React, { Component } from 'react';
import MainPage from './MainPage';
import { getContentFromConfig } from '../../helpers/ContentHelper';
import { inktoberConfig } from '../../contentConfigs/inktoberConfig';
import { mainNavLinks, secondaryNavLinks } from '../navLinks';

const inktoberContent = getContentFromConfig(inktoberConfig);

class InktoberPage extends Component {
  render() {
      return (<MainPage pageLinks={mainNavLinks} secondaryPageLinks={secondaryNavLinks} pageContentListLeft={inktoberContent} />);
  }
}

export default InktoberPage;