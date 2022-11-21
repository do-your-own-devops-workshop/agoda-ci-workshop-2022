import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: '**/e2e/*.spec.ts',
  use: {
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1280, height: 720 },
  },
};

export default config;
