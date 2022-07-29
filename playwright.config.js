const { devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: false,
  
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'run_tests_in_Chrome',
      use: {
        browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',
        trace : 'on-first-retry',
        video : 'on'
      },
    },

    {
      name: 'run_tests_in_Mobile_Chrome',
      use: {
        browserName : 'chromium',
        headless : false,
        screenshot : 'only-on-failure',
        trace : 'on-first-retry',
        ...devices['Pixel 5'],
        video : 'on'
      },
    },

    {
      name: 'run_tests_in_Safari',
      use: {
        browserName : 'webkit',
        headless : false,
        screenshot : 'only-on-failure',
        trace : 'on-first-retry',
        video : 'on'
      },
    },

    {
      name: 'run_tests_in_Mobile_Safari',
      use: {
        browserName : 'webkit',
        headless : false,
        screenshot : 'only-on-failure',
        trace : 'on-first-retry',
        ...devices['iPhone 13 Pro'],
        video : 'on'
      },
    },

  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',
};

module.exports = config;
