import { test, expect } from "@playwright/test";

test.describe("Filter search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/map");
    await page.waitForLoadState('networkidle');
  });

  test("Should display only venues in Dubai when Dubai is selected in the location filter", async ({
    page,
  }) => {
    await page.waitForSelector("text=Filters");
    await page.locator("text=Filters").first().click();

    const resultsName = page.locator("h2", { hasText: "Filter your search" });
    await expect(resultsName).toBeVisible();

    await page.locator("button", { hasText: "Dubai" }).click();
    const showButton = await page.locator("button", { hasText: /Show \d+ venues/ });
    const buttonText = await showButton.textContent();

    const numberOfResults = parseInt(buttonText.match(/\d+/)[0]);
    await showButton.click();
    
    const venueResults = page.locator('[data-item-id]');
    const results = await venueResults.allTextContents();

    for (const text of results) {
      expect(text.toLowerCase()).toContain("dubai");
      expect(text.toLowerCase()).not.toContain("abu dhabi");
      expect(text.toLowerCase()).not.toContain("ras al khaimah");
      expect(text.toLowerCase()).not.toContain("ajman");
      expect(text.toLowerCase()).not.toContain("fujairah");
      expect(text.toLowerCase()).not.toContain("sharjah");
    }
  });
});
