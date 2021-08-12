const { config } = require("../config");

function unsafeApiKeyMiddleWare(req, res, next) {
    let auth = req.headers.authorization || req.headers.Authorization;
    if(auth) {
        if(auth === config.unsafeApiKey) {
            next();
        } else {
            res.status(401).send("Unauthorized!");
        }
    } else {
        res.status(500).send("Invalid auth!");
    }
}

module.exports = {
    unsafeApiKeyMiddleWare
}