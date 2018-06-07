exports.config = { 
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        profile: false,
        'no-source': true,
        format: ['json:results.json'],
    },
    baseUrl: 'http://juliemr.github.io/',
    seleniumAddress: "http://localhost:4444/wd/hub",
    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        "features/*.feature"
    ],

    afterLaunch: function () {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: 'results.json',
            output: 'tests_result/cucumber_report.html',
            storeScreenshots: true,
            reportSuiteAsScenarios: true,
            launchReport: true,
        };
        reporter.generate(options);
    },
};
