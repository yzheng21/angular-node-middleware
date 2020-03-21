'use strict';

const ENV_NAME = process.env.NODE_ENV  || 'development';

module.exports = {
    port: 3000,
    debug: true,
    logLevel: 'info',
    drivers: {},
    env: {
        name: ENV_NAME
    },
    app: {
        contextPath: '/',
        outputPath: 'dist/express-angular'
    },
    dsAuth: {},
    logger: {
        logLevel: 'info',
        parentDir: process.env.LOG_DIR,
        fileName: process.env.AppName
    },
}
