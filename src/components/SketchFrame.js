import React, { Component } from "react";
import ModalImage from "react-modal-image";

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
  sketchImage: {
    //cursor: 'zoom-in',
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 600,
  },
};

class SketchFrame extends Component {
  render() {
    const { text, image } = this.props;
    const imagePath = `${process.env.PUBLIC_URL}${image}.jpg`;
    const imageHdPath = `${process.env.PUBLIC_URL}${image}_hd.jpg`;
    return (
      <div style={style.sketchFrame}>
        <div>
          <p style={style.sketchText}>{text}</p>
          <div style={style.sketchImage}>
            <ModalImage
              small={imagePath}
              large={imageHdPath}
              alt={text}
              hideZoom={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SketchFrame;
