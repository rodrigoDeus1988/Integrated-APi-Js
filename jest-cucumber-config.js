require('jest-cucumber').setJestCucumberConfiguration({
    tagFilter: process.env.TAG,
    scenarioNameTemplate: (vars) => {
        return ` ${vars.featureTitle} - ${vars.scenarioTitle}}`;
    }
});
jest.setTimeout(10000);
