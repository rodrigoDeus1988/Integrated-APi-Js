/**
 * @file GetBalance.js
 */

const http_helper = require("../../helper/http_helper");
const nodeEnv = require("../../helper/node_env");

let getBalanceService = function () {

    const JsonData = require('../../data/finance/TesteSys.json');
    const JsonDataToken = require('../../data/finance/TesteToken.json');


    function whichMethod(apiMethod) {
        return apiMethod.replace(/([A-Z])\w+/, "");
    }
    function whichBody(body) {
        return body({ filme: "Capitão America Soldado Invernal", nota: "10" });
    }
    this.getValidarConsulta = async (statusCode = 200) => {

        return http_helper.httpRestCall(
            nodeEnv.host["hostTsys"],
            JsonData.endpoints['path_TesteSys'],
            statusCode,
            whichMethod("get"),
            null,
            JsonData.data);

    }

    this.getInvalidarConsulta = async (statusCode = 404) => {

        return http_helper.httpRestCall(
            nodeEnv.host["hostTsys"],
            JsonData.endpoints['path_TesteSys'],
            statusCode,
            whichMethod("get"),
            null,
            JsonData.data);

    }

    this.postToken = async (statusCode = 201, body) => {

        return http_helper.httpRestTokenPost(
            nodeEnv.host["tokenRiachu"],
            JsonDataToken.endpoints['path_Token'],
            statusCode,
            whichMethod("post"),
            body = { grant_type: "client_credentials" },
            JsonDataToken.data);
    }

};

module.exports = new getBalanceService();