import { test, expect } from "@playwright/test";

test.describe("Map Page - Performance Validation", () => {
  test("Should load the map page within an acceptable time and resource limits", async ({ page }) => {
    const startTime = Date.now();

    // Start tracing network activity BEFORE navigation
    const requests = [];
    const failedRequests = [];

    page.on('requestfinished', (request) => {
      requests.push(request);
    });

    page.on('requestfailed', (request) => {
      failedRequests.push(request.url());
    });

    await page.goto("/map");

    const loadTime = Date.now() - startTime;
    console.log(`Page load time: ${loadTime} ms`);

    // Check that page load time is under 5 seconds
    await expect(loadTime).toBeLessThan(5000);

    // Check number of loaded resources
    console.log(`Total requests made: ${requests.length}`);
    await expect(requests.length).toBeLessThan(150); // ajusta se precisar

    // Check that map container is visible
    await expect(page.locator('div[class*="mapboxgl-map"]')).toBeVisible();
  });
});
