import { Selector } from "testcafe";

const BASE_URL = process.env.E2E_BASE_URL || "http://localhost:9001";

fixture`View products`.page`${BASE_URL}`;

test("View header", async (t) => {
  const headerEl = Selector("[data-e2e-id='header']").with({
    visibilityCheck: true
  });
  await t.expect(headerEl.exists).ok();
});
