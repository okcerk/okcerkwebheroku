import React, { Component } from "react";
import PageLink from "../PageLink";
import SocialMediaLinks from "../SocialMediaLinks";
import cloroImage from "../../images/cloro.png";

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
    justifyContent: "center",
  },
  pageLink: {
    cursor: "pointer",
  },
  cloro: {
    marginTop: 20,
  },
  title: {
    fontSize: 30,
    color: "white",
  },
  image: {
    maxWidth: "90%",
    maxHeight: "100%",
    margin: 25,
  },
};

class ArtworkPage extends Component {
  render() {
    const links = this.props.pageLinks.map((pagelink) => {
      return (
        <PageLink
          key={pagelink.title}
          title={pagelink.title}
          image={pagelink.image}
          link={pagelink.link}
          externalUri={pagelink.externalUri}
        />
      );
    });

    const secondaryLinks = this.props.secondaryPageLinks.map(
      (secondaryPageLink) => {
        return (
          <PageLink
            key={secondaryPageLink.title}
            title={secondaryPageLink.title}
            image={secondaryPageLink.image}
            link={secondaryPageLink.link}
            externalUri={secondaryPageLink.externalUri}
          />
        );
      }
    );

    const text = this.props.text;
    const imageHdPath = `${process.env.PUBLIC_URL}${this.props.image}_hd.jpg`;
    return (
      <div>
        <div style={style.coreSection}>
          <div style={style.pageLinks}>
            {links}
            <div style={style.cloro}>
              <img src={cloroImage} />
            </div>
          </div>
          <div style={style.pageLinks}>
            {secondaryLinks}
            <SocialMediaLinks />
          </div>
          <div style={style.pageContent}>
            <div style={style.title}>{text}</div>
            <img style={style.image} src={imageHdPath} alt={text} />
          </div>
        </div>
      </div>
    );
  }
}

export default ArtworkPage;
