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
  pageContent: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

const ContentPageSize = 3;

const ReadyToRenderPage = (props) => {
  const { pageContentList } = props;
  const [items, setItems] = useState(
    pageContentList ? pageContentList.slice(0, ContentPageSize) : []
  );
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadItems = (page) => {
    const requestedPage = page + 1;

    if (
      hasMoreItems &&
      pageContentList && 
      ContentPageSize * requestedPage <=
        pageContentList.length + ContentPageSize
    ) {
      setItems(pageContentList.slice(0, ContentPageSize * requestedPage));
    } else {
      setHasMoreItems(false);
    }
  };

  const pageContentItems = items.map((pageContent) => (
    <PageContent key={pageContent.key} content={pageContent.content} />
  ));

  return (
    <InfiniteScroll
        pageStart={0}
        loadMore={loadItems}
        hasMore={hasMoreItems}
      >
      <div style={style.pageContent}>{pageContentItems}</div>
    </InfiniteScroll>
  );
};

const MainPage = (props) => {
  const { pageConfigName } = props;
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

  // TODO: replace with spinner
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
