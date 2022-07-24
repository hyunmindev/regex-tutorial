/* eslint-disable */
import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'jz227u',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
