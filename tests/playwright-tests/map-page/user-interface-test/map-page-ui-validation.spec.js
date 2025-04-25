import { test, expect } from "@playwright/test";

test.describe("Map Page - UI Validation", () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("/map");
    await page.waitForLoadState('networkidle');
  });

  test("Should display search input and filters button", async ({ page }) => {
    await expect(page.locator('input[placeholder="Search for venue"]')).toBeVisible();

    const filtersButton = page.locator("text=Filters").first();
    await expect(filtersButton).toBeVisible();
  });

  test("Should display venue cards", async ({ page }) => {
    const allCards = page.locator("a[data-item-id]");
    await expect(allCards.first()).toBeVisible();

    const countCards = await allCards.count();
    expect(countCards).toBeGreaterThan(0);
  });

  test("Should display images inside venue cards", async ({ page }) => {
    const venuesImg = page.locator("a[data-item-id] img");
    await expect(venuesImg.first()).toBeVisible();

    const countImg = await venuesImg.count();
    expect(countImg).toBeGreaterThan(0);
  });

  test("Should display the category buttons", async ({ page }) => {
    const categoryButtons = [
      'Pool & beach',
      'Fitness',
      'Family activities',
      'Dining',
      'Waterparks'
    ];

    for (const category of categoryButtons) {
      const button = page.locator("button", { hasText: category });
      await expect(button).toBeVisible();
    }
  });
  test('The "Pool & Beach" button must be selected when the page loads', async ({ page }) => {
    const poolBeachButton = page.locator('button', { hasText: 'Pool & beach' });
    await expect(poolBeachButton).toBeVisible();
    await expect(poolBeachButton).toHaveAttribute('selected');
  });
});
