'use strict';

const https = require('https');
const querystring = require('querystring');
const config = require('../../config');
const logger = require('../../components/logger')('authenticator');

const COOKIE_KEY = 'abc';

const LOGIN_URL = '';

/**
 * Redirects to the login
 */
const _redirectToLogin = (response) => {
    response.redirect( LOGIN_URL );
}

/**
 * authenticator middleware
 * @param {Object} options
 * @return {void}
 */

module.exports = (req, res, next) => {
    logger.info('start cookie authenticate');
    const authCookie = req.cookies[COOKIE_KEY];

    if (!authCookie) {
        next();
        // _redirectToLogin(res);
    } else {
        // validate the cookie
        const request = https.request((res) => {
            res.on('data', data => {
                try {
                    // validation process
                } catch (e) {
                    logger.info('Failed to parse validation response', e);
                }
                next();
            });

            req.on('error', () => {
                next();
            });
            
            req.end();
        });
    }
}
