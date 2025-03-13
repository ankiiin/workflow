import { test, expect } from '@playwright/test';

test('Navigates to the home page, clicks a venue, and verifies the details page', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/index.html');

    await page.waitForLoadState('networkidle');

    const venueExists = await page.locator('#venue-container').count();
    console.log(`venue-container exists: ${venueExists}`);

    if (venueExists === 0) {
        throw new Error("Element '#venue-container' finnes ikke!");
    }

    await page.waitForSelector('#venue-container', { timeout: 10000 });

    await page.locator('#venue-container').first().click();
});