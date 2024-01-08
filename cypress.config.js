const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  'reporterOptions': {
    'reportDir' : 'cypress/report',
    'charts': true,
    'reportPageTitle': 'BISKIT WEB AUTOMATION'
  },
  e2e: {
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

      this.screenshotOnRunFailure=true;
      allureWriter(on, config);
      return config;
    },
  },
});

