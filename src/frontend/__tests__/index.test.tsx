/* eslint-disable global-require */
import { createRoot } from "react-dom/client";

jest.mock("react-dom/client", () => ({
  createRoot: jest.fn(() => ({
    render: jest.fn()
  }))
}));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require("../index");
    expect(createRoot).toHaveBeenCalledWith(div);
  });
});
