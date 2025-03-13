import { test, expect } from '@playwright/test';

test('Navigates to the home page, clicks a venue, and verifies the details page', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html'); 

    await page.waitForSelector('.venue-list');

    await page.locator('.venue-list .venue-card').first().click();

    await page.waitForSelector('h1');

    const headingText = await page.locator('h1').textContent();
    expect(headingText).toContain('Venue details');
});