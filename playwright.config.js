// playwright.config.js
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    timeout: 30000,
    use: {
      headless: true,
      // Інші налаштування, які вам потрібні
    },
    projects: [
      {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
      },
      {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
      },
      {
        name: 'Google Chrome',
        use: { ...devices['Desktop Chrome'] },
      },
    ],
  };
  
  module.exports = config;
  