import { Channels } from "../../../../../../backend/scrapers/types";
import getImage from "..";

describe("getImage", () => {
  it("should return for TV8", () => {
    const result = getImage(Channels.TV8);
    expect(result).toBe(
      "https://tv8.md/wp-content/uploads/2020/07/logo-tv8-new-2.png"
    );
  });

  it("should return for NTV", () => {
    const result = getImage(Channels.NTV);
    expect(result).toBe(
      "http://frocus.net/images/logotv/original/ntv-moldova.jpg"
    );
  });

  it("should return for JurnalTV", () => {
    const result = getImage(Channels.JurnalTV);
    expect(result).toBe(
      "https://live-tv-channels.org/pt-data/uploads/logo/md-jurnal-tv.jpg"
    );
  });

  it("should return for default", () => {
    const result = getImage("Bla" as Channels);
    expect(result).toBe("");
  });
});
