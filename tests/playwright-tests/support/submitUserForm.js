import { leadFormSubmission } from './leadFormSubmission.js';

// Fill in and submit the form with user data
export async function submitUserForm(page) {
    const user = leadFormSubmission();
  
    await page.waitForSelector('h3', { hasText: 'Explore Privilee venues' });
    await page.locator('input[name="first_name"]').fill(user.name);
    await page.locator('input[name="email"]').fill(user.email);
    await page.locator('input[name="mobile"]').fill(user.phone);
    await page.locator('button[type="submit"]').click();
  }
  