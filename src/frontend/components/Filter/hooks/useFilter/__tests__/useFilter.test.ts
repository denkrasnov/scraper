import { renderHook, act, cleanup } from "@testing-library/react-hooks";

import { Channel } from "../../../../../../backend/scrapers/types";
import useFilter from "../useFilter";

describe("useFilter", () => {
  const items = [
    {
      imageURL: "__IMAGE_URL__",
      date: "9:00",
      header: "__TITLE__",
      newsUrl: "__URL__",
      channel: Channel.TV8
    },
    {
      imageURL: "__IMAGE_URL__",
      date: "9:00",
      header: "__TITLE__",
      newsUrl: "__URL__",
      channel: Channel.NTV
    }
  ];

  it("should return", () => {
    const { result } = renderHook(() => useFilter(items));
    expect(result.current).toEqual([items, expect.any(Function)]);
  });

  describe("filter", () => {
    it("should return filtered elements", () => {
      const { result } = renderHook(() => useFilter(items));
      const filter = result.current[1];
      act(() => {
        filter(true, Channel.NTV, "channel");
      });
      const expectedResult = [items[1]];
      expect(result.current).toEqual([expectedResult, expect.any(Function)]);
    });

    it("should return when is not checked", () => {
      const { result } = renderHook(() => useFilter(items));
      const filter = result.current[1];
      act(() => {
        filter(false, Channel.TV8, "channel");
      });

      expect(result.current).toEqual([items, expect.any(Function)]);
    });

    it("should return when no such filteredByKey", () => {
      const { result } = renderHook(() => useFilter(items));

      act(() => {
        const filter = result.current[1];
        filter(true, Channel.TV8, "channel");
      });

      act(() => {
        const filter = result.current[1];
        filter(true, Channel.TV8, "channel");
      });
      const expectedResult = [items[0]];
      expect(result.current).toEqual([expectedResult, expect.any(Function)]);
    });
  });
});
