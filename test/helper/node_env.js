let path = require('path');

let configFileName = process.env.CONFIG;
let log = process.env.LOG;
let snapshot = process.env.SNAPSHOT;

let isTrueSetLog = (log === 'true');
let isTrueSetSnapshot = (snapshot === 'true');

let config = require(path.resolve(__dirname, '../../config', configFileName));

console.info("Debug: " + log + "\n" +
    "Snapshot:" + snapshot);

module.exports = {
    host: config,
    logEnabled: isTrueSetLog,
    snapshotEnabled: isTrueSetSnapshot
};