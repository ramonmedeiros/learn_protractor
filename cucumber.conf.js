exports.config = { 
    cucumberOpts: {
        require: 'features/step_definitions/*.js',
        tags: false,
        profile: false,
        'no-source': true,
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
};
