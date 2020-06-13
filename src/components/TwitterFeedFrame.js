import React, { Component } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const style = {
  twitterFrame: {
    maxWidth: 600,
    minWidth: 600,
  },
};

class TwitterFeedFrame extends Component {
  render() {
    return (
      <div style={style.twitterFrame}>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="krecko4000"
          options={{ height: 600 }}
          theme="dark"
        />
      </div>
    );
  }
}

export default TwitterFeedFrame;
