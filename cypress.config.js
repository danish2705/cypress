// const { defineConfig } = require("cypress");
// const { allureCypress } = require("allure-cypress/reporter");
// module.exports = defineConfig({
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     reportDir: "cypress/results",
//     overwrite: false,
//     html: true,
//     json: true,
//   },
//   e2e: {
//     projectId: "2atufa",
//     setupNodeEvents(on, config) {
//       require("cypress-mochawesome-reporter/plugin")(on);
//       // implement node event listeners here
//       allureCypress(on, config);
//       return config;
//     },
//   },
// });

// cypress.config.js;

//cucumber
// const { defineConfig } = require("cypress");
// const webpackPreprocessor = require("@cypress/webpack-preprocessor");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");
// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);
//   const options = {
//     webpackOptions: {
//       module: {
//         rules: [
//           {
//             test: /\.feature$/,
//             use: [
//               {
//                 loader: "@badeball/cypress-cucumber-preprocessor/webpack",
//                 options: config,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   };
//   on("file:preprocessor", webpackPreprocessor(options));
//   return config;
// }
// module.exports = {
//   default: defineConfig({
//     e2e: {
//       specPattern: "**/*.feature",
//       supportFile: false,
//       setupNodeEvents,
//       stepDefinitions: "cypress/e2e/",
//     },
//   }),
//   setupNodeEvents,
// };

// const { defineConfig } = require("cypress");
// const webpackPreprocessor = require("@cypress/webpack-preprocessor");
// const {
//   addCucumberPreprocessorPlugin,
// } = require("@badeball/cypress-cucumber-preprocessor");

// async function setupNodeEvents(on, config) {
//   await addCucumberPreprocessorPlugin(on, config);

//   const options = {
//     webpackOptions: {
//       module: {
//         rules: [
//           {
//             test: /\.feature$/,
//             use: [
//               {
//                 loader: "@badeball/cypress-cucumber-preprocessor/webpack",
//                 options: config,
//               },
//             ],
//           },
//         ],
//       },
//     },
//   };

//   on("file:preprocessor", webpackPreprocessor(options));

//   return config;
// }

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "**/*.feature",
//     supportFile: false,
//     setupNodeEvents,
//     stepDefinitions: "cypress/e2e/",
//   },
// });

//jenkins
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: true, // Generate HTML report
    json: false, // No need for JSON if you only want XML and HTML
    junit: true, // Enable JUnit XML generation
  },
  e2e: {
    projectId: "2atufa",
    setupNodeEvents(on, config) {
      // Set up Mochawesome plugin for reporting
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
