const Logger = require("../common/Logger")

module.exports = (req, res, next) => {
    Logger.info(`Connection from ${req.headers['x-forwarded-for'] || req.socket.remoteAddress } to ${req.originalUrl}`)
    next();
}