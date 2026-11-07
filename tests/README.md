# Browser tests

These tests open the website in a real browser and check that it still works. Run them before merging any change.

## Running the tests

First time on a computer, download the test browser:

```
npm run test:setup
```

Then:

| Command | What it does |
|---|---|
| `npm test` | Builds the site and runs every test |
| `npm run test:headed` | Same, with the browser visible |
| `npm run test:report` | Opens the report from the last run |
| `npx playwright test tests/contact.spec.js` | Runs one file |

To test a deployed site instead of a local build, set `BASE_URL`. In PowerShell:

```
$env:BASE_URL="https://your-site.vercel.app"; npm test; Remove-Item Env:BASE_URL
```

In macOS or Linux terminals:

```
BASE_URL="https://your-site.vercel.app" npm test
```

## What is covered

| File | Checks |
|---|---|
| `direct-links.spec.js` | Every page opens from a link and survives a refresh; static files still load |
| `navigation.spec.js` | Top menu, mobile menu, logo, footer, browser back and forward |
| `responsive.spec.js` | No page scrolls sideways at 320, 375, 390, 768 or 1440 px; logo and menu button stay on screen |
| `newsletter.spec.js` | Filters and cards fit small screens; cards turn over; keyboard and screen reader behavior |
| `contact.spec.js` | Email Us works; no form pretends to send a message; other contact details remain |

The tests use Chromium only. They do not replace trying the site on real phones, in Safari, or with a screen reader.

## When a test fails

- **You changed something on purpose,** such as a page heading: update the test to match. Headings and page names are in `support/site.js`.
- **You did not mean to change it:** the test found a real problem. Fix the site, not the test.
- **To see what happened:** run `npm run test:report` and open the failed test. It includes a step-by-step recording.

## Why the tests use their own server

`vite preview` opens the app for any address, so it cannot show broken direct links. `support/vercel-like-server.js` follows the same order as Vercel for this site: a real file first, then the rules in `vercel.json`, otherwise a 404. It only copies that behavior, so also check a Vercel Preview before releasing a change to `vercel.json`.
