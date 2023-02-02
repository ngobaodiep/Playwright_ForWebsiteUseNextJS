import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  globalSetup: require.resolve('../scr/utils/globalSetup'),
  testDir: '../scr/e2e',
  //testMatch: ['self-on-boarding.spec.ts'],
  //testMatch: ['company-details.spec.ts'],
  //testMatch: ['login.spec.ts'],
  testMatch: ['setting-tools.spec.ts'],
  /* Maximum time one test can run for. */
  timeout: 600 * 1000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  reporter: 'html',
  use: {
    headless: false,
    actionTimeout: 0,
    baseURL: 'http://192.168.1.22:3000',
    trace: 'on-first-retry',
    video : 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],

};

export default config;
