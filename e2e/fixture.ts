import { Selector } from "testcafe";

const BASE_URL = process.env.E2E_BASE_URL || "http://localhost:9001";

fixture`View products`.page`${BASE_URL}`;

// test("View all tvs", async (t) => {
// const menuButton = Selector("[data-e2e-id='menuItem.tv']");
// const productItem = Selector("[data-e2e-id='productCard']").with({
//   visibilityCheck: true
// });

// await t.click(menuButton);
// await t.expect(productItem.exists).ok();
// });

test("View all fridges", async (t) => {
  const menuButton = Selector("[data-e2e-id='menuItem.fridge']");
  // const productItem = Selector("[data-e2e-id='productCard']").with({
  //   visibilityCheck: true
  // });

  await t.click(menuButton);
  // await t.expect(productItem.exists).ok();
});
