import { defineConfig, devices } from '@playwright/test';

// Set BASE_URL to test a deployed site instead of a fresh local build.
const deployedUrl = process.env.BASE_URL;
const localUrl = 'http://127.0.0.1:4317';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // Some photos are very large, so pages can take a while to finish loading.
  timeout: 90_000,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    ...devices['Desktop Chrome'],
    baseURL: deployedUrl ?? localUrl,
    trace: 'retain-on-failure',
  },
  webServer: deployedUrl
    ? undefined
    : {
        command: 'npm run build && node tests/support/vercel-like-server.js',
        url: localUrl,
        // Always rebuild, so tests never run against an old copy of the site.
        reuseExistingServer: false,
        timeout: 180_000,
      },
});
