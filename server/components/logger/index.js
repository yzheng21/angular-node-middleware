'use strict';

const config = require('../../config');
const log4js = require('log4js');
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    log4js.configure(require('./log4js.dev.config'));
} else {
    log4js.configure(require('./log4js.prod.config'));
}

module.exports = (category) => {
    return log4js.getLogger(category);
}
