let rp = require("request-promise");
//who knows tbh
let config = {
    config:true,
    external: () => {
        return rp("https://canihazip.com/s").then(response => {
            return response
        }).catch(err => {
            console.log("failed to get external IP address");
            return null;
        })
    }
};



module.exports = config;