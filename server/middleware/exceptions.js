'use strict';

const logger = require('../components/logger')('exception');

module.exports = () => {
    return (req, res, next) => {
        logger.info('start handle exceptions');
        try {
            return next();
        } catch (e) {
            throw {
                req: req,
                err: e
            }
        }
    }
}
