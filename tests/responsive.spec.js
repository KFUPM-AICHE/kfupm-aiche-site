import { test } from '@playwright/test';
import { ALL_WIDTHS, ROUTES, expectNoSidewaysScroll, openFully, screen } from './support/site.js';

// Known problems, skipped until fixed. Remove a line here once its page is fixed.
const KNOWN_OVERFLOW = [
  { path: '/about', width: 320, reason: 'The photo collage is wider than the screen.' },
  { path: '/about', width: 375, reason: 'The photo collage is wider than the screen.' },
];

// Entrance animations can widen a page shortly after it loads.
const SETTLE_TIME_MS = 1500;

for (const width of ALL_WIDTHS) {
  test.describe(`${width}px screen`, () => {
    test.use(screen(width));

    for (const { path } of ROUTES) {
      test(`${path} has no sideways scrolling`, async ({ page }) => {
        const known = KNOWN_OVERFLOW.find((item) => item.path === path && item.width === width);
        test.fixme(!!known, known?.reason);

        await openFully(page, path);
        await page.waitForTimeout(SETTLE_TIME_MS);
        await expectNoSidewaysScroll(page);
      });
    }
  });
}
