const chalk = require('chalk');

/**
 * Calls func with the input message in the logging format.
 */
function log(func, prefix, msg) {
    func(`[${prefix}][${new Date().toLocaleString()}]: ${msg}`);
}

module.exports = {
    info: (message) => {
        log(console.log, 'INFO', message);
    },
    error: (message) => {
        log((str) => {
            console.error(chalk.red(str));
        }, 'ERROR', message);
    },
    warn: (message) => {
        log((str) => {
            console.warn(chalk.yellow(str));
        }, 'WARN', message);
    }
}