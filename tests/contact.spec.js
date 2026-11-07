// The page must never claim a message was sent unless a real service confirmed it.
// When a real form is connected, update the first test instead of deleting the rest.
import { expect, test } from '@playwright/test';
import { CHAPTER_EMAIL } from '../src/config/contact.js';
import { ALL_WIDTHS, expectNoSidewaysScroll, openFully, screen } from './support/site.js';

const FAKE_CONFIRMATION = /message sent|thanks for reaching out|send your message/i;

for (const width of ALL_WIDTHS) {
  test.describe(`${width}px screen`, () => {
    test.use(screen(width));

    test('there is no form that pretends to send a message', async ({ page }) => {
      await openFully(page, '/contact');
      const main = page.getByRole('main');
      await expect(main.locator('form, input, textarea')).toHaveCount(0);
      await expect(main).not.toContainText(FAKE_CONFIRMATION);
      await expect(main).not.toContainText(/terms|privacy policy/i);
    });

    test('Email Us opens the chapter address and is easy to tap', async ({ page }) => {
      await openFully(page, '/contact');
      const button = page.getByRole('main').getByRole('link', { name: 'Email Us', exact: true });
      await expect(button).toHaveAttribute('href', `mailto:${CHAPTER_EMAIL}`);

      const box = await button.boundingBox();
      expect(box.height).toBeGreaterThanOrEqual(44);
      expect(box.x + box.width).toBeLessThanOrEqual(width);
      await expectNoSidewaysScroll(page);
    });

    test('Email Us uses the official orange with dark text', async ({ page }) => {
      await openFully(page, '/contact');
      const button = page.getByRole('main').getByRole('link', { name: 'Email Us', exact: true });
      await expect(button).toHaveCSS('color', 'rgb(27, 22, 17)');
      await expect(button).toHaveCSS('background-image', /255, 168, 55.*255, 135, 55/);
    });

    test('the other ways to reach the chapter are still there', async ({ page }) => {
      await openFully(page, '/contact');
      const main = page.getByRole('main');
      await expect(main.locator('a[href^="tel:"]').first()).toBeVisible();
      await expect(main.locator('iframe[title="KFUPM Map"]')).toBeVisible();
      await expect(main.locator('.social-btn').first()).toBeVisible();
    });
  });
}

test('Email Us works from the keyboard and shows no fake confirmation', async ({ page }) => {
  await openFully(page, '/contact');
  const button = page.getByRole('main').getByRole('link', { name: 'Email Us', exact: true });

  await button.focus();
  await expect(button).toBeFocused();

  // Stop the browser from opening an email app, then use the button.
  await page.evaluate(() => {
    document.addEventListener('click', (event) => event.preventDefault(), { capture: true, once: true });
  });
  await page.keyboard.press('Enter');
  await expect(page.getByRole('main')).not.toContainText(FAKE_CONFIRMATION);
});
