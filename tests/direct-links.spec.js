// Every page must work when opened from a shared link or refreshed. This is the
// behavior vercel.json provides.
import { expect, test } from '@playwright/test';
import { ROUTES } from './support/site.js';

const main = (page) => page.getByRole('main');
const navLink = (page, label) => page.getByRole('navigation').getByRole('link', { name: label, exact: true });

for (const { path, navLabel, heading } of ROUTES) {
  test(`${path} opens directly and survives a refresh`, async ({ page }) => {
    const opened = await page.goto(path, { waitUntil: 'domcontentloaded' });
    expect(opened.status()).toBe(200);
    await expect(main(page).locator('h1').first()).toContainText(heading);
    await expect(navLink(page, navLabel)).toHaveClass(/active/);

    const refreshed = await page.reload({ waitUntil: 'domcontentloaded' });
    expect(refreshed.status()).toBe(200);
    await expect(main(page).locator('h1').first()).toContainText(heading);
    await expect(navLink(page, navLabel)).toHaveClass(/active/);
  });
}

test('a trailing slash and a query string reach the right page', async ({ page }) => {
  await page.goto('/about/', { waitUntil: 'domcontentloaded' });
  await expect(main(page).locator('h1').first()).toContainText('About Us');

  await page.goto('/gallery?from=test#top', { waitUntil: 'domcontentloaded' });
  await expect(main(page).locator('h1').first()).toContainText('Our Gallery');
});

test('static files are served as themselves, not replaced by the app', async ({ page, request }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const scriptPath = await page.locator('script[type="module"][src]').first().getAttribute('src');

  const files = [
    [scriptPath, /javascript/],
    ['/Service%20Partner.svg', /image\/svg\+xml/],
    ['/20250925_085858.jpg', /image\/jpeg/],
    ['/Alchemy_liquid_FF8737.json', /json/],
  ];
  for (const [filePath, contentType] of files) {
    const response = await request.get(filePath);
    expect(response.status(), filePath).toBe(200);
    expect(response.headers()['content-type'], filePath).toMatch(contentType);
  }
});
