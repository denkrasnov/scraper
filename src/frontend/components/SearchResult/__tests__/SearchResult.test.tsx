import { shallow } from "enzyme";
import { useQuery } from "@apollo/client";

import SearchResult from "../SearchResult";
import Filter from "../../Filter";

jest.mock("@apollo/client", () => {
  // eslint-disable-next-line global-require
  const { Channel } = require("../../../../backend/scrapers/types");
  const data = {
    news: [
      {
        id: "___ID__",
        imageURL: "__IMAGE_URL__",
        date: "9:00",
        header: "__TITLE__",
        newsUrl: "__URL__",
        channel: Channel.TV8
      }
    ]
  };
  return {
    __esModule: true,
    gql: jest.fn(),
    useQuery: jest.fn(() => ({ data }))
  };
});

describe("SearchResult", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render products", () => {
    const component = shallow(<SearchResult />);
    expect(component).toMatchSnapshot();
  });

  it("should render when data is undefined", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ data: undefined });
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should render Loading", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ loading: true });
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should render Error", () => {
    (useQuery as jest.Mock).mockReturnValueOnce({ error: true });
    const component = shallow(<SearchResult />);

    expect(component).toMatchSnapshot();
  });

  it("should  render when call setLocale", () => {
    const component = shallow(<SearchResult />);
    // @ts-ignore
    component.find(Filter).prop("onClickLocale")();

    expect(component).toMatchSnapshot();
  });
});
