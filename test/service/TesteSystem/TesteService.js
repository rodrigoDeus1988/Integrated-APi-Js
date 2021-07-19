/**
 * @file GetBalance.js
 */

const http_helper = require("../../helper/http_helper");
const nodeEnv = require("../../helper/node_env");

let getBalanceService = function () {

    const JsonData = require('../../data/finance/TesteSys.json');

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
   
    this.postInvalidarConsultar = async () => {

       

        return http_helper.httpRestCall(
            nodeEnv.host["hostTsys"],
            JsonData.endpoints['path_TesteSys'],
            statusCode,
            whichMethod("post"),
            null,
            JsonData.data);
    }

};

module.exports = new getBalanceService();