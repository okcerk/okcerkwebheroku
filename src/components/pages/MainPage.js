import React, { Component } from 'react';
import PageLink from '../PageLink';
import PageContent from '../PageContent';
import SocialMediaLinks from '../SocialMediaLinks';
import cloroImage from '../../images/cloro.png';

const style = {
    coreSection: {
        textAlign: '-webkit-center',
    },
    pageLinks: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    pageContent: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    pageLink: {
        cursor: 'pointer',
    },
    cloro: {
        marginTop: 20,
    },
};

class MainPage extends Component {
  render() {
      const links = this.props.pageLinks.map(function (pagelink, index) {
          return (
              <PageLink
                  key={pagelink.title}
                  title={pagelink.title}
                  image={pagelink.image}
                  link={pagelink.link}
                  externalUri={pagelink.externalUri}
              />
          );
      });

      const secondaryLinks = this.props.secondaryPageLinks.map(function (secondaryPageLink, index) {
          return (
              <PageLink
                  key={secondaryPageLink.title}
                  title={secondaryPageLink.title}
                  image={secondaryPageLink.image}
                  link={secondaryPageLink.link}
                  externalUri={secondaryPageLink.externalUri}
              />
          );
      });

      const pageContentsLeft = this.props.pageContentListLeft.map(function (pageContent, index) {
          return (
              <PageContent
                  key={pageContent.key}
                  content={pageContent.content}
              />
          );
      });

      return (
          <div>
              <div style={style.coreSection}>
                  <div style={style.pageLinks}>
                      {links}
                      <div style={style.cloro}>
                          <img src={cloroImage}/>
                      </div>
                  </div>
                  <div style={style.pageLinks}>
                      {secondaryLinks}
                      <SocialMediaLinks/>
                  </div>
                  <div style={style.pageContent}>
                      {pageContentsLeft}
                  </div>
              </div>
          </div>
      );
  }
}

export default MainPage;