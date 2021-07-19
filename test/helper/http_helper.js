const supertest = require('supertest');
const nodeEnv = require("../helper/node_env");
const fs = require('fs');

let payload;

let setPayload = function (host, path, statusCode, method) {
    return payload = supertest(host)[method](path);
};



let logPayload = async function (payload) {

    let today = new Date();
    let payloadText = JSON.parse(payload.text);
    let requestBody;

    payload.req.method === "GET" ? requestBody = "Essa chamada não fez request com body" : requestBody = JSON.parse(JSON.stringify(payload.request._data));

    let log = "--------------------------------" + "\n"
        + "URL: " + payload.request.url + "\n"
        + "Horário da chamada: " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":" + today.getMilliseconds() + "\n"
        + "--------------------------------"
        + "\nMétodo: " + payload.req.method + "\n"
        + "Status Code: " + payload.statusCode + "\n"
        + "--------------------------------" + "\n"
        + "Request Header: " + "\n" + payload.req._header
        + "Request Body: " + JSON.stringify(requestBody, null, 2) + "\n"
        + "--------------------------------" + "\n"
        + "Response: " + JSON.stringify(payloadText, null, 2) + "\n" +
        "--------------------------------" + "\n";

    if (!fs.existsSync('results')) {
        fs.mkdirSync('results');
    }

    fs.appendFile('results/'
        + '[' + payload.req.method + ']'
        + today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s" + today.getMilliseconds()
        + '-output.txt', log, function (err, data) {
        if (err) console.log('Error', err)
    });

    return console.info(log)
};

let setDebug = async function (payload) {
    nodeEnv.logEnabled === true ? await logPayload(payload) : null;
};

let setMatchSnapshot = function (payload) {
    nodeEnv.snapshotEnabled === true ? expect(payload).toMatchSnapshot() : null;
};

let _httpRestCall = async function (host, path, statusCode = 200, apiMethod, body, header = null) {
    setPayload(host, path, statusCode, apiMethod, body, header);

    payload = await payload.set(header).send(body).expect(statusCode);
    setMatchSnapshot(payload);
    await setDebug(payload);
    return payload;
};


module.exports = {
    httpRestCall: _httpRestCall,
};
