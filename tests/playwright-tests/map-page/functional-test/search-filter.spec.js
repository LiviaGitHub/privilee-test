import { test, expect } from "@playwright/test";
import { openFilterModal } from '../../utils/openFilterModal.js';

test.describe("Filters search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/map');
    await page.waitForLoadState('networkidle');
  });
  
  test("User applies filter and returns no results, an appropriate message is displayed", async ({ page }) => {
    const button = page.locator('button', { hasText: 'Pool & beach' });
    const isSelected = await button.getAttribute('selected');
    if (!isSelected) {
        await button.click();
    }

    await openFilterModal(page);

    await page.locator("button", { hasText: "Ajman" }).click(); 
    await page.locator("button", { hasText: "Community club" }).click();
    await page.locator("button", { hasText: "Show 0 venues" }).click();

    await expect(page.locator('text=Sorry, there are no venues matching your search and filters')).toBeVisible();
    await expect(page.locator('[data-item-id]')).toHaveCount(0);
    await expect(page.locator('text=Start over and show all venues')).toBeVisible();
  });

  test("User applies the filter and returns results based on the filter, a message is displayed with the correct number of matching locations", async ({ page }) => {
    await expect(page.locator("button", { hasText: "Dining" })).toBeVisible();

    await page.locator("button", { hasText: "Dining" }).click(); 

    await openFilterModal(page);

    await page.locator("button", { hasText: "Dubai" }).click(); 
    await page.locator("button", { hasText: "Fine dining" }).click();

    const showButton = page.locator("button", { hasText: /Show \d+ venues/ });

    const buttonText = await showButton.textContent();
    const numberOfResults = parseInt(buttonText.match(/\d+/)[0]);

    await showButton.click();
    await expect(page.locator("h3", { hasText: `${numberOfResults} dining discounts` })).toBeVisible();

    await expect(page.locator('text=Start over and show all venues')).not.toBeVisible();
  });
});
