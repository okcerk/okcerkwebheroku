import React from "react";

const style = {
  displayedContent: {
    justifyContent: "center",
    padding: 20,
    display: "grid"
  },
};

const PageContent = (props) => (
  <div style={style.displayedContent}>{props.content}</div>
);

export default PageContent;
