import { defineConfig } from "cypress";
require("dotenv").config();
const { PORT } = process.env ?? "3000";
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `http://localhost:${PORT}`,
    specPattern: "__tests__/pages/**/*.cy.{ts,tsx,js,jsx}",
  },
});
