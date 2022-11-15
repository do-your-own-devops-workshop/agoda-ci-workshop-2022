import { test, expect } from '@playwright/test'

test('should not have more than 5 stars', async ({ page }) => {

  await page.goto('http://localhost:3000/');

  const cards = await page.$$('.property-card');
  for (const card of cards) {
    const stars = await card.$$('.property-card-info-subtitle-stars');
    await expect(stars.length).toBeLessThanOrEqual(5);
  }
});

test('should not have lower case in red badge', async ({ page }) => {

  await page.goto('http://localhost:3000/');

  const cards = await page.$$('.property-card');
  for (const card of cards) {
    const redbadge = await card.$('.property-card-pricing-redbadge');
    await expect((/[a-z]/.test(await redbadge?.innerText() ?? ''))).toBeFalsy();
  }
});
