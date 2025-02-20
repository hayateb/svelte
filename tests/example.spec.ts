import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('button', { name: 'Book now' }).click();
  await page.getByRole('button', { name: 'Explore' }).first().click();
  await page.getByRole('button', { name: 'Explore' }).first().click();
  await page.getByRole('button', { name: 'Hotel' }).click();
  await page.getByRole('img', { name: 'sdf' }).first().click();
  await expect(page).toHaveTitle(/Hotel Booking Managment System/);
});

