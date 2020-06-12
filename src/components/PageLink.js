import React, { Component } from "react";
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

class PageLink extends Component {
  render() {
    const image = (
      <img
        style={style.linkImage}
        src={this.props.image}
        alt={this.props.title}
      />
    );
    return (
      <div style={style.pageLink}>
        {this.props.link && <Link to={this.props.link}>{image}</Link>}
        {this.props.externalUri && (
          <a href={this.props.externalUri} target="_blank">
            {image}
          </a>
        )}
      </div>
    );
  }
}

export default PageLink;
