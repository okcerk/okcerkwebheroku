import React, { Component } from "react";
import PageLink from "../PageLink";
import PageContent from "../PageContent";
import SocialMediaLinks from "../SocialMediaLinks";
import cloroImage from "../../images/cloro.png";
import InfiniteScroll from "react-infinite-scroller";

const style = {
  coreSection: {
    textAlign: "-webkit-center",
  },
  pageLinks: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  pageLink: {
    cursor: "pointer",
  },
  cloro: {
    marginTop: 20,
  },
};

const ContentPageSize = 3;

class MainPage extends Component {
  constructor(props) {
    super(props);

    const initialItems = this.props.pageContentListLeft.slice(
      0,
      ContentPageSize
    );
    this.state = {
      items: initialItems,
      hasMoreItems: true,
    };
  }

  loadItems = (page) => {
    const requestedPage = page + 1;

    if (
      this.state.hasMoreItems &&
      ContentPageSize * requestedPage <=
        this.props.pageContentListLeft.length + ContentPageSize
    ) {
      this.setState({
        items: this.props.pageContentListLeft.slice(
          0,
          ContentPageSize * requestedPage
        ),
      });
    } else {
      this.setState({ hasMoreItems: false });
    }
  };

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

    const secondaryLinks = this.props.secondaryPageLinks.map(function (
      secondaryPageLink,
      index
    ) {
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

    const pageContentItems = this.state.items.map(function (
      pageContent,
      index
    ) {
      return (
        <PageContent key={pageContent.key} content={pageContent.content} />
      );
    });

    return (
      <div>
        <div style={style.coreSection}>
          <div style={style.pageLinks}>
            {links}
            <div style={style.cloro}>
              <img src={cloroImage} />
            </div>
          </div>
          <div style={style.pageLinks}>
            {secondaryLinks}
            <SocialMediaLinks />
          </div>
          <InfiniteScroll
            pageStart={0}
            loadMore={this.loadItems}
            hasMore={this.state.hasMoreItems}
          >
            <div style={style.pageContent}>{pageContentItems}</div>
          </InfiniteScroll>
        </div>
      </div>
    );
  }
}

export default MainPage;
