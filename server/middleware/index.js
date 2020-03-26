'use strict'

const express = require('express');
const logger = require('../components/logger')('middleware');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const config = require('../config');
const authenticator = require('./authenticator');
const exceptions = require('./exceptions');
const api = require('../api');

module.exports = (app) => {
    app.use(bodyParser);
    app.use(bodyParser.urlencoded({'extended': 'false'}));
    app.use(cookieParser());

    // cors filter to block cross domain calls
    app.use(cors());

    // authentication
    app.use(authenticator());

    // handle exceptions
    app.use(exceptions());

    // static ui source
    app.use(config.app.contextPath || '', express.static(config.app.outputPath));

    // global config
    app.use((req, res, next) => {
        logger.info('start global response configuration');
        res.append('Access-Control-Allow-Origin', ['*']);
        res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.append('Access-Control-Allow-Headers', 'Content-Type');
        res.append('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.append('Expires', 0);
        next();
    });

    api(app);

    logger.info('finish the middleware initialization');
}
