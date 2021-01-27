import React from "react";
import SketchFrame from "../components/SketchFrame";
import YoutubeFrame from "../components/YoutubeFrame";
import TextFrame from "../components/TextFrame";
import TwitterFeedFrame from "../components/TwitterFeedFrame";
import LinkFrame from "../components/LinkFrame";

export const getContentFromConfig = (key, items) => {
  if (!key || !items) {
    return [];
  }

  const list = [];  

  const itemsKeys = Object.keys(items);
  for (let i = 0; i < itemsKeys.length; i++) {
    const itemKey = itemsKeys[i];
    const item = items[itemKey];
    const type = item.type;

    switch (type) {
      case "SketchFrame":
        list.push({
          key: key + i,
          content: <SketchFrame itemKey={itemKey} configKey={key} {...item} />,
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
