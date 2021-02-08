import React from "react";
import TwitterLogo from "../images/socialmedia/twitter.png";
import InstagramLogo from "../images/socialmedia/instagram.png";

const style = {
  socialMediaImage: {
    marginLeft: 10,
    marginRight: 10,
  },
};

const SocialMediaLinks = () => (
  <>
    <a href="https://www.twitter.com/okcerk" target="_blank">
      <img style={style.socialMediaImage} src={TwitterLogo} />
    </a>
    <a href="https://www.instagram.com/okcerk" target="_blank">
      <img style={style.socialMediaImage} src={InstagramLogo} />
    </a>
  </>
);

export default SocialMediaLinks;
