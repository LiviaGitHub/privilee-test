import { expect } from '@playwright/test';

// Open the filter modal and verify it is displayed correctly
export async function openFilterModal(page) {
  await page.waitForSelector("text=Filters");
  await page.locator("text=Filters").first().click();

  const resultsName = page.locator("h2", { hasText: "Filter your search" });
  await expect(resultsName).toBeVisible();
}
