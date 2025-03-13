import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e-tests', 
  use: {
    headless: true, 
    viewport: { width: 1280, height: 720 },
  },
});