import React from "react";

const style = {
  youtubeFrame: {
    minWidth: 600,
  },
  description: {
    fontFamily: "monospace",
    fontWeight: "bold",
    margin: 10,
    width: 500,
  },
};

const YoutubeFrame = (props) => (
  <div style={style.youtubeFrame}>
    <iframe
      title="youtubeFrame"
      width="560"
      height="315"
      src={props.url}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <p style={style.description}>{props.description}</p>
  </div>
);

export default YoutubeFrame;
