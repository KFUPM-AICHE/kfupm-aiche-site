import { expect, test } from '@playwright/test';
import { ALL_WIDTHS, PHONE_AND_TABLET_WIDTHS, ROUTES, expectNoSidewaysScroll, openFully, screen } from './support/site.js';

// Entrance animations can widen a page shortly after it loads.
const SETTLE_TIME_MS = 1500;

function expectInsideScreen(box, width) {
  expect(box).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(width);
}

for (const width of ALL_WIDTHS) {
  test.describe(`${width}px screen`, () => {
    test.use(screen(width));

    for (const { path } of ROUTES) {
      test(`${path} has no sideways scrolling`, async ({ page }) => {
        await openFully(page, path);
        await page.waitForTimeout(SETTLE_TIME_MS);
        await expectNoSidewaysScroll(page);
      });
    }
  });
}

for (const width of PHONE_AND_TABLET_WIDTHS) {
  test.describe(`${width}px screen`, () => {
    test.use(screen(width));

    for (const { path } of ROUTES) {
      test(`${path} keeps the logo and menu button on screen`, async ({ page }) => {
        await openFully(page, path);
        await page.waitForTimeout(SETTLE_TIME_MS);
        const navigation = page.getByRole('navigation');
        expectInsideScreen(await navigation.getByRole('link', { name: 'AIChE KFUPM' }).boundingBox(), width);
        expectInsideScreen(await page.getByRole('button', { name: 'Open menu' }).boundingBox(), width);
      });
    }

    test('the About page graphic stays fully on screen', async ({ page }) => {
      await openFully(page, '/about');
      const graphic = page.locator('.visionAnim svg');
      await graphic.scrollIntoViewIfNeeded();
      expectInsideScreen(await graphic.boundingBox(), width);
    });
  });
}

test.describe('About page between common screen sizes', () => {
  test.use(screen(390));

  test('no sideways scrolling at any width from 320 to 860 px', async ({ page }) => {
    test.slow();
    await openFully(page, '/about');
    await expect(page.locator('.visionAnim svg')).toBeVisible();

    const tooWide = [];
    for (let width = 320; width <= 860; width += 10) {
      await page.setViewportSize({ width, height: 844 });
      await page.waitForTimeout(50);
      const contentWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      if (contentWidth > width) tooWide.push(`${contentWidth}px on ${width}px`);
    }
    expect(tooWide).toEqual([]);
  });
});
