import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePageConfig } from "../../redux/selectors";
import PageLink from "../PageLink";
import SocialMediaLinks from "../SocialMediaLinks";
import cloroImage from "../../images/cloro.png";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { withTitle, titleWithEnding } from "../../helpers/pageTitleHelpers";
import { redirectToHomepage } from "../../helpers/navigationHelper";

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
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "white",
  },
  image: {
    maxWidth: "95%",
    maxHeight: "1500px",
    padding: 25,
  },
  twitterFrame: {
    maxWidth: "50%",
    minWidth: 600,
    paddingBottom: 25,
  },
  twitterOptions: {
    height: 600,
  },
};

const ArtworkPage = (props) => {
  const { configKey, artKey, pageLinks, secondaryPageLinks } = props; 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PAGE_CONFIG_START', pageConfigName: configKey});
  }, []);

  const pageConfig = usePageConfig(configKey);

  if (!pageConfig) {
    return null;
  }

  if (pageConfig === "ERROR") {
    redirectToHomepage();
    return null;
  }

  const artworkConfig = pageConfig[artKey];

  if (!artworkConfig) {
    redirectToHomepage();
    return null;
  }

  const links = pageLinks.map((pageLink) => (
    <PageLink
      key={pageLink.title}
      title={pageLink.title}
      image={pageLink.image}
      link={pageLink.link}
      externalUri={pageLink.externalUri}
    />
  ));

  const secondaryLinks = secondaryPageLinks.map((secondaryPageLink) => (
    <PageLink
      key={secondaryPageLink.title}
      title={secondaryPageLink.title}
      image={secondaryPageLink.image}
      link={secondaryPageLink.link}
      externalUri={secondaryPageLink.externalUri}
    />
  ));

  const text = artworkConfig.text;
  const imageHdPath = `${process.env.PUBLIC_URL}${artworkConfig.image}_hd.jpg`;

  return withTitle(
    <div style={style.coreSection}>
      <div style={style.pageLinks}>
        {links}
        <div style={style.cloro}>
          <img src={cloroImage} alt="cloro" />
        </div>
      </div>
      <div style={style.pageLinks}>
        {secondaryLinks}
        <SocialMediaLinks />
      </div>
      <div style={style.pageContent}>
        <div style={style.title}>{text}</div>
        <img style={style.image} src={imageHdPath} alt={text} />
        <div style={style.twitterFrame}>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="krecko4000"
            options={style.twitterOptions}
            theme="dark"
          />
        </div>
      </div>
    </div>,
    titleWithEnding(artworkConfig.text)
  );
};

export default ArtworkPage;
