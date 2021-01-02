import React, { useState, useEffect } from "react";
import { mainNavLinks, secondaryNavLinks } from "../navLinks";
import { useDispatch } from "react-redux";
import { usePageConfig } from "../../redux/selectors";
import PageLink from "../PageLink";
import PageContent from "../PageContent";
import SocialMediaLinks from "../SocialMediaLinks";
import cloroImage from "../../images/cloro.png";
import InfiniteScroll from "react-infinite-scroller";
import { getContentFromConfig } from "../../helpers/contentConfigHelper";

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

const ReadyToRenderPage = (props) => {
  const [items, setItems] = useState(
    props.pageContentList ? props.pageContentList.slice(0, ContentPageSize) : []
  );
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadItems = (page) => {
    const requestedPage = page + 1;

    if (
      hasMoreItems &&
      props.pageContentList && 
      ContentPageSize * requestedPage <=
        props.pageContentList.length + ContentPageSize
    ) {
      setItems(props.pageContentList.slice(0, ContentPageSize * requestedPage));
    } else {
      setHasMoreItems(false);
    }
  };

  const links = props.pageLinks.map((pageLink) => (
    <PageLink
      key={pageLink.title}
      title={pageLink.title}
      image={pageLink.image}
      link={pageLink.link}
      externalUri={pageLink.externalUri}
    />
  ));

  const secondaryLinks = props.secondaryPageLinks.map((secondaryPageLink) => (
    <PageLink
      key={secondaryPageLink.title}
      title={secondaryPageLink.title}
      image={secondaryPageLink.image}
      link={secondaryPageLink.link}
      externalUri={secondaryPageLink.externalUri}
    />
  ));

  const pageContentItems = items.map((pageContent) => (
    <PageContent key={pageContent.key} content={pageContent.content} />
  ));

  return (
    <div>
      <div style={style.coreSection}>
        <div style={style.pageLinks}>
          {links}
          <div style={style.cloro}>
            <img src={cloroImage} alt="cloro" />
          </div>
        </div>
        <div style={style.pageLinks}>
          {secondaryLinks}
          <SocialMediaLinks />
        </div>
        <InfiniteScroll
          pageStart={0}
          loadMore={loadItems}
          hasMore={hasMoreItems}
        >
          <div style={style.pageContent}>{pageContentItems}</div>
        </InfiniteScroll>
      </div>
    </div>
  );
};

const MainPage = (props) => {
  const { pageConfigName } = props; 
  console.log("rendering page");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PAGE_CONFIG_START', pageConfigName});
  }, []);

  const pageConfig = usePageConfig(pageConfigName);

  let contentList;
  if (pageConfig) {
    contentList = getContentFromConfig(pageConfigName, pageConfig);
    return (
      <ReadyToRenderPage
        key={pageConfigName}
        pageLinks={mainNavLinks}
        secondaryPageLinks={secondaryNavLinks}
        pageContentList={contentList}
      />
    );
  }

  return (
    <ReadyToRenderPage
      key={'loading'}
      pageLinks={mainNavLinks}
      secondaryPageLinks={secondaryNavLinks}
      pageContentList={[]}
    />
  );
}

export default MainPage;
