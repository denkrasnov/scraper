import { Channels } from "../../../../../backend/scrapers/types";

const getImage = (channel: Channels) => {
  switch (channel) {
    case Channels.NTV:
      return "http://frocus.net/images/logotv/original/ntv-moldova.jpg";
    case Channels.TV8:
      return "https://tv8.md/wp-content/uploads/2020/07/logo-tv8-new-2.png";
    case Channels.JurnalTV:
      return "https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg";
    default:
      return "";
  }
};

export default getImage;
