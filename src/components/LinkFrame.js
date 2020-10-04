import React from "react";
import PageLink from "./PageLink";

const style = {
  linkFrame: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: 400,
    minWidth: 600,
  },
  linkImage: {
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 600,
  },
};

const LinkFrame = (props) => (
  <div style={style.linkFrame}>
    <div style={style.linkImage}>
      <PageLink
        key={props.title}
        title={props.title}
        image={props.image}
        link={props.link}
        externalUri={props.externalUri}
      />
    </div>
  </div>
);

export default LinkFrame;
