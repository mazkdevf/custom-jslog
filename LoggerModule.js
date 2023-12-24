const c = require('ansi-colors');
const moment = require('moment-timezone');

class Logger {
    constructor(options = {}) {
        this.timezone = options.timezone || moment.tz.guess(true);
    }

    log(level, message, key, value) {
        const timestamp = moment().tz(this.timezone).format('h:mmA');
        const logMessage = `${timestamp} ${level} ${message} ${key}${value !== undefined ? `${value}` : ''}`;
        console.log(logMessage);
    }

    error(message, key, value) {
        this.log(c.redBright('ERROR'), message, key, (value !== undefined ? `=${value}` : ''));
    }

    info(message, key, value) {
        this.log(c.yellowBright('INFO'), message, key, (value !== undefined ? `=${value}` : ''));
    }

    success(message, key1, value1, key2, value2) {
        this.log(c.greenBright('VALID'), message, `${key1}=${value1}`, `, ${key2}=${value2}`);
    }

    panic(message, key, value) {
        this.log(c.red('PANIC'), message, key, (value !== undefined ? `=${value}` : ''));
    }

    custom(logLevel, logColor, message, { logDetails }) {
        const formattedLevel = c[logColor](logLevel.charAt(0).toUpperCase() + logLevel.slice(1));

        if (!logDetails || logDetails.length === 0) {
            this.log(formattedLevel, message, 'No details provided');
        } else {
            const formattedDetails = logDetails.map(item => `${item.name}=${item.value}`).join(', ');
            this.log(formattedLevel, message, formattedDetails);
        }
    }
}

module.exports = Logger;