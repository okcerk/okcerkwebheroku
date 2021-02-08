import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const style = {
  twitterFrame: {
    maxWidth: 600,
    minWidth: 600,
  },
  twitterOptions: {
    height: 600,
  },
};

const TwitterFeedFrame = () => (
  <div style={style.twitterFrame}>
    <TwitterTimelineEmbed
      sourceType="profile"
      screenName="okcerk"
      options={style.twitterOptions}
      theme="dark"
    />
  </div>
);

export default TwitterFeedFrame;
