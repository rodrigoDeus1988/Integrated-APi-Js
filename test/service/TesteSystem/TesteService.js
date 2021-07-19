/**
 * @file GetBalance.js
 */

const http_helper = require("../../helper/http_helper");
const nodeEnv = require("../../helper/node_env");

let getBalanceService = function () {

    const JsonData = require('../../data/finance/TesteSys.json');
    const JsonDataNet = require('../../data/finance/TesteNet.json');

    function whichMethod(apiMethod) {
        return apiMethod.replace(/([A-Z])\w+/, "");
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
   
    this.postValido = async () => {
        
        return http_helper.httpRestPost( 
            console.log("Teste post"),
            nodeEnv.host["netflix"],
            JsonDataNet.endpoints['path_NetFlix'],
            statusCode,
            whichMethod("post"), 
            send({
                filme: "Capitão America Soldado Invernal",
                nota:  "10",
                }),
            null,
            JsonData.data);
    }

};

module.exports = new getBalanceService();