import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePageConfig } from "../../redux/selectors";
import PageContent from "../PageContent";
import InfiniteScroll from "react-infinite-scroller";
import { getContentFromConfig } from "../../helpers/contentConfigHelper";
import Spinner from "../../components/Spinner";

const style = {
  pageContent: {
    justifyContent: "center",
    display: "grid"
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
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_PAGE_CONFIG_START', pageConfigName});
    setTimeout(() => {
      setReadyToRender(true);
    }, 1000);
  }, []);

  const pageConfig = usePageConfig(pageConfigName);

  if (!pageConfig || !readyToRender) {
    return (<Spinner/>);
  }

  const contentList = getContentFromConfig(pageConfigName, pageConfig);
  return (<ReadyToRenderPage key={pageConfigName} pageContentList={contentList} />);
}

export default MainPage;
