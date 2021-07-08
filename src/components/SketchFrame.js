import React from "react";
import NftButton from "./NftButton";

const style = {
  sketchFrame: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: 400,
    minWidth: 600,
  },
  sketchText: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 0,
    color: "white",
    textAlign: "center"
  },
  link: {
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 600,
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  disabled: {
    pointerEvents: "none"
  },
  nftButtonWrapper: {
    marginTop: "1rem",
    textAlign: "center"
  }
};

const SketchFrame = (props) => {
  const { text, image, itemKey, configKey, disabledLink, altText, externalLink, nftId } = props;
  const imagePath = `${process.env.PUBLIC_URL}${image}.jpg`;
  return (
    <div style={style.sketchFrame}>
      <div>
        <h2 style={style.sketchText}>{text}</h2>
        <a 
          href={externalLink ? externalLink : `/artwork/${configKey}/${itemKey}`} 
          style={disabledLink ? style.disabled : {}} 
          target={externalLink ? "_blank" : ""}>
          <div style={style.link}>
            <img style={style.image} src={imagePath} alt={altText || text} />
          </div>
        </a>
        {nftId && (<div style={style.nftButtonWrapper}><NftButton nftId={nftId} /></div>)}        
      </div>
    </div>
  );
};

export default SketchFrame;
