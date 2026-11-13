import { expect, test } from '@playwright/test';
import { ALL_WIDTHS, PHONE_AND_TABLET_WIDTHS, expectNoSidewaysScroll, openFully, screen } from './support/site.js';

const LATEST_TITLE = 'KFUPM AIChE – October 2026 Highlights';
const readButtons = (page) => page.getByRole('main').getByRole('button', { name: 'Read article' });
const reader = (page) => page.locator('dialog[open]');
const archiveTabs = (page) => page.getByRole('group', { name: 'Choose an archive' }).getByRole('button');

// Text that sticks out of the screen, or is cut off sideways by its own box.
const findLayoutProblems = (page) => page.evaluate(() => {
  const problems = [];
  const screenWidth = document.documentElement.clientWidth;
  for (const element of document.querySelectorAll('main :is(h1, h2, h3, h4, p, button, iframe)')) {
    if (element.closest('dialog')) continue;
    const box = element.getBoundingClientRect();
    if (!box.width) continue;
    const label = `${element.tagName} "${(element.innerText || '').slice(0, 30)}"`;
    if (box.left < -0.5 || box.right > screenWidth + 0.5) problems.push(`off screen: ${label}`);
    if (element.tagName !== 'IFRAME' && element.scrollWidth > element.clientWidth + 1) problems.push(`cut off: ${label}`);
  }
  return problems;
});

test('the latest issue is October 2026 and comes first', async ({ page }) => {
  await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('main').locator('h2').first()).toHaveText(LATEST_TITLE);
  // 5 October articles plus the 15 Term 251 articles shown in the archive by default.
  await expect(readButtons(page)).toHaveCount(20);
});

for (const width of PHONE_AND_TABLET_WIDTHS) {
  test.describe(`layout at ${width}px`, () => {
    test.use(screen(width));

    test('every archive view fits the screen', async ({ page }) => {
      await openFully(page, '/newsletter');
      const count = await archiveTabs(page).count();
      expect(count).toBeGreaterThan(1);
      for (let i = 0; i < count; i++) {
        const tab = archiveTabs(page).nth(i);
        await tab.click();
        await expect(tab).toHaveAttribute('aria-pressed', 'true');
        await expectNoSidewaysScroll(page);
        expect(await findLayoutProblems(page), await tab.innerText()).toEqual([]);
      }
    });

    test('every Read article button sits inside its card', async ({ page }) => {
      await openFully(page, '/newsletter');
      const outside = await readButtons(page).evaluateAll((buttons) => buttons.filter((button) => {
        const card = button.closest('article').getBoundingClientRect();
        return button.getBoundingClientRect().bottom > card.bottom + 0.5;
      }).length);
      expect(await readButtons(page).count()).toBeGreaterThan(0);
      expect(outside).toBe(0);
    });

    test('the reading view shows the whole article within the screen and closes', async ({ page }) => {
      await openFully(page, '/newsletter');
      await readButtons(page).first().click();
      await expect(reader(page)).toBeVisible();

      const view = await reader(page).evaluate(async (dialog) => {
        // Measure where the view settles, after its short opening movement.
        await Promise.all(dialog.getAnimations().map((animation) => animation.finished));
        const box = dialog.getBoundingClientRect();
        const text = dialog.querySelector('.nl-reader__text');
        return {
          onScreen: box.left >= -0.5 && box.right <= innerWidth + 0.5 && box.bottom <= innerHeight + 0.5
            || `${Math.round(box.left)},${Math.round(box.right)},${Math.round(box.bottom)} vs ${innerWidth}x${innerHeight}`,
          canReachAll: text.scrollHeight <= text.clientHeight || getComputedStyle(text).overflowY === 'auto',
          keepsLineBreaks: getComputedStyle(dialog.querySelector('.nl-reader__body')).whiteSpace === 'pre-line',
        };
      });
      expect(view).toEqual({ onScreen: true, canReachAll: true, keepsLineBreaks: true });

      await page.getByRole('button', { name: 'Close article' }).click();
      await expect(reader(page)).toHaveCount(0);
    });
  });
}

