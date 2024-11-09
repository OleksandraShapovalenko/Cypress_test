const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      config.env.BASE_URL = process.env.BASE_URL || config.env.BASE_URL || "https://www.saucedemo.com/";
      return config;
    },
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USER_NAME: "standard_user",
      USER_PASSWORD: "secret_sauce"
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true
    }
  },
});
