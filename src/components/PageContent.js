import React from "react";

const style = {
  displayedContent: {
    backgroundColor: "steelblue",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
    padding: 20,
  },
};

const PageContent = (props) => (
  <div style={style.displayedContent}>{props.content}</div>
);

export default PageContent;
