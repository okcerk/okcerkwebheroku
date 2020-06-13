import React from "react";
import SketchFrame from "../components/SketchFrame";
import YoutubeFrame from "../components/YoutubeFrame";
import TextFrame from "../components/TextFrame";
import SocialMediaFrame from "../components/SocialMediaFrame";
import TwitterFeedFrame from "../components/TwitterFeedFrame";
import LinkFrame from "../components/LinkFrame";

export const getContentFromConfig = (config) => {
  const key = config.key;
  let list = [];

  for (let i = 0; i < config.items.length; i++) {
    const item = config.items[i];
    const type = item.type;

    switch (type) {
      case "SketchFrame":
        list.push({
          key: key + i,
          content: <SketchFrame {...item} />,
        });
        break;
      case "YoutubeFrame":
        list.push({
          key: key + i,
          content: <YoutubeFrame {...item} />,
        });
        break;
      case "TextFrame":
        list.push({
          key: key + i,
          content: <TextFrame {...item} />,
        });
        break;
      case "SocialMediaFrame":
        list.push({
          key: key + i,
          content: <SocialMediaFrame />,
        });
        break;
      case "TwitterFeedFrame":
        list.push({
          key: key + i,
          content: <TwitterFeedFrame />,
        });
        break;
      case "LinkFrame":
        list.push({
          key: key + i,
          content: <LinkFrame {...item} />,
        });
        break;
      default:
    }
  }

  return list;
};
