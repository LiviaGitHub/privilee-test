import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  reporter: [['html', { open: 'never' }]], 
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    navigationTimeout: 30000,
    baseURL: 'https://staging-website.privilee.ae',
  },

  projects: [
    {
      name: 'UI Tests',
      testDir: 'tests/playwright-tests/map-page',
    },
    {
      name: 'API Tests',
      testDir: 'tests/api-tests',
    },
  ],
});
