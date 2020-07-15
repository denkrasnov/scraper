import React from "react";
import { shallow } from "enzyme";

// TODO: created shared types with /backend
import { ProductName } from "../../../../backend/scrapers/types";
import Filter from "..";

describe("Filter", () => {
  it("should render", () => {
    const component = shallow(
      <Filter
        options={["__OPTION_1__", "__OPTION_2__"]}
        productName={ProductName.TV}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
