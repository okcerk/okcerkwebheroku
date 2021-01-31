import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePageConfig } from "../../redux/selectors";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { withTitle, titleWithEnding } from "../../helpers/pageTitleHelpers";
import { redirectToHomepage } from "../../helpers/navigationHelper";
import Spinner from "../Spinner";

const style = {
  pageContent: {
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "'Open Sans', sans-serif",
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
  const { configKey, artKey } = props; 
  const dispatch = useDispatch();
  const [readyToRender, setReadyToRender] = useState(false);

  useEffect(() => {
    dispatch({ type: 'FETCH_PAGE_CONFIG_START', pageConfigName: configKey});
    setTimeout(() => {
      setReadyToRender(true);
    }, 1000);
  }, []);

  const pageConfig = usePageConfig(configKey);

  if (!pageConfig || !readyToRender) {
    return (<Spinner/>);
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

  const text = artworkConfig.text;
  const imageHdPath = `${process.env.PUBLIC_URL}${artworkConfig.image}_hd.jpg`;

  return withTitle(
    <div style={style.pageContent}>
      <h1 style={style.title}>{text}</h1>
      <img style={style.image} src={imageHdPath} alt={artworkConfig.altText || text} />
      <div style={style.twitterFrame}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="krecko4000"
          options={style.twitterOptions}
          theme="dark"
        />
      </div>
    </div>,
    titleWithEnding(artworkConfig.text)
  );
};

export default ArtworkPage;
