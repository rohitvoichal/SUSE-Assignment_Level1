/***
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'maqi1g',
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost",
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
  },
});
***/
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost",
    chromeWebSecurity: false,
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
      charts: true
    }
  },
});


