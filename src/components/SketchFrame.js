import React from "react";

const style = {
  sketchFrame: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    minHeight: 400,
    minWidth: 600,
  },
  sketchText: {
    fontFamily: "monospace",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 0,
    color: "white",
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
};

const SketchFrame = (props) => {
  const { text, image, itemKey, configKey, disabledLink, altText } = props;
  const imagePath = `${process.env.PUBLIC_URL}${image}.jpg`;
  return (
    <div style={style.sketchFrame}>
      <div>
        <p style={style.sketchText}>{text}</p>
        <a href={`/artwork/${configKey}/${itemKey}`} style={disabledLink ? style.disabled : {}}>
          <div style={style.link}>
            <img style={style.image} src={imagePath} alt={altText || text} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SketchFrame;
