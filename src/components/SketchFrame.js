import React, { Component } from "react";

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
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    color: "aliceblue",
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
};

class SketchFrame extends Component {
  render() {
    const { text, image, itemKey, configKey } = this.props;
    const imagePath = `${process.env.PUBLIC_URL}${image}.jpg`;
    return (
      <div style={style.sketchFrame}>
        <div>
          <p style={style.sketchText}>{text}</p>
          <a href={`/artwork/${configKey}/${itemKey}`}>
            <div style={style.link}>
              <img style={style.image} src={imagePath} alt={text} />
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SketchFrame;
