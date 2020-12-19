import React from "react";

const style = {
  displayedContent: {
    backgroundColor: "#4e73a7",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
};

const PageContent = (props) => (
  <div style={style.displayedContent}>{props.content}</div>
);

export default PageContent;