test.describe('layout at 1440px', () => {
  test.use(screen(1440));

  test('cards in each row line up and posters are shown whole', async ({ page }) => {
    await openFully(page, '/newsletter');
    await expectNoSidewaysScroll(page);
    const layout = await page.evaluate(() => {
      const cards = [...document.querySelectorAll('main article')].map((card) => card.getBoundingClientRect());
      const rows = {};
      for (const box of cards) (rows[Math.round(box.top)] ??= []).push(Math.round(box.height));
      const media = [...document.querySelectorAll('main article .nl-media')].map((m) => m.getBoundingClientRect().height);
      const posters = [...document.querySelectorAll('main .nl-media--poster .nl-media__img')].map((img) => getComputedStyle(img).objectFit);
      const even = (heights) => Math.max(...heights) - Math.min(...heights) <= 1;
      return { rowsEven: Object.values(rows).every(even), imagesSameHeight: even(media), posters };
    });
    expect(layout).toEqual({ rowsEven: true, imagesSameHeight: true, posters: ['contain', 'contain', 'contain'] });
  });
});

for (const width of ALL_WIDTHS) {
  test.describe(`keyboard and screen readers at ${width}px`, () => {
    test.use(screen(width));

    test('Tab reaches every Read article button once', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      const total = await readButtons(page).count();
      await readButtons(page).first().focus();
      let reached = 1;
      for (let i = 0; i < total + 20; i++) {
        await page.keyboard.press('Tab');
        const where = await page.evaluate(() => {
          const element = document.activeElement;
          if (!element.closest('main')) return 'outside';
          return element.matches('.nl-card__read') ? 'read' : 'other';
        });
        if (where === 'outside') break;
        if (where === 'read') reached++;
      }
      expect(reached).toBe(total);
    });

    test('the reading view keeps focus inside and returns it on Escape', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      const button = readButtons(page).nth(2);
      await button.focus();
      await page.keyboard.press('Enter');
      await expect(reader(page)).toBeVisible();

      // Focus may pass to the browser's own controls, but never to the page behind the view.
      for (let i = 0; i < 8; i++) {
        await page.keyboard.press('Tab');
        expect(await page.evaluate(() => document.activeElement === document.body || !!document.activeElement.closest('dialog[open]'))).toBe(true);
      }

      await page.keyboard.press('Escape');
      await expect(reader(page)).toHaveCount(0);
      await expect(button).toBeFocused();
    });

    test('screen readers only hear the reading view while it is open', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      const total = await readButtons(page).count();
      const session = await page.context().newCDPSession(page);
      await session.send('Accessibility.enable');
      const announced = async () => {
        const { nodes } = await session.send('Accessibility.getFullAXTree');
        const names = nodes.filter((n) => !n.ignored && n.role?.value === 'button').map((n) => n.name?.value ?? '');
        return { read: names.filter((n) => n === 'Read article').length, close: names.filter((n) => n === 'Close article').length };
      };

      expect(await announced()).toEqual({ read: total, close: 0 });
      await readButtons(page).first().click();
      await expect(reader(page)).toBeVisible();
      expect(await announced()).toEqual({ read: 0, close: 1 });
    });

    test('arrow keys move between articles in the reading view', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      await readButtons(page).first().click();
      const title = reader(page).getByRole('heading', { level: 2 });
      await expect(title).toHaveText('Beyond Horizons');
      await page.keyboard.press('ArrowRight');
      await expect(title).toHaveText('KFUPM AIChE Opening Ceremony');
      await page.keyboard.press('ArrowLeft');
      await expect(title).toHaveText('Beyond Horizons');

      // The Next button keeps working from the keyboard after the article changes.
      const next = reader(page).getByRole('button', { name: 'Next article →' });
      await next.focus();
      await page.keyboard.press('Enter');
      await expect(title).toHaveText('KFUPM AIChE Opening Ceremony');
      await expect(next).toBeFocused();
    });

    test('opening and closing an article does not move the page', async ({ page }) => {
      await openFully(page, '/newsletter');
      const button = readButtons(page).nth(4);
      await button.scrollIntoViewIfNeeded();
      const before = await page.evaluate(() => window.scrollY);
      await button.click();
      await expect(reader(page)).toBeVisible();
      await page.getByRole('button', { name: 'Close article' }).click();
      await expect(reader(page)).toHaveCount(0);
      const after = await page.evaluate(() => window.scrollY);
      expect(Math.abs(after - before)).toBeLessThanOrEqual(1);
    });
  });
}
