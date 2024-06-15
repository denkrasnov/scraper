import { shallow } from "enzyme";

import { Channel } from "../../../../backend/scrapers/types";
import ProductCard from "..";

describe("ProductCard", () => {
  it("should render", () => {
    const component = shallow(
      <ProductCard
        channel={Channel.TV8}
        date="9:00"
        header="__TITLE__"
        imageURL="__IMAGE_URL__"
        newsURL="__URL__"
      />
    );
    expect(component).toMatchSnapshot();
  });

  it("should render when no image url", () => {
    const component = shallow(
      <ProductCard
        channel={Channel.TV8}
        date="9:00"
        header="__TITLE__"
        imageURL=""
        newsURL="__URL__"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
