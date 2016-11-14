"use strict";
exports.config = {
    directConnect: true,
    // Base URL for application server
    baseUrl: 'http://localhost:8080',
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['start-maximized', '--disable-extensions']
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    specs: [
        'e2e/features/*.feature'
    ],
    onPrepare: function () {
        var globals = require('protractor');
        var browser = globals.browser;
        browser.ignoreSynchronization = true;
    },
    cucumberOpts: {
        compiler: "ts:ts-node/register",
        monochrome: true,
        strict: true,
        format: ['pretty', 'json:e2e/output/cucumber.json'],
        require: ['e2e/step_definitions/**/*.ts', 'e2e/support/**/*.ts'],
    }
};
//# sourceMappingURL=protractor.config.js.map