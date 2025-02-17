const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-htmlreport.html",
    pageTitle:"Grid 2.0 Automation Run",
    reportName: "Grid 2.0 Automation Run Results",
    displayDuration: false,
    durationInMS: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "v81",
        },
        device: "Desktop",
        platform: {
            name: "windows",
            version: "20H2",
        },
        customData: {
            title: 'Run info',
            data: [
                {label: 'Project', value: 'Custom project'},
                {label: 'Release', value: '1.2.3'},
                {label: 'Cycle', value: 'B11221.34321'},
                {label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
                {label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
            ]
        }
    },
});