import chalk from "chalk";

export default class Logger {
    /**
     * Calls func with the input message in the logging format.
     */
    private static log(func: (str: string) => any, prefix: string, msg: string) {
        func(`[${prefix}][${new Date().toLocaleString()}]: ${msg}`);
    }
    
    static info(message: string) {
        this.log(console.log, 'INFO', message);
    }

    static error(message: string) {
        this.log((str) => {
            console.error(chalk.red(str));
        }, 'ERROR', message);
    }

    static warn(message: string) {
        this.log((str) => {
            console.warn(chalk.yellow(str));
        }, 'WARN', message);
    }
}