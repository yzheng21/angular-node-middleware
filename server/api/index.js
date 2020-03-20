const config = require('../config');
const fs = require('fs');
const path = require('path');

const mainFile = 'index.js';
const entryPoint = '/index.html';

module.exports = (app) => {
    console.log('api middleware');
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
    });
    
    /* Main route for the index.html */
    app.get(contextPath, (req, res, next) => {
        console.log('home', req.url);
        res.sendFile(path.resolve(buildOutputPath));
    });

    app.get(contextPath + '*', (req, res, next) => {
        console.log('home', req.url);
        res.sendFile(path.resolve(buildOutputPath));
    });

    app.get('/*', (req, res, next) => {
        res.redirect(contextPath);
    });
}