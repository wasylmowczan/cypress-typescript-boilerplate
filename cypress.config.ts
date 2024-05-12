/* eslint-disable no-param-reassign */
import { defineConfig } from 'cypress';

require('dotenv-safe').config({ path: '.env', example: '.env.dist', allowEmptyValues: true });

export default defineConfig({
  defaultCommandTimeout: 10000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  pageLoadTimeout: 10000,
  video: false,
  chromeWebSecurity: true,
  watchForFileChanges: false,
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/integration',
    overwrite: false,
    html: true,
    json: true,
  },
  retries: {
    runMode: 2,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env.baseUrl = process.env.CYPRESS_URL;
      config.env.viewPortMode = process.env.CYPRESS_VIEW_PORT_MODE;
      config.env.languageMode = process.env.CYPRESS_LANGUAGE_MODE;
      return config;
    },
    excludeSpecPattern: '*.js',
  },
});
