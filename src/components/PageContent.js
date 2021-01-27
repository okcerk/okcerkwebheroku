import React from "react";

const style = {
  displayedContent: {
    justifyContent: "center",
    padding: 20,
  },
};

const PageContent = (props) => (
  <div style={style.displayedContent}>{props.content}</div>
);

export default PageContent;
