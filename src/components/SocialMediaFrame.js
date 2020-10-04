import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import SocialMediaTitle from "../images/socialmedia/socialmedia.png";

const style = {
  socialMediaFrame: {
    backgroundColor: "bisque",
    minWidth: 600,
    paddingBottom: 20,
    paddingTop: 20,
  },
  socialMediaTitle: {
    margin: 10,
  },
};

const SocialMediaFrame = () => (
  <div style={style.socialMediaFrame}>
    <img
      style={style.socialMediaTitle}
      src={SocialMediaTitle}
      alt="social media"
    />
    <SocialMediaLinks />
  </div>
);

export default SocialMediaFrame;
