import { Channel } from "../../../../../../backend/scrapers/types";
import getOptions from "../getOptions";

describe("getOptions", () => {
  it("should return", () => {
    const news = [
      { channel: Channel.TV8 },
      { channel: Channel.NTV },
      { channel: Channel.TV8 }
    ];
    const result = getOptions(news);

    expect(result).toEqual([Channel.TV8, Channel.NTV]);
  });
});
