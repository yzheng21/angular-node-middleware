'use strict';

module.exports = () => {
    return (req, res, next) => {
        console.log('start handle exceptions');
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
