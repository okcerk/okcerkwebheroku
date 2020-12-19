import React from "react";

const style = {
  textFrame: {
    maxWidth: 750,
    minWidth: 600,
  },
  text: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 20,
  },
};

const TextFrame = (props) => (
  <div style={style.textFrame}>
    <h2 style={style.text}>{props.header}</h2>
    <p style={style.text}>{props.text}</p>
  </div>
);

export default TextFrame;
