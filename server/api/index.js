const config = require('../config');
const fs = require('fs');
const path = require('path');
const logger = require('../components/logger')('api');

const mainFile = 'index.js';
const entryPoint = '/index.html';

module.exports = (app) => {
    logger.info('start initialize api middleware');
    const contextPath = config.app.contextPath || '';
    const buildOutputPath = config.app.outputPath + entryPoint;

    /* initialize all api */
    fs.readdirSync(__dirname).forEach(pathname => {
        let fullPathName = path.resolve(__dirname, pathname);
        let stat = fs.statSync(fullPathName);
        let filename = path.resolve(fullPathName, mainFile);
        if (stat.isDirectory() && fs.existsSync(filename)) {
            app.use(require(filename));
        }
        logger.info('finish the all api initialization');
    });
    
    /* Main route for the index.html */
    app.get(contextPath, (req, res, next) => {
        res.sendFile(path.resolve(buildOutputPath));
    });

    app.get(contextPath + '*', (req, res, next) => {
        res.sendFile(path.resolve(buildOutputPath));
    });

    app.get('/*', (req, res, next) => {
        res.redirect(contextPath);
    });
}