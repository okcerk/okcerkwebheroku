import React, { Component } from "react";
import TwitterLogo from "../images/socialmedia/twitter.png";
import InstagramLogo from "../images/socialmedia/instagram.png";

const style = {
  socialMediaLinks: {
    alignSelf: "center",
    marginLeft: 10,
  },
  socialMediaImage: {
    marginLeft: 10,
    marginRight: 10,
  },
};

class SocialMediaLinks extends Component {
  render() {
    return (
      <div style={style.socialMediaLinks}>
        <a href="https://www.twitter.com/krecko4000" target="_blank">
          <img style={style.socialMediaImage} src={TwitterLogo} />
        </a>
        <a href="https://www.instagram.com/okcerk" target="_blank">
          <img style={style.socialMediaImage} src={InstagramLogo} />
        </a>
      </div>
    );
  }
}

export default SocialMediaLinks;
