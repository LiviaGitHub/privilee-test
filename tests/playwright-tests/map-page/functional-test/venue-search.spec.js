import { test, expect } from "@playwright/test";
import { submitUserForm } from '../../utils/submitUserForm.js';

test.describe("Venue Search", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/map');
    await page.waitForLoadState('networkidle');
  });
  
  test("New user searching for a venue successfully", async ({ page }) => {
    await expect(page.locator('input[placeholder="Search for venue"]')).toBeVisible();
    await page.locator('input[placeholder="Search for venue"]').fill('RIVA');

    const results = page.locator('span', { hasText: 'RIVA' });
    await expect(results.first()).toBeVisible();
    await results.first().click();

    await submitUserForm(page);

    await page.waitForURL('/map?form=leadsuccess');
    await expect(page).toHaveURL('/map?form=leadsuccess');
    await page.waitForSelector('text=Opening hours:');

    const resultsName =  page.locator('h2', { hasText: 'RIVA' });
    resultsName.isVisible();
    await expect(page.locator('text=Opening hours:')).toBeVisible();
    const exists = await page.locator('[data-accordion-index]').count();
    expect(exists).toBeTruthy();    
  });

  test.afterEach(async ({ page }) => { 
    const closeModalButton = page.locator('button[title="Close modal window"]').nth(1);
    await closeModalButton.click();
  });
});
