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

test('should not have unsuccessful requests', async ({ page }) => {

  page.on('requestfinished', async (request) => {

    const response = await request.response();

    if (response === null || response.status() < 200 || response.status() > 299) {
      throw new Error(`The request to ${request.url()} failed: ${request.failure()?.errorText ?? response?.status()}`);
    }
  });

  await page.goto('http://localhost:3000/');
});
