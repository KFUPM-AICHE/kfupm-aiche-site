import { expect, test } from '@playwright/test';
import { PHONE_AND_TABLET_WIDTHS, ROUTES, screen } from './support/site.js';

const heading = (page) => page.getByRole('main').locator('h1').first();
const navLink = (page, label) => page.getByRole('navigation').getByRole('link', { name: label, exact: true });

test('the top menu reaches every page without a full reload', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => { window.stillSamePage = true; });

  const [home, ...others] = ROUTES;
  for (const route of [...others, home]) {
    await navLink(page, route.navLabel).click();
    await expect(page).toHaveURL(route.path);
    await expect(heading(page)).toContainText(route.heading);
    await expect(navLink(page, route.navLabel)).toHaveClass(/active/);
    expect(await page.evaluate(() => window.stillSamePage)).toBe(true);
  }
  expect(errors).toEqual([]);
});

test('browser back and forward restore the right page', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('main').locator('a[href="/gallery"]').first().click();
  await expect(heading(page)).toContainText('Our Gallery');

  await page.goBack();
  await expect(heading(page)).toContainText('Where student ideas');

  await page.goForward();
  await expect(heading(page)).toContainText('Our Gallery');
});

test('the logo returns Home', async ({ page }) => {
  await page.goto('/about', { waitUntil: 'domcontentloaded' });
  await page.getByRole('navigation').getByRole('link', { name: 'AIChE KFUPM' }).click();
  await expect(page).toHaveURL('/');
});

test('the footer links work', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.getByRole('contentinfo').locator('a[href="/about"]').click();
  await expect(heading(page)).toContainText('About Us');
});

for (const width of PHONE_AND_TABLET_WIDTHS) {
  test.describe(`${width}px screen`, () => {
    test.use(screen(width));

    test('the mobile menu opens, navigates and closes', async ({ page }) => {
      await page.goto('/', { waitUntil: 'domcontentloaded' });
      const menu = page.getByRole('dialog', { name: 'Navigation menu' });
      await expect(menu).toBeHidden();

      await page.getByRole('button', { name: 'Open menu' }).click();
      await expect(menu).toBeVisible();

      await menu.getByRole('link', { name: 'Newsletter', exact: true }).click();
      await expect(page).toHaveURL('/newsletter');
      await expect(menu).toBeHidden();
      // The open menu locks page scrolling, so closing it must release the lock.
      expect(await page.evaluate(() => document.body.style.overflow)).toBe('');
    });
  });
}
