const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure=true;
      // require('cypress-mochawesome-reporter/plugin')('on');
      allureWriter(on, config);
      return config;
    },
  },
});
