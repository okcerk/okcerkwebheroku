import React from "react";
import SketchFrame from "../components/SketchFrame";
import YoutubeFrame from "../components/YoutubeFrame";
import TextFrame from "../components/TextFrame";
import SocialMediaFrame from "../components/SocialMediaFrame";
import TwitterFeedFrame from "../components/TwitterFeedFrame";
import LinkFrame from "../components/LinkFrame";
import { digitalConfig } from "../contentConfigs/digitalConfig";
import { comicsConfig } from "../contentConfigs/comicsConfig";
import { inkConfig } from "../contentConfigs/inkConfig";
import { inktober2018Config } from "../contentConfigs/inktober2018Config";
import { inktober2019Config } from "../contentConfigs/inktober2019Config";

export const getConfigFromKey = (configKey) => {
  switch (configKey) {
    case "digital":
      return digitalConfig;
    case "comics":
      return comicsConfig;
    case "ink":
      return inkConfig;
    case "inktober2018":
      return inktober2018Config;
    case "inktober2019":
      return inktober2019Config;
    default:
      return null;
  }
};

export const getContentFromConfig = (config) => {
  const key = config.key;
  let list = [];

  const itemsKeys = Object.keys(config.items);
  for (let i = 0; i < itemsKeys.length; i++) {
    const itemKey = itemsKeys[i];
    const item = config.items[itemKey];
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
