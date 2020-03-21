const config = require('../../config');

const loggerDirDir = config.logger.parentDir;
const loggerFileName = config.logger.AppName;
const outputPath = loggerDirDir + '/' + loggerFileName;
const logLevel = config.logger.logLevel;

module.exports = {
    appenders: { fileAppender: { type: 'file', filename: outputPath } },
    categories: { default: { appenders: ['fileAppender'], level: logLevel } }
}
