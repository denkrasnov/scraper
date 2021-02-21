import { Channel } from "../../../../../backend/scrapers/types";

const getImage = (channel: Channel) => {
  switch (channel) {
    case Channel.NTV:
      return "http://frocus.net/images/logotv/original/ntv-moldova.jpg";
    case Channel.TV8:
      return "https://tv8.md/wp-content/uploads/2020/07/logo-tv8-new-2.png";
    case Channel.JurnalTV:
      return "https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg";
    default:
      return "";
  }
};

export default getImage;
