// Update this file when a page is added or renamed, or a main heading changes.
export const ROUTES = [
  { path: '/', navLabel: 'Home', heading: 'Where student ideas' },
  { path: '/about', navLabel: 'About us', heading: 'About Us' },
  { path: '/sponsor', navLabel: 'Be a sponsor', heading: 'Sponsorship Proposal' },
  { path: '/gallery', navLabel: 'Our gallery', heading: 'Our Gallery' },
  { path: '/newsletter', navLabel: 'Newsletter', heading: 'Newsletter' },
  { path: '/contact', navLabel: 'Contact us', heading: "We'd love to hear from you" },
];

export const PHONE_AND_TABLET_WIDTHS = [320, 375, 390, 768];
export const ALL_WIDTHS = [...PHONE_AND_TABLET_WIDTHS, 1440];

// Playwright settings for a screen of the given width.
export function screen(width) {
  const isMobile = width < 1000;
  return {
    viewport: { width, height: 844 },
    deviceScaleFactor: 1,
    isMobile,
    hasTouch: isMobile,
  };
}

// Opens a page and waits for its images, so the final layout can be measured.
export async function openFully(page, path) {
  await page.goto(path, { waitUntil: 'load' });
}

export async function expectNoSidewaysScroll(page) {
  const { contentWidth, screenWidth } = await page.evaluate(() => ({
    contentWidth: document.documentElement.scrollWidth,
    screenWidth: document.documentElement.clientWidth,
  }));
  if (contentWidth > screenWidth) {
    throw new Error(`Page is ${contentWidth}px wide on a ${screenWidth}px screen.`);
  }
}
