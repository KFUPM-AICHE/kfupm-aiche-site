import { expect, test } from '@playwright/test';
import { ALL_WIDTHS, PHONE_AND_TABLET_WIDTHS, expectNoSidewaysScroll, openFully, screen } from './support/site.js';

const frontButtons = (page) => page.locator('[data-flip-focus$="-front"]');
const backButtonOf = (page, frontButton) => frontButton.getAttribute('data-flip-focus')
  .then((id) => page.locator(`[data-flip-focus="${id.replace(/-front$/, '-back')}"]`));

// Turned over means the card's 3D wrapper has a rotation applied.
const isTurnedOver = (button) => button.evaluate((element) => {
  let wrapper = element.parentElement;
  while (wrapper && getComputedStyle(wrapper).transformStyle !== 'preserve-3d') {
    wrapper = wrapper.parentElement;
  }
  return !new DOMMatrix(getComputedStyle(wrapper).transform).isIdentity;
});

// Text that sticks out of the screen, or is cut off by its own box, on the visible side of cards.
const findLayoutProblems = (page) => page.evaluate(() => {
  const problems = [];
  const screenWidth = document.documentElement.clientWidth;
  const elements = document.querySelectorAll('main :is(h1, h2, h3, p, button, select, iframe)');
  for (const element of elements) {
    if (element.closest('[inert]')) continue;
    const box = element.getBoundingClientRect();
    if (!box.width) continue;
    const label = `${element.tagName} "${(element.innerText || '').slice(0, 30)}"`;
    if (box.left < -0.5 || box.right > screenWidth + 0.5) problems.push(`off screen: ${label}`);
    const hasOwnLayout = !['IFRAME', 'SELECT'].includes(element.tagName);
    if (hasOwnLayout && element.scrollWidth > element.clientWidth + 1) problems.push(`cut off: ${label}`);
  }
  return problems;
});

for (const width of PHONE_AND_TABLET_WIDTHS) {
  test.describe(`layout at ${width}px`, () => {
    test.use(screen(width));

    test('every semester filter fits the screen', async ({ page }) => {
      await openFully(page, '/newsletter');
      const filter = page.getByRole('main').locator('select');
      const values = await filter.locator('option').evaluateAll((options) => options.map((o) => o.value));
      expect(values.length).toBeGreaterThan(1);

      for (const value of values) {
        await filter.selectOption(value);
        await expectNoSidewaysScroll(page);
        expect(await findLayoutProblems(page), `filter "${value}"`).toEqual([]);
      }
    });

    test('every Read More button sits inside its card', async ({ page }) => {
      await openFully(page, '/newsletter');
      const hiddenButtons = await frontButtons(page).evaluateAll((buttons) => buttons.filter((button) => {
        let card = button.parentElement;
        while (card && getComputedStyle(card).overflow !== 'hidden') card = card.parentElement;
        return button.getBoundingClientRect().bottom > card.getBoundingClientRect().bottom + 0.5;
      }).length);
      expect(await frontButtons(page).count()).toBeGreaterThan(0);
      expect(hiddenButtons).toBe(0);
    });

    test('a card turns over, its text can be read, and it turns back', async ({ page }) => {
      await openFully(page, '/newsletter');
      const front = frontButtons(page).first();
      const back = await backButtonOf(page, front);

      await front.click();
      await expect.poll(() => isTurnedOver(front)).toBe(true);
      await expect(back).toBeVisible();

      const text = await back.evaluate((button) => {
        const box = button.previousElementSibling;
        return {
          fitsWidth: box.scrollWidth <= box.clientWidth + 1,
          canReachAll: box.scrollHeight <= box.clientHeight || getComputedStyle(box).overflowY === 'auto',
          buttonInCard: button.getBoundingClientRect().bottom <= button.parentElement.getBoundingClientRect().bottom + 0.5,
        };
      });
      expect(text).toEqual({ fitsWidth: true, canReachAll: true, buttonInCard: true });

      await back.click();
      await expect.poll(() => isTurnedOver(front)).toBe(false);
    });
  });
}

test.describe('layout at 1440px', () => {
  test.use(screen(1440));

  test('cards keep their desktop height and the page fits', async ({ page }) => {
    await openFully(page, '/newsletter');
    await expectNoSidewaysScroll(page);
    const shortest = await frontButtons(page).evaluateAll((buttons) => Math.min(...buttons.map((button) => {
      let card = button.parentElement;
      while (card && getComputedStyle(card).overflow !== 'hidden') card = card.parentElement;
      return card.getBoundingClientRect().height;
    })));
    expect(shortest).toBeGreaterThanOrEqual(550);
  });
});

for (const width of ALL_WIDTHS) {
  test.describe(`keyboard and screen readers at ${width}px`, () => {
    test.use(screen(width));

    test('Tab skips the hidden side of every card', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      const total = await frontButtons(page).count();
      expect(total).toBeGreaterThan(0);

      await page.getByRole('main').locator('select').focus();
      const stops = [];
      for (let i = 0; i < total + 75; i++) {
        await page.keyboard.press('Tab');
        const stop = await page.evaluate(() => {
          const element = document.activeElement;
          return element.closest('main') ? element.getAttribute('data-flip-focus') ?? 'other' : null;
        });
        if (stop === null) break;
        stops.push(stop);
      }
      expect(stops.filter((stop) => stop.endsWith('-back'))).toEqual([]);
      expect(stops.filter((stop) => stop.endsWith('-front'))).toHaveLength(total);
    });

    test('focus follows the card as it turns over and back', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      const front = frontButtons(page).first();
      const back = await backButtonOf(page, front);

      await front.focus();
      await page.keyboard.press('Enter');
      await expect(back).toBeFocused();

      // Moving backwards must not land on this card's now-hidden front.
      await page.keyboard.press('Shift+Tab');
      await expect(front).not.toBeFocused();

      await back.focus();
      await page.keyboard.press('Enter');
      await expect(front).toBeFocused();
    });

    test('screen readers are only told about the visible side', async ({ page }) => {
      await page.goto('/newsletter', { waitUntil: 'domcontentloaded' });
      await expect(frontButtons(page).first()).toBeVisible();
      const total = await frontButtons(page).count();

      // Chrome's own accessibility tree is what a screen reader receives.
      const session = await page.context().newCDPSession(page);
      await session.send('Accessibility.enable');
      const announcedButtons = async () => {
        const { nodes } = await session.send('Accessibility.getFullAXTree');
        const names = nodes
          .filter((node) => !node.ignored && node.role?.value === 'button')
          .map((node) => node.name?.value ?? '');
        return {
          readMore: names.filter((name) => /read more/i.test(name)).length,
          backToOverview: names.filter((name) => /back to overview/i.test(name)).length,
        };
      };

      expect(await announcedButtons()).toEqual({ readMore: total, backToOverview: 0 });

      const front = frontButtons(page).first();
      await front.focus();
      await page.keyboard.press('Enter');
      await expect(await backButtonOf(page, front)).toBeFocused();
      expect(await announcedButtons()).toEqual({ readMore: total - 1, backToOverview: 1 });
    });

    test('tapping or clicking a card does not make the page jump', async ({ page }) => {
      await openFully(page, '/newsletter');
      const front = frontButtons(page).first();
      await front.scrollIntoViewIfNeeded();
      const before = await page.evaluate(() => window.scrollY);

      await front.click();
      await expect.poll(() => isTurnedOver(front)).toBe(true);

      const after = await page.evaluate(() => window.scrollY);
      expect(Math.abs(after - before)).toBeLessThanOrEqual(1);
    });
  });
}
