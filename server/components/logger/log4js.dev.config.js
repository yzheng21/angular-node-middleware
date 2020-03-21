const config = require('../../config');

const outputPath = './log/express-angular';
const logLevel = config.logger.logLevel;

module.exports = {
    appenders: { consoleAppender: { type: 'console', filename: outputPath } },
    categories: { default: { appenders: ['consoleAppender'], level: logLevel } }
}
