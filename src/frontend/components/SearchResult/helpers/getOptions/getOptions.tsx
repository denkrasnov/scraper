import { Article, Channel } from "../../../../../backend/scrapers/types";

const getOptions = (news: Article[]) => {
  const channels: Channel[] = [];

  news.forEach(({ channel }) => {
    if (!channels.includes(channel)) {
      channels.push(channel);
    }
  });

  return channels;
};

export default getOptions;
