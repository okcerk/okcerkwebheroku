import React from "react";
import { Link } from "react-router-dom";

const style = {
  pageLink: {
    cursor: "pointer",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  linkImage: {
    maxWidth: 600,
  },
};

const PageLink = (props) => {
  const image = (
    <img style={style.linkImage} src={props.image} alt={props.title} />
  );
  return (
    <div style={style.pageLink}>
      {props.link && <Link to={props.link}>{image}</Link>}
      {props.externalUri && (
        <a href={props.externalUri} target="_blank">
          {image}
        </a>
      )}
    </div>
  );
};

export default PageLink;
