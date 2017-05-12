"use strict";

const request = require("request-promise");
// const slackHelper = require("./slackHelper");

module.exports = app => {
    function makeRequest (payload, uri, queryParam, method) {
        return new Promise((resolve, reject) => {
            let options = {
                method: method,
                uri: uri,
                json: true,
                resolveWithFullResponse: true,
                headers: {
                    "content-type": "application/json"
                }
            };
            if (method === "GET") {
                options["qs"] = queryParam;
            }
            if (method === "POST" || method === "PUT") {
                options["body"] = payload;
            }
            request(options)
            .then((response) => {
                // slackHelper.sendMessage(response.body.result, options);
                return resolve(response);
            }).catch((err) => {
                console.log(err);
                // slackHelper.sendMessage(options, err);
                return reject(err);
            });
        });
    }
    return {
        makeRequest
    };
};