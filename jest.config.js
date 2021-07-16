module.exports = {
    "setupFiles": [
        "./jest-cucumber-config"
    ],
    "testMatch": [
        "**/*.steps.js"
    ]
    ,
    "reporters": ["default", "jest-trx-results-processor"],

    "snapshotSerializers": [
        "jest-snapshots-json-rest-api"
    ]

};